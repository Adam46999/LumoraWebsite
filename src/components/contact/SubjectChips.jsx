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
  onChange, // onChange({ target: { id, value } })
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

  // تنقّل الأسهم
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
        className={`relative w-full rounded-2xl border ${
          error ? "border-red-300" : "border-gray-200"
        } bg-white ${sidePad}`}
      >
        <Tag
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 text-blue-500/70 bg-white p-2 rounded-xl shadow-sm`}
          aria-hidden="true"
        />

        {/* شبكة 2×2 على الموبايل */}
        <div
          ref={scrollerRef}
          role="radiogroup"
          className="w-full min-w-0 px-3 sm:px-0 py-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4"
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
                dir={isRTL ? "rtl" : "ltr"}
                className={`
                  inline-flex items-center justify-center gap-1.5 min-h-9
                  px-3.5 h-11 sm:h-9 rounded-xl border text-[clamp(12px,1.4vw,14px)] transition-all
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 text-white border-blue-600 ring-1 ring-white/20 shadow-[0_6px_16px_rgba(59,130,246,0.24)]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
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
        className={`text-xs sm:text-[12px] ${
          error ? "text-red-600" : "text-gray-600"
        } mt-1.5`}
      >
        {error ? error : helper}
      </div>
    </div>
  );
}
