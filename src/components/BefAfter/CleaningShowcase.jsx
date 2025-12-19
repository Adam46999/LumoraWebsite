import { useMemo, useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

export default function CleaningShowcase({
  carsImages = [],
  rugsImages = [], // موجود بس حالياً مش مستخدم (ممكن ترجعله لاحقاً)
  sofaPairs = [],
}) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";
  const [active, setActive] = useState("sofa");

  const bootedRef = useRef(false);

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
      // rugs intentionally removed from UI
    }),
    [carsImages.length, sofaPairs.length]
  );

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const urls = [
      ...carsImages.map((i) => i?.src).filter(Boolean),
      ...sofaPairs.flatMap((p) => [p?.before, p?.after]).filter(Boolean),
      // rugs ignored
    ];

    urls.slice(0, 8).forEach((u) => {
      const img = new Image();
      img.src = u;
    });
  }, [carsImages, sofaPairs]);

  const title =
    t?.cleaningShowcaseTitle ||
    (isRTL ? "معرض نتائج التنظيف" : "Cleaning results gallery");

  const subtitle =
    t?.cleaningShowcaseSubtitle ||
    (isRTL
      ? "نتائج حقيقية — اسحب وشوف الفرق قبل/بعد."
      : "Real results — swipe to compare before & after.");

  return (
    <section
      id="cleaning-showcase"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ✅ هيدر بنفس روح الموقع */}
      <header className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
          <span>
            {isRTL ? "قبل / بعد — نتائج حقيقية" : "Before/After — real results"}
          </span>
        </div>

        <h2 className="mt-4 text-[clamp(20px,4.6vw,34px)] font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </header>

      {/* ✅ Tabs (بدون سجاد) */}
      <CleaningTabs
        lang={lang}
        active={active}
        onChange={setActive}
        counts={counts}
        labels={{
          sofa: isRTL ? "كنب" : "Sofa",
          cars: isRTL ? "سيارة" : "Car",
        }}
        disableEmpty={true}
        sticky={false}
        compactOnMobile={true}
        className="mb-5 sm:mb-7"
      />

      <div className="mt-0">
        <Panel id="sofa" active={active}>
          {sofaPairs.length ? (
            <BeforeAfterCarousel pairs={sofaPairs} />
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
    <div className="w-full py-12 sm:py-16 flex flex-col items-center justify-center text-slate-500">
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
