// src/components/admin/lib/carpets.js
import { n } from "./format";

export function cmToM(cm) {
  return n(cm) / 100;
}

export function computeRug(rug, defaultRatePerM2) {
  const mode = rug.mode || "cm"; // cm | area | price
  const rate = n(rug.ratePerM2) || n(defaultRatePerM2) || 15;

  const lengthCm = n(rug.lengthCm);
  const widthCm = n(rug.widthCm);

  let area = 0;

  if (mode === "cm") {
    area = cmToM(lengthCm) * cmToM(widthCm);
  } else if (mode === "area") {
    area = n(rug.areaM2);
  } else {
    // price mode: keep area if given, else compute from cm if possible
    if (n(rug.areaM2) > 0) area = n(rug.areaM2);
    else area = cmToM(lengthCm) * cmToM(widthCm);
  }

  let price = 0;
  if (mode === "price" && n(rug.priceOverride) > 0)
    price = n(rug.priceOverride);
  else price = area * rate;

  return { area, price, rate, lengthCm, widthCm };
}
