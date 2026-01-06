// src/components/admin/tabs/daily/components/DailyModal.jsx
import React from "react";
import { money, n } from "../../../lib/format";
import { TYPE_OPTIONS, PRESETS } from "../lib/constants";

export default function DailyModal({
  entries,
  modalOpen,
  editing,
  presetPulse,
  amountRef,
  closeModal,
  applyPreset,
  setEditing,
  save,
}) {
  if (!modalOpen || !editing) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/30 flex items-end sm:items-center justify-center p-3"
      dir="rtl"
      onMouseDown={(e) => {
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
                    next.splitEnabled = false;
                    next.shop = next.amount;
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
                  if (next.type === "product" && !next.splitEnabled)
                    next.shop = amount;
                  return next;
                })
              }
              className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

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
                    if (!next.splitEnabled) next.shop = next.amount;
                    return next;
                  })
                }
                className="h-10 rounded-2xl border border-slate-200 bg-white text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition active:scale-[0.98]"
              >
                {editing.splitEnabled ? "إلغاء التقسيم (نادر)" : "تقسيم (نادر)"}
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
  );
}
