// src/components/slider/SimpleSlider.jsx
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

const PRESETS = {
  fast: { threshold: 3, resistanceRatio: 0.5, speed: 360, touchRatio: 1.1 },
  balanced: {
    threshold: 4,
    resistanceRatio: 0.65,
    speed: 420,
    touchRatio: 1.05,
  },
  heavy: { threshold: 6, resistanceRatio: 0.8, speed: 520, touchRatio: 0.95 },
};

export default function SimpleSlider({
  items = [],
  autoplayDelay = 3200,
  loop = true,
  effect = "slide",
  showEmpty = true,
  heightClasses = "",
  touchPreset = "balanced",
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1); // 1-based للعرض
  const [selectedImage, setSelectedImage] = useState(null);
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const gestureRef = useRef({ downX: 0, downY: 0, moved: false });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) {
    if (!showEmpty) return null;
    return (
      <div
        className={[
          "max-w-7xl mx-auto relative rounded-3xl overflow-hidden",
          "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]",
          "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700",
          "flex items-center justify-center",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
        aria-roledescription="carousel"
        aria-label={isRTL ? "معرض صور السجاد (فارغ)" : "Rug gallery (empty)"}
      >
        <div className="text-center px-4">
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-black/10 dark:bg-white/10" />
          <h3 className="text-gray-800 dark:text-gray-100 font-extrabold text-lg mb-1">
            {isRTL ? "لا توجد صور للسجاد حالياً" : "No rug images yet"}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {isRTL
              ? "أضِف صور السجاد لاحقًا ليظهر المعرض هنا."
              : "Add rug images later and the gallery will appear here."}
          </p>
        </div>
      </div>
    );
  }

  const cfg = PRESETS[touchPreset] ?? PRESETS.balanced;
  const total = items.length;
  const activeIndex = current - 1; // نحولها لـ 0-based للنقاط

  // ثوابت شريط الدوتس (نفس روح كارسلايدر)
  const DOT_SIZE = 10;
  const DOT_GAP = 8;
  const GLIDER_WIDTH = 16;
  const DOTS_PADDING_X = 12; // px-3 => 3 * 4px

  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (gestureRef.current.moved) return;
    setSelectedImage(it);
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);

  const stopAutoplay = useCallback(() => {
    const sw = swiperRef.current;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);
  const resumeAutoplay = useCallback((delay = 1200) => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => sw?.autoplay?.start?.(), delay);
  }, []);

  // التنقل بالنقر على النقاط
  const slideToIndex = useCallback(
    (idx) => {
      const sw = swiperRef.current;
      if (!sw) return;
      if (loop && typeof sw.slideToLoop === "function")
        sw.slideToLoop(idx, cfg.speed);
      else sw.slideTo(idx, cfg.speed);
    },
    [loop, cfg.speed]
  );

  useEffect(() => {
    if (!prefersReduced) return;
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReduced]);

  return (
    <div
      className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden group"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label={isRTL ? "معرض صور السجاد" : "Rug images carousel"}
      onTouchStart={() => {
        setPaused(true);
        stopAutoplay();
      }}
      onTouchEnd={() => {
        setPaused(false);
        resumeAutoplay(1500);
      }}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="bullets-on-gradient" aria-hidden="true" />

      {items.length > 1 && (
        <div
          className="absolute top-3 end-4 z-20 bg-black/65 text-white text-[12px] sm:text-sm px-2.5 py-1 rounded-full backdrop-blur-md select-none"
          aria-live="polite"
        >
          {current} / {items.length}
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-black/15">
        <div
          key={current}
          className={["h-full", paused ? "" : "slide-progress"].join(" ")}
          style={
            !paused
              ? {
                  animationDuration: `${autoplayDelay}ms`,
                  background: "rgba(59,130,246,.9)",
                }
              : { background: "rgba(59,130,246,.4)" }
          }
          aria-hidden="true"
        />
      </div>

      <Swiper
        modules={[A11y, Autoplay, Keyboard, EffectFade]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => {
          setCurrent(sw.realIndex + 1);
          const next = items[(sw.realIndex + 1) % items.length];
          if (next?.src) {
            const img = new Image();
            img.decoding = "async";
            img.src = next.src;
          }
        }}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        keyboard={{ enabled: !selectedImage }}
        autoplay={
          prefersReduced
            ? false
            : { delay: autoplayDelay, disableOnInteraction: false }
        }
        slidesPerView={1}
        loop={loop}
        speed={prefersReduced ? 0 : cfg.speed}
        simulateTouch
        allowTouchMove
        touchStartPreventDefault
        shortSwipes
        longSwipes={false}
        threshold={cfg.threshold}
        resistanceRatio={cfg.resistanceRatio}
        followFinger
        touchRatio={cfg.touchRatio}
        style={{ touchAction: "pan-y" }}
        onTouchStart={(sw, e) => {
          const t = e.touches?.[0];
          gestureRef.current = {
            downX: t?.clientX ?? 0,
            downY: t?.clientY ?? 0,
            moved: false,
          };
        }}
        onTouchMove={(sw, e) => {
          const t = e.touches?.[0];
          const dx = Math.abs((t?.clientX ?? 0) - gestureRef.current.downX);
          const dy = Math.abs((t?.clientY ?? 0) - gestureRef.current.downY);
          if (dx > 6 || dy > 6) gestureRef.current.moved = dx >= dy;
        }}
        observer
        observeParents
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full overflow-hidden active:scale-[0.99] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] bg-gray-200"
              onClick={(e) => openPreview(e, it)}
              style={{ willChange: "transform" }}
            >
              <img
                src={it.src}
                alt={it.alt || (isRTL ? "صورة السجاد" : "Rug image")}
                className="w-full h-full object-cover transition-transform duration-[480ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                style={{ transform: "translateZ(0)", willChange: "transform" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 100vw, 70vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {(it.title || it.caption) && (
                <div className="absolute bottom-4 inset-x-0 z-10 text-white px-5 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,20px)] font-extrabold drop-shadow line-clamp-1">
                    {it.title || (isRTL ? "خدمة السجاد" : "Rug service")}
                  </h3>
                  {it.caption && (
                    <p className="text-[clamp(12px,2.5vw,15px)] opacity-90 leading-snug line-clamp-2">
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== دوتس + Glider في الأسفل ===== */}
      {total > 1 && (
        <div className="absolute inset-x-0 bottom-0 pb-[max(12px,env(safe-area-inset-bottom))] z-30 flex items-center justify-center pointer-events-none">
          <div className="relative inline-flex items-center justify-start gap-[8px] px-3 py-2 rounded-full bg-black/40 backdrop-blur-md pointer-events-auto">
            {/* glider خلف النقطة النشطة */}
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-6 rounded-full bg-white/20 transition-transform duration-250 ease-out"
              style={{
                width: GLIDER_WIDTH,
                transform: `translateX(${
                  DOTS_PADDING_X +
                  DOT_SIZE / 2 -
                  GLIDER_WIDTH / 2 +
                  activeIndex * (DOT_SIZE + DOT_GAP)
                }px) translateY(-50%)`,
              }}
              aria-hidden="true"
            />

            {items.map((_, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`اذهب إلى الشريحة ${idx + 1}`}
                  onClick={() => slideToIndex(idx)}
                  className={[
                    "relative rounded-full transition-all duration-200 ease-out outline-none border border-white/40",
                    active
                      ? "bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)] scale-110"
                      : "bg-white/70 hover:bg-white",
                  ].join(" ")}
                  style={{
                    width: DOT_SIZE,
                    height: DOT_SIZE,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setSelectedImage(null);
            resumeAutoplay(600);
          }}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              resumeAutoplay(600);
            }}
            className="absolute top-5 right-5 text-white hover:text-blue-200 transition w-11 h-11 flex items-center justify-center"
            aria-label={isRTL ? "إغلاق المعاينة" : "Close preview"}
            type="button"
            data-no-preview
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || (isRTL ? "معاينة الصورة" : "Preview")}
            className="max-w-[92%] max-h-[84%] rounded-2xl shadow-2xl border border-white/15 object-contain"
            loading="eager"
            decoding="async"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          />
        </div>
      )}
    </div>
  );
}
