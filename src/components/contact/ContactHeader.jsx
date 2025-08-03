import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-12 max-w-xl mx-auto animate-fade-in">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        <span className="text-blue-600">{t.contactTitleSpan}</span>{" "}
        {t.contactTitle}
      </h2>
      <p className="mt-4 text-gray-600 text-sm sm:text-base">
        {t.contactSubtitle}
      </p>
    </div>
  );
}
