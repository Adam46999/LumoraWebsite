// src/components/BefAfter/CleaningTabs.jsx
import { useEffect, useMemo, useRef, useState, useId } from "react";
import { Car, Armchair, Layers } from "lucide-react";

/**
 * ثلاث تبويبات ثابتة بدون تمرير:
 * - grid-cols-3 دائماً (موبايل → دِسك توب)
 * - على الشاشات الصغيرة: أيقونة فوق + نص يلفّ حتى سطرين (بدون قص)
 * - ارتفاع ثابت لمنع القفزات + RTL/Keyboard/Sticky
 */
export default function CleaningTabs({
  lang = "ar",
  active,
  onChange,
  defaultActive = "sofa",
  counts = { cars: 0, sofa: 0, rugs: 0 },
  labels = {
    cars: "غسيل السيارات",
    sofa: "تنظيف الكنب والفرش",
    rugs: "تنظيف السجاد",
  },
  sticky = true,
  icons = { cars: Car, sofa: Armchair, rugs: Layers },
  className = "",
}) {
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  // Controlled / Uncontrolled
  const controlled = active !== undefined && typeof onChange === "function";
  const [internal, setInternal] = useState(defaultActive);
  const current = controlled ? active : internal;
  const setCurrent = (id) => {
    if (!controlled) setInternal(id);
    onChange?.(id);
  };

  const uid = useId();
  const wrapRef = useRef(null);
  const tabRefs = useRef({});

  const TABS = [
    {
      id: "cars",
      label: labels.cars,
      count: counts.cars ?? 0,
      Icon: icons.cars || Car,
    },
    {
      id: "sofa",
      label: labels.sofa,
      count: counts.sofa ?? 0,
      Icon: icons.sofa || Armchair,
    },
    {
      id: "rugs",
      label: labels.rugs,
      count: counts.rugs ?? 0,
      Icon: icons.rugs || Layers,
    },
  ];

  // Keyboard (RTL-aware)
  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const ids = TABS.map((t) => t.id);
    const handler = (e) => {
      const idx = ids.indexOf(current);
      if (idx < 0) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const dir = e.key === "ArrowRight" ? 1 : -1;
        const step = isRTL ? -dir : dir;
        const next = (idx + step + ids.length) % ids.length;
        const id = ids[next];
        setCurrent(id);
        tabRefs.current[id]?.focus();
      } else if (e.key === "Home" || e.key === "PageUp") {
        e.preventDefault();
        setCurrent(ids[0]);
        tabRefs.current[ids[0]]?.focus();
      } else if (e.key === "End" || e.key === "PageDown") {
        e.preventDefault();
        const last = ids[ids.length - 1];
        setCurrent(last);
        tabRefs.current[last]?.focus();
      }
    };
    node.addEventListener("keydown", handler);
    return () => node.removeEventListener("keydown", handler);
  }, [TABS, current, isRTL]);

  return (
    <div
      ref={wrapRef}
      className={[
        sticky ? "sticky top-[calc(0.5rem+env(safe-area-inset-top))]" : "",
        "z-30",
        className,
      ].join(" ")}
    >
      <div
        dir={isRTL ? "rtl" : "ltr"}
        role="tablist"
        aria-orientation="horizontal"
        aria-label="أقسام عرض التنظيف"
        tabIndex={0}
        className={[
          "w-full rounded-2xl bg-white/85 dark:bg-white/10 backdrop-blur-md",
          "shadow-[0_6px_20px_-6px_rgba(0,0,0,0.15)] border border-white/60 dark:border-white/10",
          "px-1.5 py-1.5",
        ].join(" ")}
        // ارتفاع ثابت يمنع تغيّر الطول بين الحالات
        style={{ minHeight: 70 }}
      >
        {/* ثابت: 3 أعمدة بدون تمرير */}
        <div className="grid grid-cols-3 gap-1.5">
          {TABS.map(({ id, label, count, Icon }) => {
            const selected = current === id;
            return (
              <button
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                id={`${uid}-tab-${id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${uid}-panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setCurrent(id)}
                className={[
                  "relative rounded-xl font-semibold select-none text-center",
                  "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80",
                  // تخطيط عمودي على الشاشات الصغيرة لزيادة الوضوح
                  "flex flex-col items-center justify-center",
                  // مسافات متوازنة
                  "py-2.5 px-2 sm:px-3",
                  // ارتفاع ثابت يسمح بسطرين
                  "min-h-[58px] sm:min-h-[56px]",
                  selected
                    ? "text-white bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_10px_24px_-12px_rgba(37,99,235,0.55)] active:scale-[0.98]"
                    : "text-gray-800 dark:text-gray-100 bg-white/60 dark:bg-white/5 hover:bg-white/85 dark:hover:bg-white/10 border border-white/60 dark:border-white/10 active:scale-[0.98]",
                ].join(" ")}
                title={label}
              >
                {/* الأيقونة */}
                <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 mb-0.5" />

                {/* النص — سطران كحد أقصى بدون قصّ حروف */}
                <span
                  className="px-1 text-[12.5px] sm:text-[13.5px] leading-[1.05] sm:leading-snug whitespace-normal break-words"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {label}
                </span>

                {/* الشارة — تصغير على الموبايل */}
                {count > 0 && (
                  <span
                    className={[
                      "mt-1 inline-flex items-center justify-center rounded-full",
                      "text-[10px] h-[18px] min-w-[18px] px-1",
                      selected
                        ? "bg-white/25 text-white"
                        : "bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-gray-100",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
