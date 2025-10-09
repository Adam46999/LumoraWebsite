// src/components/contact/SubjectChips.jsx
import {
  Tag,
  Info,
  CalendarCheck,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

/**
 * Chip selector احترافي لاختيار موضوع الرسالة
 * - a11y: role="radiogroup" + role="radio" + أسهم الكيبورد
 * - RTL-aware
 */
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
  const groupRef = useRef(null);
  const sidePad = isRTL ? "pr-14 text-right" : "pl-14 text-left";
  const iconPos = isRTL ? "right-4" : "left-4";

  // وصف ديناميكي تحت المجموعة
  const helper = useMemo(() => {
    switch (value) {
      case "inquiry":
        return "سؤال عام أو طلب معلومات.";
      case "booking":
        return "احجز موعدًا/خدمة بالوقت المناسب لك.";
      case "complaint":
        return "نعتذر مسبقًا—سنحلّها بسرعة.";
      case "other":
        return "اختر إن لم تجد ما يناسبك.";
      default:
        return "اختر أقرب موضوع لطلبك.";
    }
  }, [value]);

  // تنقّل الأسهم
  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;
    const handler = (e) => {
      const radios = Array.from(el.querySelectorAll('[role="radio"]'));
      if (!radios.length) return;
      const i = Math.max(
        0,
        radios.findIndex((r) => r.getAttribute("aria-checked") === "true")
      );
      const dir =
        e.key === "ArrowRight" || e.key === "ArrowDown"
          ? 1
          : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
      if (!dir) return;
      e.preventDefault();
      const next = (i + dir + radios.length) % radios.length;
      radios[next].focus();
      onChange({ target: { id, value: radios[next].dataset.value } });
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [id, onChange]);

  return (
    <div className="sm:col-span-2 flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm text-gray-700 font-semibold tracking-wide"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Divider خفيف يوازن مسار النظر */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent my-1" />

      {/* حاوية زجاجية متّسقة مع باقي الحقول */}
      <div
        className={`relative rounded-2xl border ${
          error ? "border-red-300" : "border-gray-200"
        } bg-white/70 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] ${sidePad}`}
      >
        <Tag
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 text-blue-500/70 bg-white/70 p-2 rounded-xl shadow-sm`}
          aria-hidden="true"
        />

        <div
          ref={groupRef}
          role="radiogroup"
          aria-labelledby={`${id}-label`}
          className="flex flex-wrap gap-2 py-2"
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
                className={`inline-flex items-center gap-1.5 px-3.5 h-9 rounded-xl border text-sm transition-all
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 text-white border-blue-600 ring-1 ring-white/20 shadow-[0_6px_16px_rgba(59,130,246,0.28)]"
                      : "bg-white/60 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-white"
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 active:scale-[.98]`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "opacity-95" : "opacity-70"
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

      {/* وصف ديناميكي/خطأ */}
      <div
        className={`text-xs ${error ? "text-red-600" : "text-gray-600"} mt-1.5`}
      >
        {error ? error : helper}
      </div>
    </div>
  );
}
