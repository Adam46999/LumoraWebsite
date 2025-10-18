// src/components/BefAfter/CleaningTabs.jsx
import { useEffect, useMemo, useRef, useState, useId } from "react";
import { Car, Armchair, Layers } from "lucide-react";

export default function CleaningTabs({
  lang = "ar",
  active,
  onChange,
  defaultActive = "sofa",
  counts = { cars: 0, sofa: 0, rugs: 0 },
  labels = {
    cars: "سيارات",
    sofa: "كنب-فرش",
    rugs: "سجاد",
  },
  sticky = true,
  icons = { cars: Car, sofa: Armchair, rugs: Layers },
  className = "",
}) {
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);
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
      className={["z-50", className].join(" ")}
      style={
        sticky
          ? {
              position: "sticky",
              top: "calc(var(--app-topbar-h, 56px) + env(safe-area-inset-top) + 8px)",
            }
          : undefined
      }
    >
      <div
        dir={isRTL ? "rtl" : "ltr"}
        role="tablist"
        aria-orientation="horizontal"
        aria-label="أقسام عرض التنظيف"
        tabIndex={0}
        className={[
          "w-full rounded-2xl bg-white/85 dark:bg-white/10 backdrop-blur-md",
          "shadow-[0_6px_18px_-10px_rgba(0,0,0,0.22)]",
          "border border-white/60 dark:border-white/10",
          "px-2 py-2",
        ].join(" ")}
        style={{ minHeight: 72 }}
      >
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
                  "flex flex-col items-center justify-center",
                  "py-3 px-2 sm:px-3 min-h-[62px] sm:min-h-[58px]",
                  "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80",
                  selected
                    ? "text-white bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_10px_22px_-14px_rgba(37,99,235,0.55)]"
                    : "text-gray-900 dark:text-gray-100 bg-white/60 dark:bg-white/5 hover:bg-white/85 dark:hover:bg-white/10 border border-white/60 dark:border-white/10",
                ].join(" ")}
                title={label}
              >
                <Icon className="w-[19px] h-[19px] sm:w-5 sm:h-5 mb-1" />
                <span
                  className="px-1 text-[clamp(12px,3.2vw,13.5px)] leading-snug whitespace-normal break-words"
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
