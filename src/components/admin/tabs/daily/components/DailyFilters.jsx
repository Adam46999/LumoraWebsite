// src/components/admin/tabs/daily/components/DailyFilters.jsx
import React from "react";

export default function DailyFilters({ filter, setFilter, q, setQ }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-slate-800 outline-none"
        >
          <option value="all">الكل</option>
          <option value="service">خدمات</option>
          <option value="product">منتجات</option>
          <option value="carpet">سجاد</option>
          <option value="other">أخرى</option>
        </select>

        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
            🔍
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="بحث سريع (عنوان / زبون)…"
          />
        </div>
      </div>
    </section>
  );
}
