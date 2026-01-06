import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useCallback } from "react";

export default function ContactLinks() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

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

  const callNow = tr("contactCallNow", "اتصل الآن", "Call now", "התקשר עכשיו");
  const mapLocation = tr(
    "contactMapLocation",
    "الموقع على الخريطة",
    "View location",
    "פתח מיקום"
  );

  const cardClass =
    "group w-full max-w-[320px] h-16 sm:h-20 flex items-center justify-between px-5 rounded-2xl sm:rounded-3xl bg-white shadow hover:shadow-lg transition border border-gray-200";

  const iconWrapper =
    "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition";

  return (
    <div
      className="mt-10 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <a href="tel:+972543075619" className={cardClass} aria-label={callNow}>
        <span className="text-gray-800 font-semibold text-sm sm:text-base">
          {callNow}
        </span>
        <div className={iconWrapper}>
          <Phone className="w-5 h-5" aria-hidden="true" />
        </div>
      </a>

      <a
        href="https://waze.com/ul?ll=32.9535,35.3072"
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        aria-label={mapLocation}
      >
        <span className="text-gray-800 font-semibold text-sm sm:text-base">
          {mapLocation}
        </span>
        <div className={iconWrapper}>
          <MapPin className="w-5 h-5" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
}
