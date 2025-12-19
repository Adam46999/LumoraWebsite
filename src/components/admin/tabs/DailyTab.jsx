// src/components/admin/tabs/DailyTab.jsx
import React, { useMemo, useState } from "react";
import { money, n, uid } from "../lib/format";

const TYPE_OPTIONS = [
  { value: "service", label: "خدمة" },
  { value: "product", label: "منتج" },
  { value: "carpet", label: "سجاد" },
  { value: "other", label: "أخرى" },
];

const PRESETS = [
  { type: "service", title: "غسيل سيارة" },
  { type: "service", title: "غسيل جيب" },
  { type: "service", title: "تنظيف فرش" },
  { type: "service", title: "تنظيف فرش سيارة" },
  { type: "product", title: "بيع منتج" },
  { type: "carpet", title: "سجاد" },
];

function SegBtn({ active, children, ...props }) {
  return (
    <button
      {...props}
      type="button"
      className={`h-8 px-3 rounded-2xl text-[11px] font-extrabold border transition ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function IconBtn({ title, children, tone = "slate", ...props }) {
  const cls =
    tone === "danger"
      ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";
  return (
    <button
      {...props}
      type="button"
      title={title}
      className={`h-8 w-9 rounded-2xl border text-[12px] grid place-items-center ${cls}`}
    >
      {children}
    </button>
  );
}

function TinyStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="text-xs font-extrabold text-slate-900">{value}</div>
    </div>
  );
}

function inputBase() {
  return "w-full h-9 rounded-2xl border border-slate-200 bg-white px-3 text-xs outline-none";
}

export default function DailyTab({ entries, setEntries }) {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  // view mode
  const [viewMode, setViewMode] = useState("simple"); // simple | details

  // collapsed rows by default
  const [openId, setOpenId] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    return (entries || []).filter((e) => {
      if (filter !== "all" && e.type !== filter) return false;

      if (q.trim()) {
        const s = q.trim().toLowerCase();
        const hay = `${e.title || ""} ${e.customerName || ""}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [entries, filter, q]);

  const totals = useMemo(() => {
    const total = (entries || []).reduce((a, e) => a + n(e.amount), 0);
    const shopTotal = (entries || []).reduce((a, e) => a + n(e.shop), 0);
    const youTotal = total - shopTotal;
    return { total, shopTotal, youTotal };
  }, [entries]);

  const openAdd = () => {
    setEditing({
      id: uid(),
      type: "service",
      title: "",
      customerName: "",
      amount: "",
      shop: "",
      createdAt: Date.now(),
    });
    setModalOpen(true);
  };

  const openEdit = (entry) => {
    setEditing({ ...entry });
    setModalOpen(true);
  };

  const remove = (id) => {
    if (!window.confirm("حذف هذا البند؟")) return;
    setEntries((prev) => (prev || []).filter((e) => e.id !== id));
    if (openId === id) setOpenId(null);
  };

  const save = () => {
    const clean = {
      ...editing,
      type: editing.type || "service",
      title: String(editing.title || "").trim(),
      customerName: String(editing.customerName || "").trim(),
      amount: n(editing.amount),
      shop: n(editing.shop),
      createdAt: editing.createdAt || Date.now(),
    };

    setEntries((prev) => {
      const exists = (prev || []).some((e) => e.id === clean.id);
      if (!exists) return [...(prev || []), clean];
      return (prev || []).map((e) => (e.id === clean.id ? clean : e));
    });

    setModalOpen(false);
    setEditing(null);
  };

  const typeLabel = (t) =>
    TYPE_OPTIONS.find((x) => x.value === t)?.label || "خدمة";

  return (
    <div className="space-y-3" dir="rtl">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-slate-900">بنود اليوم</h2>
            <p className="text-[11px] text-slate-500">
              افتراضيًا: عرض مبسّط. افتح التفاصيل عند الحاجة فقط.
            </p>
          </div>

          <button
            onClick={openAdd}
            className="h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700"
          >
            + إضافة
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <SegBtn
              active={viewMode === "simple"}
              onClick={() => setViewMode("simple")}
            >
              مبسّط
            </SegBtn>
            <SegBtn
              active={viewMode === "details"}
              onClick={() => setViewMode("details")}
            >
              تفاصيل
            </SegBtn>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <TinyStat label="الإجمالي" value={money(totals.total)} />
            <TinyStat label="للمحل" value={money(totals.shopTotal)} />
            <TinyStat label="إلك" value={money(totals.youTotal)} />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-9 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-800 outline-none"
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
              className="w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-xs text-slate-900 outline-none"
              placeholder="بحث (عنوان / زبون)…"
            />
          </div>
        </div>
      </section>

      {/* List */}
      <section className="space-y-2">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
            <div className="text-sm font-bold text-slate-900">لا يوجد بنود</div>
            <div className="mt-1 text-[12px] text-slate-500">
              اضغط “+ إضافة” لبدء التسجيل
            </div>
          </div>
        ) : (
          filtered
            .slice()
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
            .map((e) => {
              const isOpen = openId === e.id;
              const you = n(e.amount) - n(e.shop);

              return (
                <div
                  key={e.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId((p) => (p === e.id ? null : e.id))}
                    className="w-full px-3 py-2.5 flex items-center justify-between gap-2 text-right"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                          {typeLabel(e.type)}
                        </span>

                        <div className="text-xs font-extrabold text-slate-900 truncate">
                          {e.title || "بدون عنوان"}
                        </div>

                        {viewMode === "details" && e.customerName ? (
                          <span className="text-[11px] text-slate-500 truncate">
                            — {e.customerName}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap">
                        <span>
                          المبلغ:{" "}
                          <b className="text-slate-900">{money(e.amount)}</b>
                        </span>
                        {viewMode === "details" ? (
                          <span>
                            للمحل:{" "}
                            <b className="text-slate-900">{money(e.shop)}</b>
                          </span>
                        ) : null}
                        <span>
                          إلك: <b className="text-slate-900">{money(you)}</b>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <IconBtn
                        title="تعديل"
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          openEdit(e);
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
                          remove(e.id);
                        }}
                      >
                        🗑️
                      </IconBtn>

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
                            <div className="text-[11px] text-slate-600 mb-1">
                              النوع
                            </div>
                            <select
                              value={e.type || "service"}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) =>
                                    x.id === e.id ? { ...x, type: val } : x
                                  )
                                );
                              }}
                              className={`${inputBase()} bg-white`}
                            >
                              {TYPE_OPTIONS.map((t) => (
                                <option key={t.value} value={t.value}>
                                  {t.label}
                                </option>
                              ))}
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
                                    x.id === e.id
                                      ? { ...x, customerName: val }
                                      : x
                                  )
                                );
                              }}
                              className={inputBase()}
                              placeholder="مثال: أحمد"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <div className="text-[11px] text-slate-600 mb-1">
                              العنوان
                            </div>
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
                              className={inputBase()}
                              placeholder="غسيل سيارة / بيع منتج..."
                            />
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              المبلغ
                            </div>
                            <input
                              type="number"
                              inputMode="decimal"
                              value={e.amount ?? ""}
                              onChange={(ev) => {
                                const val = ev.target.value;
                                setEntries((prev) =>
                                  (prev || []).map((x) =>
                                    x.id === e.id ? { ...x, amount: val } : x
                                  )
                                );
                              }}
                              className={inputBase()}
                            />
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              للمحل
                            </div>
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
                              className={inputBase()}
                            />
                          </div>
                        </div>

                        <div className="mt-2 text-[11px] text-slate-600">
                          إلك: <b className="text-slate-900">{money(you)}</b>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        )}
      </section>

      {/* Modal */}
      {modalOpen && editing && (
        <div
          className="fixed inset-0 z-[9999] bg-black/30 flex items-end sm:items-center justify-center p-3"
          dir="rtl"
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
                  قالب سريع أو إدخال يدوي.
                </p>
              </div>

              <button
                onClick={() => {
                  setModalOpen(false);
                  setEditing(null);
                }}
                className="h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] text-slate-700 hover:bg-slate-50"
              >
                إغلاق
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.title}
                  onClick={() =>
                    setEditing((prev) => ({
                      ...prev,
                      type: p.type,
                      title: p.title,
                    }))
                  }
                  className="h-8 px-3 rounded-2xl border border-slate-200 bg-slate-50 text-[11px] text-slate-700 hover:bg-slate-100"
                >
                  {p.title}
                </button>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  النوع
                </label>
                <select
                  value={editing.type}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, type: e.target.value }))
                  }
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none"
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
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none"
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
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none"
                  placeholder="غسيل سيارة / بيع منتج..."
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  المبلغ
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={editing.amount}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, amount: e.target.value }))
                  }
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none"
                />
              </div>

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
                  className="w-full h-10 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none"
                />
              </div>
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
                className="h-10 px-5 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
