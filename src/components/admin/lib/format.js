// src/components/admin/lib/format.js
export function n(v) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

export function money(v) {
  return new Intl.NumberFormat("he-IL", { maximumFractionDigits: 2 }).format(
    n(v)
  );
}

export function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}
