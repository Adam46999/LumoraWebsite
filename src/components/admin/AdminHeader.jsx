// src/components/admin/AdminHeader.jsx
import React, { useMemo, useState } from "react";
import { money } from "./lib/format";

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

function IconBtn({ tone = "slate", children, className = "", ...props }) {
  const base =
    "h-8 px-3 rounded-2xl border text-[11px] font-extrabold transition whitespace-nowrap";
  const toneCls =
    tone === "primary"
      ? "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
      : tone === "dark"
      ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
      : tone === "ghost"
      ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
      : tone === "danger"
      ? "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100"
      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";

  return (
    <button
      {...props}
      type="button"
      className={`${base} ${toneCls} ${className}`}
    >
      {children}
    </button>
  );
}

function TabPill({ active, children, ...props }) {
  return (
    <button
      {...props}
      type="button"
      className={`h-8 px-3 rounded-2xl text-[11px] font-extrabold border transition ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function StatChip({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
      <div className="text-[10px] text-slate-500 leading-4">{label}</div>
      <div className="text-[12px] font-extrabold text-slate-900 leading-4">
        {value}
      </div>
    </div>
  );
}

function StatusDot({ saving, isDirty, saveError }) {
  const cls = saveError
    ? "bg-rose-500"
    : saving
    ? "bg-amber-500"
    : isDirty
    ? "bg-sky-500"
    : "bg-emerald-500";

  const label = saveError
    ? "فشل حفظ"
    : saving
    ? "حفظ..."
    : isDirty
    ? "في تغييرات"
    : "محفوظ";

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${cls}`} />
      <span className="text-[11px] text-slate-600">{label}</span>
    </div>
  );
}

export default function AdminHeader({
  tab,
  setTab,
  dateKey,
  setDateKey,
  onExit,
  totals,
  onReload, // ✅ يبقى
  saving,
  isDirty,
  lastSavedAt,
  isClosed = false,
  saveError = false,
}) {
  const [showStatsMobile, setShowStatsMobile] = useState(false);

  const tabKey = String(tab || "daily")
    .trim()
    .toLowerCase();

  const lastSavedLabel = useMemo(() => {
    if (saving) return "جارٍ الحفظ تلقائيًا...";
    const ms = toMillis(lastSavedAt);
    if (!ms) return "لم يتم الحفظ بعد";
    return `آخر حفظ: ${new Date(ms).toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }, [saving, lastSavedAt]);

  const safeTotals = totals || {
    total: 0,
    shopTotal: 0,
    youTotal: 0,
    carpetsTotal: 0,
  };

  const setTabSafe = (v) => setTab(String(v).trim().toLowerCase());

  return (
    <header
      className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 rounded-2xl bg-blue-600 text-white grid place-items-center text-sm font-extrabold shrink-0">
              L
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-sm font-extrabold text-slate-900">
                  لوحة الإدارة
                </h1>

                <StatusDot
                  saving={saving}
                  isDirty={isDirty}
                  saveError={saveError}
                />

                {isClosed && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full border bg-slate-900 text-white border-slate-900">
                    اليوم مغلق
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-500 truncate">
                {lastSavedLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                التاريخ
              </span>
              <input
                type="date"
                value={dateKey}
                onChange={(e) => setDateKey(e.target.value)}
                className="h-8 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-[11px] text-slate-800 outline-none"
              />
            </div>

            {/* ✅ تحديث فقط (اختياري) */}
            <IconBtn onClick={onReload} tone="ghost" title="تحديث">
              ⟳
            </IconBtn>

            {onExit && (
              <IconBtn onClick={onExit} tone="dark" title="خروج">
                خروج
              </IconBtn>
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <TabPill
              active={tabKey === "daily"}
              onClick={() => setTabSafe("daily")}
            >
              🧾 اليوم
            </TabPill>

            <TabPill
              active={tabKey === "carpets"}
              onClick={() => setTabSafe("carpets")}
            >
              🧵 سجاد
            </TabPill>

            <TabPill
              active={tabKey === "messages"}
              onClick={() => setTabSafe("messages")}
            >
              📩 Inbox
            </TabPill>

            <button
              type="button"
              onClick={() => setShowStatsMobile((p) => !p)}
              className="sm:hidden h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-700 hover:bg-slate-50"
              title="إظهار/إخفاء الملخص"
            >
              {showStatsMobile ? "إخفاء الملخص" : "إظهار الملخص"}
            </button>
          </div>

          <div className="text-[10px] text-slate-400 hidden sm:block">
            الحفظ تلقائي بالكامل ✅
          </div>
        </div>
      </div>

      <div
        className={`max-w-6xl mx-auto px-3 sm:px-4 pb-2 ${
          showStatsMobile ? "" : "hidden sm:block"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <StatChip label="إجمالي اليوم" value={money(safeTotals.total)} />
          <StatChip label="للمحل" value={money(safeTotals.shopTotal)} />
          <StatChip label="إلك" value={money(safeTotals.youTotal)} />
          <StatChip label="سجاد اليوم" value={money(safeTotals.carpetsTotal)} />
        </div>
      </div>
    </header>
  );
}
