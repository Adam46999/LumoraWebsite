// src/components/admin/tabs/daily/lib/constants.js

export const TYPE_OPTIONS = [
  { value: "service", label: "خدمة" },
  { value: "product", label: "منتج" },
  { value: "carpet", label: "سجاد" },
  { value: "other", label: "أخرى" },
];

export const PRESETS = [
  { type: "service", title: "غسيل سيارة" },
  { type: "service", title: "غسيل جيب" },
  { type: "service", title: "تنظيف فرش" },
  { type: "service", title: "تنظيف فرش سيارة" },
  { type: "product", title: "بيع منتج" },
  { type: "carpet", title: "سجاد" },
];

export const LS_RECENT_PRESETS = "admin_daily_recent_presets_v1";
export const LS_LAST_ENTRY = "admin_daily_last_entry_v1";

export function typeLabel(t) {
  return TYPE_OPTIONS.find((x) => x.value === t)?.label || "خدمة";
}
