// src/components/slider/CarSlider.jsx
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

export default function CarSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 400, // ✅ (7)
  loop = true,
  effect = "slide",
  showCounter = true, // ✅ (6)
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const gestureRef = useRef({ downX: 0, downY: 0, moved: false });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) return null;

  const slideToIndex = useCallback(
    (idx) => {
      const sw = swiperRef.current;
      if (!sw) return;
      if (loop && typeof sw.slideToLoop === "function")
        sw.slideToLoop(idx, speed);
      else sw.slideTo(idx, speed);
    },
    [loop, speed]
  );

  const stopAutoplay = useCallback(() => {
    const sw = swiperRef.current;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);

  const resumeAutoplay = useCallback(
    (delay = 900) => {
      const sw = swiperRef.current;
      if (!sw || prefersReduced) return;
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => sw?.autoplay?.start?.(), delay);
    },
    [prefersReduced]
  );

  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return;
    if (gestureRef.current.moved) return;
    setSelectedImage(it);
    swiperRef.current?.autoplay?.stop?.();
  }, []);

  const total = items.length;

  // Dots
  const DOT_SIZE = 10;
  const DOT_GAP = 8;
  const GLIDER_WIDTH = 16;
  const DOTS_PADDING_X = 12;

  useEffect(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (prefersReduced && sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReduced]);

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label="معرض صور الخدمة"
      onTouchStart={stopAutoplay}
      onTouchEnd={() => resumeAutoplay(900)}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* ✅ (6) Counter */}
      {showCounter && total > 1 && (
        <div className="absolute bottom-3 end-4 z-20 bg-black/55 text-white text-[11px] sm:text-sm px-2 py-1 rounded-full backdrop-blur-md select-none">
          {current + 1} / {total}
        </div>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/25 to-transparent z-10 hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/25 to-transparent z-10 hidden sm:block" />

      <Swiper
        modules={[A11y, Autoplay, Keyboard, EffectFade]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setCurrent(sw.realIndex)}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        keyboard={{ enabled: !selectedImage }}
        autoplay={
          prefersReduced
            ? false
            : {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        slidesPerView={1}
        loop={loop}
        speed={prefersReduced ? 0 : speed}
        simulateTouch
        grabCursor
        threshold={4}
        resistanceRatio={0.65}
        touchRatio={1.05}
        followFinger
        shortSwipes
        longSwipes={false}
        touchStartPreventDefault={false}
        touchMoveStopPropagation
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
        onTouchEnd={() => resumeAutoplay(900)}
        observer
        observeParents
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[340px] sm:h-[420px] md:h-[460px]
                         bg-slate-100 overflow-hidden
                         transition-transform duration-200 ease-out
                         active:scale-[0.985]
                         flex items-center justify-center"
              onClick={(e) => openPreview(e, it)}
            >
              {/* tap next/prev (بدون ما يخرب swipe) */}
              <div
                className="absolute inset-0 z-20"
                data-no-preview
                onClick={(e) => {
                  if (gestureRef.current.moved) return;
                  const sw = swiperRef.current;
                  if (!sw) return;

                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const isLeftHalf = x < rect.width / 2;

                  if (isRTL) isLeftHalf ? sw.slideNext() : sw.slidePrev();
                  else isLeftHalf ? sw.slidePrev() : sw.slideNext();
                }}
                style={{ cursor: "pointer" }}
              />

              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-contain transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-black/10"
                aria-hidden="true"
              />

              <div
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {(it.title || it.caption) && (
                <div className="absolute bottom-6 inset-x-0 z-10 text-white px-6 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,22px)] font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                    {it.title || "خدمة السيارات"}
                  </h3>
                  {it.caption && (
                    <p className="text-[clamp(12px,2.5vw,16px)] opacity-90 leading-snug truncate">
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* dots */}
      {total > 1 && (
        <div className="absolute inset-x-0 bottom-0 pb-[max(12px,env(safe-area-inset-bottom))] z-30 flex items-center justify-center pointer-events-none">
          <div className="relative inline-flex items-center justify-start gap-[8px] px-3 py-2 rounded-full bg-black/40 backdrop-blur-md pointer-events-auto">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 h-6 rounded-full bg-white/20 transition-transform duration-250 ease-out"
              style={{
                width: GLIDER_WIDTH,
                transform: `translateX(${
                  DOTS_PADDING_X +
                  DOT_SIZE / 2 -
                  GLIDER_WIDTH / 2 +
                  current * (DOT_SIZE + DOT_GAP)
                }px) translateY(-50%)`,
              }}
              aria-hidden="true"
            />
            {items.map((_, idx) => {
              const activeDot = idx === current;
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`اذهب إلى الشريحة ${idx + 1}`}
                  onClick={() => slideToIndex(idx)}
                  className={[
                    "relative rounded-full transition-all duration-200 ease-out outline-none border border-white/40",
                    activeDot
                      ? "bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)] scale-110"
                      : "bg-white/70 hover:bg-white",
                  ].join(" ")}
                  style={{ width: DOT_SIZE, height: DOT_SIZE }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* preview modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedImage(null);
            resumeAutoplay(500);
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              resumeAutoplay(500);
            }}
            className="absolute top-5 right-5 text-white hover:text-yellow-400 transition"
            aria-label="إغلاق المعاينة"
            type="button"
            data-no-preview
          >
            <X className="w-7 h-7" />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt || "معاينة الصورة"}
            className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl border border-white/20 object-contain animate-fade-in"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
