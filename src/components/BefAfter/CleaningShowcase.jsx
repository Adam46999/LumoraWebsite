// src/components/BefAfter/CleaningShowcase.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

export default function CleaningShowcase({
  carsImages = [],
  rugsImages = [], // موجود بس حالياً مش مستخدم
  sofaPairs = [],
  defaultTab = "sofa",
}) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";
  const [active, setActive] = useState(defaultTab);

  const bootedRef = useRef(false);

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
    }),
    [carsImages.length, sofaPairs.length]
  );

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const urls = [
      ...carsImages.map((i) => i?.src).filter(Boolean),
      ...sofaPairs.flatMap((p) => [p?.before, p?.after]).filter(Boolean),
    ];

    urls.slice(0, 10).forEach((u) => {
      const img = new Image();
      img.src = u;
    });
  }, [carsImages, sofaPairs]);

  return (
    <section
      id="cleaning-showcase"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Premium header (same hierarchy as Services) */}
      <header className="text-center mb-6 sm:mb-8">
        {/* نفس badge تبع الخدمات */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span>{isRTL ? "قبل / بعد" : "Before / After"}</span>
        </div>

        {/* نفس مقاس العنوان تبع الخدمات (لا تكبير) */}
        <h2 className="mt-4 text-[clamp(22px,4.6vw,36px)] font-extrabold tracking-tight text-slate-900">
          {isRTL ? (
            <>
              شاهد نتائجنا <span className="text-blue-600">بالصور</span>
            </>
          ) : (
            <>
              See our results <span className="text-blue-600">in photos</span>
            </>
          )}
        </h2>

        {/* نفس underline تبع الخدمات (قصير وأنيق) */}
        <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-blue-600" />

        {/* ساب تايتل بدون تعقيد */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {isRTL ? "صور حقيقية. فرق واضح." : "Real photos. Clear difference."}
        </p>
      </header>

      {/* Tabs */}
      <CleaningTabs
        lang={lang}
        active={active}
        onChange={setActive}
        counts={counts}
        labels={{
          sofa: isRTL ? "كنب" : lang === "he" ? "ספה" : "Sofa",
          cars: isRTL ? "سيارة" : lang === "he" ? "רכב" : "Car",
        }}
        disableEmpty={true}
        sticky={false}
        compactOnMobile={true}
        className="mb-5 sm:mb-7"
      />

      {/* Content card */}
      <div className="mx-auto max-w-5xl rounded-3xl bg-white border border-slate-200 shadow-sm p-4 sm:p-6">
        <Panel id="sofa" active={active}>
          {sofaPairs.length ? (
            <BeforeAfterCarousel pairs={sofaPairs} hideDescription />
          ) : (
            <EmptyState
              text={isRTL ? "لا يوجد صور كنب حالياً." : "No sofa results yet."}
            />
          )}
        </Panel>

        <Panel id="cars" active={active}>
          {carsImages.length ? (
            <CarSlider items={carsImages} />
          ) : (
            <EmptyState
              text={
                isRTL ? "لا يوجد صور سيارات حالياً." : "No car results yet."
              }
            />
          )}
        </Panel>
      </div>
    </section>
  );
}

function Panel({ id, active, children }) {
  const isActive = active === id;
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-hidden={isActive ? "false" : "true"}
      className={isActive ? "block" : "hidden"}
    >
      {children}
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="w-full py-10 sm:py-14 flex flex-col items-center justify-center text-slate-500">
      <div className="w-full max-w-3xl grid grid-cols-3 gap-3 mb-4 px-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-xl bg-slate-200/70 animate-pulse"
          />
        ))}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
