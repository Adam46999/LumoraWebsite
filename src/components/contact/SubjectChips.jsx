// src/components/contact/SubjectChips.jsx
import {
  Tag,
  Info,
  CalendarCheck,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

export default function SubjectChips({
  id = "subject",
  label = "موضوع الرسالة",
  value,
  onChange, // expect: onChange({ target: { id, value } })
  options = [
    { value: "inquiry", label: "استفسار", icon: Info },
    { value: "booking", label: "حجز", icon: CalendarCheck },
    { value: "complaint", label: "شكوى", icon: AlertTriangle },
    { value: "other", label: "أخرى", icon: MoreHorizontal },
  ],
  error,
  required = false,
  isRTL = true,
}) {
  const scrollerRef = useRef(null);
  const sidePad = isRTL ? "pr-12 text-right" : "pl-12 text-left";
  const iconPos = isRTL ? "right-3.5" : "left-3.5";

  const helper = useMemo(() => {
    switch (value) {
      case "inquiry":
        return "سؤال عام أو طلب معلومات.";
      case "booking":
        return "حجز موعد/خدمة.";
      case "complaint":
        return "نعتذر مسبقًا—سنحلّها سريعًا.";
      case "other":
        return "اختر إن لم تجد ما يناسبك.";
      default:
        return "اختر أقرب موضوع.";
    }
  }, [value]);

  // تنقل بالكيبورد + scroll إلى العنصر المختار
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onKey = (e) => {
      const chips = Array.from(el.querySelectorAll('[role="radio"]'));
      if (!chips.length) return;
      const i = Math.max(
        0,
        chips.findIndex((c) => c.getAttribute("aria-checked") === "true")
      );
      const dir =
        e.key === "ArrowRight" || e.key === "ArrowDown"
          ? 1
          : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
      if (!dir) return;
      e.preventDefault();
      const next = (i + dir + chips.length) % chips.length;
      chips[next].focus();
      onChange({ target: { id, value: chips[next].dataset.value } });
      chips[next].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [id, onChange]);

  return (
    <div className="md:col-span-2 flex flex-col gap-2">
      <label className="text-[clamp(12px,1.3vw,14px)] text-gray-700 font-semibold tracking-wide">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        className={`relative rounded-2xl border ${
          error ? "border-red-300" : "border-gray-200"
        } bg-white/70 backdrop-blur-md md:backdrop-blur-lg ${sidePad}`}
      >
        <Tag
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 text-blue-500/70 bg-white/80 p-2 rounded-xl shadow-sm`}
          aria-hidden="true"
        />

        {/* موبايل: تمرير أفقي + snap | دِسكتوب: grid */}
        <div
          ref={scrollerRef}
          role="radiogroup"
          className="
            overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal
            snap-x snap-mandatory md:snap-none
            -mx-3 md:mx-0 px-3 md:px-0 py-2.5
            flex md:grid gap-2 md:grid-cols-4
            scrollbar-none touch-pan-x
          "
        >
          {options.map(({ value: val, label: text, icon: Icon }) => {
            const active = value === val;
            return (
              <button
                key={val}
                type="button"
                role="radio"
                aria-checked={active ? "true" : "false"}
                data-value={val}
                onClick={() => onChange({ target: { id, value: val } })}
                className={`
                  inline-flex items-center gap-1.5 min-w-[88px]
                  px-3.5 h-11 md:h-9 rounded-xl border text-[clamp(12px,1.4vw,14px)] transition-all snap-center
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 text-white border-blue-600 ring-1 ring-white/20 shadow-[0_6px_16px_rgba(59,130,246,0.24)]"
                      : "bg-white/70 md:bg-white/60 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-white"
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 active:scale-[.98]
                `}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "opacity-95" : "opacity-75"
                    }`}
                    aria-hidden="true"
                  />
                )}
                <span className="font-medium">{text}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`text-xs md:text-[12px] ${
          error ? "text-red-600" : "text-gray-600"
        } mt-1.5`}
      >
        {error ? error : helper}
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar{display:none}
        @media (prefers-reduced-motion: reduce){ .snap-mandatory{scroll-behavior:auto} }
      `}</style>
    </div>
  );
}
