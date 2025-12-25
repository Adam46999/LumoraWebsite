// src/components/admin/tabs/DailyTab.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { money, n, uid } from "../lib/format";

const TYPE_OPTIONS = [
  { value: "service", label: "خدمة" },
  { value: "product", label: "منتج" },
  { value: "carpet", label: "سجاد" },
  { value: "other", label: "أخرى" },
];

const PRESETS = [
  { type: "service", title: "غسيل سيارة" },
  { type: "service", title: "غسيل جيب" },
  { type: "service", title: "تنظيف فرش" },
  { type: "service", title: "تنظيف فرش سيارة" },
  { type: "product", title: "بيع منتج" },
  { type: "carpet", title: "سجاد" },
];

// ===== localStorage keys (UX speed) =====
const LS_RECENT_PRESETS = "admin_daily_recent_presets_v1";
const LS_LAST_ENTRY = "admin_daily_last_entry_v1";

function typeLabel(t) {
  return TYPE_OPTIONS.find((x) => x.value === t)?.label || "خدمة";
}

function inputBase() {
  return "w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200";
}

function IconBtn({ title, tone = "slate", className = "", ...props }) {
  const cls =
    tone === "danger"
      ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";
  return (
    <button
      {...props}
      type="button"
      title={title}
      className={`h-9 w-10 rounded-2xl border text-[12px] grid place-items-center transition ${cls} ${className}`}
    />
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-extrabold text-slate-700">
      {children}
    </span>
  );
}

function TinyStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="text-xs font-extrabold text-slate-900">{value}</div>
    </div>
  );
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export default function DailyTab({ entries, setEntries }) {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  // collapsed rows by default
  const [openId, setOpenId] = useState(null);

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // (4) click feedback for presets
  const [presetPulse, setPresetPulse] = useState(null);

  // focus amount field when modal opens
  const amountRef = useRef(null);

  // recent presets (7)
  const [recentPresets, setRecentPresets] = useState(() =>
    readJson(LS_RECENT_PRESETS, [])
  );

  const filtered = useMemo(() => {
    return (entries || []).filter((e) => {
      if (filter !== "all" && e.type !== filter) return false;
      if (q.trim()) {
        const s = q.trim().toLowerCase();
        const hay = `${e.title || ""} ${e.customerName || ""}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [entries, filter, q]);

  const totals = useMemo(() => {
    const total = (entries || []).reduce((a, e) => a + n(e.amount), 0);
    const shopTotal = (entries || []).reduce((a, e) => a + n(e.shop), 0);
    const youTotal = total - shopTotal;
    return { total, shopTotal, youTotal };
  }, [entries]);

  // ===== helpers =====
  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  const openAdd = () => {
    setEditing({
      id: uid(),
      type: "service",
      title: "",
      customerName: "",
      amount: "",
      shop: "",
      // ✅ product rule:
      // splitEnabled=false => shop auto = amount
      splitEnabled: false,
      createdAt: Date.now(),
    });
    setModalOpen(true);
  };

  const openEdit = (entry) => {
    // infer splitEnabled for product
    const isProduct = (entry?.type || "") === "product";
    const splitEnabled = isProduct ? n(entry.shop) !== n(entry.amount) : true;

    setEditing({
      ...entry,
      splitEnabled,
    });
    setModalOpen(true);
  };

  const remove = (id) => {
    if (!window.confirm("حذف هذا البند؟")) return;
    setEntries((prev) => (prev || []).filter((e) => e.id !== id));
    if (openId === id) setOpenId(null);
  };

  // (7) push recent preset (top 3 shown)
  const pushRecentPreset = (p) => {
    const key = `${p.type}__${p.title}`;
    const next = [key, ...(recentPresets || []).filter((x) => x !== key)].slice(
      0,
      8
    );
    setRecentPresets(next);
    writeJson(LS_RECENT_PRESETS, next);
  };

  // (6) remember last entry for "repeat"
  const rememberLastEntry = (entry) => {
    writeJson(LS_LAST_ENTRY, {
      type: entry.type,
      title: entry.title,
      customerName: entry.customerName || "",
      // لا نحفظ amount عشان يضل سريع تدخل رقم جديد
    });
  };

  const openRepeatLast = () => {
    const last = readJson(LS_LAST_ENTRY, null);
    if (!last?.title) {
      // إذا ما في آخر بند: افتح add عادي
      openAdd();
      return;
    }
    setEditing({
      id: uid(),
      type: last.type || "service",
      title: last.title || "",
      customerName: last.customerName || "",
      amount: "",
      shop: "",
      splitEnabled: false, // default rule
      createdAt: Date.now(),
    });
    setModalOpen(true);
  };

  const applyPreset = (preset) => {
    // (4) feel click
    const k = `${preset.type}:${preset.title}`;
    setPresetPulse(k);
    window.setTimeout(() => setPresetPulse(null), 220);

    pushRecentPreset(preset);

    setEditing((prev) => {
      const base = prev || {
        id: uid(),
        type: "service",
        title: "",
        customerName: "",
        amount: "",
        shop: "",
        splitEnabled: false,
        createdAt: Date.now(),
      };

      const isProduct = preset.type === "product";
      return {
        ...base,
        type: preset.type,
        title: preset.title,
        // ✅ product: split disabled by default (rare case)
        splitEnabled: isProduct ? false : true,
        // لا نلمس amount
      };
    });

    // focus amount سريع بعد اختيار preset
    window.setTimeout(() => amountRef.current?.focus?.(), 60);
  };

  const save = () => {
    if (!editing) return;

    const clean = {
      ...editing,
      type: editing.type || "service",
      title: String(editing.title || "").trim(),
      customerName: String(editing.customerName || "").trim(),
      amount: n(editing.amount),
      shop: n(editing.shop),
      createdAt: editing.createdAt || Date.now(),
    };

    // ✅ RULE: product usually all money to shop
    if (clean.type === "product" && !editing.splitEnabled) {
      clean.shop = clean.amount;
    }

    setEntries((prev) => {
      const exists = (prev || []).some((e) => e.id === clean.id);
      if (!exists) return [...(prev || []), clean];
      return (prev || []).map((e) => (e.id === clean.id ? clean : e));
    });

    // (6) remember last
    rememberLastEntry(clean);

    closeModal();
  };

  // focus on open modal
  useEffect(() => {
    if (!modalOpen) return;
    window.setTimeout(() => amountRef.current?.focus?.(), 80);
  }, [modalOpen]);

  // recent preset objects (top 3)
  const topRecent = useMemo(() => {
    const keys = (recentPresets || []).slice(0, 3);
    const map = new Map(PRESETS.map((p) => [`${p.type}__${p.title}`, p]));
    return keys.map((k) => map.get(k)).filter(Boolean);
  }, [recentPresets]);

  return (
    <div className="space-y-3" dir="rtl">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="min-w-0">
            <h2 className="text-sm font-extrabold text-slate-900">
              بنود اليوم
            </h2>
            <p className="text-[11px] text-slate-500">
              أسرع طريقة: اختر قالب → أدخل مبلغ → حفظ.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openRepeatLast}
              className="h-9 px-4 rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition active:scale-[0.98]"
              title="فتح نموذج آخر بند بسرعة"
            >
              ↺ نفس آخر بند
            </button>

            <button
              onClick={openAdd}
              className="h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700 transition active:scale-[0.98]"
            >
              + إضافة
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <TinyStat label="الإجمالي" value={money(totals.total)} />
          <TinyStat label="للمحل" value={money(totals.shopTotal)} />
          <TinyStat label="إلك" value={money(totals.youTotal)} />
        </div>

        {/* (7) Top recent presets */}
        {topRecent.length > 0 && (
          <div className="pt-1 flex items-center gap-2 flex-wrap">
            <Pill>آخر استخدام</Pill>
            {topRecent.map((p) => (
              <button
                key={`${p.type}__${p.title}`}
                onClick={() => {
                  if (!modalOpen) {
                    openAdd();
                    window.setTimeout(() => applyPreset(p), 0);
                  } else {
                    applyPreset(p);
                  }
                }}
                className="h-8 px-3 rounded-2xl border border-slate-200 bg-slate-50 text-[11px] font-extrabold text-slate-800 hover:bg-slate-100 transition active:scale-[0.98]"
              >
                {p.title}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Filters */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-800 outline-none"
          >
            <option value="all">الكل</option>
            <option value="service">خدمات</option>
            <option value="product">منتجات</option>
            <option value="carpet">سجاد</option>
            <option value="other">أخرى</option>
          </select>

          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
              🔍
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="بحث سريع (عنوان / زبون)…"
            />
          </div>
        </div>
      </section>

      {/* List */}
      <section className="space-y-2">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
            <div className="text-sm font-bold text-slate-900">لا يوجد بنود</div>
            <div className="mt-1 text-[12px] text-slate-500">
              اضغط “+ إضافة” لبدء التسجيل
            </div>
          </div>
        ) : (
          filtered
            .slice()
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
            .map((e) => {
              const isOpen = openId === e.id;
              const you = n(e.amount) - n(e.shop);

              return (
                <div
                  key={e.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  {/* (2) merged: [type] title */}
                  <button
                    type="button"
                    onClick={() => setOpenId((p) => (p === e.id ? null : e.id))}
                    className="group w-full px-3 py-3 flex items-center justify-between gap-2 text-right hover:bg-slate-50 transition"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-extrabold">
                          {typeLabel(e.type)}
                        </span>

                        <div className="text-[13px] font-extrabold text-slate-900 truncate">
                          {e.title || "بدون عنوان"}
                        </div>

                        {e.customerName ? (
                          <span className="text-[11px] text-slate-500 truncate">
                            — {e.customerName}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap">
                        <span>
                          المبلغ:{" "}
                          <b className="text-slate-900">{money(e.amount)}</b>
                        </span>
                        <span>
                          إلك: <b className="text-slate-900">{money(you)}</b>
                        </span>
                      </div>
                    </div>

                    {/* (3) actions: show on hover/open (less noise) */}
                    <div className="flex items-center gap-2">
                      <div
                        className={
                          "flex items-center gap-2 " +
                          (isOpen ? "" : "opacity-0 group-hover:opacity-100")
                        }
                      >
                        <IconBtn
                          title="تعديل"
                          onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            openEdit(e);
                          }}
                        >
                          ✏️
                        </IconBtn>

                        <IconBtn
                          title="حذف"
                          tone="danger"
                          onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            remove(e.id);
                          }}
                        >
                          🗑️
                        </IconBtn>
                      </div>

                      <span className="text-[11px] text-slate-400 w-6 text-center">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              النوع
                            </div>
                            <select
                              value={e.type || "service"}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) => {
                                    if (x.id !== e.id) return x;
                                    // product rule: default shop=amount
                                    if (val === "product") {
                                      return {
                                        ...x,
                                        type: val,
                                        shop: n(x.amount),
                                      };
                                    }
                                    return { ...x, type: val };
                                  })
                                );
                              }}
                              className={`${inputBase()} bg-white`}
                            >
                              {TYPE_OPTIONS.map((t) => (
                                <option key={t.value} value={t.value}>
                                  {t.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              اسم الزبون (اختياري)
                            </div>
                            <input
                              value={e.customerName || ""}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) =>
                                    x.id === e.id
                                      ? { ...x, customerName: val }
                                      : x
                                  )
                                );
                              }}
                              className={inputBase()}
                              placeholder="مثال: أحمد"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <div className="text-[11px] text-slate-600 mb-1">
                              العنوان
                            </div>
                            <input
                              value={e.title || ""}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) =>
                                    x.id === e.id ? { ...x, title: val } : x
                                  )
                                );
                              }}
                              className={inputBase()}
                              placeholder="غسيل سيارة / بيع منتج..."
                            />
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              المبلغ
                            </div>
                            <input
                              type="number"
                              inputMode="decimal"
                              value={e.amount ?? ""}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) => {
                                    if (x.id !== e.id) return x;
                                    // product: auto shop
                                    if (x.type === "product") {
                                      return { ...x, amount: val, shop: val };
                                    }
                                    return { ...x, amount: val };
                                  })
                                );
                              }}
                              className={inputBase()}
                            />
                          </div>

                          {/* shop only meaningful when not product */}
                          {e.type !== "product" ? (
                            <div>
                              <div className="text-[11px] text-slate-600 mb-1">
                                للمحل
                              </div>
                              <input
                                type="number"
                                inputMode="decimal"
                                value={e.shop ?? ""}
                                onChange={(ev) => {
                                  const val = ev.target.value;
                                  setEntries((prev) =>
                                    (prev || []).map((x) =>
                                      x.id === e.id ? { ...x, shop: val } : x
                                    )
                                  );
                                }}
                                className={inputBase()}
                              />
                            </div>
                          ) : (
                            <div className="sm:col-span-1 flex items-end">
                              <div className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2">
                                <div className="text-[11px] text-slate-600 font-extrabold">
                                  بيع منتج → للمحل تلقائيًا
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  (إذا بدك استثناء: عدّل من المودال عند الإضافة)
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-2 text-[11px] text-slate-600">
                          إلك: <b className="text-slate-900">{money(you)}</b>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        )}
      </section>

      {/* Modal */}
      {modalOpen && editing && (
        <div
          className="fixed inset-0 z-[9999] bg-black/30 flex items-end sm:items-center justify-center p-3"
          dir="rtl"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-200 p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  {(entries || []).some((x) => x.id === editing.id)
                    ? "تعديل بند"
                    : "إضافة بند"}
                </h3>
                <p className="text-[11px] text-slate-500">
                  اختر قالب (يظهر أثر الكبس) → ركّز على المبلغ.
                </p>
              </div>

              <button
                onClick={closeModal}
                className="h-9 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50 transition active:scale-[0.98]"
              >
                إغلاق
              </button>
            </div>

            {/* Presets */}
            <div className="mt-3 flex flex-wrap gap-2">
              {PRESETS.map((p) => {
                const k = `${p.type}:${p.title}`;
                const pulsing = presetPulse === k;
                return (
                  <button
                    key={k}
                    onClick={() => applyPreset(p)}
                    className={[
                      "h-9 px-4 rounded-2xl border text-[12px] font-extrabold transition",
                      "active:scale-[0.98]",
                      pulsing
                        ? "border-blue-300 bg-blue-50 text-blue-800 ring-2 ring-blue-200"
                        : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {p.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  النوع
                </label>
                <select
                  value={editing.type}
                  onChange={(e) => {
                    const t = e.target.value;
                    setEditing((p) => {
                      const next = { ...p, type: t };
                      if (t === "product") {
                        next.splitEnabled = false; // rare split
                        next.shop = next.amount; // auto
                      } else {
                        next.splitEnabled = true;
                      }
                      return next;
                    });
                  }}
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {TYPE_OPTIONS.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  اسم الزبون (اختياري)
                </label>
                <input
                  value={editing.customerName}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, customerName: e.target.value }))
                  }
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="مثال: أحمد"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] text-slate-600 mb-1">
                  العنوان
                </label>
                <input
                  value={editing.title}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, title: e.target.value }))
                  }
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="غسيل سيارة / بيع منتج..."
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  المبلغ
                </label>
                <input
                  ref={amountRef}
                  type="number"
                  inputMode="decimal"
                  value={editing.amount}
                  onChange={(e) =>
                    setEditing((p) => {
                      const amount = e.target.value;
                      const next = { ...p, amount };
                      // ✅ product rule: shop auto unless split enabled
                      if (next.type === "product" && !next.splitEnabled) {
                        next.shop = amount;
                      }
                      return next;
                    })
                  }
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* ✅ product: hide shop by default + show rare toggle */}
              {editing.type === "product" ? (
                <div className="flex flex-col justify-end gap-2">
                  <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-[11px] font-extrabold text-slate-700">
                      بيع منتج = للمحل تلقائيًا
                    </div>
                    <div className="text-[11px] text-slate-400">
                      حالات نادرة؟ فعّل التقسيم.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setEditing((p) => {
                        const next = { ...p, splitEnabled: !p.splitEnabled };
                        // إذا سكّر التقسيم رجّع shop=amount
                        if (!next.splitEnabled) next.shop = next.amount;
                        return next;
                      })
                    }
                    className="h-10 rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition active:scale-[0.98]"
                  >
                    {editing.splitEnabled
                      ? "إلغاء التقسيم (نادر)"
                      : "تقسيم (نادر)"}
                  </button>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    للمحل
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={editing.shop}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, shop: e.target.value }))
                    }
                    className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              )}

              {/* if product split enabled => show shop input */}
              {editing.type === "product" && editing.splitEnabled && (
                <div className="sm:col-span-2">
                  <label className="block text-[11px] text-slate-600 mb-1">
                    للمحل (استثناء)
                  </label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={editing.shop}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, shop: e.target.value }))
                    }
                    className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-[12px]">
              <span className="text-slate-600">
                إلك:{" "}
                <b className="text-slate-900">
                  {money(n(editing.amount) - n(editing.shop))}
                </b>
              </span>

              <button
                onClick={save}
                className="h-10 px-6 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700 transition active:scale-[0.98]"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
