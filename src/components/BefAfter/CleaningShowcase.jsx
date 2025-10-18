// src/components/BefAfter/CleaningShowcase.jsx
import { useMemo, useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import SimpleSlider from "../slider/SimpleSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

/**
 * (8) Prefetch: عند تغيير التبويب، نجهّز صور التبويب التالي بالخفاء.
 * يشمل:
 *  - carsImages: [{src,...}]
 *  - rugsImages: [{src,...}]
 *  - sofaPairs:  [{before, after}]
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

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
      rugs: rugsImages.length,
    }),
    [carsImages.length, sofaPairs.length, rugsImages.length]
  );

  // ترتيب التبويبات
  const allTabs = useMemo(
    () => ["cars", "sofa", "rugs"].filter((id) => counts[id] > 0),
    [counts]
  );

  // (8) Prefetch صور التبويب التالي
  useEffect(() => {
    if (!allTabs.length) return;
    const idx = allTabs.indexOf(active);
    if (idx === -1) return;
    const nextId = allTabs[(idx + 1) % allTabs.length];

    const urls = getTabImageUrls(nextId, { carsImages, rugsImages, sofaPairs });
    urls.slice(0, 12).forEach((src) => {
      // حدّ أعلى معقول
      if (!src) return;
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
    });
  }, [active, allTabs, carsImages, rugsImages, sofaPairs]);

  const title =
    t?.cleaningShowcaseTitle ||
    (isRTL ? "شوف الفرق بنفسك" : "See the difference");
  const subtitle =
    t?.cleaningShowcaseSubtitle ||
    (isRTL
      ? "استعرض أقسام التنظيف بالصور والنتائج قبل وبعد."
      : "Browse cleaning sections with photos and before/after results.");

  return (
    <section id="cleaning-showcase" className="max-w-6xl mx-auto px-4 py-10">
      {/* العنوان */}
      <header className="text-center mb-4 sm:mb-6">
        <h2 className="text-[clamp(20px,4.5vw,32px)] font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-1 sm:mt-2 text-gray-600 max-w-2xl mx-auto text-[clamp(12px,3.5vw,16px)]">
          {subtitle}
        </p>
      </header>

      {/* التبويبات */}
      <CleaningTabs
        lang={lang}
        active={active}
        onChange={setActive}
        counts={counts}
        labels={{
          cars: t?.carsTabLabel || (isRTL ? "غسيل السيارات" : "Car Wash"),
          sofa:
            t?.sofaTabLabel || (isRTL ? "تنظيف الكنب والفرش" : "Upholstery"),
          rugs: t?.rugsTabLabel || (isRTL ? "تنظيف السجاد" : "Rugs Cleaning"),
        }}
        disableEmpty={true}
        sticky={true}
        compactOnMobile={true}
        className="mb-3 sm:mb-4"
      />

      {/* المحتوى */}
      <div className="mt-2" dir={isRTL ? "rtl" : "ltr"}>
        <Panel id="cars" active={active}>
          {carsImages.length ? (
            <CarSlider items={carsImages} />
          ) : (
            <EmptyState text={isRTL ? "لا صور cars متاحة" : "No car images"} />
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

function Panel({ id, active, children }) {
  const hidden = active !== id;
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={hidden}
      className={hidden ? "" : "animate-fade-in"}
    >
      {!hidden && children}
    </div>
  );
}

function EmptyState({ text = "No items" }) {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-gray-500">
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

/* ===== Helpers ===== */
function getTabImageUrls(tabId, { carsImages, rugsImages, sofaPairs }) {
  if (tabId === "cars") {
    return carsImages.map((i) => i?.src).filter(Boolean);
  }
  if (tabId === "rugs") {
    return rugsImages.map((i) => i?.src).filter(Boolean);
  }
  if (tabId === "sofa") {
    const arr = [];
    sofaPairs.forEach((p) => {
      if (p?.before) arr.push(p.before);
      if (p?.after) arr.push(p.after);
    });
    return arr;
  }
  return [];
}
