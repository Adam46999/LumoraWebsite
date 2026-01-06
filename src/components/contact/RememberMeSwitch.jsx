import { useLanguage } from "../../context/LanguageContext";
import { useCallback } from "react";

export default function RememberMeSwitch({ checked, onChange, isRTL = true }) {
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

  const label = tr(
    "contactRememberMe",
    "تذكّر بياناتي",
    "Remember my details",
    "זכור את הפרטים שלי"
  );

  return (
    <label className="inline-flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span
        className="
          w-10 h-6 rounded-full bg-gray-200 relative transition
          peer-checked:bg-blue-500
          after:content-[''] after:absolute after:top-1 after:left-1
          after:w-4 after:h-4 after:bg-white after:rounded-full after:transition
          peer-checked:after:translate-x-4
        "
        aria-hidden="true"
      />

      <span>{label}</span>
    </label>
  );
}
