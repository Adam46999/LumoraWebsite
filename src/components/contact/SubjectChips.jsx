import {
  Tag,
  Info,
  CalendarCheck,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useRef, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function SubjectChips({
  id = "subject",
  label = "موضوع",
  value,
  onChange,
  options,
  error,
  required = false,
  isRTL = true,
}) {
  const { t, lang } = useLanguage();
  const rootRef = useRef(null);

  // ✅ helper ترجمة خفيف + fallback
  const tr = useCallback(
    (key, ar, en, he) => {
      const v = t?.[key];
      if (typeof v === "string" && v.trim()) return v;
      if (lang === "he") return he ?? en ?? ar;
      if (lang === "en") return en ?? ar ?? he;
      return ar ?? en ?? he;
    },
    [t, lang]
  );

  const computedLabel = useMemo(() => {
    // ✅ لا نكسر prop label
    if (typeof label === "string" && label.trim()) return label;
    return tr("contactSubjectLabel", "موضوع", "Subject", "נושא");
  }, [label, tr]);

  const aria = useMemo(() => {
    return tr(
      "contactSubjectA11y",
      "اختر موضوع رسالتك",
      "Choose your message topic",
      "בחר נושא להודעה"
    );
  }, [tr]);

  const computedOptions = useMemo(() => {
    // ✅ إذا جاي options من فوق: استخدمه زي ما هو (ما نكسر)
    if (Array.isArray(options) && options.length) return options;

    return [
      {
        value: "inquiry",
        label: tr("contactSubjectInquiry", "استفسار", "Inquiry", "שאלה"),
        icon: Info,
      },
      {
        value: "booking",
        label: tr("contactSubjectBooking", "حجز", "Booking", "הזמנה"),
        icon: CalendarCheck,
      },
      {
        value: "complaint",
        label: tr("contactSubjectComplaint", "شكوى", "Complaint", "תלונה"),
        icon: AlertTriangle,
      },
      {
        value: "other",
        label: tr("contactSubjectOther", "أخرى", "Other", "אחר"),
        icon: MoreHorizontal,
      },
    ];
  }, [options, tr]);

  const sidePad = isRTL ? "pr-11 text-right" : "pl-11 text-left";
  const iconPos = isRTL ? "right-2.5" : "left-2.5";

  // أسهم لوحة المفاتيح
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
        {computedLabel} {required && <span className="text-rose-500">*</span>}
      </label>

      <div
        className={`relative w-full rounded-xl border ${
          error ? "border-rose-300" : "border-gray-200"
        } bg-white ${sidePad}`}
      >
        <span
          className={`absolute ${iconPos} top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-[26px] h-[26px] rounded-lg bg-blue-50 text-blue-600 border border-blue-100`}
        >
          <Tag className="w-[18px] h-[18px]" aria-hidden="true" />
        </span>

        <div
          ref={rootRef}
          role="radiogroup"
          aria-label={aria}
          className="w-full px-2.5 sm:px-3 py-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {computedOptions.map(({ value: val, label: text, icon: Icon }) => {
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
                className={`inline-flex items-center justify-center gap-1.5 h-12 sm:h-12 px-3 rounded-lg border text-[14px] font-medium
                  ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-800 border-gray-200 hover:border-blue-400"
                  }
                  transition duration-150 active:scale-[.98]`}
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
