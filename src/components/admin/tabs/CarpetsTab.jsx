// src/components/admin/tabs/CarpetsTab.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { money, n, uid } from "../lib/format";
import { calcAreaM2, calcPrice, safeMode } from "./carpetsCalc";

const LS_UI_KEY = "admin_carpets_ui_v1";

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

function IconBtn({
  title,
  children,
  tone = "slate",
  className = "",
  ...props
}) {
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
      className={`h-8 w-9 rounded-2xl border text-[12px] grid place-items-center ${cls} ${className}`}
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

function now() {
  return Date.now();
}

function safeJsonParse(s, fallback) {
  try {
    const x = JSON.parse(s);
    return x ?? fallback;
  } catch {
    return fallback;
  }
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
    updatedAt: c?.updatedAt || null,
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
    createdAt: r?.createdAt || null,
    updatedAt: r?.updatedAt || null,
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
  const [openCustomerId, setOpenCustomerId] = useState(null);
  const [active, setActive] = useState(null); // { customerId, rugId } ONLY ONE open rug globally
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  const rugCardRef = useRef(new Map());
  const inputRefs = useRef(new Map());

  // restore UI state
  useEffect(() => {
    const saved = safeJsonParse(localStorage.getItem(LS_UI_KEY), {});
    if (saved?.q != null) setQ(saved.q);
    if (saved?.openCustomerId) setOpenCustomerId(saved.openCustomerId);
    if (saved?.active?.customerId && saved?.active?.rugId)
      setActive(saved.active);
  }, []);

  // persist UI state
  useEffect(() => {
    localStorage.setItem(
      LS_UI_KEY,
      JSON.stringify({ q, openCustomerId, active, savedAt: Date.now() })
    );
  }, [q, openCustomerId, active]);

  const showToast = (msg, tone = "ok") => {
    setToast({ msg, tone });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 1600);
  };

  const list = useMemo(() => {
    const base = (customers || []).map(normalizeCustomer);
    if (!q.trim()) return base;
    const s = q.trim().toLowerCase();
    return base.filter((c) =>
      `${c.name} ${c.phone} ${c.notes}`.toLowerCase().includes(s)
    );
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

  const customerTotalsMap = useMemo(() => {
    const m = new Map();
    for (const x of computed.perCustomer) m.set(x.id, x);
    return m;
  }, [computed]);

  // data patch helpers
  const patchCustomer = (id, patch) => {
    setCustomers((prev) =>
      (prev || []).map((c) =>
        c.id === id ? { ...c, ...patch, updatedAt: now() } : c
      )
    );
  };

  const patchRug = (customerId, rugId, patch) => {
    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        return {
          ...c,
          updatedAt: now(),
          rugs: (c.rugs || []).map((r) =>
            r.id === rugId ? { ...r, ...patch, updatedAt: now() } : r
          ),
        };
      })
    );
  };

  const addCustomer = () => {
    const id = uid();
    const c = normalizeCustomer({
      id,
      status: "open",
      rugs: [],
      updatedAt: now(),
    });
    setCustomers((prev) => [...(prev || []), c]);
    setOpenCustomerId(id);
    setActive(null);
    showToast("تم إنشاء زبون جديد");
  };

  const removeCustomer = (id) => {
    if (!window.confirm("حذف هذا الزبون وكل السجاد التابع له؟")) return;
    setCustomers((prev) => (prev || []).filter((c) => c.id !== id));
    if (openCustomerId === id) setOpenCustomerId(null);
    if (active?.customerId === id) setActive(null);
    showToast("تم الحذف", "warn");
  };

  const addRug = (customerId, preferredMode = "cm") => {
    const rugId = uid();
    const newRug = normalizeRug({
      id: rugId,
      mode: safeMode(preferredMode),
      createdAt: now(),
      updatedAt: now(),
    });

    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        return { ...c, rugs: [...(c.rugs || []), newRug], updatedAt: now() };
      })
    );

    setOpenCustomerId(customerId);
    setActive({ customerId, rugId });

    setTimeout(() => {
      const key = `${customerId}:${rugId}`;
      const el = rugCardRef.current.get(key);
      el?.scrollIntoView?.({ behavior: "smooth", block: "center" });
      focusFirstField(customerId, rugId, safeMode(preferredMode));
    }, 50);
  };

  const removeRug = (customerId, rugId) => {
    setCustomers((prev) =>
      (prev || []).map((c) => {
        if (c.id !== customerId) return c;
        return {
          ...c,
          updatedAt: now(),
          rugs: (c.rugs || []).filter((r) => r.id !== rugId),
        };
      })
    );
    if (active?.customerId === customerId && active?.rugId === rugId)
      setActive(null);
    showToast("تم حذف السجادة", "warn");
  };

  const focusKey = (cid, rid, field) => `${cid}:${rid}:${field}`;

  const focusField = (cid, rid, field) => {
    const el = inputRefs.current.get(focusKey(cid, rid, field));
    if (el?.focus) el.focus();
    if (el?.select) el.select();
  };

  const focusFirstField = (cid, rid, mode) => {
    const m = safeMode(mode);
    if (m === "cm") return focusField(cid, rid, "length");
    if (m === "area") return focusField(cid, rid, "area");
    return focusField(cid, rid, "price");
  };

  const commitRugAndNext = (cid, rid) => {
    setActive(null);
    addRug(cid, "cm");
    showToast("تم تثبيت السجادة + فتح سجادة جديدة");
  };

  const toggleCustomerDone = (cid, done) => {
    patchCustomer(
      cid,
      done ? { status: "done", doneAt: now() } : { status: "open" }
    );
    showToast(done ? "تم إنهاء الزبون" : "تم فتح الزبون");
  };

  const finishCustomerSmart = (cid) => {
    patchCustomer(cid, { status: "done", doneAt: now() });
    setActive(null);

    const base = (customers || []).map(normalizeCustomer);
    const idx = base.findIndex((x) => x.id === cid);
    const next =
      base.slice(idx + 1).find((x) => x.status !== "done") ||
      base.find((x) => x.status !== "done");

    setOpenCustomerId(next ? next.id : null);
    showToast(next ? "تم إنهاء الزبون + فتح التالي" : "تم إنهاء الزبون");
  };

  const addAsDailyEntry = (c) => {
    const meta = customerTotalsMap.get(c.id);
    const amount = n(meta?.total);
    if (amount <= 0) {
      showToast("لا يمكن إضافة بند بسعر 0", "warn");
      return;
    }
    onAddEntryFromCarpets?.({
      type: "carpet",
      title: "سجاد",
      customerName: c.name || "",
      amount,
      shop: "",
    });
    showToast("تمت إضافة الإجمالي لليوم");
  };

  return (
    <div className="space-y-3 pb-20" dir="rtl">
      {toast ? (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold shadow-lg border ${
              toast.tone === "warn"
                ? "bg-amber-50 text-amber-800 border-amber-200"
                : "bg-emerald-50 text-emerald-800 border-emerald-200"
            }`}
          >
            {toast.msg}
          </div>
        </div>
      ) : null}

      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-slate-900">السجاد</h2>
            <p className="text-[11px] text-slate-500">
              إدخال سريع: سجادة واحدة مفتوحة + Enter للتنقل + تثبيت بضغطة.
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
              <span className="text-[11px] text-slate-600">سعر المتر</span>
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
            .sort(
              (a, b) =>
                (a.status === "done" ? 1 : 0) - (b.status === "done" ? 1 : 0)
            )
            .map((c) => {
              const isOpen = openCustomerId === c.id;
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
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCustomerId((p) => (p === c.id ? null : c.id))
                    }
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
                          {c.status === "done" ? "🟢 مكتمل" : "🟡 قيد العمل"}
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
                          <b className="text-slate-900">
                            {money(meta.total)} ₪
                          </b>
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-400 w-6 text-center">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3 space-y-3">
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
                              onClick={() => toggleCustomerDone(c.id, false)}
                            >
                              ⏳ قيد العمل
                            </SegBtn>
                            <SegBtn
                              active={c.status === "done"}
                              onClick={() => toggleCustomerDone(c.id, true)}
                            >
                              ✅ مكتمل
                            </SegBtn>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => addAsDailyEntry(c)}
                              className="h-9 px-4 rounded-2xl bg-slate-900 text-xs font-extrabold text-white hover:bg-slate-800"
                              title="يضيف مجموع هذا الزبون كبند واحد في بنود اليوم"
                            >
                              ➕ إضافة الإجمالي لليوم
                            </button>

                            <button
                              type="button"
                              onClick={() => finishCustomerSmart(c.id)}
                              className="h-9 px-4 rounded-2xl bg-emerald-600 text-xs font-extrabold text-white hover:bg-emerald-700"
                              title="ينهي الزبون ويغلقه ويفتح التالي (إن وجد)"
                            >
                              ✅ إنهاء الزبون
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

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-[12px] font-extrabold text-slate-900">
                            السجاد ({meta.rugsCount})
                          </div>

                          <button
                            type="button"
                            onClick={() => addRug(c.id, "cm")}
                            className="h-8 px-3 rounded-2xl border border-slate-200 bg-white text-[11px] font-extrabold text-slate-800 hover:bg-slate-50"
                          >
                            + إضافة سجادة
                          </button>
                        </div>

                        {(c.rugs || []).map((rawRug, idx) => {
                          const rug = normalizeRug(rawRug);
                          const mode = safeMode(rug.mode);

                          const isOpenRug =
                            active?.customerId === c.id &&
                            active?.rugId === rug.id;
                          const isCm = mode === "cm";
                          const isArea = mode === "area";
                          const isPrice = mode === "price";

                          const area = calcAreaM2(rug);
                          const price = calcPrice(rug, computed.rate);

                          return (
                            <div
                              key={rug.id}
                              ref={(el) =>
                                el &&
                                rugCardRef.current.set(`${c.id}:${rug.id}`, el)
                              }
                              className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  setActive((p) =>
                                    p?.customerId === c.id &&
                                    p?.rugId === rug.id
                                      ? null
                                      : { customerId: c.id, rugId: rug.id }
                                  );
                                  setOpenCustomerId(c.id);
                                  setTimeout(
                                    () => focusFirstField(c.id, rug.id, mode),
                                    20
                                  );
                                }}
                                className="w-full px-3 py-2 flex items-center justify-between"
                              >
                                <div className="text-[11px] text-slate-500">
                                  سجادة #{idx + 1}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] text-slate-500">
                                    {money(price)} ₪
                                  </span>
                                  <span className="text-[11px] text-slate-400">
                                    {isOpenRug ? "▲" : "▼"}
                                  </span>
                                </div>
                              </button>

                              {isOpenRug && (
                                <div className="p-3 pt-0 space-y-2">
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      <SegBtn
                                        active={isCm}
                                        onClick={() =>
                                          patchRug(c.id, rug.id, {
                                            mode: "cm",
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

                                    <IconBtn
                                      title="حذف السجادة"
                                      tone="danger"
                                      onClick={() => removeRug(c.id, rug.id)}
                                      className="mt-2"
                                    >
                                      🗑️
                                    </IconBtn>
                                  </div>

                                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                                    {isCm && (
                                      <>
                                        <div className="sm:col-span-6">
                                          <div className="text-[11px] text-slate-600 mb-1">
                                            الطول (سم)
                                          </div>
                                          <input
                                            ref={(el) =>
                                              el &&
                                              inputRefs.current.set(
                                                focusKey(
                                                  c.id,
                                                  rug.id,
                                                  "length"
                                                ),
                                                el
                                              )
                                            }
                                            type="text"
                                            inputMode="decimal"
                                            value={rug.lengthCm ?? ""}
                                            onChange={(e) => {
                                              const v = e.target.value;
                                              const m = String(v)
                                                .toLowerCase()
                                                .replace("×", "x")
                                                .split("x");
                                              if (m.length === 2) {
                                                patchRug(c.id, rug.id, {
                                                  lengthCm: m[0].trim(),
                                                  widthCm: m[1].trim(),
                                                });
                                                setTimeout(
                                                  () =>
                                                    focusField(
                                                      c.id,
                                                      rug.id,
                                                      "width"
                                                    ),
                                                  0
                                                );
                                                return;
                                              }
                                              patchRug(c.id, rug.id, {
                                                lengthCm: v,
                                              });
                                            }}
                                            onKeyDown={(e) => {
                                              if (e.key === "Enter") {
                                                e.preventDefault();
                                                focusField(
                                                  c.id,
                                                  rug.id,
                                                  "width"
                                                );
                                              }
                                            }}
                                            className={inputCls(false)}
                                            placeholder="مثال: 300 أو 300x200"
                                          />
                                        </div>

                                        <div className="sm:col-span-6">
                                          <div className="text-[11px] text-slate-600 mb-1">
                                            العرض (سم)
                                          </div>
                                          <input
                                            ref={(el) =>
                                              el &&
                                              inputRefs.current.set(
                                                focusKey(c.id, rug.id, "width"),
                                                el
                                              )
                                            }
                                            type="number"
                                            inputMode="decimal"
                                            value={rug.widthCm ?? ""}
                                            onChange={(e) =>
                                              patchRug(c.id, rug.id, {
                                                widthCm: e.target.value,
                                              })
                                            }
                                            onKeyDown={(e) => {
                                              if (e.key === "Enter") {
                                                e.preventDefault();
                                                commitRugAndNext(c.id, rug.id);
                                              }
                                            }}
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
                                          ref={(el) =>
                                            el &&
                                            inputRefs.current.set(
                                              focusKey(c.id, rug.id, "area"),
                                              el
                                            )
                                          }
                                          type="number"
                                          inputMode="decimal"
                                          value={rug.areaM2 ?? ""}
                                          onChange={(e) =>
                                            patchRug(c.id, rug.id, {
                                              areaM2: e.target.value,
                                            })
                                          }
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                              e.preventDefault();
                                              commitRugAndNext(c.id, rug.id);
                                            }
                                          }}
                                          className={inputCls(false)}
                                          placeholder="مثال: 6"
                                        />
                                      </div>
                                    )}

                                    {isPrice && (
                                      <div className="sm:col-span-12">
                                        <div className="text-[11px] text-slate-600 mb-1">
                                          السعر (₪)
                                        </div>
                                        <input
                                          ref={(el) =>
                                            el &&
                                            inputRefs.current.set(
                                              focusKey(c.id, rug.id, "price"),
                                              el
                                            )
                                          }
                                          type="number"
                                          inputMode="decimal"
                                          value={rug.priceOverride ?? ""}
                                          onChange={(e) =>
                                            patchRug(c.id, rug.id, {
                                              priceOverride: e.target.value,
                                            })
                                          }
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                              e.preventDefault();
                                              commitRugAndNext(c.id, rug.id);
                                            }
                                          }}
                                          className={inputCls(false)}
                                          placeholder="مثال: 120"
                                        />
                                      </div>
                                    )}
                                  </div>

                                  <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 flex flex-wrap items-center justify-between gap-2">
                                    {!isPrice ? (
                                      <div className="text-[11px] text-slate-600">
                                        المساحة:{" "}
                                        <b className="text-slate-900">
                                          {area > 0 ? `${money(area)} م²` : "—"}
                                        </b>
                                      </div>
                                    ) : null}

                                    <div className="text-[11px] text-slate-600">
                                      السعر:{" "}
                                      <b className="text-slate-900">
                                        {money(price)} ₪
                                      </b>{" "}
                                      <span className="text-slate-400">
                                        {isPrice
                                          ? "(سعر مباشر)"
                                          : `(${money(computed.rate)} ₪/م²)`}
                                      </span>
                                    </div>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      commitRugAndNext(c.id, rug.id)
                                    }
                                    className="h-9 w-full rounded-2xl bg-emerald-600 text-xs font-extrabold text-white hover:bg-emerald-700"
                                  >
                                    ✅ تثبيت السجادة
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
        )}
      </section>

      {/* Bottom action bar (زر مهم واضح) */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[min(920px,calc(100%-24px))] z-40">
        <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur px-2 py-2 shadow-lg flex items-center gap-2">
          <button
            type="button"
            disabled={!openCustomerId}
            onClick={() => openCustomerId && addRug(openCustomerId, "cm")}
            className={`h-10 px-4 rounded-2xl text-xs font-extrabold ${
              openCustomerId
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-slate-200 text-slate-500 cursor-not-allowed"
            }`}
            title="إضافة سجادة جديدة (ويتم فتحها مباشرة)"
          >
            ➕ سجادة
          </button>

          <button
            type="button"
            disabled={!active?.customerId || !active?.rugId}
            onClick={() =>
              active?.customerId &&
              active?.rugId &&
              commitRugAndNext(active.customerId, active.rugId)
            }
            className={`h-10 px-3 rounded-2xl border text-xs font-extrabold ${
              active?.customerId && active?.rugId
                ? "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                : "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
            }`}
            title="تثبيت السجادة الحالية وفتح سجادة جديدة"
          >
            ✅ تثبيت
          </button>

          <div className="flex-1" />
          <div className="text-[11px] text-slate-500 pl-2">
            {openCustomerId ? "جاهز للشغل السريع" : "افتح زبون للبدء"}
          </div>
        </div>
      </div>
    </div>
  );
}
