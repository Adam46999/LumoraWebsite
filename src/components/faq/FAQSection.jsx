// src/components/faq/FAQSection.jsx
import { useLanguage } from "../../context/LanguageContext";
import { FAQ_DATA } from "./faqData";
import FAQList from "./FAQList";

export default function FAQSection() {
  const { lang } = useLanguage();
  const items = FAQ_DATA[lang] || FAQ_DATA.en;
  const isRTL = lang === "ar" || lang === "he";

  return (
    <section
      id="faq"
      dir={isRTL ? "rtl" : "ltr"}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-14"
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h2 className="text-[clamp(22px,4.5vw,36px)] font-extrabold text-slate-900">
          {isRTL ? "أسئلة شائعة" : "Frequently Asked Questions"}
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          {isRTL
            ? "إجابات سريعة وواضحة لأكثر الأسئلة شيوعًا."
            : "Clear and quick answers to the most common questions."}
        </p>
      </header>

      <FAQList items={items} />
    </section>
  );
}
