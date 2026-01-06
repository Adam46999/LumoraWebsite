import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

const SLIDER_SPEED = 400;

export default function CleaningShowcase({
  carsImages = [],
  rugsImages = [], // (موجودة عندك - ما غيرنا استخدامها حتى ما نخرب شيء)
  sofaPairs = [],
  defaultTab = "sofa",
}) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";
  const [active, setActive] = useState(defaultTab);
  const bootedRef = useRef(false);

  const tr = useCallback(
    (key, ar, en, he) => {
      const v = t?.[key];
      if (typeof v === "string" && v.trim()) return v;
      if (lang === "he") return he ?? en ?? ar;
      if (lang === "en") return en ?? ar ?? he;
      return ar ?? en ?? he;
    },
    [t, lang]
  );

  const counts = useMemo(
    () => ({
      cars: carsImages.length,
      sofa: sofaPairs.length,
    }),
    [carsImages.length, sofaPairs.length]
  );

  const activeLabel = useMemo(() => {
    if (active === "cars") return tr("tab_cars", "السيارات", "Cars", "רכב");
    return tr("tab_sofa", "الكنب", "Sofa", "ספה");
  }, [active, tr]);

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

  const titleLead = tr(
    "showcase_titleLead",
    "شاهد نتائجنا",
    "See our results",
    "ראה את התוצאות שלנו"
  );
  const titleEmph = tr("showcase_titleEmph", "بالصور", "in photos", "בתמונות");
  const trustLine = tr(
    "showcase_trustLine",
    "صور حقيقية • بدون فلاتر • نتائج واضحة",
    "Real photos • No filters • Clear results",
    "תמונות אמיתיות • בלי פילטרים • תוצאות ברורות"
  );

  return (
    <section
      id="cleaning-showcase"
      className="relative py-14 sm:py-16 bg-white border-y border-slate-200"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-6">
          <div className="flex justify-center">
            <h2
              className="
                inline-block
                text-[clamp(22px,4.5vw,34px)]
                font-extrabold tracking-tight
                text-slate-900
                px-7 py-3
                rounded-2xl
                bg-white
                border border-slate-200
                shadow-sm
              "
            >
              {titleLead} <span className="text-blue-600">{titleEmph}</span>
              <span className="text-slate-400 mx-2">—</span>
              <span className="text-slate-700">{activeLabel}</span>
            </h2>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-slate-500">{trustLine}</p>
        </header>

        <CleaningTabs
          lang={lang}
          active={active}
          onChange={setActive}
          counts={counts}
          labels={{
            sofa: tr("tab_sofa_short", "كنب", "Sofa", "ספה"),
            cars: tr("tab_cars_short", "سيارة", "Car", "רכב"),
          }}
          disableEmpty
          sticky={false}
          compactOnMobile
          className="mb-4"
        />

        <div className="mx-auto max-w-5xl mt-4">
          <Panel id="sofa" active={active}>
            {sofaPairs.length ? (
              <BeforeAfterCarousel
                pairs={sofaPairs}
                hideDescription
                speed={SLIDER_SPEED}
                showCounter
              />
            ) : (
              <EmptyState
                text={tr(
                  "empty_sofa",
                  "لا يوجد صور كنب حالياً.",
                  "No sofa results yet.",
                  "אין עדיין תמונות ספה."
                )}
                soon={tr(
                  "empty_soon",
                  "قريبًا المزيد.",
                  "More coming soon.",
                  "עוד בקרוב."
                )}
              />
            )}
          </Panel>

          <Panel id="cars" active={active}>
            {carsImages.length ? (
              <CarSlider items={carsImages} speed={SLIDER_SPEED} showCounter />
            ) : (
              <EmptyState
                text={tr(
                  "empty_cars",
                  "لا يوجد صور سيارات حالياً.",
                  "No car results yet.",
                  "אין עדיין תמונות רכב."
                )}
                soon={tr(
                  "empty_soon",
                  "قريبًا المزيد.",
                  "More coming soon.",
                  "עוד בקרוב."
                )}
              />
            )}
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({ id, active, children }) {
  const isActive = active === id;
  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      className={isActive ? "block" : "hidden"}
    >
      {children}
    </div>
  );
}

function EmptyState({ text, soon }) {
  return (
    <div className="w-full py-12 flex flex-col items-center text-slate-500">
      <div className="w-full max-w-3xl grid grid-cols-3 gap-3 mb-4 px-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-xl bg-slate-200/70 animate-pulse"
          />
        ))}
      </div>
      <p className="text-sm">
        {text} <span className="text-slate-700 font-semibold">{soon}</span>
      </p>
    </div>
  );
}
