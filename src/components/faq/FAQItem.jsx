// src/components/faq/FAQItem.jsx
import { useMemo, useState } from "react";
import {
  ChevronDown,
  Clock3,
  ShieldCheck,
  Sparkles,
  Droplets,
  MapPin,
  CreditCard,
  CalendarClock,
  Sofa,
} from "lucide-react";

export default function FAQItem({
  id,
  icon,
  question,
  short,
  details,
  isOpen,
  onToggle,
  dir = "ltr",
  variant = "default", // ✅ NEW
}) {
  const [more, setMore] = useState(false);

  const Icon = useMemo(() => {
    const map = {
      time: Clock3,
      schedule: CalendarClock,
      safety: ShieldCheck,
      results: Sparkles,
      dry: Droplets,
      coverage: MapPin,
      price: CreditCard,
      fabric: Sofa,
    };
    return map[icon] || Sparkles;
  }, [icon]);

  const handleToggle = () => {
    if (isOpen) setMore(false);
    onToggle?.(id);
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={[
        "rounded-2xl bg-white border transition-all",
        isCompact ? "shadow-none" : "shadow-sm",
        isOpen
          ? "border-blue-200 shadow-[0_10px_30px_rgba(2,132,199,0.14)]"
          : "border-slate-200 hover:border-slate-300 hover:shadow-md",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={[
          "w-full flex items-start justify-between gap-4 text-start transition",
          isCompact ? "px-4 py-3" : "px-5 py-4",
        ].join(" ")}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span
            className={[
              "mt-0.5 inline-flex rounded-xl items-center justify-center border",
              isCompact
                ? "w-8 h-8 bg-blue-50 border-blue-100"
                : "w-9 h-9 bg-blue-50 border-blue-100",
            ].join(" ")}
          >
            <Icon className="w-4 h-4 text-blue-700" aria-hidden="true" />
          </span>

          <div>
            <h3
              className={[
                "font-extrabold text-slate-900 leading-snug",
                isCompact ? "text-sm" : "text-sm sm:text-base",
              ].join(" ")}
            >
              {question}
            </h3>

            {/* مختصر */}
            {short ? (
              <p
                className={[
                  "mt-1 text-slate-600 leading-relaxed",
                  isCompact ? "text-[13px]" : "text-sm",
                ].join(" ")}
              >
                {short}
              </p>
            ) : null}
          </div>
        </div>

        <ChevronDown
          className={[
            "w-5 h-5 text-slate-500 transition-transform duration-300 mt-1",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {/* تفاصيل إضافية */}
      <div
        className={[
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden px-5 pb-4">
          {details ? (
            <>
              <button
                type="button"
                onClick={() => setMore((v) => !v)}
                className="mt-1 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-blue-800 transition"
              >
                {dir === "rtl"
                  ? more
                    ? "إخفاء التفاصيل"
                    : "تفاصيل أكثر"
                  : more
                  ? "Hide details"
                  : "More details"}
              </button>

              <div
                className={[
                  "grid transition-all duration-300 ease-in-out",
                  more
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden text-slate-600 text-sm leading-relaxed">
                  {details}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
