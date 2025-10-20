// src/components/slider/SimpleSlider.jsx
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

export default function SimpleSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 550,
  loop = true,
  effect = "slide",
  showEmpty = true,
  heightClasses = "aspect-[16/9]",
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const startYRef = useRef(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // حالة فارغة
  if (!items.length) {
    if (!showEmpty) return null;
    return (
      <div
        className={[
          "max-w-5xl mx-auto relative rounded-3xl overflow-hidden animate-fade-in",
          heightClasses,
          "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700",
          "flex items-center justify-center",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
        aria-roledescription="carousel"
        aria-label={isRTL ? "معرض صور السجاد (فارغ)" : "Rug gallery (empty)"}
      >
        <div className="text-center px-4">
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-black/10 dark:bg-white/10 animate-pulse" />
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

  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return;
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

  useEffect(() => {
    if (!prefersReducedMotion) return;
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReducedMotion]);

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label={isRTL ? "معرض صور السجاد" : "Rug images carousel"}
      onTouchStart={(e) => {
        setPaused(true);
        stopAutoplay(e);
      }}
      onTouchEnd={() => {
        setPaused(false);
        resumeAutoplay(2000);
      }}
    >
      {items.length > 1 && (
        <>
          <div
            className="absolute top-4 end-5 z-20 bg-black/55 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg select-none"
            aria-live="polite"
          >
            {current} / {items.length}
          </div>
          <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-black/15">
            <div
              key={current}
              className={["h-full", paused ? "" : "slide-progress"].join(" ")}
              style={
                !paused
                  ? {
                      animationDuration: `${autoplayDelay}ms`,
                      background: "rgba(59,130,246,.85)",
                    }
                  : { background: "rgba(59,130,246,.4)" }
              }
              aria-hidden="true"
            />
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10 hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10 hidden sm:block" />

      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard, Mousewheel, EffectFade]}
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
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: !selectedImage }}
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        mousewheel
        slidesPerView={1}
        loop={loop}
        speed={prefersReducedMotion ? 0 : speed}
        grabCursor
        simulateTouch
        threshold={6}
        longSwipes
        longSwipesMs={120}
        longSwipesRatio={0.15}
        resistanceRatio={0.85}
        touchRatio={1}
        followFinger
        touchReleaseOnEdges
        observer
        observeParents
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`relative w-full ${heightClasses} bg-gray-200 overflow-hidden transition-transform duration-200 ease-out active:scale-[0.985]`}
              onClick={(e) => openPreview(e, it)}
            >
              <img
                src={it.src}
                alt={it.alt || (isRTL ? "صورة السجاد" : "Rug image")}
                className="w-full h-full object-cover transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {(it.title || it.caption) && (
                <div className="absolute bottom-5 inset-x-0 z-10 text-white px-5 select-none pointer-events-none">
                  <h3
                    className="text-[clamp(16px,3vw,20px)] font-extrabold drop-shadow"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {it.title || (isRTL ? "خدمة السجاد" : "Rug service")}
                  </h3>
                  {it.caption && (
                    <p
                      className="text-[clamp(12px,2.5vw,15px)] opacity-90 leading-snug"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* مناطق نقر للتنقّل */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="absolute inset-y-0 left-0 w-2/5 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "السابق" : "Previous"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slidePrev();
            }}
            data-no-preview
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 w-2/5 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "التالي" : "Next"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slideNext();
            }}
            data-no-preview
          />
        </>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          onTouchStart={(e) => (startYRef.current = e.touches[0].clientY)}
          onTouchEnd={(e) => {
            const dy = e.changedTouches[0].clientY - startYRef.current;
            if (dy > 60) {
              setSelectedImage(null);
              resumeAutoplay(500);
            }
          }}
          onClick={() => {
            setSelectedImage(null);
            resumeAutoplay(500);
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              resumeAutoplay(500);
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
            className="max-w-[92%] max-h-[84%] rounded-2xl shadow-2xl border border-white/15 object-contain animate-fade-in"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
