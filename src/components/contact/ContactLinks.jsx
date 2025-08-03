import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactLinks() {
  const { t } = useLanguage();

  return (
    <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
      {/* زر الاتصال */}
      <a
        href="tel:+972543075619"
        className="group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl bg-white shadow hover:scale-105 transition"
      >
        <span className="text-gray-800 font-semibold text-base">
          {t.contactCallNow}
        </span>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Phone className="w-5 h-5" />
        </div>
      </a>

      {/* زر الموقع */}
      <a
        href="https://waze.com/ul?ll=32.9535,35.3072"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl bg-white shadow hover:scale-105 transition"
      >
        <span className="text-gray-800 font-semibold text-base">
          {t.contactMapLocation}
        </span>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <MapPin className="w-5 h-5" />
        </div>
      </a>
    </div>
  );
}
