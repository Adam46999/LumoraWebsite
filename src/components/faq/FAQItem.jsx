// src/components/faq/FAQItem.jsx
import { useMemo } from "react";
import {
  CalendarClock,
  ChevronDown,
  Clock3,
  CreditCard,
  Droplets,
  MapPin,
  ShieldCheck,
  Sofa,
  Sparkles,
} from "lucide-react";

const ICONS = {
  time: Clock3,
  schedule: CalendarClock,
  safety: ShieldCheck,
  results: Sparkles,
  dry: Droplets,
  coverage: MapPin,
  price: CreditCard,
  fabric: Sofa,
};

function createSafeId(value) {
  return String(value ?? "item").replace(/[^a-zA-Z0-9_-]/g, "-");
}

export default function FAQItem({
  id,
  icon,
  question,
  short,
  details,
  isOpen,
  onToggle,
  dir = "ltr",
  variant = "default",
}) {
  const Icon = useMemo(() => ICONS[icon] || Sparkles, [icon]);

  const isRTL = dir === "rtl";
  const isCompact = variant === "compact";

  const safeId = createSafeId(id);
  const buttonId = `faq-button-${safeId}`;
  const panelId = `faq-panel-${safeId}`;

  const openLabel = isRTL ? "إغلاق الإجابة" : "Close answer";

  const closedLabel = isRTL ? "فتح الإجابة" : "Open answer";

  const handleToggle = () => {
    onToggle?.(id);
  };

  return (
    <article
      className={[
        "overflow-hidden rounded-2xl border bg-white",
        "transition-[border-color,box-shadow,transform] duration-300",
        isOpen
          ? "border-blue-200 shadow-[0_14px_38px_rgba(37,99,235,0.12)]"
          : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md",
      ].join(" ")}
      dir={dir}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={`${isOpen ? openLabel : closedLabel}: ${question}`}
          className={[
            "flex w-full items-start justify-between gap-4",
            "text-start transition-colors",
            "focus-visible:outline-none",
            "focus-visible:ring-4 focus-visible:ring-inset",
            "focus-visible:ring-blue-100",
            isCompact ? "px-4 py-4" : "px-5 py-5",
            isOpen ? "bg-blue-50/45" : "bg-white hover:bg-slate-50/70",
          ].join(" ")}
        >
          <span className="flex min-w-0 flex-1 items-start gap-3">
            <span
              className={[
                "mt-0.5 inline-flex shrink-0 items-center justify-center",
                "rounded-xl border border-blue-100 bg-blue-50",
                "text-blue-700 transition",
                isCompact ? "h-9 w-9" : "h-10 w-10",
                isOpen ? "border-blue-200 bg-blue-100" : "",
              ].join(" ")}
              aria-hidden="true"
            >
              <Icon
                className={isCompact ? "h-4 w-4" : "h-[18px] w-[18px]"}
                strokeWidth={2.3}
              />
            </span>

            <span className="min-w-0 flex-1">
              <span
                className={[
                  "block font-extrabold leading-6 text-slate-950",
                  isCompact ? "text-sm" : "text-sm sm:text-base",
                ].join(" ")}
              >
                {question}
              </span>

              {short ? (
                <span
                  className={[
                    "mt-1.5 block font-medium leading-6 text-slate-600",
                    isCompact ? "text-[13px]" : "text-sm",
                  ].join(" ")}
                >
                  {short}
                </span>
              ) : null}
            </span>
          </span>

          <span
            className={[
              "mt-1 flex h-8 w-8 shrink-0 items-center justify-center",
              "rounded-full border transition",
              isOpen
                ? "border-blue-200 bg-blue-100 text-blue-700"
                : "border-slate-200 bg-white text-slate-500",
            ].join(" ")}
            aria-hidden="true"
          >
            <ChevronDown
              className={[
                "h-4 w-4 transition-transform duration-300",
                isOpen ? "rotate-180" : "",
              ].join(" ")}
              strokeWidth={2.5}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={[
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          {details ? (
            <div
              className={[
                "border-t border-slate-100",
                "text-sm font-medium leading-7 text-slate-600",
                "whitespace-pre-line",
                isCompact
                  ? "px-4 pb-5 pt-4 sm:ps-16"
                  : "px-5 pb-6 pt-4 sm:ps-[76px]",
              ].join(" ")}
            >
              {details}
            </div>
          ) : (
            <div
              className={[
                "border-t border-slate-100 text-sm text-slate-500",
                isCompact
                  ? "px-4 pb-5 pt-4 sm:ps-16"
                  : "px-5 pb-6 pt-4 sm:ps-[76px]",
              ].join(" ")}
            >
              {short}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
