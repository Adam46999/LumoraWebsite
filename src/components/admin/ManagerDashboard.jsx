// src/components/admin/ManagerDashboard.jsx
import { useEffect, useMemo, useState } from "react";
import AdminMessages from "./AdminMessages";
import {
  fetchDay,
  getEmptyDay,
  todayKey,
  upsertDay,
} from "../../services/managerDaily";

const ADMIN_PIN = "8426"; // نفس الفكرة تبعتك

function n(v) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}
function money(v) {
  return new Intl.NumberFormat("he-IL", { maximumFractionDigits: 2 }).format(
    n(v)
  );
}
function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export default function ManagerDashboard({ onExit }) {
  // ===== Auth =====
  const [pin, setPin] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [authError, setAuthError] = useState("");

  // ===== Tabs =====
  const [tab, setTab] = useState("daily"); // "daily" | "messages"

  // ===== Daily data =====
  const [dateKey, setDateKey] = useState(todayKey());
  const [day, setDay] = useState(getEmptyDay(dateKey));
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  // Load day
  useEffect(() => {
    if (!authorized) return;
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await fetchDay(dateKey);
        if (!alive) return;
        setDay(data);
      } catch (e) {
        console.error(e);
        if (!alive) return;
        setErr("فشل تحميل بيانات اليوم.");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [authorized, dateKey]);

  // Derived: carpets
  const carpetRows = day.carpets || [];
  const carpetsComputed = useMemo(() => {
    const rows = carpetRows.map((c) => {
      const length = n(c.length);
      const width = n(c.width);
      const area = length * width; // m² (افترض الإدخال بالمتر)
      return { ...c, length, width, area };
    });
    const totalArea = rows.reduce((acc, r) => acc + r.area, 0);
    const rate = n(day.carpetRatePerM2) || 15;
    const totalPrice = totalArea * rate;
    return { rows, totalArea, rate, totalPrice };
  }, [carpetRows, day.carpetRatePerM2]);

  // Derived: sales
  const salesRows = day.sales || [];
  const salesComputed = useMemo(() => {
    const rows = salesRows.map((s) => {
      const qty = n(s.qty);
      const price = n(s.price);
      const total = qty * price;
      return { ...s, qty, price, total };
    });
    const totalSales = rows.reduce((acc, r) => acc + r.total, 0);
    return { rows, totalSales };
  }, [salesRows]);

  const grossRevenue = n(day.grossRevenue);
  const shopShare = n(day.shopShare);
  const youShare = grossRevenue - shopShare;

  const save = async () => {
    try {
      setSaving(true);
      setErr("");
      await upsertDay(dateKey, {
        ...day,
        dateKey,
        // نضمن أرقام
        grossRevenue: n(day.grossRevenue),
        shopShare: n(day.shopShare),
        carpetRatePerM2: n(day.carpetRatePerM2) || 15,
        carpets: (day.carpets || []).map((c) => ({
          id: c.id,
          length: n(c.length),
          width: n(c.width),
        })),
        sales: (day.sales || []).map((s) => ({
          id: s.id,
          name: String(s.name || "").trim(),
          qty: n(s.qty),
          price: n(s.price),
        })),
        notes: String(day.notes || ""),
      });
    } catch (e) {
      console.error(e);
      setErr("فشل الحفظ. جرّب مرة ثانية.");
    } finally {
      setSaving(false);
    }
  };

  const addCarpet = () => {
    setDay((p) => ({
      ...p,
      carpets: [...(p.carpets || []), { id: uid(), length: "", width: "" }],
    }));
  };
  const updateCarpet = (id, patch) => {
    setDay((p) => ({
      ...p,
      carpets: (p.carpets || []).map((c) =>
        c.id === id ? { ...c, ...patch } : c
      ),
    }));
  };
  const removeCarpet = (id) => {
    setDay((p) => ({
      ...p,
      carpets: (p.carpets || []).filter((c) => c.id !== id),
    }));
  };

  const addSale = () => {
    setDay((p) => ({
      ...p,
      sales: [...(p.sales || []), { id: uid(), name: "", qty: 1, price: "" }],
    }));
  };
  const updateSale = (id, patch) => {
    setDay((p) => ({
      ...p,
      sales: (p.sales || []).map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }));
  };
  const removeSale = (id) => {
    setDay((p) => ({
      ...p,
      sales: (p.sales || []).filter((s) => s.id !== id),
    }));
  };

  // ===== PIN screen =====
  if (!authorized) {
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
              أدخل رمز الدخول السري للمتابعة
            </p>

            <label className="block text-xs font-medium text-slate-700 mb-1">
              رمز الدخول (PIN)
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
              placeholder="••••"
            />

            {authError && (
              <p className="mt-2 text-xs text-rose-500 text-center">
                {authError}
              </p>
            )}

            <button
              onClick={() => {
                if (pin === ADMIN_PIN) {
                  setAuthorized(true);
                  setAuthError("");
                } else {
                  setAuthError("رمز غير صحيح، حاول مرة أخرى.");
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
            ملاحظة: لا تشارك الرمز مع أحد.
          </p>
        </div>
      </div>
    );
  }

  // ===== Main UI =====
  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              L
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-semibold text-slate-900">
                لوحة الإدارة
              </h1>
              <p className="text-[11px] text-slate-500">
                شغل اليوم + السجاد + المبيعات + رسائل العملاء
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("daily")}
              className={`h-9 px-3 rounded-2xl text-xs font-semibold border ${
                tab === "daily"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              شغل اليوم
            </button>

            <button
              onClick={() => setTab("messages")}
              className={`h-9 px-3 rounded-2xl text-xs font-semibold border ${
                tab === "messages"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              رسائل التواصل
            </button>

            {onExit && (
              <button
                onClick={onExit}
                className="h-9 px-3 rounded-2xl text-xs font-medium bg-slate-900 text-slate-50 hover:bg-slate-800"
              >
                العودة للموقع
              </button>
            )}
          </div>
        </div>
      </header>

      {tab === "messages" ? (
        <AdminMessages onExit={onExit} />
      ) : (
        <main className="max-w-6xl mx-auto px-4 py-5 space-y-4">
          {/* اختيار التاريخ */}
          <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  بيانات اليوم
                </h2>
                <p className="text-[11px] text-slate-500">
                  اختر تاريخ، اكتب الأرقام، واحفظ — كل شيء محسوب تلقائيًا.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={dateKey}
                  onChange={(e) => setDateKey(e.target.value)}
                  className="h-9 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-800 outline-none focus:ring-1 focus:ring-blue-300"
                />

                <button
                  onClick={save}
                  disabled={saving || loading}
                  className="h-9 px-4 rounded-2xl bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {saving ? "جارٍ الحفظ..." : "حفظ"}
                </button>
              </div>
            </div>

            {err && <p className="mt-2 text-[11px] text-rose-500">{err}</p>}
          </section>

          {/* ملخص سريع */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-[11px] text-slate-500">شغل اليوم</p>
              <p className="text-lg font-extrabold text-slate-900">
                {money(grossRevenue)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-[11px] text-slate-500">للمحل</p>
              <p className="text-lg font-extrabold text-slate-900">
                {money(shopShare)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-[11px] text-slate-500">
                إلك (شغل اليوم - للمحل)
              </p>
              <p className="text-lg font-extrabold text-slate-900">
                {money(youShare)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-[11px] text-slate-500">
                إجمالي المبيعات (شو انباع)
              </p>
              <p className="text-lg font-extrabold text-slate-900">
                {money(salesComputed.totalSales)}
              </p>
            </div>
          </section>

          {/* شغل اليوم */}
          <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              1) شغل اليوم وتقسيمه
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  شغل اليوم
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={day.grossRevenue}
                  onChange={(e) =>
                    setDay((p) => ({ ...p, grossRevenue: e.target.value }))
                  }
                  className="w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  كم رايح للمحل
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={day.shopShare}
                  onChange={(e) =>
                    setDay((p) => ({ ...p, shopShare: e.target.value }))
                  }
                  className="w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-600 mb-1">
                  ملاحظات
                </label>
                <input
                  type="text"
                  value={day.notes}
                  onChange={(e) =>
                    setDay((p) => ({ ...p, notes: e.target.value }))
                  }
                  className="w-full h-9 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-blue-300"
                  placeholder="اختياري"
                />
              </div>
            </div>
          </section>

          {/* السجاد */}
          <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  2) السجاد (طول × عرض)
                </h3>
                <p className="text-[11px] text-slate-500">
                  أدخل بالمتر. كل سطر = سجادة. يتحسب المتر المربع تلقائيًا
                  ويتجمع ويتضرب بـ 15.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-slate-500">السعر للم²</span>
                  <input
                    type="number"
                    value={day.carpetRatePerM2}
                    onChange={(e) =>
                      setDay((p) => ({ ...p, carpetRatePerM2: e.target.value }))
                    }
                    className="w-20 h-8 rounded-2xl border border-slate-200 bg-slate-50 px-2 text-xs text-slate-900 outline-none"
                  />
                </div>
                <button
                  onClick={addCarpet}
                  className="h-8 px-3 rounded-2xl bg-slate-900 text-[11px] text-white hover:bg-slate-800"
                >
                  + إضافة سجادة
                </button>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {carpetsComputed.rows.length === 0 ? (
                <p className="text-xs text-slate-500">ما في سجاد مضاف لليوم.</p>
              ) : (
                carpetsComputed.rows.map((c, idx) => (
                  <div
                    key={c.id}
                    className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center rounded-2xl border border-slate-200 bg-slate-50 p-2"
                  >
                    <div className="text-[11px] text-slate-500 sm:col-span-1">
                      سجادة #{idx + 1}
                    </div>

                    <input
                      type="number"
                      inputMode="decimal"
                      value={c.length}
                      onChange={(e) =>
                        updateCarpet(c.id, { length: e.target.value })
                      }
                      className="h-8 rounded-2xl border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none"
                      placeholder="الطول (م)"
                    />
                    <input
                      type="number"
                      inputMode="decimal"
                      value={c.width}
                      onChange={(e) =>
                        updateCarpet(c.id, { width: e.target.value })
                      }
                      className="h-8 rounded-2xl border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none"
                      placeholder="العرض (م)"
                    />

                    <div className="text-xs font-semibold text-slate-900">
                      {money(c.area)} م²
                    </div>

                    <button
                      onClick={() => removeCarpet(c.id)}
                      className="h-8 px-3 rounded-2xl bg-rose-50 text-[11px] text-rose-700 border border-rose-200 hover:bg-rose-100"
                    >
                      حذف
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-[11px] text-slate-500">مجموع المساحة</p>
                <p className="text-base font-extrabold text-slate-900">
                  {money(carpetsComputed.totalArea)} م²
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-[11px] text-slate-500">سعر المتر</p>
                <p className="text-base font-extrabold text-slate-900">
                  {money(carpetsComputed.rate)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-[11px] text-slate-500">
                  الإجمالي (مجموع م² × 15)
                </p>
                <p className="text-base font-extrabold text-slate-900">
                  {money(carpetsComputed.totalPrice)}
                </p>
              </div>
            </div>
          </section>

          {/* شو انباع */}
          <section className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  3) شو انباع اليوم
                </h3>
                <p className="text-[11px] text-slate-500">
                  اكتب اسم الخدمة/المنتج + كمية + سعر للواحد. الإجمالي محسوب
                  تلقائيًا.
                </p>
              </div>
              <button
                onClick={addSale}
                className="h-8 px-3 rounded-2xl bg-slate-900 text-[11px] text-white hover:bg-slate-800"
              >
                + إضافة بيع
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {salesComputed.rows.length === 0 ? (
                <p className="text-xs text-slate-500">
                  ما في مبيعات مضافة لليوم.
                </p>
              ) : (
                salesComputed.rows.map((s) => (
                  <div
                    key={s.id}
                    className="grid grid-cols-1 sm:grid-cols-6 gap-2 items-center rounded-2xl border border-slate-200 bg-slate-50 p-2"
                  >
                    <input
                      type="text"
                      value={s.name}
                      onChange={(e) =>
                        updateSale(s.id, { name: e.target.value })
                      }
                      className="sm:col-span-2 h-8 rounded-2xl border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none"
                      placeholder="اسم المنتج/الخدمة"
                    />
                    <input
                      type="number"
                      value={s.qty}
                      onChange={(e) =>
                        updateSale(s.id, { qty: e.target.value })
                      }
                      className="h-8 rounded-2xl border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none"
                      placeholder="كمية"
                    />
                    <input
                      type="number"
                      inputMode="decimal"
                      value={s.price}
                      onChange={(e) =>
                        updateSale(s.id, { price: e.target.value })
                      }
                      className="h-8 rounded-2xl border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none"
                      placeholder="سعر"
                    />
                    <div className="text-xs font-extrabold text-slate-900">
                      {money(s.total)}
                    </div>
                    <button
                      onClick={() => removeSale(s.id)}
                      className="h-8 px-3 rounded-2xl bg-rose-50 text-[11px] text-rose-700 border border-rose-200 hover:bg-rose-100"
                    >
                      حذف
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 flex items-center justify-between">
              <p className="text-[11px] text-slate-500">إجمالي المبيعات</p>
              <p className="text-base font-extrabold text-slate-900">
                {money(salesComputed.totalSales)}
              </p>
            </div>
          </section>

          {loading && (
            <p className="text-center text-xs text-slate-500 mt-2">
              جارٍ تحميل بيانات اليوم...
            </p>
          )}
        </main>
      )}
    </div>
  );
}
