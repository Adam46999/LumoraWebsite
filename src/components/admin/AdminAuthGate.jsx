// src/components/admin/AdminAuthGate.jsx
import React, { useState } from "react";

export default function AdminAuthGate({ adminPin, onAuthorized, onExit }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50"
      dir="rtl"
    >
      <div className="w-full max-w-sm mx-4">
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-slate-100 px-6 py-7">
          <h1 className="text-xl font-semibold text-slate-900 text-center mb-1">
            لوحة الإدارة – Lumora
          </h1>
          <p className="text-xs text-slate-500 text-center mb-5">
            هذه الصفحة مخصصة للإدارة. أدخل رمز الدخول للمتابعة.
          </p>

          <label className="block text-xs font-medium text-slate-700 mb-1">
            رمز الدخول (PIN)
          </label>
          <input
            type="password"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError("");
            }}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
            placeholder="••••"
          />

          {error && (
            <p className="mt-2 text-xs text-rose-500 text-center">{error}</p>
          )}

          <button
            onClick={() => {
              if (pin === adminPin) {
                setError("");
                onAuthorized();
              } else {
                setError("رمز غير صحيح، حاول مرة أخرى.");
              }
            }}
            className="w-full mt-4 h-10 rounded-2xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            دخول
          </button>

          {onExit && (
            <button
              onClick={onExit}
              className="w-full mt-2 h-9 rounded-2xl border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 transition-colors"
            >
              العودة للموقع
            </button>
          )}
        </div>

        <p className="mt-4 text-[11px] text-center text-slate-400">
          ملاحظة: الوصول للوحة الإدارة مخصص لك فقط.
        </p>
      </div>
    </div>
  );
}
