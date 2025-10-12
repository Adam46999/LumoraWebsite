import React, { useEffect, useRef } from "react";

export default function MessageFullscreen({
  open,
  value,
  onChange,
  onClose,
  isRTL = true,
  fontSize = 18,
  lineHeight = 1.7,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (open) ref.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">تحرير الرسالة</h3>
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-3 rounded-lg border bg-white text-sm border-gray-200 hover:border-blue-400 transition"
            aria-label="إغلاق"
          >
            إغلاق
          </button>
        </div>

        <textarea
          ref={ref}
          dir={isRTL ? "rtl" : "ltr"}
          className="w-full min-h-[42vh] max-h-[60vh] p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
          style={{ fontSize, lineHeight }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
        />

        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={onClose}
            className="h-10 px-4 rounded-xl border bg-white text-sm font-medium border-gray-200 hover:border-blue-400 transition"
          >
            تم
          </button>
        </div>
      </div>
    </div>
  );
}
