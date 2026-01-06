// src/components/admin/tabs/daily/components/DailyRow.jsx
import React from "react";
import { money, n } from "../../../lib/format";
import { typeLabel } from "../lib/constants";
import { IconBtn } from "./ui";

export default function DailyRow({
  e,
  isOpen,
  onToggle,
  onEdit,
  onDelete,
  setEntries,
}) {
  const you = n(e.amount) - n(e.shop);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="group w-full px-3 py-3 flex items-center justify-between gap-2 text-right hover:bg-slate-50 transition"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-extrabold">
              {typeLabel(e.type)}
            </span>

            <div className="text-[13px] font-extrabold text-slate-900 truncate">
              {e.title || "بدون عنوان"}
            </div>

            {e.customerName ? (
              <span className="text-[11px] text-slate-500 truncate">
                — {e.customerName}
              </span>
            ) : null}
          </div>

          <div className="mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap">
            <span>
              المبلغ: <b className="text-slate-900">{money(e.amount)}</b>
            </span>
            <span>
              إلك: <b className="text-slate-900">{money(you)}</b>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={
              "flex items-center gap-2 " +
              (isOpen ? "" : "opacity-0 group-hover:opacity-100")
            }
          >
            <IconBtn
              title="تعديل"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                onEdit();
              }}
            >
              ✏️
            </IconBtn>

            <IconBtn
              title="حذف"
              tone="danger"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                onDelete();
              }}
            >
              🗑️
            </IconBtn>
          </div>

          <span className="text-[11px] text-slate-400 w-6 text-center">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="px-3 pb-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <div className="text-[11px] text-slate-600 mb-1">النوع</div>
                <select
                  value={e.type || "service"}
                  onChange={(ev) => {
                    const val = ev.target.value;
                    setEntries((prev) =>
                      (prev || []).map((x) => {
                        if (x.id !== e.id) return x;
                        if (val === "product") {
                          return { ...x, type: val, shop: n(x.amount) };
                        }
                        return { ...x, type: val };
                      })
                    );
                  }}
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="service">خدمة</option>
                  <option value="product">منتج</option>
                  <option value="carpet">سجاد</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <div className="text-[11px] text-slate-600 mb-1">
                  اسم الزبون (اختياري)
                </div>
                <input
                  value={e.customerName || ""}
                  onChange={(ev) => {
                    const val = ev.target.value;
                    setEntries((prev) =>
                      (prev || []).map((x) =>
                        x.id === e.id ? { ...x, customerName: val } : x
                      )
                    );
                  }}
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="مثال: أحمد"
                />
              </div>

              <div className="sm:col-span-2">
                <div className="text-[11px] text-slate-600 mb-1">العنوان</div>
                <input
                  value={e.title || ""}
                  onChange={(ev) => {
                    const val = ev.target.value;
                    setEntries((prev) =>
                      (prev || []).map((x) =>
                        x.id === e.id ? { ...x, title: val } : x
                      )
                    );
                  }}
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="غسيل سيارة / بيع منتج..."
                />
              </div>

              <div>
                <div className="text-[11px] text-slate-600 mb-1">المبلغ</div>
                <input
                  type="number"
                  inputMode="decimal"
                  value={e.amount ?? ""}
                  onChange={(ev) => {
                    const val = ev.target.value;
                    setEntries((prev) =>
                      (prev || []).map((x) => {
                        if (x.id !== e.id) return x;
                        if (x.type === "product")
                          return { ...x, amount: val, shop: val };
                        return { ...x, amount: val };
                      })
                    );
                  }}
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {e.type !== "product" ? (
                <div>
                  <div className="text-[11px] text-slate-600 mb-1">للمحل</div>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={e.shop ?? ""}
                    onChange={(ev) => {
                      const val = ev.target.value;
                      setEntries((prev) =>
                        (prev || []).map((x) =>
                          x.id === e.id ? { ...x, shop: val } : x
                        )
                      );
                    }}
                    className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              ) : (
                <div className="sm:col-span-1 flex items-end">
                  <div className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <div className="text-[11px] text-slate-600 font-extrabold">
                      بيع منتج → للمحل تلقائيًا
                    </div>
                    <div className="text-[11px] text-slate-400">
                      (إذا بدك استثناء: عدّل من المودال عند الإضافة)
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-2 text-[11px] text-slate-600">
              إلك: <b className="text-slate-900">{money(you)}</b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
