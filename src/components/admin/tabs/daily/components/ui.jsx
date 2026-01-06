// src/components/admin/tabs/daily/components/ui.jsx
import React from "react";

export function inputBase() {
  return "w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200";
}

export function IconBtn({ title, tone = "slate", className = "", ...props }) {
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

export function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-extrabold text-slate-700">
      {children}
    </span>
  );
}

export function TinyStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="text-xs font-extrabold text-slate-900">{value}</div>
    </div>
  );
}
