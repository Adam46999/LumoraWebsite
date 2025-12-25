// src/components/admin/lib/dailyServices.js

export const SERVICE_PRESETS = [
  { key: "car_wash", labelAr: "غسيل سيارة", defaultPrice: 80 },
  { key: "jeep_wash", labelAr: "غسيل جيب", defaultPrice: 100 },
  { key: "sofa", labelAr: "تنظيف كنب", defaultPrice: 150 },
  { key: "carpet_m2", labelAr: "تنظيف سجاد (م²)", defaultPrice: 15 },
  { key: "other", labelAr: "خدمة أخرى", defaultPrice: 0 },
];

export function uid(prefix = "e") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

export function clampNumber(n, { min = 0, max = Infinity } = {}) {
  const x = Number(n);
  if (!Number.isFinite(x)) return min;
  return Math.max(min, Math.min(max, x));
}

export function normalizeEntry(raw) {
  const r = raw || {};
  const price = clampNumber(r.price, { min: 0 });
  const qty = clampNumber(r.qty ?? 1, { min: 1 });

  const mode = r.splitMode || "shop_amount"; // shop_amount | me_amount | shop_percent
  const shopAmountRaw = clampNumber(r.shopAmount ?? 0, { min: 0 });
  const meAmountRaw = clampNumber(r.meAmount ?? 0, { min: 0 });
  const shopPercent = clampNumber(r.shopPercent ?? 0, { min: 0, max: 100 });

  const total = price * qty;

  let shopAmount = 0;
  let meAmount = 0;

  if (mode === "shop_amount") {
    shopAmount = clampNumber(shopAmountRaw, { min: 0, max: total });
    meAmount = total - shopAmount;
  } else if (mode === "me_amount") {
    meAmount = clampNumber(meAmountRaw, { min: 0, max: total });
    shopAmount = total - meAmount;
  } else {
    shopAmount = Math.round(((total * shopPercent) / 100) * 100) / 100;
    meAmount = total - shopAmount;
  }

  return {
    id: r.id || uid("entry"),
    serviceKey: r.serviceKey || "other",
    serviceLabel: (r.serviceLabel || "").toString(),
    price,
    qty,
    splitMode: mode,
    shopAmount,
    meAmount,
    shopPercent,
    note: (r.note || "").toString(),
    createdAtMs: typeof r.createdAtMs === "number" ? r.createdAtMs : Date.now(),
  };
}

export function computeTotals(entries = []) {
  const list = Array.isArray(entries) ? entries : [];
  let total = 0;
  let shop = 0;
  let me = 0;

  for (const e of list) {
    const n = normalizeEntry(e);
    total += n.price * n.qty;
    shop += n.shopAmount;
    me += n.meAmount;
  }

  const round2 = (x) => Math.round(x * 100) / 100;

  return {
    total: round2(total),
    shop: round2(shop),
    me: round2(me),
  };
}
