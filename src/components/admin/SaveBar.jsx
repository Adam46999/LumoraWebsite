// src/components/admin/SaveBar.jsx
import React from "react";

export default function SaveBar({ isDirty, saving, onSave }) {
  // بالحفظ التلقائي: نعرض البار إذا في تغييرات أو جاري حفظ
  if (!isDirty && !saving) return null;

  return (
    <div className="fixed bottom-3 left-0 right-0 z-[9999] flex justify-center px-3">
      <div className="max-w-3xl w-full bg-white border border-slate-200 rounded-2xl shadow-lg px-4 py-2 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-700">
          {saving
            ? "جارٍ حفظ التغييرات تلقائيًا…"
            : "في تغييرات — سيتم حفظها تلقائيًا خلال لحظات"}
        </div>

        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700 disabled:opacity-50"
          title="حفظ الآن"
        >
          {saving ? "جاري الحفظ…" : "حفظ الآن"}
        </button>
      </div>
    </div>
  );
}
