// src/components/contact/PreferredChannelPicker.jsx
import { Phone, MessageCircle, Shuffle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useCallback, useMemo } from "react";

export default function PreferredChannelPicker({
  value = "either",
  onChange,
  isRTL = true,
  label = "طريقة التواصل المفضّلة",
}) {
  const { t, lang } = useLanguage();

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

  const legend = useMemo(() => {
    // ✅ لا نكسر prop label: إذا انبعث label من فوق نستخدمه
    if (typeof label === "string" && label.trim()) return label;
    return tr(
      "contactPrefTitle",
      "طريقة التواصل المفضّلة",
      "Preferred contact method",
      "דרך יצירת קשר מועדפת"
    );
  }, [label, tr]);

  const options = useMemo(
    () => [
      {
        v: "phone",
        text: tr("contactPrefPhone", "اتصال", "Call", "שיחה"),
        Icon: Phone,
        theme: "blue",
      },
      {
        v: "whatsapp",
        text: tr("contactPrefWA", "واتساب", "WhatsApp", "וואטסאפ"),
        Icon: MessageCircle,
        theme: "emerald",
      },
      {
        v: "either",
        text: tr("contactPrefEither", "لا فرق", "Either", "לא משנה"),
        Icon: Shuffle,
        theme: "gray",
      },
    ],
    [tr]
  );

  const themeCls = (active, theme) => {
    if (!active) return "text-gray-700";

    if (theme === "emerald")
      return "text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-[0_8px_22px_rgba(16,185,129,.22)]";

    if (theme === "blue")
      return "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_8px_22px_rgba(59,130,246,.22)]";

    return "text-white bg-gradient-to-r from-zinc-600 to-gray-700 shadow-[0_8px_22px_rgba(17,24,39,.22)]";
  };

  return (
    <fieldset className="w-full" dir={isRTL ? "rtl" : "ltr"}>
      <legend className="text-sm font-semibold text-gray-800 mb-2">
        {legend}
      </legend>

      <div
        role="radiogroup"
        aria-label={legend}
        className="
          relative mx-auto w-full
          rounded-2xl bg-white border border-gray-200
          p-1 grid grid-cols-3 gap-1
        "
      >
        {options.map(({ v, text, Icon, theme }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(v)}
              className={[
                "h-11 sm:h-12 rounded-xl px-3 sm:px-4",
                "flex items-center justify-center gap-2 text-sm font-medium",
                "transition will-change-transform",
                "hover:shadow-md active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                themeCls(active, theme),
              ].join(" ")}
            >
              <Icon
                className={`w-4 h-4 ${active ? "opacity-95" : "opacity-80"}`}
                aria-hidden
              />
              <span>{text}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
