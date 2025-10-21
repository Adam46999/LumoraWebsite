import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

export default function SimpleSlider({
  items = [],
  autoplayDelay = 3200,
  speed = 380,
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

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) {
    if (!showEmpty) return null;
    return (
      <div
        className={[
          "max-w-5xl mx-auto relative rounded-3xl overflow-hidden",
          heightClasses,
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

  const resumeAutoplay = useCallback((delay = 1000) => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => sw?.autoplay?.start?.(), delay);
  }, []);

  useEffect(() => {
    if (!prefersReduced) return;
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReduced]);

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group"
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
      {items.length > 1 && (
        <>
          <div
            className="absolute top-3 end-4 z-20 bg-black/55 text-white text-[12px] sm:text-sm px-2.5 py-1 rounded-full backdrop-blur-md select-none"
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
                      background: "rgba(59,130,246,.9)",
                    }
                  : { background: "rgba(59,130,246,.4)" }
              }
              aria-hidden="true"
            />
          </div>
        </>
      )}

      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
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
          prefersReduced
            ? false
            : { delay: autoplayDelay, disableOnInteraction: false }
        }
        // لمس سريع جدًا
        slidesPerView={1}
        loop={loop}
        speed={prefersReduced ? 0 : speed}
        simulateTouch
        allowTouchMove
        touchStartPreventDefault
        shortSwipes
        longSwipes={false}
        threshold={3}
        resistanceRatio={0.5}
        followFinger
        touchRatio={1.1}
        watchSlidesProgress={false}
        observer
        observeParents
        className="rounded-3xl shadow-2xl"
        style={{ touchAction: "pan-y" }}
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`relative w-full ${heightClasses} bg-gray-200 overflow-hidden active:scale-[0.99]`}
              onClick={(e) => openPreview(e, it)}
              style={{ willChange: "transform" }}
            >
              <img
                src={it.src}
                alt={it.alt || (isRTL ? "صورة السجاد" : "Rug image")}
                className="w-full h-full object-cover transition-transform duration-[520ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                style={{ transform: "translateZ(0)", willChange: "transform" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {(it.title || it.caption) && (
                <div className="absolute bottom-4 inset-x-0 z-10 text-white px-5 select-none pointer-events-none">
                  <h3
                    className="text-[clamp(15px,3vw,19px)] font-extrabold drop-shadow"
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
            className="absolute inset-y-0 left-0 w-1/3 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "السابق" : "Previous"}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slidePrev();
            }}
            data-no-preview
            style={{ touchAction: "manipulation" }}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 w-1/3 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "التالي" : "Next"}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slideNext();
            }}
            data-no-preview
            style={{ touchAction: "manipulation" }}
          />
        </>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onTouchStart={(e) => (startYRef.current = e.touches[0].clientY)}
          onTouchEnd={(e) => {
            const dy = e.changedTouches[0].clientY - startYRef.current;
            if (dy > 60) {
              setSelectedImage(null);
              resumeAutoplay(600);
            }
          }}
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
