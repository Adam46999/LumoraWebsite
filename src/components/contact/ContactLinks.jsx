// src/components/contact/ContactLinks.jsx
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactLinks() {
  const { t } = useLanguage();

  const cardClass =
    "group w-72 sm:w-80 h-20 flex items-center justify-between px-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200";

  const iconWrapper =
    "w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition";

  return (
    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
      <a
        href="tel:+972543075619"
        className={cardClass}
        aria-label={t.contactCallNow}
      >
        <span className="text-gray-800 font-semibold text-base">
          {t.contactCallNow}
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
        aria-label={t.contactMapLocation}
      >
        <span className="text-gray-800 font-semibold text-base">
          {t.contactMapLocation}
        </span>
        <div className={iconWrapper}>
          <MapPin className="w-5 h-5" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
}
