// src/components/faq/FAQSection.jsx
import { useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FAQ_DATA } from "./faqData";
import FAQList from "./FAQList";

export default function FAQSection() {
  const { lang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";
  const dir = isRTL ? "rtl" : "ltr";
  const items = FAQ_DATA[lang] || FAQ_DATA.en;

  const t = useMemo(() => {
    if (lang === "ar") {
      return {
        title: "الأسئلة الشائعة",
        subtitle: "إجابات واضحة على أهم الأسئلة قبل طلب خدمة التنظيف.",
        showLess: "عرض أقل",
        showAll: "عرض كل الأسئلة",
        showMoreWithCount: (n) => `عرض ${n} أسئلة إضافية`,
      };
    }

    if (lang === "he") {
      return {
        title: "שאלות נפוצות",
        subtitle: "תשובות ברורות לשאלות החשובות לפני הזמנת שירות ניקיון.",
        showLess: "הצג פחות",
        showAll: "הצג את כל השאלות",
        showMoreWithCount: (n) => `הצג עוד ${n}`,
      };
    }

    return {
      title: "Frequently Asked Questions",
      subtitle:
        "Clear answers to the most important questions before requesting a cleaning service.",
      showLess: "Show less",
      showAll: "Show all questions",
      showMoreWithCount: (n) => `Show ${n} more`,
    };
  }, [lang]);

  return (
    <section
      id="faq"
      dir={dir}
      className="mx-auto max-w-5xl scroll-mt-[calc(var(--app-topbar-h,72px)+16px)] px-4 py-14 sm:px-6 sm:py-16"
    >
      <header className="mb-7 text-center sm:mb-9">
        <div className="inline-flex items-center justify-center rounded-[28px] border border-slate-200 bg-white px-6 py-3 shadow-sm sm:px-10 sm:py-4">
          <h2 className="text-[clamp(20px,4vw,34px)] font-extrabold text-blue-600">
            {t.title}
          </h2>
        </div>

        <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-blue-600" />

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          {t.subtitle}
        </p>
      </header>

      <FAQList
        items={items}
        dir={dir}
        variant="compact"
        visibleMobile={items.length}
        visibleDesktop={items.length}
        showAll
        onToggleShowAll={() => {}}
        t={t}
      />
    </section>
  );
}
