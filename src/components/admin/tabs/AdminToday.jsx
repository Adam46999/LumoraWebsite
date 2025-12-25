// src/components/admin/tabs/AdminToday.jsx
import { useMemo, useState } from "react";
import useManagerDayLive from "../hooks/useManagerDayLive";
import {
  SERVICE_PRESETS,
  normalizeEntry,
  computeTotals,
  uid,
} from "../lib/dailyServices";

function Money({ v }) {
  const n = Number(v || 0);
  return <span>{n.toLocaleString("he-IL", { maximumFractionDigits: 2 })}</span>;
}

export default function AdminToday() {
  const {
    entries,
    loading,
    error,
    addEntry,
    updateEntry,
    removeEntry,
    dateKey,
  } = useManagerDayLive();

  const totals = useMemo(() => computeTotals(entries), [entries]);

  const priceCacheKey = "admin_service_price_cache_v1";

  const getCache = () => {
    try {
      return JSON.parse(localStorage.getItem(priceCacheKey) || "{}");
    } catch {
      return {};
    }
  };
  const setCache = (key, val) => {
    try {
      const now = getCache();
      now[key] = Number(val) || 0;
      localStorage.setItem(priceCacheKey, JSON.stringify(now));
    } catch {}
  };

  const [serviceKey, setServiceKey] = useState(
    SERVICE_PRESETS[0]?.key || "car_wash"
  );
  const preset = useMemo(
    () =>
      SERVICE_PRESETS.find((x) => x.key === serviceKey) || SERVICE_PRESETS[0],
    [serviceKey]
  );

  const [customLabel, setCustomLabel] = useState("");
  const [price, setPrice] = useState(() => {
    const c = getCache()[serviceKey];
    return typeof c === "number" ? c : preset?.defaultPrice ?? 0;
  });
  const [qty, setQty] = useState(1);

  const [splitMode, setSplitMode] = useState("shop_amount");
  const [shopAmount, setShopAmount] = useState(0);
  const [meAmount, setMeAmount] = useState(0);
  const [shopPercent, setShopPercent] = useState(30);

  const totalForCurrent = useMemo(() => {
    const t = (Number(price) || 0) * (Number(qty) || 1);
    return Math.max(0, t);
  }, [price, qty]);

  const onChangeService = (k) => {
    setServiceKey(k);
    const cache = getCache();
    const p =
      typeof cache?.[k] === "number"
        ? cache[k]
        : SERVICE_PRESETS.find((x) => x.key === k)?.defaultPrice ?? 0;

    setPrice(p);
    setQty(1);
    setCustomLabel("");
    setSplitMode("shop_amount");
    setShopAmount(0);
    setMeAmount(0);
    setShopPercent(30);
  };

  const buildEntry = () => {
    const serviceLabel =
      serviceKey === "other"
        ? (customLabel || "خدمة أخرى").trim()
        : preset?.labelAr || "خدمة";

    return normalizeEntry({
      id: uid("entry"),
      serviceKey,
      serviceLabel,
      price: Number(price) || 0,
      qty: Number(qty) || 1,
      splitMode,
      shopAmount: Number(shopAmount) || 0,
      meAmount: Number(meAmount) || 0,
      shopPercent: Number(shopPercent) || 0,
      createdAtMs: Date.now(),
    });
  };

  const handleAdd = async () => {
    const e = buildEntry();
    setCache(serviceKey, e.price);
    await addEntry(e);

    // reset بسيط (سريع)
    setQty(1);
    setShopAmount(0);
    setMeAmount(0);
  };

  const handleAddAgain = async (e, times = 1) => {
    const t = Math.max(1, Number(times) || 1);
    for (let i = 0; i < t; i++) {
      await addEntry({
        ...e,
        id: uid("entry"),
        createdAtMs: Date.now() + i,
      });
    }
  };

  return (
    <div className="space-y-4" dir="rtl">
      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card title="إجمالي اليوم" value={totals.total} />
        <Card title="للمحل" value={totals.shop} />
        <Card title="إلك" value={totals.me} />
      </div>

      {/* Quick Add */}
      <div className="bg-surface border border-ring rounded-2xl p-4 shadow-card">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <div className="font-extrabold text-base">إضافة سريعة</div>
            <div className="text-xs text-muted font-bold">
              التاريخ: {dateKey}
            </div>
          </div>

          <button type="button" onClick={handleAdd} className="btn-primary">
            + إضافة
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Service */}
          <div className="lg:col-span-4">
            <label className="block text-xs font-extrabold text-muted mb-1">
              الخدمة
            </label>
            <select
              value={serviceKey}
              onChange={(e) => onChangeService(e.target.value)}
              className="w-full rounded-2xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-bold outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SERVICE_PRESETS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.labelAr}
                </option>
              ))}
            </select>

            {serviceKey === "other" && (
              <input
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                placeholder="اكتب اسم الخدمة"
                className="mt-2 w-full rounded-2xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-bold outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>

          {/* Price */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-extrabold text-muted mb-1">
              السعر
            </label>
            <input
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-2xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-extrabold outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-[11px] text-muted font-bold mt-1">
              الإجمالي: <Money v={totalForCurrent} /> ₪
            </div>
          </div>

          {/* Qty */}
          <div className="lg:col-span-2">
            <label className="block text-xs font-extrabold text-muted mb-1">
              العدد
            </label>
            <input
              inputMode="numeric"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full rounded-2xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-extrabold outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Split */}
          <div className="lg:col-span-4">
            <label className="block text-xs font-extrabold text-muted mb-1">
              التقسيم
            </label>

            <div className="grid grid-cols-3 gap-2">
              <SegBtn
                active={splitMode === "shop_amount"}
                onClick={() => setSplitMode("shop_amount")}
                text="أدخل للمحل"
              />
              <SegBtn
                active={splitMode === "me_amount"}
                onClick={() => setSplitMode("me_amount")}
                text="أدخل إلك"
              />
              <SegBtn
                active={splitMode === "shop_percent"}
                onClick={() => setSplitMode("shop_percent")}
                text="نسبة"
              />
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {splitMode === "shop_amount" && (
                <>
                  <Field
                    label="للمحل"
                    value={shopAmount}
                    onChange={setShopAmount}
                  />
                  <Hint text="إلك يحسب تلقائيًا" />
                </>
              )}

              {splitMode === "me_amount" && (
                <>
                  <Field label="إلك" value={meAmount} onChange={setMeAmount} />
                  <Hint text="للمحل يحسب تلقائيًا" />
                </>
              )}

              {splitMode === "shop_percent" && (
                <>
                  <Field
                    label="نسبة للمحل (%)"
                    value={shopPercent}
                    onChange={setShopPercent}
                  />
                  <Hint text="الباقي إلك تلقائيًا" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-surface border border-ring rounded-2xl shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-ring flex items-center justify-between">
          <div className="font-extrabold">بنود اليوم</div>
          <div className="text-xs text-muted font-bold">
            {loading ? "جاري التحميل..." : `${entries.length} بند`}
          </div>
        </div>

        {error ? (
          <div className="p-4 text-sm text-red-600 font-extrabold">
            صار خطأ: {String(error?.message || error)}
          </div>
        ) : null}

        {!loading && entries.length === 0 ? (
          <div className="p-6 text-center text-muted font-extrabold">
            لا يوجد بنود اليوم — ابدأ بالإضافة من الأعلى.
          </div>
        ) : null}

        <div className="divide-y divide-[var(--ring)]">
          {entries.map((e) => (
            <EntryRow
              key={e.id}
              entry={e}
              onRemove={() => removeEntry(e.id)}
              onUpdate={(patch) => updateEntry(e.id, patch)}
              onAddAgain={(times) => handleAddAgain(e, times)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-surface border border-ring rounded-2xl p-4 shadow-card">
      <div className="text-xs text-muted font-bold mb-1">{title}</div>
      <div className="text-2xl font-extrabold">
        <Money v={value} /> ₪
      </div>
    </div>
  );
}

function SegBtn({ active, onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-3 py-2 rounded-2xl border text-xs font-extrabold transition",
        active
          ? "border-blue-300 bg-blue-50 text-blue-800"
          : "border-ring hover:bg-black/5 dark:hover:bg-white/5",
      ].join(" ")}
    >
      {text}
    </button>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <div className="text-[11px] text-muted font-extrabold mb-1">{label}</div>
      <input
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-extrabold outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Hint({ text }) {
  return (
    <div className="flex items-end">
      <div className="text-[11px] text-muted font-extrabold">{text}</div>
    </div>
  );
}

function EntryRow({ entry, onRemove, onUpdate, onAddAgain }) {
  const [editing, setEditing] = useState(false);
  const [times, setTimes] = useState(1);

  const total = (entry.price || 0) * (entry.qty || 1);

  return (
    <div className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-extrabold text-base truncate">
            {entry.serviceLabel}
          </div>
          <div className="text-xs text-muted font-bold mt-1">
            الإجمالي: {total.toLocaleString("he-IL")} ₪ — للمحل:{" "}
            {(entry.shopAmount || 0).toLocaleString("he-IL")} ₪ — إلك:{" "}
            {(entry.meAmount || 0).toLocaleString("he-IL")} ₪
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1">
            <input
              inputMode="numeric"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              className="w-14 text-center rounded-xl border border-ring bg-white/70 dark:bg-white/5 px-2 py-1 font-extrabold outline-none"
              title="عدد مرات الإضافة"
            />
            <button
              type="button"
              onClick={() => onAddAgain(times)}
              className="px-3 py-1.5 rounded-xl border border-ring font-extrabold text-xs hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              + تكرار
            </button>
          </div>

          <button
            type="button"
            onClick={() => setEditing((p) => !p)}
            className="px-3 py-1.5 rounded-xl border border-ring font-extrabold text-xs hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {editing ? "إغلاق" : "تعديل"}
          </button>

          <button
            type="button"
            onClick={onRemove}
            className="px-3 py-1.5 rounded-xl border border-red-200 text-red-600 font-extrabold text-xs hover:bg-red-50 transition"
          >
            حذف
          </button>
        </div>
      </div>

      {editing && (
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <EditField
            label="السعر"
            value={entry.price}
            onChange={(v) => onUpdate({ price: v })}
          />
          <EditField
            label="العدد"
            value={entry.qty}
            onChange={(v) => onUpdate({ qty: v })}
          />
          <EditField
            label="للمحل"
            value={entry.shopAmount}
            onChange={(v) =>
              onUpdate({ splitMode: "shop_amount", shopAmount: v })
            }
          />
          <EditField
            label="إلك"
            value={entry.meAmount}
            onChange={(v) => onUpdate({ splitMode: "me_amount", meAmount: v })}
          />
        </div>
      )}
    </div>
  );
}

function EditField({ label, value, onChange }) {
  return (
    <div>
      <div className="text-[11px] text-muted font-extrabold mb-1">{label}</div>
      <input
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-ring bg-white/70 dark:bg-white/5 px-3 py-2 font-extrabold outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
