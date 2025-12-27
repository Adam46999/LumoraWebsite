// src/components/BefAfter/CleaningShowcase.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CleaningTabs from "./CleaningTabs";
import CarSlider from "../slider/CarSlider";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

const SLIDER_SPEED = 400;

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

  const activeLabel = useMemo(() => {
    if (active === "cars")
      return isRTL ? "السيارات" : lang === "he" ? "רכב" : "Cars";
    return isRTL ? "الكنب" : lang === "he" ? "ספה" : "Sofa";
  }, [active, isRTL, lang]);

  // ✅ Glow theme based on active tab (Premium + subtle)
  const glow = useMemo(() => {
    if (active === "cars") {
      return {
        // سيارات: sky/cyan
        top: "bg-sky-200/40",
        mid: "bg-cyan-200/25",
        accentText: "text-sky-600",
        dot: "bg-sky-600",
        underline: "bg-sky-600",
      };
    }
    // كنب: blue/indigo
    return {
      top: "bg-blue-200/40",
      mid: "bg-indigo-200/25",
      accentText: "text-blue-600",
      dot: "bg-blue-600",
      underline: "bg-blue-600",
    };
  }, [active]);

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
      className="relative py-16 sm:py-20 bg-slate-100/60 border-y border-slate-200/60 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ✅ Dynamic glow that changes with the tab (smooth & elegant) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={[
            "absolute top-6 left-1/2 -translate-x-1/2",
            "w-[760px] h-[340px] rounded-full blur-3xl",
            "transition-all duration-500 ease-out",
            glow.top,
            active === "cars"
              ? "translate-y-1 opacity-95"
              : "translate-y-0 opacity-95",
          ].join(" ")}
        />
        <div
          className={[
            "absolute top-32 left-1/2 -translate-x-1/2",
            "w-[560px] h-[260px] rounded-full blur-3xl",
            "transition-all duration-500 ease-out",
            glow.mid,
            active === "cars"
              ? "translate-y-0 opacity-90"
              : "translate-y-1 opacity-90",
          ].join(" ")}
        />
        {/* subtle top vignette */}
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-white/55 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
            <span
              className={[
                "inline-block h-1.5 w-1.5 rounded-full",
                glow.dot,
              ].join(" ")}
            />
            <span>{isRTL ? "قبل / بعد" : "Before / After"}</span>
          </div>

          {/* title in box */}
          <div className="mt-4 flex justify-center">
            <h2
              className="
                inline-block
                text-[clamp(22px,4.6vw,36px)]
                font-extrabold tracking-tight
                text-slate-900
                px-7 py-3
                rounded-2xl
                bg-white/85
                border border-slate-200
                shadow-sm
                backdrop-blur-md
              "
            >
              {isRTL ? (
                <>
                  شاهد نتائجنا <span className={glow.accentText}>بالصور</span>
                  <span className="text-slate-400 mx-2">—</span>
                  <span className="text-slate-700">{activeLabel}</span>
                </>
              ) : (
                <>
                  See our results{" "}
                  <span className={glow.accentText}>in photos</span>
                  <span className="text-slate-400 mx-2">—</span>
                  <span className="text-slate-700">{activeLabel}</span>
                </>
              )}
            </h2>
          </div>

          {/* underline */}
          <div
            className={[
              "mx-auto mt-4 h-[3px] w-10 rounded-full",
              glow.underline,
            ].join(" ")}
          />

          {/* subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "صور حقيقية، بدون فلاتر، تبيّن الفرق قبل وبعد التنظيف."
              : "Real photos — no filters — showing the difference before and after cleaning."}
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
          className="mb-3 sm:mb-4"
        />

        {/* hint */}
        <p className="text-center text-xs sm:text-sm text-slate-500">
          {isRTL
            ? "اسحب للتنقل • اضغط للتكبير"
            : "Swipe to browse • Tap to zoom"}
        </p>

        {/* Content card */}
        <div className="mx-auto max-w-5xl mt-6 rounded-3xl bg-white/95 border border-slate-200 shadow-[0_28px_70px_-30px_rgba(2,6,23,0.25)] p-4 sm:p-6 backdrop-blur-sm">
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
                text={
                  isRTL ? "لا يوجد صور كنب حالياً." : "No sofa results yet."
                }
                isRTL={isRTL}
              />
            )}
          </Panel>

          <Panel id="cars" active={active}>
            {carsImages.length ? (
              <CarSlider items={carsImages} speed={SLIDER_SPEED} showCounter />
            ) : (
              <EmptyState
                text={
                  isRTL ? "لا يوجد صور سيارات حالياً." : "No car results yet."
                }
                isRTL={isRTL}
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
      id={`panel-${id}`}
      aria-hidden={isActive ? "false" : "true"}
      className={isActive ? "block" : "hidden"}
    >
      {children}
    </div>
  );
}

function EmptyState({ text, isRTL }) {
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
      <p className="text-sm">
        {text}{" "}
        <span className="text-slate-700 font-semibold">
          {isRTL ? "قريبًا بنضيف المزيد." : "More coming soon."}
        </span>
      </p>
    </div>
  );
}
