// src/components/BefAfter/CleaningShowcase.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import SimpleSlider from "../slider/SimpleSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

/**
 * هذا الإصدار:
 * - يبقي كل التبويبات مركّبة (ready) ويبدّل العرض فقط عبر CSS (بدون unmount).
 * - Prefetch لكل الصور بحدّ أعلى معقول.
 * - تسميات قصيرة للتبويبات (سيارات | كنب-فرش | سجاد).
 */

export default function CleaningShowcase({
  carsImages = [],
  rugsImages = [],
  sofaPairs = [],
  defaultTab = "sofa",
}) {
  const { t, lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);
  const [active, setActive] = useState(defaultTab);
  const bootedRef = useRef(false); // لمنع تكرار الـ skeleton/التهيئة

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
      rugs: rugsImages.length,
    }),
    [carsImages.length, sofaPairs.length, rugsImages.length]
  );

  const allTabs = useMemo(
    () => ["cars", "sofa", "rugs"].filter((id) => counts[id] > 0),
    [counts]
  );

  // Prefetch لكل الصور (مرّة واحدة عند الإقلاع) — حد أعلى لحماية الذاكرة
  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const urls = [
      ...carsImages.map((i) => i?.src).filter(Boolean),
      ...rugsImages.map((i) => i?.src).filter(Boolean),
      ...sofaPairs.flatMap((p) => [p?.before, p?.after]).filter(Boolean),
    ]
      .slice(0, 36) // سقف منطقي
      .filter(Boolean);

    urls.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
    });
  }, [carsImages, rugsImages, sofaPairs]);

  const title =
    t?.cleaningShowcaseTitle ||
    (isRTL ? "شوف الفرق بنفسك" : "See the difference");
  const subtitle =
    t?.cleaningShowcaseSubtitle ||
    (isRTL
      ? "استعرض النتائج: سيارات، كنب-فرش (قبل/بعد)، وسجاد."
      : "Browse: cars, upholstery (before/after), and rugs.");

  return (
    <section
      id="cleaning-showcase"
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10"
    >
      {/* العنوان */}
      <header className="text-center mb-3 sm:mb-5">
        <h2 className="text-[clamp(18px,4.5vw,32px)] font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-1 sm:mt-2 text-gray-600 max-w-2xl mx-auto text-[clamp(12px,3.5vw,16px)]">
          {subtitle}
        </p>
      </header>

      {/* التبويبات — تسميات قصيرة */}
      <CleaningTabs
        lang={lang}
        active={active}
        onChange={setActive}
        counts={counts}
        labels={{
          cars: t?.carsShort || (isRTL ? "سيارات" : "Cars"),
          sofa: t?.sofaShort || (isRTL ? "كنب-فرش" : "Upholstery"),
          rugs: t?.rugsShort || (isRTL ? "سجاد" : "Rugs"),
        }}
        disableEmpty={true}
        sticky={true}
        compactOnMobile={true}
        className="mb-3 sm:mb-4"
      />

      {/* المحتوى — كل اللوحات مركّبة وجاهزة، نبدّل العرض فقط */}
      <div className="mt-2" dir={isRTL ? "rtl" : "ltr"}>
        <Panel id="cars" active={active}>
          {carsImages.length ? (
            <CarSlider items={carsImages} />
          ) : (
            <EmptyState text={isRTL ? "لا صور للسيارات" : "No car images"} />
          )}
        </Panel>

        <Panel id="sofa" active={active}>
          {sofaPairs.length ? (
            <BeforeAfterCarousel items={sofaPairs} />
          ) : (
            <EmptyState
              text={isRTL ? "لا صور قبل/بعد" : "No before/after items"}
            />
          )}
        </Panel>

        <Panel id="rugs" active={active}>
          {rugsImages.length ? (
            <SimpleSlider items={rugsImages} />
          ) : (
            <EmptyState text={isRTL ? "لا صور للسجاد" : "No rug images"} />
          )}
        </Panel>
      </div>
    </section>
  );
}

/** يبقي الأطفال Mounted دائمًا — يبدّل الرؤية فقط */
function Panel({ id, active, children }) {
  const isActive = active === id;
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      aria-hidden={isActive ? "false" : "true"}
      className={[
        // نخفي عبر CSS فقط — بدون إلغاء التركيب
        isActive ? "block animate-fade-in" : "hidden",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function EmptyState({ text = "No items" }) {
  return (
    <div className="w-full py-12 sm:py-16 flex flex-col items-center justify-center text-gray-500">
      {/* Skeleton بسيط */}
      <div className="w-full max-w-3xl grid grid-cols-3 gap-3 mb-3 px-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-xl bg-gray-200/70 animate-pulse"
          />
        ))}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
