// ContactHeader.jsx
import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-20 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
          {t.contactTitleSpan}
        </span>{" "}
        {t.contactTitle}
      </h2>
      <p className="mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
        {t.contactSubtitle}
      </p>
    </div>
  );
}
