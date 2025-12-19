// src/components/admin/AdminPanel.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import AdminAuthGate from "./AdminAuthGate";
import AdminHeader from "./AdminHeader";
import SaveBar from "./SaveBar";

import DailyTab from "./tabs/DailyTab";
import CarpetsTab from "./tabs/CarpetsTab";
import MessagesTab from "./tabs/MessagesTab";

import {
  fetchDay,
  getEmptyDay,
  todayKey,
  upsertDay,
} from "../../services/managerDaily";
import { n, uid } from "./lib/format";
import { ToastProvider, useToast } from "./lib/toast";

const ADMIN_PIN = "8426";

// ===== helpers =====
function stableStringify(obj) {
  const keys = Object.keys(obj).sort();
  return JSON.stringify(obj, keys);
}
function cleanDayForCompare(day) {
  const clone = JSON.parse(JSON.stringify(day));
  delete clone.createdAt;
  delete clone.updatedAt;
  return clone;
}
function toMillis(v) {
  if (!v) return null;
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const t = Date.parse(v);
    return Number.isFinite(t) ? t : null;
  }
  if (typeof v?.toMillis === "function") return v.toMillis();
  if (typeof v?.seconds === "number") return v.seconds * 1000;
  return null;
}

// ===== confirm modal =====
function ConfirmModal({ open, title, message, onCancel, onConfirm }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/30 flex items-end sm:items-center justify-center p-3"
      dir="rtl"
    >
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-200 p-4">
        <div className="text-sm font-extrabold text-slate-900">{title}</div>
        <div className="mt-1 text-[12px] text-slate-600 whitespace-pre-wrap">
          {message}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="h-10 px-4 rounded-2xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            إلغاء
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="h-10 px-5 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700"
          >
            نعم، كمّل
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== compact overflow menu (Print/Export/Close/Open) =====
function OverflowMenu({
  disabled,
  isClosed,
  onToggleCloseDay,
  onPrint,
  onExport,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!open) return;
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((p) => !p)}
        className={`h-9 w-10 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 grid place-items-center ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        }`}
        title="المزيد"
      >
        ⋯
      </button>

      {open && (
        <div className="absolute top-11 left-0 w-48 rounded-2xl border border-slate-200 bg-white shadow-lg p-1 z-40">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onToggleCloseDay();
            }}
            disabled={disabled}
            className="w-full text-right px-3 py-2 rounded-xl text-[12px] text-slate-800 hover:bg-slate-50"
          >
            {isClosed ? "فتح اليوم للتعديل" : "إغلاق اليوم (قراءة فقط)"}
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onPrint();
            }}
            className="w-full text-right px-3 py-2 rounded-xl text-[12px] text-slate-800 hover:bg-slate-50"
          >
            🖨️ طباعة تقرير
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onExport();
            }}
            className="w-full text-right px-3 py-2 rounded-xl text-[12px] text-slate-800 hover:bg-slate-50"
          >
            ⬇️ تصدير JSON
          </button>
        </div>
      )}
    </div>
  );
}

function AdminPanelInner({ onExit }) {
  const toast = useToast();

  const [authorized, setAuthorized] = useState(false);

  const [tab, setTab] = useState("daily");
  const [dateKey, setDateKey] = useState(todayKey());

  const [day, setDay] = useState(getEmptyDay(dateKey));
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  const [saveError, setSaveError] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);

  const baselineRef = useRef("");
  const autoTimerRef = useRef(null);

  const isSavingRef = useRef(false);
  const saveAgainRef = useRef(false);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmActionRef = useRef(null);

  const openConfirm = (action) => {
    confirmActionRef.current = action;
    setConfirmOpen(true);
  };
  const closeConfirm = () => {
    confirmActionRef.current = null;
    setConfirmOpen(false);
  };
  const runConfirm = () => {
    const fn = confirmActionRef.current;
    closeConfirm();
    if (typeof fn === "function") fn();
  };

  const isClosed = !!day?.isClosed;

  const loadDay = async (dk, { silent } = {}) => {
    setLoading(true);
    setErr("");
    try {
      const data = await fetchDay(dk);
      setDay(data);
      baselineRef.current = stableStringify(cleanDayForCompare(data));
      setLastSavedAt(toMillis(data?.updatedAt) || toMillis(data?.createdAt));
      setSaveError(false);
      if (!silent) toast.success("تم تحديث بيانات اليوم");
    } catch (e) {
      console.error(e);
      setErr("فشل تحميل بيانات اليوم.");
      toast.error("فشل تحميل بيانات اليوم");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authorized) return;
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await fetchDay(dateKey);
        if (!alive) return;

        setDay(data);
        baselineRef.current = stableStringify(cleanDayForCompare(data));
        setLastSavedAt(toMillis(data?.updatedAt) || toMillis(data?.createdAt));
        setSaveError(false);
      } catch (e) {
        console.error(e);
        if (!alive) return;
        setErr("فشل تحميل بيانات اليوم.");
        toast.error("فشل تحميل بيانات اليوم");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized, dateKey]);

  const totals = useMemo(() => {
    const entries = day.entries || [];
    const total = entries.reduce((a, e) => a + n(e.amount), 0);
    const shopTotal = entries.reduce((a, e) => a + n(e.shop), 0);
    const youTotal = total - shopTotal;

    const defaultRate = n(day.defaultCarpetRatePerM2) || 15;
    const carpetsTotal = (day.carpetCustomers || []).reduce((acc, c) => {
      const rugs = c.rugs || [];
      const sum = rugs.reduce((a, r) => {
        const mode = r.mode || "cm";
        const rate = n(r.ratePerM2) || defaultRate;

        let area = 0;
        if (mode === "cm") area = (n(r.lengthCm) / 100) * (n(r.widthCm) / 100);
        else if (mode === "area") area = n(r.areaM2);
        else
          area =
            n(r.areaM2) > 0
              ? n(r.areaM2)
              : (n(r.lengthCm) / 100) * (n(r.widthCm) / 100);

        const price =
          mode === "price" && n(r.priceOverride) > 0
            ? n(r.priceOverride)
            : area * rate;

        return a + price;
      }, 0);

      return acc + sum;
    }, 0);

    return { total, shopTotal, youTotal, carpetsTotal };
  }, [day]);

  const isDirty = useMemo(() => {
    if (!baselineRef.current) return false;
    return stableStringify(cleanDayForCompare(day)) !== baselineRef.current;
  }, [day]);

  const buildPayload = () => {
    return {
      ...day,
      dateKey,
      isClosed: !!day.isClosed,

      defaultCarpetRatePerM2: n(day.defaultCarpetRatePerM2) || 15,
      notes: String(day.notes || ""),

      entries: (day.entries || []).map((e) => ({
        id: e.id || uid(),
        type: e.type || "service",
        title: String(e.title || "").trim(),
        customerName: String(e.customerName || "").trim(),
        amount: n(e.amount),
        shop: n(e.shop),
        createdAt: e.createdAt || Date.now(),
      })),

      carpetCustomers: (day.carpetCustomers || []).map((c) => ({
        id: c.id || uid(),
        name: String(c.name || "").trim(),
        phone: String(c.phone || "").trim(),
        status: c.status || "open",
        locked: !!c.locked,
        notes: String(c.notes || ""),
        doneAt: c.doneAt || null,
        rugs: (c.rugs || []).map((r) => ({
          id: r.id || uid(),
          mode: r.mode || "cm",
          lengthCm: n(r.lengthCm),
          widthCm: n(r.widthCm),
          areaM2: n(r.areaM2),
          ratePerM2: n(r.ratePerM2) || null,
          priceOverride: n(r.priceOverride),
        })),
      })),
    };
  };

  const saveNow = async ({ silent } = {}) => {
    if (isClosed) {
      toast.info("اليوم مغلق (قراءة فقط). افتحه أولاً للتعديل.", {
        durationMs: 1800,
      });
      return;
    }

    if (isSavingRef.current) {
      saveAgainRef.current = true;
      return;
    }

    isSavingRef.current = true;
    setSaving(true);
    setErr("");

    try {
      const payload = buildPayload();
      await upsertDay(dateKey, payload);

      const fresh = await fetchDay(dateKey);
      setDay(fresh);
      baselineRef.current = stableStringify(cleanDayForCompare(fresh));
      setLastSavedAt(toMillis(fresh?.updatedAt) || Date.now());

      setSaveError(false);
      if (!silent) toast.success("تم الحفظ");
    } catch (e) {
      console.error(e);
      setErr("فشل الحفظ. جرّب مرة ثانية.");
      setSaveError(true);
      toast.error("فشل الحفظ. جرّب مرة ثانية.");
    } finally {
      isSavingRef.current = false;
      setSaving(false);

      if (saveAgainRef.current) {
        saveAgainRef.current = false;
        saveNow({ silent: true });
      }
    }
  };

  const reload = async () => {
    await loadDay(dateKey, { silent: false });
  };

  const goToday = () => {
    const dk = todayKey();
    const proceed = () => setDateKey(dk);
    if (isDirty) openConfirm(() => proceed());
    else proceed();
  };

  const setDateKeySafe = (dk) => {
    const proceed = () => setDateKey(dk);
    if (isDirty) openConfirm(() => proceed());
    else proceed();
  };

  // ✅ autosave debounce (calmer, less spam): 2000ms
  useEffect(() => {
    if (!authorized) return;
    if (loading) return;
    if (isClosed) return;
    if (!isDirty) return;

    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);

    autoTimerRef.current = setTimeout(() => {
      saveNow({ silent: true });
    }, 2000);

    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized, day, isDirty, loading, isClosed]);

  useEffect(() => {
    const handler = (e) => {
      if (!isDirty) return;
      e.preventDefault();
      e.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && confirmOpen) {
        e.preventDefault();
        closeConfirm();
        return;
      }

      const isCtrl = e.ctrlKey || e.metaKey;
      if (!isCtrl) return;

      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        saveNow({ silent: false });
        return;
      }

      if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        reload();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmOpen, dateKey, isClosed]);

  const guardIfClosed = (fn) => {
    if (isClosed) {
      toast.info("اليوم مغلق (قراءة فقط). افتحه أولاً للتعديل.", {
        durationMs: 1800,
      });
      return;
    }
    fn();
  };

  const addEntryFromCarpets = ({ type, title, customerName, amount, shop }) => {
    if (isClosed) {
      toast.info("اليوم مغلق (قراءة فقط). افتحه أولاً للتعديل.", {
        durationMs: 1800,
      });
      return;
    }

    setDay((p) => ({
      ...p,
      entries: [
        ...(p.entries || []),
        {
          id: uid(),
          type: type || "carpet",
          title: title || "سجاد",
          customerName: customerName || "",
          amount: n(amount),
          shop: shop === "" ? "" : n(shop),
          createdAt: Date.now(),
        },
      ],
    }));
    setTab("daily");
    toast.info("تم إضافة بند السجاد إلى بنود اليوم", { durationMs: 1600 });
  };

  const handleExit = () => {
    if (!onExit) return;
    const proceed = () => onExit();
    if (isDirty) openConfirm(() => proceed());
    else proceed();
  };

  // close/open day
  const toggleCloseDay = () => {
    if (loading || saving) return;

    if (!isClosed) {
      const proceed = () => {
        setDay((p) => ({ ...p, isClosed: true }));
        setTimeout(() => {
          (async () => {
            try {
              setSaving(true);
              setErr("");
              setSaveError(false);

              const payload = { ...buildPayload(), isClosed: true };
              await upsertDay(dateKey, payload);

              const fresh = await fetchDay(dateKey);
              setDay(fresh);
              baselineRef.current = stableStringify(cleanDayForCompare(fresh));
              setLastSavedAt(toMillis(fresh?.updatedAt) || Date.now());
              toast.success("تم إغلاق اليوم وحفظه");
            } catch (e) {
              console.error(e);
              setErr("فشل إغلاق اليوم. جرّب مرة ثانية.");
              setSaveError(true);
              toast.error("فشل إغلاق اليوم. جرّب مرة ثانية.");
              setDay((p) => ({ ...p, isClosed: false }));
            } finally {
              setSaving(false);
            }
          })();
        }, 0);
      };

      if (isDirty) openConfirm(() => proceed());
      else proceed();
      return;
    }

    const proceedOpen = () => {
      setDay((p) => ({ ...p, isClosed: false }));
      setTimeout(() => {
        (async () => {
          try {
            setSaving(true);
            setErr("");
            setSaveError(false);

            const payload = { ...buildPayload(), isClosed: false };
            await upsertDay(dateKey, payload);

            const fresh = await fetchDay(dateKey);
            setDay(fresh);
            baselineRef.current = stableStringify(cleanDayForCompare(fresh));
            setLastSavedAt(toMillis(fresh?.updatedAt) || Date.now());
            toast.success("تم فتح اليوم للتعديل");
          } catch (e) {
            console.error(e);
            setErr("فشل فتح اليوم. جرّب مرة ثانية.");
            setSaveError(true);
            toast.error("فشل فتح اليوم. جرّب مرة ثانية.");
            setDay((p) => ({ ...p, isClosed: true }));
          } finally {
            setSaving(false);
          }
        })();
      }, 0);
    };

    if (isDirty) openConfirm(() => proceedOpen());
    else proceedOpen();
  };

  // print
  const handlePrint = () => {
    try {
      const payload = buildPayload();
      const title = `Lumora — تقرير يوم ${dateKey}`;
      const html = `
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <style>
    body{font-family:Arial, sans-serif; padding:24px; color:#0f172a}
    h1{font-size:18px;margin:0 0 8px}
    .muted{color:#64748b;font-size:12px;margin-bottom:16px}
    .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:12px 0}
    .card{border:1px solid #e2e8f0;border-radius:12px;padding:10px}
    .k{color:#64748b;font-size:12px}
    .v{font-weight:800;font-size:14px;margin-top:4px}
    table{width:100%;border-collapse:collapse;margin-top:12px}
    th,td{border:1px solid #e2e8f0;padding:8px;font-size:12px;vertical-align:top}
    th{background:#f8fafc}
    .section{margin-top:18px}
    .tag{display:inline-block;border:1px solid #e2e8f0;border-radius:999px;padding:2px 8px;font-size:11px;color:#334155;background:#f8fafc}
  </style>
</head>
<body>
  <h1>${title}</h1>
  <div class="muted">الحالة: <span class="tag">${
    payload.isClosed ? "مغلق" : "مفتوح"
  }</span></div>

  <div class="grid">
    <div class="card"><div class="k">إجمالي اليوم</div><div class="v">${
      totals.total
    }</div></div>
    <div class="card"><div class="k">للمحل</div><div class="v">${
      totals.shopTotal
    }</div></div>
    <div class="card"><div class="k">إلك</div><div class="v">${
      totals.youTotal
    }</div></div>
    <div class="card"><div class="k">سجاد اليوم</div><div class="v">${
      totals.carpetsTotal
    }</div></div>
  </div>

  <div class="section">
    <h2 style="font-size:14px;margin:0 0 8px">بنود اليوم</h2>
    <table>
      <thead>
        <tr>
          <th>النوع</th>
          <th>العنوان</th>
          <th>الزبون</th>
          <th>المبلغ</th>
          <th>للمحل</th>
        </tr>
      </thead>
      <tbody>
        ${(payload.entries || [])
          .map(
            (e) => `
          <tr>
            <td>${e.type || ""}</td>
            <td>${(e.title || "").replace(/</g, "&lt;")}</td>
            <td>${(e.customerName || "").replace(/</g, "&lt;")}</td>
            <td>${e.amount ?? ""}</td>
            <td>${e.shop ?? ""}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2 style="font-size:14px;margin:0 0 8px">زبائن السجاد</h2>
    <table>
      <thead>
        <tr>
          <th>الزبون</th>
          <th>الهاتف</th>
          <th>الحالة</th>
          <th>عدد السجاد</th>
        </tr>
      </thead>
      <tbody>
        ${(payload.carpetCustomers || [])
          .map((c) => {
            const rugsCount = (c.rugs || []).length;
            return `
            <tr>
              <td>${(c.name || "").replace(/</g, "&lt;")}</td>
              <td>${(c.phone || "").replace(/</g, "&lt;")}</td>
              <td>${c.status || ""}</td>
              <td>${rugsCount}</td>
            </tr>`;
          })
          .join("")}
      </tbody>
    </table>
  </div>

  ${
    payload.notes
      ? `<div class="section">
          <h2 style="font-size:14px;margin:0 0 8px">ملاحظات</h2>
          <div class="card">${String(payload.notes).replace(/</g, "&lt;")}</div>
        </div>`
      : ""
  }

  <script>
    window.onload = () => window.print();
  </script>
</body>
</html>
      `.trim();

      const w = window.open("", "_blank");
      if (!w) {
        toast.error("المتصفح منع نافذة الطباعة (Pop-up).");
        return;
      }
      w.document.open();
      w.document.write(html);
      w.document.close();
    } catch (e) {
      console.error(e);
      toast.error("فشلت الطباعة.");
    }
  };

  // export json
  const handleExport = () => {
    try {
      const payload = buildPayload();
      const json = JSON.stringify(payload, null, 2);
      const blob = new Blob([json], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `lumora-day-${dateKey}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
      toast.success("تم تصدير ملف JSON");
    } catch (e) {
      console.error(e);
      toast.error("فشل التصدير.");
    }
  };

  if (!authorized) {
    return (
      <AdminAuthGate
        adminPin={ADMIN_PIN}
        onAuthorized={() => {
          setAuthorized(true);
          toast.success("تم الدخول إلى لوحة الإدارة");
        }}
        onExit={onExit}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">
      <AdminHeader
        tab={tab}
        setTab={setTab}
        dateKey={dateKey}
        setDateKey={setDateKeySafe}
        onExit={onExit ? handleExit : undefined}
        totals={totals}
        onSave={() => saveNow({ silent: false })}
        onReload={reload}
        saving={saving}
        isDirty={isDirty}
        lastSavedAt={lastSavedAt}
        isClosed={isClosed}
        saveError={saveError}
      />

      <ConfirmModal
        open={confirmOpen}
        title="في تغييرات غير محفوظة"
        message={
          "إذا كمّلت هسا ممكن تخسر التغييرات.\n" +
          "ملاحظة: الحفظ تلقائي، بس إذا في مشكلة بالشبكة ممكن ما يلحق."
        }
        onCancel={closeConfirm}
        onConfirm={runConfirm}
      />

      <main className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        {/* ✅ Compact Toolbar (no wasted space) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={goToday}
                className="h-9 px-4 rounded-2xl bg-slate-900 text-xs font-extrabold text-white hover:bg-slate-800"
                title="الرجوع لتاريخ اليوم"
              >
                اليوم
              </button>

              <button
                type="button"
                onClick={reload}
                disabled={loading || saving}
                className="h-9 w-10 rounded-2xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 disabled:opacity-60 grid place-items-center"
                title="تحديث (Ctrl+R)"
              >
                ⟳
              </button>

              <button
                type="button"
                onClick={() => saveNow({ silent: false })}
                disabled={saving || isClosed || !isDirty}
                className={`h-9 px-4 rounded-2xl text-xs font-extrabold text-white ${
                  saveError
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } disabled:opacity-60`}
                title={
                  isClosed ? "اليوم مغلق (قراءة فقط)" : "حفظ الآن (Ctrl+S)"
                }
              >
                {saving ? "حفظ..." : saveError ? "إعادة حفظ" : "حفظ"}
              </button>

              {isClosed && (
                <span className="text-[11px] px-2 py-0.5 rounded-full border bg-slate-900 text-white border-slate-900">
                  اليوم مغلق
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <OverflowMenu
                disabled={loading || saving}
                isClosed={isClosed}
                onToggleCloseDay={toggleCloseDay}
                onPrint={handlePrint}
                onExport={handleExport}
              />

              <div className="text-[10px] text-slate-400 hidden sm:block">
                <b>Ctrl+S</b> حفظ — <b>Ctrl+R</b> تحديث
              </div>
            </div>
          </div>
        </section>

        {err && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-3 text-sm">
            {err}
          </div>
        )}

        {loading ? (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="h-3 w-40 bg-slate-200 rounded mb-3 animate-pulse" />
              <div className="h-9 w-full bg-slate-200 rounded-2xl animate-pulse" />
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="h-3 w-56 bg-slate-200 rounded mb-3 animate-pulse" />
              <div className="h-24 w-full bg-slate-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        ) : (
          <>
            {tab === "daily" && (
              <DailyTab
                entries={day.entries || []}
                setEntries={(updater) =>
                  guardIfClosed(() =>
                    setDay((p) => ({
                      ...p,
                      entries:
                        typeof updater === "function"
                          ? updater(p.entries || [])
                          : updater,
                    }))
                  )
                }
              />
            )}

            {tab === "carpets" && (
              <CarpetsTab
                defaultRatePerM2={day.defaultCarpetRatePerM2 || 15}
                setDefaultRatePerM2={(v) =>
                  guardIfClosed(() =>
                    setDay((p) => ({ ...p, defaultCarpetRatePerM2: v }))
                  )
                }
                customers={day.carpetCustomers || []}
                setCustomers={(updater) =>
                  guardIfClosed(() =>
                    setDay((p) => ({
                      ...p,
                      carpetCustomers:
                        typeof updater === "function"
                          ? updater(p.carpetCustomers || [])
                          : updater,
                    }))
                  )
                }
                onAddEntryFromCarpets={addEntryFromCarpets}
              />
            )}

            {tab === "messages" && <MessagesTab />}
          </>
        )}
      </main>

      <SaveBar
        isDirty={isDirty}
        saving={saving}
        onSave={() => saveNow({ silent: false })}
      />
    </div>
  );
}

export default function AdminPanel(props) {
  return (
    <ToastProvider>
      <AdminPanelInner {...props} />
    </ToastProvider>
  );
}
