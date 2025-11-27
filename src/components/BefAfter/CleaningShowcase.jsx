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

  // نصوص الهيدر
  const title =
    t?.cleaningShowcaseTitle ||
    (isRTL ? "معرض نتائج التنظيف" : "Cleaning results gallery");

  const subtitle =
    t?.cleaningShowcaseSubtitle ||
    (isRTL
      ? "لقطات حقيقية من شغلنا – اسحب وشوف بنفسك كيف كان وكيف صار."
      : "Real work from our clients – swipe and see the before/after yourself.");

  const chips = isRTL
    ? [
        { key: "cars", label: "سيارات" },
        { key: "sofa", label: "كنب وفرش" },
        { key: "beforeafter", label: "قبل / بعد" },
        { key: "rugs", label: "سجاد" },
      ]
    : [
        { key: "cars", label: "Cars" },
        { key: "sofa", label: "Upholstery" },
        { key: "beforeafter", label: "Before / After" },
        { key: "rugs", label: "Rugs" },
      ];

  return (
    <section
      id="cleaning-showcase"
      className="max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-12"
    >
      {/* الهيدر المحسَّن */}
      <header className="text-center mb-6 sm:mb-8">
        {/* بادج بسيطة فوق العنوان */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100/80 dark:border-blue-500/30 bg-white/90 dark:bg-slate-900/70 px-3 py-1 shadow-sm text-[11px] sm:text-xs text-blue-700 dark:text-blue-200 mb-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-300" />
          <span>{isRTL ? "شاهد نماذج من شغلنا" : "A glimpse of our work"}</span>
        </div>

        {/* العنوان */}
        <h2 className="text-[clamp(20px,4.6vw,32px)] font-extrabold tracking-tight text-blue-900 dark:text-blue-200">
          {title}
        </h2>

        {/* الوصف */}
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed max-w-[44ch] mx-auto text-[clamp(12px,3.1vw,15px)]">
          {subtitle}
        </p>

        {/* شِبسات الأنواع */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {chips.map((chip) => {
            const isHighlight = chip.key === "beforeafter";
            return (
              <span
                key={chip.key}
                className={[
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] sm:text-xs",
                  "transition-transform duration-150",
                  isHighlight
                    ? "bg-gradient-to-l from-blue-600 to-blue-500 text-white shadow-md"
                    : "border border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-white/5 text-slate-700 dark:text-slate-100 shadow-sm",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full",
                    isHighlight ? "bg-emerald-300" : "bg-emerald-500/90",
                  ].join(" ")}
                />
                <span>{chip.label}</span>
              </span>
            );
          })}
        </div>
      </header>

      {/* التبويبات */}
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
            <EmptyState
              text={isRTL ? "لا صور للسيارات حالياً" : "No car images yet"}
            />
          )}
        </Panel>

        <Panel id="sofa" active={active}>
          {sofaPairs.length ? (
            <BeforeAfterCarousel items={sofaPairs} />
          ) : (
            <EmptyState
              text={isRTL ? "لا صور قبل/بعد حالياً" : "No before/after items"}
            />
          )}
        </Panel>

        <Panel id="rugs" active={active}>
          {rugsImages.length ? (
            <SimpleSlider items={rugsImages} />
          ) : (
            <EmptyState
              text={isRTL ? "لا صور للسجاد حالياً" : "No rug images yet"}
            />
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
