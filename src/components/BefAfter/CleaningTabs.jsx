import React, { useMemo } from "react";

export default function CleaningTabs({
  lang = "ar",
  active,
  onChange,
  counts = {},
  labels = {},
  disableEmpty = true,
  sticky = false,
  compactOnMobile = true,
  className = "",
}) {
  const isRTL = lang === "ar";

  // ✅ يبني التبويبات حسب labels فقط (فالسجاد اختفى لأنه مش ممرر)
  const tabs = useMemo(() => {
    const keys = Object.keys(labels);
    return keys.map((key) => ({
      key,
      label: labels[key],
      count: counts?.[key] ?? 0,
    }));
  }, [labels, counts]);

  if (!tabs.length) return null;

  return (
    <div
      className={[sticky ? "sticky top-3 z-10" : "", "w-full", className].join(
        " "
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-sm px-3 py-3">
        <div
          className={[
            "flex items-center gap-2",
            compactOnMobile ? "overflow-x-auto no-scrollbar" : "",
          ].join(" ")}
        >
          {tabs.map((tab) => {
            const isActive = tab.key === active;
            const disabled = disableEmpty && tab.count === 0;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => !disabled && onChange?.(tab.key)}
                disabled={disabled}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-sm font-extrabold border transition",
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50",
                  disabled
                    ? "opacity-50 cursor-not-allowed hover:bg-white"
                    : "",
                ].join(" ")}
                aria-pressed={isActive ? "true" : "false"}
              >
                <span className="inline-flex items-center gap-2">
                  <span>{tab.label}</span>
                  <span
                    className={[
                      "min-w-[28px] h-6 px-2 rounded-full text-xs font-black inline-flex items-center justify-center",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-700",
                    ].join(" ")}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-center text-[12px] text-slate-500">
          {isRTL
            ? "اختَر القسم ثم اسحب للمقارنة قبل/بعد."
            : "Pick a category, then swipe to compare before/after."}
        </p>
      </div>
    </div>
  );
}
