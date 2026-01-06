// src/components/admin/tabs/daily/components/DailyList.jsx
import React from "react";
import DailyRow from "./DailyRow";

export default function DailyList({
  filtered,
  openId,
  setOpenId,
  openEdit,
  remove,
  setEntries,
}) {
  if (filtered.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
        <div className="text-sm font-bold text-slate-900">لا يوجد بنود</div>
        <div className="mt-1 text-[12px] text-slate-500">
          اضغط “+ إضافة” لبدء التسجيل
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-2">
      {filtered
        .slice()
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
        .map((e) => {
          const isOpen = openId === e.id;

          return (
            <DailyRow
              key={e.id}
              e={e}
              isOpen={isOpen}
              onToggle={() => setOpenId((p) => (p === e.id ? null : e.id))}
              onEdit={() => openEdit(e)}
              onDelete={() => remove(e.id)}
              setEntries={setEntries}
            />
          );
        })}
    </section>
  );
}
