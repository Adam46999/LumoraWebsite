// src/components/admin/tabs/MessagesTab.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  subscribeMessages,
  updateMessageStatus,
  deleteMessage,
} from "../../../services/contactMessages";
import { useToast } from "../lib/toast";

// ===== utils =====
function normalizeText(s) {
  return String(s || "")
    .toLowerCase()
    .trim();
}

function safeDate(v) {
  if (!v) return null;
  if (typeof v?.toDate === "function") return v.toDate(); // Firestore Timestamp
  if (typeof v === "number") return new Date(v);
  if (typeof v?.seconds === "number") return new Date(v.seconds * 1000);
  if (typeof v === "string") {
    const t = Date.parse(v);
    if (Number.isFinite(t)) return new Date(t);
  }
  return null;
}

function fmtDate(v) {
  const d = safeDate(v);
  if (!d) return "";
  return d.toLocaleString("ar");
}

function getSubject(m) {
  return m.subject || m.topic || m.title || "بدون عنوان";
}

function getStatus(m) {
  return (m.status || "new") === "new" ? "new" : "done";
}

function whatsappLink(phone, text) {
  const p = String(phone || "").replace(/[^\d+]/g, "");
  const msg = encodeURIComponent(text || "");
  if (!p) return null;
  // إذا دخل 05xxxx => نحوله لـ 9725xxxx
  const normalized = p.startsWith("0") ? `972${p.slice(1)}` : p;
  return `https://wa.me/${normalized}?text=${msg}`;
}

function copyToClipboard(text) {
  if (!text) return Promise.resolve(false);
  if (navigator?.clipboard?.writeText)
    return navigator.clipboard.writeText(text).then(() => true);
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    return Promise.resolve(true);
  } catch {
    return Promise.resolve(false);
  }
}

// ===== small ui =====
function Pill({ tone = "slate", children }) {
  const cls =
    tone === "amber"
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : tone === "emerald"
      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
      : "bg-slate-50 text-slate-700 border-slate-200";
  return (
    <span
      className={
        "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-extrabold border " +
        cls
      }
    >
      {children}
    </span>
  );
}

function Btn({ tone = "default", disabled, onClick, children, title }) {
  const toneCls =
    tone === "primary"
      ? "border-blue-200 text-blue-700 hover:bg-blue-50"
      : tone === "danger"
      ? "border-rose-200 text-rose-700 hover:bg-rose-50"
      : "border-slate-200 text-slate-700 hover:bg-slate-50";
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={
        "h-9 px-3 rounded-2xl border bg-white text-xs font-extrabold transition " +
        toneCls +
        (disabled ? " opacity-60 cursor-not-allowed" : "")
      }
    >
      {children}
    </button>
  );
}

export default function MessagesTab() {
  const toast = useToast();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [busyIds, setBusyIds] = useState(() => new Set());

  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("new"); // default: new (عشان السرعة)

  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [activeId, setActiveId] = useState(null);

  const mountedRef = useRef(false);

  const setBusy = (id, val) => {
    setBusyIds((prev) => {
      const s = new Set(prev);
      if (val) s.add(id);
      else s.delete(id);
      return s;
    });
  };

  // ✅ Realtime subscribe بدل polling
  useEffect(() => {
    mountedRef.current = true;
    setLoading(true);

    const unsub = subscribeMessages(
      (list) => {
        if (!mountedRef.current) return;
        const arr = Array.isArray(list) ? list : [];
        setItems(arr);

        // حافظ على active
        setActiveId((prev) => {
          if (prev && arr.some((x) => x.id === prev)) return prev;
          return arr[0]?.id || null;
        });

        setLoading(false);
      },
      (err) => {
        console.error(err);
        if (!mountedRef.current) return;
        setLoading(false);
        toast.error("فشل تحميل الرسائل");
      }
    );

    return () => {
      mountedRef.current = false;
      unsub?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counts = useMemo(() => {
    const all = items.length;
    const news = items.filter((x) => getStatus(x) === "new").length;
    const done = all - news;
    return { all, news, done };
  }, [items]);

  const filtered = useMemo(() => {
    const qq = normalizeText(q);

    return items
      .filter((m) => {
        if (filter === "new") return getStatus(m) === "new";
        if (filter === "done") return getStatus(m) === "done";
        return true;
      })
      .filter((m) => {
        if (!qq) return true;
        const hay =
          normalizeText(getSubject(m)) +
          " " +
          normalizeText(m.name) +
          " " +
          normalizeText(m.phone) +
          " " +
          normalizeText(m.channel) +
          " " +
          normalizeText(m.message);
        return hay.includes(qq);
      });
  }, [items, q, filter]);

  const activeMsg = useMemo(() => {
    return items.find((x) => x.id === activeId) || null;
  }, [items, activeId]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const s = new Set(prev);
      if (s.has(id)) s.delete(id);
      else s.add(id);
      return s;
    });
  };

  const selectAllFiltered = () => {
    setSelectedIds(new Set(filtered.map((x) => x.id)));
  };

  const clearSelection = () => setSelectedIds(new Set());

  const setStatus = async (id, status) => {
    if (!id) return;
    setBusy(id, true);

    // optimistic
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, status } : x)));

    try {
      await updateMessageStatus(id, status);
    } catch (e) {
      console.error(e);
      toast.error("فشل تحديث الحالة");
    } finally {
      setBusy(id, false);
    }
  };

  const remove = async (id) => {
    if (!id) return;
    setBusy(id, true);

    // optimistic
    setItems((p) => p.filter((x) => x.id !== id));
    setSelectedIds((s) => {
      const n = new Set(s);
      n.delete(id);
      return n;
    });

    try {
      await deleteMessage(id);
      setActiveId((prev) => (prev === id ? null : prev));
    } catch (e) {
      console.error(e);
      toast.error("فشل حذف الرسالة");
    } finally {
      setBusy(id, false);
    }
  };

  const bulkSet = async (status) => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) {
      toast.info("حدد رسائل أولاً");
      return;
    }

    toast.info(`جاري تحديث ${ids.length} رسالة…`, { durationMs: 1200 });

    // optimistic
    setItems((prev) =>
      prev.map((x) => (selectedIds.has(x.id) ? { ...x, status } : x))
    );

    try {
      for (const id of ids) {
        await updateMessageStatus(id, status);
      }
      toast.success("تم التحديث");
      clearSelection();
    } catch (e) {
      console.error(e);
      toast.error("فشل التحديث الجماعي");
    }
  };

  const bulkDelete = async () => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) {
      toast.info("حدد رسائل أولاً");
      return;
    }

    toast.info(`جاري حذف ${ids.length} رسالة…`, { durationMs: 1200 });

    // optimistic
    setItems((p) => p.filter((x) => !selectedIds.has(x.id)));
    clearSelection();

    try {
      for (const id of ids) {
        await deleteMessage(id);
      }
      toast.success("تم الحذف");
      if (ids.includes(activeId)) setActiveId(null);
    } catch (e) {
      console.error(e);
      toast.error("فشل الحذف الجماعي");
    }
  };

  // ===== keyboard shortcuts =====
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target?.tagName || "").toLowerCase();
      const typing = tag === "input" || tag === "textarea";
      if (typing) return;

      if (e.key.toLowerCase() === "j") {
        e.preventDefault();
        const idx = filtered.findIndex((x) => x.id === activeId);
        const next = filtered[Math.min(filtered.length - 1, idx + 1)]?.id;
        if (next) setActiveId(next);
        return;
      }
      if (e.key.toLowerCase() === "k") {
        e.preventDefault();
        const idx = filtered.findIndex((x) => x.id === activeId);
        const prev = filtered[Math.max(0, idx - 1)]?.id;
        if (prev) setActiveId(prev);
        return;
      }

      if (e.key === " ") {
        e.preventDefault();
        if (activeId) toggleSelect(activeId);
        return;
      }

      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        if (activeId) setStatus(activeId, "done");
        return;
      }
      if (e.key.toLowerCase() === "n") {
        e.preventDefault();
        if (activeId) setStatus(activeId, "new");
        return;
      }

      if (e.key.toLowerCase() === "x") {
        e.preventDefault();
        if (activeId) remove(activeId);
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a") {
        e.preventDefault();
        selectAllFiltered();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, filtered]);

  const selectedCount = selectedIds.size;

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
      {/* Header compact */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-sm font-extrabold text-slate-900">
            Inbox الرسائل
          </div>
          <Pill tone="slate">{counts.all} الكل</Pill>
          <Pill tone="amber">{counts.news} جديد</Pill>
          <Pill tone="emerald">{counts.done} تم التعامل</Pill>
        </div>

        <div className="flex items-center gap-2">
          <Pill tone="slate">Realtime</Pill>
          <Btn
            title="مزامنة لحظية (لا يوجد تحديث يدوي)"
            disabled
            onClick={() => {}}
          >
            ● مباشر
          </Btn>
        </div>
      </div>

      {/* Search + filter + bulk bar */}
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2">
        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="بحث سريع… (اسم / هاتف / موضوع / نص)"
            className="w-full h-10 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800"
          >
            <option value="new">جديد (الافتراضي)</option>
            <option value="done">تم التعامل</option>
            <option value="all">الكل</option>
          </select>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-end">
          {selectedCount > 0 ? (
            <>
              <Pill>{selectedCount} محدد</Pill>
              <Btn tone="primary" onClick={() => bulkSet("done")}>
                ✓ تم التعامل (Bulk)
              </Btn>
              <Btn onClick={() => bulkSet("new")}>↩︎ رجّع جديد (Bulk)</Btn>
              <Btn tone="danger" onClick={bulkDelete}>
                🗑 حذف (Bulk)
              </Btn>
              <Btn onClick={clearSelection}>مسح التحديد</Btn>
            </>
          ) : (
            <>
              <Btn onClick={selectAllFiltered} title="Ctrl+A">
                تحديد الكل (بالفلتر)
              </Btn>
              <Pill tone="slate">
                اختصارات: J/K تنقل · Space تحديد · D تم · N جديد · X حذف
              </Pill>
            </>
          )}
        </div>
      </div>

      {/* Split layout: list + details */}
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-3">
        {/* LIST */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="px-3 py-2 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="text-xs font-extrabold text-slate-700">
              {filtered.length} نتيجة
            </div>
            <div className="text-[11px] text-slate-500">
              اضغط على الرسالة لعرض التفاصيل
            </div>
          </div>

          <div className="max-h-[60vh] overflow-auto">
            {loading ? (
              <div className="p-4 text-sm text-slate-600">جاري التحميل…</div>
            ) : filtered.length === 0 ? (
              <div className="p-4 text-sm text-slate-600">
                لا يوجد رسائل مطابقة.
              </div>
            ) : (
              filtered.map((m) => {
                const isActive = m.id === activeId;
                const st = getStatus(m);
                const isSel = selectedIds.has(m.id);

                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    className={
                      "w-full text-right px-3 py-2 border-b border-slate-100 hover:bg-slate-50 transition " +
                      (isActive ? "bg-blue-50/60" : "")
                    }
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="text-[13px] font-extrabold text-slate-900 truncate">
                            {getSubject(m)}
                          </div>
                          {st === "new" ? (
                            <Pill tone="amber">جديد</Pill>
                          ) : (
                            <Pill tone="emerald">تم</Pill>
                          )}
                        </div>
                        <div className="mt-1 text-[11px] text-slate-500 flex gap-2 flex-wrap">
                          {m.name ? <span>👤 {m.name}</span> : null}
                          {m.phone ? <span>📞 {m.phone}</span> : null}
                          {fmtDate(m.createdAt) ? (
                            <span>🕒 {fmtDate(m.createdAt)}</span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isSel}
                          onChange={() => toggleSelect(m.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="h-4 w-4"
                          title="تحديد (Space)"
                        />
                      </div>
                    </div>

                    {m.message ? (
                      <div className="mt-1 text-[12px] text-slate-700 line-clamp-2">
                        {m.message}
                      </div>
                    ) : (
                      <div className="mt-1 text-[12px] text-slate-400">
                        (بدون نص)
                      </div>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* DETAILS */}
        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          {!activeMsg ? (
            <div className="text-sm text-slate-600">اختر رسالة من القائمة.</div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <div className="text-lg font-extrabold text-slate-900">
                    {getSubject(activeMsg)}
                  </div>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    {getStatus(activeMsg) === "new" ? (
                      <Pill tone="amber">جديد</Pill>
                    ) : (
                      <Pill tone="emerald">تم التعامل</Pill>
                    )}
                    {fmtDate(activeMsg.createdAt) ? (
                      <Pill>{fmtDate(activeMsg.createdAt)}</Pill>
                    ) : null}
                    {activeMsg.channel ? (
                      <Pill>💬 {activeMsg.channel}</Pill>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {getStatus(activeMsg) === "new" ? (
                    <Btn
                      tone="primary"
                      disabled={busyIds.has(activeMsg.id)}
                      onClick={() => setStatus(activeMsg.id, "done")}
                      title="D"
                    >
                      ✓ تم التعامل
                    </Btn>
                  ) : (
                    <Btn
                      disabled={busyIds.has(activeMsg.id)}
                      onClick={() => setStatus(activeMsg.id, "new")}
                      title="N"
                    >
                      ↩︎ رجّع جديد
                    </Btn>
                  )}

                  <Btn
                    tone="danger"
                    disabled={busyIds.has(activeMsg.id)}
                    onClick={() => remove(activeMsg.id)}
                    title="X"
                  >
                    🗑 حذف
                  </Btn>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-extrabold text-slate-500">
                    الاسم
                  </div>
                  <div className="mt-1 text-sm font-bold text-slate-900">
                    {activeMsg.name || "—"}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-3">
                  <div className="text-[11px] font-extrabold text-slate-500">
                    الهاتف
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div className="text-sm font-bold text-slate-900">
                      {activeMsg.phone || "—"}
                    </div>
                    <div className="flex items-center gap-2">
                      <Btn
                        disabled={!activeMsg.phone}
                        onClick={async () => {
                          const ok = await copyToClipboard(
                            String(activeMsg.phone || "")
                          );
                          ok
                            ? toast.success("تم نسخ الرقم")
                            : toast.error("فشل النسخ");
                        }}
                        title="نسخ"
                      >
                        📋 نسخ
                      </Btn>
                      <Btn
                        disabled={!activeMsg.phone}
                        onClick={() => {
                          if (!activeMsg.phone) return;
                          window.open(`tel:${activeMsg.phone}`, "_self");
                        }}
                        title="اتصال"
                      >
                        📞 اتصال
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <Btn
                  disabled={!activeMsg.phone}
                  onClick={() => {
                    const link = whatsappLink(
                      activeMsg.phone,
                      `مرحباً ${
                        activeMsg.name || ""
                      }، استلمنا رسالتك بخصوص: ${getSubject(activeMsg)}`
                    );
                    if (!link) return;
                    window.open(link, "_blank");
                  }}
                  title="فتح واتساب"
                >
                  🟢 واتساب
                </Btn>

                <Btn
                  onClick={async () => {
                    const txt = `[${getSubject(activeMsg)}]\nالاسم: ${
                      activeMsg.name || "-"
                    }\nالهاتف: ${activeMsg.phone || "-"}\nالقناة: ${
                      activeMsg.channel || "-"
                    }\nالتاريخ: ${fmtDate(activeMsg.createdAt) || "-"}\n\n${
                      activeMsg.message || ""
                    }`;
                    const ok = await copyToClipboard(txt);
                    ok
                      ? toast.success("تم نسخ ملخص الرسالة")
                      : toast.error("فشل النسخ");
                  }}
                  title="نسخ ملخص"
                >
                  🧾 نسخ ملخص
                </Btn>
              </div>

              <div className="mt-3 rounded-2xl border border-slate-200 p-3 bg-slate-50">
                <div className="text-[11px] font-extrabold text-slate-500">
                  نص الرسالة
                </div>
                <div className="mt-2 text-[14px] text-slate-900 whitespace-pre-wrap leading-relaxed">
                  {activeMsg.message || "(بدون نص)"}
                </div>
              </div>

              <div className="mt-3 text-[11px] text-slate-400">
                تذكير: J/K للتنقل · Space للتحديد · D تم · N جديد · X حذف ·
                Ctrl+A تحديد الكل (حسب الفلتر)
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
