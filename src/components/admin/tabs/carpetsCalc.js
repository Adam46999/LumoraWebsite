// src/components/admin/tabs/carpetsCalc.js

function n(v) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

export function safeMode(mode) {
  const m = String(mode || "").toLowerCase();
  if (m === "cm" || m === "area" || m === "price") return m;
  return "cm";
}

export function calcAreaM2(rug) {
  const mode = safeMode(rug?.mode);

  const areaM2 = n(rug?.areaM2);
  const lengthCm = n(rug?.lengthCm);
  const widthCm = n(rug?.widthCm);

  // if user provided explicit area, prefer it (any mode)
  if (areaM2 > 0) return areaM2;

  // otherwise, compute from cm if possible
  if (lengthCm > 0 && widthCm > 0) {
    return (lengthCm / 100) * (widthCm / 100);
  }

  // area-only mode with no area value -> 0
  if (mode === "area") return 0;

  // price mode: area is optional
  return 0;
}

export function calcPrice(rug, defaultRatePerM2) {
  const mode = safeMode(rug?.mode);
  const rate = n(rug?.ratePerM2) > 0 ? n(rug?.ratePerM2) : n(defaultRatePerM2);

  // direct price override
  if (mode === "price") {
    const override = n(rug?.priceOverride);
    if (override > 0) return override;
    // if no override, fall back to area*rate if area exists
  }

  const area = calcAreaM2(rug);
  if (area <= 0 || rate <= 0) return 0;
  return area * rate;
}
