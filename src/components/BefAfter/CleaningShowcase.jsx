// src/components/BefAfter/CleaningShowcase.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import SimpleSlider from "../slider/SimpleSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

/**
 * يبقي كل التبويبات مركّبة ويبدّل العرض فقط عبر CSS.
 * Prefetch محدود للصور.
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
  const bootedRef = useRef(false);

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
      rugs: rugsImages.length,
    }),
    [carsImages.length, sofaPairs.length, rugsImages.length]
  );

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const urls = [
      ...carsImages.map((i) => i?.src).filter(Boolean),
      ...rugsImages.map((i) => i?.src).filter(Boolean),
      ...sofaPairs.flatMap((p) => [p?.before, p?.after]).filter(Boolean),
    ]
      .slice(0, 36)
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

  const subtitleFragment = t?.cleaningShowcaseSubtitle ? (
    t.cleaningShowcaseSubtitle
  ) : isRTL ? (
    <>
      <span>نتائجنا: سيارات</span>
      <span className="mx-1 text-gray-400">·</span>
      <span>كنب وفرش</span>
      <span className="mx-1 text-gray-400">·</span>
      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200 text-[12px]">
        قبل/بعد
      </span>
      <span className="mx-1 text-gray-400">·</span>
      <span>سجاد</span>
    </>
  ) : (
    <>
      <span>Our results: Cars</span>
      <span className="mx-1 text-gray-400">·</span>
      <span>Upholstery</span>
      <span className="mx-1 text-gray-400">·</span>
      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200 text-[12px]">
        before/after
      </span>
      <span className="mx-1 text-gray-400">·</span>
      <span>Rugs</span>
    </>
  );

  return (
    <section
      id="cleaning-showcase"
      className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10"
    >
      {/* الهيدر */}
      <header className="text-center mb-4 sm:mb-6">
        <h2 className="text-[clamp(18px,4.5vw,32px)] font-extrabold tracking-tight !text-slate-800 dark:!text-slate-100">
          {title}
        </h2>

        {/* فاصل بسيط */}
        <div className="mx-auto mt-2 h-px w-12 rounded-full bg-gray-200 dark:bg-white/10" />

        {/* وصف */}
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed max-w-[42ch] mx-auto text-[clamp(12px,3.5vw,16px)] font-normal">
          {subtitleFragment}
        </p>
      </header>

      {/* زيادة مسافة صغيرة قبل التبويبات */}
      <div className="mt-3 sm:mt-4">
        <CleaningTabs
          lang={lang}
          active={active}
          onChange={setActive}
          counts={counts}
          labels={{
            cars: t?.carsShort || (isRTL ? "سيارات" : "Cars"),
            sofa: t?.sofaShort || (isRTL ? "كنب وفرش" : "Upholstery"),
            rugs: t?.rugsShort || (isRTL ? "سجاد" : "Rugs"),
          }}
          disableEmpty={true}
          sticky={true}
          compactOnMobile={true}
          className="mb-4 sm:mb-6"
        />
      </div>

      {/* المحتوى */}
      <div className="mt-0" dir={isRTL ? "rtl" : "ltr"}>
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
      className={isActive ? "block animate-fade-in" : "hidden"}
    >
      {children}
    </div>
  );
}

function EmptyState({ text = "No items" }) {
  return (
    <div className="w-full py-12 sm:py-16 flex flex-col items-center justify-center text-gray-500">
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
