// src/components/admin/tabs/daily/components/DailyHeader.jsx
import React from "react";
import { money, n } from "../../../lib/format";
import { Pill, TinyStat } from "./ui";

export default function DailyHeader({
  totals,
  topRecent,
  modalOpen,
  openAdd,
  openRepeatLast,
  applyPreset,
}) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="min-w-0">
          <h2 className="text-sm font-extrabold text-slate-900">بنود اليوم</h2>
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
  );
}
