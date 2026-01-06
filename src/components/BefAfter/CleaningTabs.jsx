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
  const isRTL = lang === "ar" || lang === "he";

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
      <div className="mx-auto max-w-5xl flex flex-col items-center">
        <div className="inline-flex items-center rounded-2xl bg-slate-100 p-1 shadow-sm border border-slate-200">
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
                  "relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-extrabold transition",
                  isActive
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900",
                  disabled ? "opacity-40 cursor-not-allowed" : "",
                ].join(" ")}
                aria-pressed={isActive ? "true" : "false"}
              >
                <span>{tab.label}</span>

                <span
                  className={[
                    "min-w-[22px] h-5 px-1.5 rounded-full text-[11px] font-black inline-flex items-center justify-center",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700",
                  ].join(" ")}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
