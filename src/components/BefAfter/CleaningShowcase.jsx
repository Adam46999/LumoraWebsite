// src/components/beforeAfter/CleaningShowcase.jsx
import { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import BeforeAfterCarousel from "./BeforeAfterCarousel";
// ✨ مهم: السلايدرات موجودة بـ src/components/slider/
import CarSlider from "../slider/CarSlider";
import SimpleSlider from "../slider/SimpleSlider";

const TABS = [
  { id: "cars", labelKey: "carsTabLabel", fallback: "غسيل السيارات" },
  { id: "sofa", labelKey: "sofaTabLabel", fallback: "تنظيف الكنب والفرش" },
  { id: "rugs", labelKey: "rugsTabLabel", fallback: "تنظيف السجاد" },
];

export default function CleaningShowcase({
  carsImages = [], // [{ src: "..." }, ...]
  rugsImages = [], // [{ src: "..." }, ...]
  sofaPairs = [], // [{ before: "...", after: "..." }, ...]
  defaultTab = "sofa", // "cars" | "sofa" | "rugs"
}) {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(defaultTab);

  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  return (
    <section id="cleaning-showcase" className="max-w-6xl mx-auto px-4 py-10">
      {/* شريط التبويبات */}
      <div
        className="relative w-full rounded-2xl p-1 bg-white/70 shadow-lg border border-gray-200 mx-auto mb-8"
        role="tablist"
        aria-label={t.cleaningTabsAria || "أقسام عرض التنظيف"}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="grid grid-cols-3 gap-1">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={[
                  "relative py-3 px-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-transparent text-gray-700 hover:bg-gray-50",
                ].join(" ")}
              >
                {t[tab.labelKey] || tab.fallback}
              </button>
            );
          })}
        </div>
      </div>

      {/* المحتوى */}
      <div className="mt-6">
        {/* السيارات - سلايدر صور */}
        <div
          role="tabpanel"
          id="panel-cars"
          aria-labelledby="tab-cars"
          hidden={active !== "cars"}
          className="animate-fade-in"
        >
          <CarSlider items={carsImages} />
        </div>

        {/* الكنب والفرش - Before/After */}
        <div
          role="tabpanel"
          id="panel-sofa"
          aria-labelledby="tab-sofa"
          hidden={active !== "sofa"}
          className="animate-fade-in"
        >
          <BeforeAfterCarousel items={sofaPairs} />
        </div>

        {/* السجاد - سلايدر صور */}
        <div
          role="tabpanel"
          id="panel-rugs"
          aria-labelledby="tab-rugs"
          hidden={active !== "rugs"}
          className="animate-fade-in"
        >
          <SimpleSlider items={rugsImages} />
        </div>
      </div>
    </section>
  );
}
