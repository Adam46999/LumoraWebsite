// src/components/faq/FAQSection.jsx
import { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FAQ_DATA } from "./faqData";
import FAQList from "./FAQList";

export default function FAQSection() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";
  const dir = isRTL ? "rtl" : "ltr";
  const items = FAQ_DATA[lang] || FAQ_DATA.en;

  const [showAll, setShowAll] = useState(false);

  const t = useMemo(() => {
    if (lang === "ar") {
      return {
        title: "الأسئلة الشائعة",
        subtitle: "إجابات سريعة وواضحة تساعدك قبل الحجز.",
        showLess: "عرض أقل",
        showAll: "عرض كل الأسئلة",
        showMoreWithCount: (n) => `عرض ${n} أسئلة إضافية`,
      };
    }
    if (lang === "he") {
      return {
        title: "שאלות נפוצות",
        subtitle: "תשובות קצרות וברורות שיעזרו לפני הזמנה.",
        showLess: "הצג פחות",
        showAll: "הצג את כל השאלות",
        showMoreWithCount: (n) => `הצג עוד ${n}`,
      };
    }
    return {
      title: "FAQ",
      subtitle: "Quick, clear answers to help you before booking.",
      showLess: "Show less",
      showAll: "Show all questions",
      showMoreWithCount: (n) => `Show ${n} more`,
    };
  }, [lang]);

  return (
    <section
      id="faq"
      dir={dir}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-14 scroll-mt-[calc(var(--app-topbar-h,72px)+16px)]"
    >
      {/* Title style exactly like screenshot */}
      <header className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 rounded-[28px] bg-white border border-slate-200 shadow-sm">
          <h2 className="text-[clamp(20px,4vw,34px)] font-extrabold text-blue-600">
            {t.title}
          </h2>
        </div>

        <div className="w-24 h-[3px] bg-blue-600 rounded-full mx-auto mt-3" />

        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </header>

      {/* List */}
      <div className={showAll ? "min-h-[420px]" : ""}>
        <FAQList
          items={items}
          dir={dir}
          variant="compact"
          visibleMobile={3}
          visibleDesktop={5}
          showAll={showAll}
          onToggleShowAll={setShowAll}
          t={t}
        />
      </div>
    </section>
  );
}
