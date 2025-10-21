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

export default function CarSlider({
  items = [],
  autoplayDelay = 3200,
  loop = true,
  effect = "slide",
  touchPreset = "balanced",
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const gestureRef = useRef({ downX: 0, downY: 0, moved: false });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) return null;
  const cfg = PRESETS[touchPreset] ?? PRESETS.balanced;

  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (gestureRef.current.moved) return; // سحب؟ لا تفتح مودال
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
    if (!prefersReduced) return;
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReduced]);

  return (
    <div
      className={[
        // (1) إطار + ظل راقي + حلقة خفيفة
        "max-w-7xl mx-auto relative overflow-hidden group",
        "rounded-3xl ring-1 ring-white/10 dark:ring-white/5",
        "shadow-[0_25px_60px_-30px_rgba(0,0,0,.45)]",
        // (4) edge-to-edge بالموبايل (بدون padding هنا)
      ].join(" ")}
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label="معرض صور الخدمة"
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
      {/* خلفية تدرّج ناعمة خلف السلايدر (1+4) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none
        bg-gradient-to-b from-slate-50 to-slate-100
        dark:from-slate-900 dark:to-slate-950"
        aria-hidden="true"
      />

      {/* طبقة خفيفة أسفل النقاط لرفع التباين (6) */}
      <div className="bullets-on-gradient" aria-hidden="true" />

      {/* عدّاد علوي بزجاجية (3) */}
      {items.length > 1 && (
        <div
          className="absolute top-3 end-4 z-20 text-[12px] sm:text-sm px-2.5 py-1
          rounded-full bg-black/45 text-white backdrop-blur-md select-none"
          aria-live="polite"
        >
          {current} / {items.length}
        </div>
      )}

      {/* (5) سطر تقدم أنحف + متدرّج */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-black/10">
        <div
          key={current}
          className={["h-full", paused ? "" : "slide-progress"].join(" ")}
          style={
            !paused
              ? {
                  animationDuration: `${autoplayDelay}ms`,
                  background:
                    "linear-gradient(90deg, rgba(59,130,246,.95), rgba(96,165,250,.95), rgba(37,99,235,.95))",
                }
              : { background: "rgba(59,130,246,.45)" }
          }
          aria-hidden="true"
        />
      </div>

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
        pagination={{ clickable: true }}
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
        className="rounded-3xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            {/* (10) سكيليتون خفيف خلف الصورة (سيُغطى بعد العرض) */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none skeleton-shimmer rounded-3xl"
              aria-hidden="true"
            />

            {/* أحجام أكبر: 4/3 جوال، 16/10 متوسط، 16/9 كبير */}
            <div
              className="relative w-full bg-black/25 overflow-hidden active:scale-[0.99]
              aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]"
              onClick={(e) => openPreview(e, it)}
              style={{ willChange: "transform" }}
            >
              {/* خلفية ناعمة بنقشة خفيفة (2 لسيارات contain) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,.18), transparent 60%)",
                }}
                aria-hidden="true"
              />

              {/* خلفية باهتة للصورة لزيادة العمق */}
              <img
                src={it.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] opacity-30 pointer-events-none"
                style={{ transform: "translateZ(0)" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 100vw, 70vw"
              />

              {/* الصورة الرئيسية (contain للسيارات) + micro-hover (8) */}
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-[520ms]
                ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.02] group-hover:brightness-[1.02]"
                style={{ willChange: "transform", transform: "translateZ(0)" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 100vw, 70vw"
              />

              {/* تدرّج نص سفلي */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t
                from-black/65 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {(it.title || it.caption) && (
                <div className="absolute bottom-4 inset-x-0 z-10 text-white px-5 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,20px)] font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,.6)] line-clamp-1">
                    {it.title || "خدمة السيارات"}
                    {/* (2) شارة صغيرة إن وُجد caption */}
                    {it.caption && (
                      <span className="ms-2 align-middle text-[11px] px-2 py-0.5 rounded-full bg-white/20">
                        تفاصيل
                      </span>
                    )}
                  </h3>
                  {it.caption && (
                    <p className="text-[clamp(12px,2.5vw,15px)] opacity-90 leading-snug line-clamp-2 drop-shadow-[0_1px_6px_rgba(0,0,0,.55)]">
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* مودال المعاينة (3/7 تحسين شكلي) */}
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
            className="absolute top-5 right-5 text-white w-11 h-11 flex items-center justify-center
            rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md transition"
            aria-label="إغلاق المعاينة"
            type="button"
            data-no-preview
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || "معاينة الصورة"}
            className="max-w-[92%] max-h-[84%] rounded-2xl shadow-2xl ring-1 ring-white/20 border border-white/10 object-contain"
            loading="eager"
            decoding="async"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />
        </div>
      )}
    </div>
  );
}
