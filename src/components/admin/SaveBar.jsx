import React, { useMemo } from "react";

/**
 * Silent SaveBar:
 * - Shows NOTHING during normal autosave.
 * - Only shows a tiny error pill if an error exists.
 */
export default function SaveBar({ error = null }) {
  const msg = useMemo(() => {
    if (!error) return null;
    return typeof error === "string" ? error : "فشل الحفظ";
  }, [error]);

  if (!msg) return null;

  return (
    <div className="fixed top-3 right-3 z-50" dir="rtl">
      <div className="max-w-[92vw] sm:max-w-[420px] rounded-2xl border border-rose-200 bg-rose-50 text-rose-800 shadow-md px-3 py-2">
        <div className="text-[11px] font-extrabold">مشكلة بالحفظ</div>
        <div className="mt-0.5 text-[11px] text-slate-700">{msg}</div>
      </div>
    </div>
  );
}
