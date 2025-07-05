import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-gray-50 py-24 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {t.heroTitle || "عنوان تجريبي"} {/* إذا الترجمة ناقصة */}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t.heroSubtitle || "وصف قصير للخدمة المقدمة بلغة المستخدم"}
        </p>
        <a
          href="#services"
          className="inline-block bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
        >
          {t.heroButton || "احجز الآن"}
        </a>
      </div>
    </section>
  );
}
