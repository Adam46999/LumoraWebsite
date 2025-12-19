// src/components/admin/tabs/CarpetsTab.jsx
import React, { useMemo, useState } from "react";
import { money, n, uid } from "../lib/format";
import { calcAreaM2, calcPrice, safeMode } from "./carpetsCalc";

function SegBtn({ active, children, className = "", ...props }) {
  return (
    <button
      {...props}
      type="button"
      className={`h-8 px-3 rounded-2xl text-[11px] font-extrabold border transition ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function IconBtn({ title, children, tone = "slate", ...props }) {
  const cls =
    tone === "danger"
      ? "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
      : tone === "primary"
      ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
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

function inputCls(disabled) {
  return `w-full h-9 rounded-2xl border px-3 text-xs outline-none ${
    disabled
      ? "bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed"
      : "bg-white border-slate-200 text-slate-900"
  }`;
}

function normalizeCustomer(c) {
  return {
    id: c?.id || uid(),
    name: String(c?.name || "").trim(),
    phone: String(c?.phone || "").trim(),
    status: c?.status || "open", // open|done
    locked: !!c?.locked,
    notes: String(c?.notes || ""),
    doneAt: c?.doneAt || null,
    rugs: Array.isArray(c?.rugs) ? c.rugs : [],
  };
}

function normalizeRug(r) {
  return {
    id: r?.id || uid(),
    mode: safeMode(r?.mode || "cm"),
    lengthCm: r?.lengthCm ?? "",
    widthCm: r?.widthCm ?? "",
    areaM2: r?.areaM2 ?? "",
    ratePerM2: r?.ratePerM2 ?? null,
    priceOverride: r?.priceOverride ?? "",
  };
}

export default function CarpetsTab({
  defaultRatePerM2,
  setDefaultRatePerM2,
  customers,
  setCustomers,
  onAddEntryFromCarpets,
}) {
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState(null); // collapsed by default

  const list = useMemo(() => {
    const base = (customers || []).map(normalizeCustomer);
    if (!q.trim()) return base;

    const s = q.trim().toLowerCase();
    return base.filter((c) => {
      const hay = `${c.name} ${c.phone} ${c.notes}`.toLowerCase();
      return hay.includes(s);
    });
  }, [customers, q]);

  const computed = useMemo(() => {
    const rate = n(defaultRatePerM2) || 15;

    const perCustomer = (customers || []).map((c) => {
      const cc = normalizeCustomer(c);
      const rugs = (cc.rugs || []).map(normalizeRug);

      const total = rugs.reduce((acc, r) => acc + n(calcPrice(r, rate)), 0);
      const totalArea = rugs.reduce((acc, r) => acc + n(calcAreaM2(r)), 0);

      return { id: cc.id, total, totalArea, rugsCount: rugs.length };
    });

    const grandTotal = perCustomer.reduce((a, x) => a + n(x.total), 0);
    const grandArea = perCustomer.reduce((a, x) => a + n(x.totalArea), 0);
    const grandCount = perCustomer.reduce((a, x) => a + n(x.rugsCount), 0);

    return { rate, perCustomer, grandTotal, grandArea, grandCount };
  }, [customers, defaultRatePerM2]);

  const patchCustomer = (id, patch) => {
    setCustomers((prev) =>
      (prev || []).map((c) => (c.id === id ? { ...c, ...patch } : c))
    );
  };

  const addCustomer = () => {
    const id = uid();
    const c = normalizeCustomer({ id, status: "open", rugs: [] });
    setCustomers((prev) => [...(prev || []), c]);
    setOpenId(id);
  };

  const removeCustomer = (id) => {
    if (!window.confirm("حذف هذا الزبون وكل السجاد التابع له؟")) return;
    setCustomers((prev) => (prev || []).filter((c) => c.id !== id));
    if (openId === id) setOpenId(null);
  };

  const addRug = (customerId) => {
    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        const rugs = [...(c.rugs || []), normalizeRug({ mode: "cm" })];
        return { ...c, rugs };
      })
    );
  };

  const removeRug = (customerId, rugId) => {
    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        return { ...c, rugs: (c.rugs || []).filter((r) => r.id !== rugId) };
      })
    );
  };

  const patchRug = (customerId, rugId, patch) => {
    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        return {
          ...c,
          rugs: (c.rugs || []).map((r) =>
            r.id === rugId ? { ...r, ...patch } : r
          ),
        };
      })
    );
  };

  const customerTotalsMap = useMemo(() => {
    const m = new Map();
    for (const x of computed.perCustomer) m.set(x.id, x);
    return m;
  }, [computed]);

  const addAsDailyEntry = (c) => {
    const meta = customerTotalsMap.get(c.id);
    const amount = n(meta?.total);
    if (amount <= 0) {
      alert("لا يمكن إضافة بند بسعر 0. تأكد من إدخال البيانات أولاً.");
      return;
    }
    onAddEntryFromCarpets?.({
      type: "carpet",
      title: "سجاد",
      customerName: c.name || "",
      amount,
      shop: "",
    });
  };

  return (
    <div className="space-y-3" dir="rtl">
      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-slate-900">السجاد</h2>
            <p className="text-[11px] text-slate-500">
              اختر طريقة الإدخال: طول/عرض — مساحة — سعر مباشر (بدون تشويش).
            </p>
          </div>

          <button
            onClick={addCustomer}
            className="h-9 px-4 rounded-2xl bg-blue-600 text-xs font-extrabold text-white hover:bg-blue-700"
          >
            + زبون جديد
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 h-9">
              <span className="text-[11px] text-slate-600">
                سعر المتر (افتراضي)
              </span>
              <input
                type="number"
                inputMode="decimal"
                value={defaultRatePerM2 ?? 15}
                onChange={(e) => setDefaultRatePerM2(e.target.value)}
                className="w-20 bg-transparent text-xs text-slate-900 outline-none"
              />
              <span className="text-[11px] text-slate-500">₪/م²</span>
            </div>

            <div className="relative flex-1 min-w-[240px]">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                🔍
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 pl-8 pr-3 text-xs text-slate-900 outline-none"
                placeholder="بحث (اسم / هاتف / ملاحظة)…"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <TinyStat label="عدد السجاد" value={computed.grandCount} />
            <TinyStat
              label="مجموع المساحة"
              value={`${money(computed.grandArea)} م²`}
            />
            <TinyStat
              label="إجمالي السجاد"
              value={money(computed.grandTotal)}
            />
          </div>
        </div>
      </section>

      {/* List */}
      <section className="space-y-2">
        {list.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm">
            <div className="text-sm font-bold text-slate-900">
              لا يوجد زبائن سجاد
            </div>
            <div className="mt-1 text-[12px] text-slate-500">
              اضغط “+ زبون جديد” وابدأ.
            </div>
          </div>
        ) : (
          list
            .slice()
            .sort((a, b) => {
              const aDone = a.status === "done" ? 1 : 0;
              const bDone = b.status === "done" ? 1 : 0;
              return aDone - bDone;
            })
            .map((c) => {
              const isOpen = openId === c.id;
              const meta = customerTotalsMap.get(c.id) || {
                total: 0,
                totalArea: 0,
                rugsCount: 0,
              };

              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm"
                >
                  {/* Customer row */}
                  <button
                    type="button"
                    onClick={() => setOpenId((p) => (p === c.id ? null : c.id))}
                    className="w-full px-3 py-2.5 flex items-start justify-between gap-2 text-right"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full border ${
                            c.status === "done"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {c.status === "done" ? "تم" : "مفتوح"}
                        </span>

                        <div className="text-xs font-extrabold text-slate-900 truncate">
                          {c.name || "زبون بدون اسم"}
                        </div>

                        {c.phone ? (
                          <span className="text-[11px] text-slate-500 truncate">
                            — {c.phone}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-1 text-[11px] text-slate-600 flex gap-3 flex-wrap">
                        <span>
                          عدد:{" "}
                          <b className="text-slate-900">{meta.rugsCount}</b>
                        </span>
                        <span>
                          مساحة:{" "}
                          <b className="text-slate-900">
                            {money(meta.totalArea)} م²
                          </b>
                        </span>
                        <span>
                          الإجمالي:{" "}
                          <b className="text-slate-900">{money(meta.total)}</b>
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-400 w-6 text-center">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3 space-y-3">
                      {/* Customer info */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              اسم الزبون
                            </div>
                            <input
                              value={c.name || ""}
                              onChange={(e) =>
                                patchCustomer(c.id, { name: e.target.value })
                              }
                              className={inputCls(false)}
                              placeholder="مثال: أحمد"
                            />
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-600 mb-1">
                              رقم الهاتف (اختياري)
                            </div>
                            <input
                              value={c.phone || ""}
                              onChange={(e) =>
                                patchCustomer(c.id, { phone: e.target.value })
                              }
                              className={inputCls(false)}
                              placeholder="05X..."
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <div className="text-[11px] text-slate-600 mb-1">
                              ملاحظات (اختياري)
                            </div>
                            <input
                              value={c.notes || ""}
                              onChange={(e) =>
                                patchCustomer(c.id, { notes: e.target.value })
                              }
                              className={inputCls(false)}
                              placeholder="مثال: عنده 3 سجاد كبار…"
                            />
                          </div>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <SegBtn
                              active={c.status !== "done"}
                              onClick={() =>
                                patchCustomer(c.id, { status: "open" })
                              }
                            >
                              مفتوح
                            </SegBtn>
                            <SegBtn
                              active={c.status === "done"}
                              onClick={() =>
                                patchCustomer(c.id, {
                                  status: "done",
                                  doneAt: Date.now(),
                                })
                              }
                            >
                              تم
                            </SegBtn>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => addAsDailyEntry(c)}
                              className="h-9 px-4 rounded-2xl bg-slate-900 text-xs font-extrabold text-white hover:bg-slate-800"
                              title="إضافة الإجمالي كبند في بنود اليوم"
                            >
                              + إضافة كبند اليوم
                            </button>

                            <IconBtn
                              title="حذف الزبون"
                              tone="danger"
                              onClick={() => removeCustomer(c.id)}
                            >
                              🗑️
                            </IconBtn>
                          </div>
                        </div>
                      </div>

                      {/* Rugs */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-[12px] font-extrabold text-slate-900">
                            السجاد ({meta.rugsCount})
                          </div>
                          <button
                            type="button"
                            onClick={() => addRug(c.id)}
                            className="h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-800 hover:bg-slate-50"
                          >
                            + إضافة سجادة
                          </button>
                        </div>

                        {(c.rugs || []).length === 0 ? (
                          <div className="rounded-2xl border border-slate-200 bg-white p-3 text-[12px] text-slate-500">
                            لا يوجد سجاد. اضغط “+ إضافة سجادة”.
                          </div>
                        ) : (
                          (c.rugs || []).map((rawRug, idx) => {
                            const rug = normalizeRug(rawRug);
                            const mode = safeMode(rug.mode);

                            const area = calcAreaM2(rug);
                            const price = calcPrice(rug, computed.rate);

                            const isCm = mode === "cm";
                            const isArea = mode === "area";
                            const isPrice = mode === "price";

                            return (
                              <div
                                key={rug.id}
                                className="rounded-2xl border border-slate-200 bg-white p-3"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="text-[11px] text-slate-500">
                                    سجادة #{idx + 1}
                                  </div>

                                  <IconBtn
                                    title="حذف السجادة"
                                    tone="danger"
                                    onClick={() => removeRug(c.id, rug.id)}
                                  >
                                    🗑️
                                  </IconBtn>
                                </div>

                                {/* Mode selector */}
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <SegBtn
                                    active={isCm}
                                    onClick={() =>
                                      patchRug(c.id, rug.id, {
                                        mode: "cm",
                                        // تنظيف قيم ما إلها داعي
                                        priceOverride: "",
                                      })
                                    }
                                  >
                                    طول × عرض
                                  </SegBtn>
                                  <SegBtn
                                    active={isArea}
                                    onClick={() =>
                                      patchRug(c.id, rug.id, {
                                        mode: "area",
                                        lengthCm: "",
                                        widthCm: "",
                                        priceOverride: "",
                                      })
                                    }
                                  >
                                    مساحة
                                  </SegBtn>
                                  <SegBtn
                                    active={isPrice}
                                    onClick={() =>
                                      patchRug(c.id, rug.id, {
                                        mode: "price",
                                        lengthCm: "",
                                        widthCm: "",
                                        areaM2: "",
                                      })
                                    }
                                  >
                                    سعر مباشر
                                  </SegBtn>
                                </div>

                                {/* Inputs (ONLY what’s needed) */}
                                <div className="mt-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                                  {isCm && (
                                    <>
                                      <div className="sm:col-span-6">
                                        <div className="text-[11px] text-slate-600 mb-1">
                                          الطول (سم)
                                        </div>
                                        <input
                                          type="number"
                                          inputMode="decimal"
                                          value={rug.lengthCm ?? ""}
                                          onChange={(e) =>
                                            patchRug(c.id, rug.id, {
                                              lengthCm: e.target.value,
                                            })
                                          }
                                          className={inputCls(false)}
                                          placeholder="مثال: 300"
                                        />
                                      </div>

                                      <div className="sm:col-span-6">
                                        <div className="text-[11px] text-slate-600 mb-1">
                                          العرض (سم)
                                        </div>
                                        <input
                                          type="number"
                                          inputMode="decimal"
                                          value={rug.widthCm ?? ""}
                                          onChange={(e) =>
                                            patchRug(c.id, rug.id, {
                                              widthCm: e.target.value,
                                            })
                                          }
                                          className={inputCls(false)}
                                          placeholder="مثال: 200"
                                        />
                                      </div>
                                    </>
                                  )}

                                  {isArea && (
                                    <div className="sm:col-span-12">
                                      <div className="text-[11px] text-slate-600 mb-1">
                                        المساحة (م²)
                                      </div>
                                      <input
                                        type="number"
                                        inputMode="decimal"
                                        value={rug.areaM2 ?? ""}
                                        onChange={(e) =>
                                          patchRug(c.id, rug.id, {
                                            areaM2: e.target.value,
                                          })
                                        }
                                        className={inputCls(false)}
                                        placeholder="مثال: 6"
                                      />
                                    </div>
                                  )}

                                  {isPrice && (
                                    <div className="sm:col-span-12">
                                      <div className="text-[11px] text-slate-600 mb-1">
                                        السعر (₪){" "}
                                        <span className="text-slate-400">
                                          (أساسي)
                                        </span>
                                      </div>
                                      <input
                                        type="number"
                                        inputMode="decimal"
                                        value={rug.priceOverride ?? ""}
                                        onChange={(e) =>
                                          patchRug(c.id, rug.id, {
                                            priceOverride: e.target.value,
                                          })
                                        }
                                        className={inputCls(false)}
                                        placeholder="مثال: 120"
                                      />
                                    </div>
                                  )}
                                </div>

                                {/* Result line */}
                                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 flex flex-wrap items-center justify-between gap-2">
                                  <div className="text-[11px] text-slate-600">
                                    المساحة:{" "}
                                    <b className="text-slate-900">
                                      {area > 0 ? `${money(area)} م²` : "—"}
                                    </b>
                                    <span className="text-slate-400">
                                      {" "}
                                      {isPrice
                                        ? "(مخفية لأنك اخترت سعر مباشر)"
                                        : ""}
                                    </span>
                                  </div>

                                  <div className="text-[11px] text-slate-600">
                                    السعر:{" "}
                                    <b className="text-slate-900">
                                      {money(price)}
                                    </b>
                                    <span className="text-slate-400">
                                      {" "}
                                      {isPrice
                                        ? "(سعر مباشر)"
                                        : `(${money(computed.rate)} ₪/م²)`}
                                    </span>
                                  </div>
                                </div>

                                {isPrice ? (
                                  <div className="mt-2 text-[11px] text-slate-500">
                                    ملاحظة: هذا الوضع مخصص للسعر فقط، لذلك
                                    أخفينا الطول/العرض/المساحة لتسهيل الشغل.
                                  </div>
                                ) : null}
                              </div>
                            );
                          })
                        )}

                        {/* Customer footer totals */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="rounded-2xl border border-slate-200 bg-white p-3">
                            <div className="text-[11px] text-slate-500">
                              مجموع المساحة
                            </div>
                            <div className="text-sm font-extrabold text-slate-900">
                              {money(meta.totalArea)} م²
                            </div>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-white p-3">
                            <div className="text-[11px] text-slate-500">
                              عدد السجاد
                            </div>
                            <div className="text-sm font-extrabold text-slate-900">
                              {meta.rugsCount}
                            </div>
                          </div>
                          <div className="rounded-2xl border border-slate-200 bg-white p-3">
                            <div className="text-[11px] text-slate-500">
                              إجمالي الزبون
                            </div>
                            <div className="text-sm font-extrabold text-slate-900">
                              {money(meta.total)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        )}
      </section>
    </div>
  );
}
