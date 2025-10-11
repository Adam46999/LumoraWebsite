import {
  Tag,
  Info,
  CalendarCheck,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function SubjectChips({
  id = "subject",
  label = "موضوع",
  value,
  onChange,
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
  const rootRef = useRef(null);
  const sidePad = isRTL ? "pr-12 text-right" : "pl-12 text-left";
  const iconPos = isRTL ? "right-2.5" : "left-2.5";

  // keyboard arrows
  useEffect(() => {
    const el = rootRef.current;
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
      onChange({ target: { id, value: chips[next].dataset.value } });
      chips[next].focus();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [id, onChange]);

  return (
    <div className="md:col-span-2 flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-800">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <div
        className={`relative w-full rounded-xl border ${
          error ? "border-rose-300" : "border-gray-300"
        } bg-white ${sidePad}`}
      >
        <span
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100`}
        >
          <Tag className="w-[18px] h-[18px]" aria-hidden="true" />
        </span>

        <div
          ref={rootRef}
          role="radiogroup"
          className="w-full px-2.5 sm:px-3 py-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4"
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
                className={`inline-flex items-center justify-center gap-1.5 h-11 sm:h-10 rounded-lg border text-[13px] sm:text-[14px] font-medium
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-600 shadow-[0_6px_18px_rgba(59,130,246,.18)]"
                      : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
                  }
                  transition-[transform,box-shadow,colors] duration-200 active:scale-[.98]`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "opacity-95" : "opacity-75"
                    }`}
                    aria-hidden="true"
                  />
                )}
                <span>{text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
