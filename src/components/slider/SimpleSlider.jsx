// src/components/slider/SimpleSlider.jsx
import { useMemo, useRef, useState, useCallback } from "react";
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

/**
 * SimpleSlider (Rugs)
 * - نسخة مطابقة لـ CarSlider لكن للسجاد.
 * - عرض الصور بأسلوب object-cover (نفس الزوم القديم).
 * - حالة فارغة أنيقة عندما لا توجد صور.
 */
export default function SimpleSlider({
  items = [], // [{ src, caption?, alt?, title? }]
  autoplayDelay = 3500,
  speed = 750,
  loop = true,
  effect = "slide", // "slide" | "fade"
  showEmpty = true,
  heightClasses = "h-[340px] sm:h-[420px] md:h-[460px]",
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);

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

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label={isRTL ? "معرض صور السجاد" : "Rug images carousel"}
      onTouchStart={stopAutoplay}
      onTouchEnd={() => resumeAutoplay()}
    >
      {items.length > 1 && (
        <div
          className="absolute top-4 end-5 z-20 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg select-none"
          aria-live="polite"
        >
          {current} / {items.length}
        </div>
      )}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/25 to-transparent z-10 hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/25 to-transparent z-10 hidden sm:block" />

      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard, Mousewheel, EffectFade]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setCurrent(sw.realIndex + 1)}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: !selectedImage }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel
        slidesPerView={1}
        loop={loop}
        speed={speed}
        grabCursor
        simulateTouch
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
              {/* 👇 نفس سلوك CarSlider الأصلي: object-cover (زوم) */}
              <img
                src={it.src}
                alt={it.alt || (isRTL ? "صورة السجاد" : "Rug image")}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                draggable={false}
                loading="lazy"
                decoding="async"
              />

              <div
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {(it.title || it.caption) && (
                <div className="absolute bottom-6 inset-x-0 z-10 text-white px-6 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,22px)] font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                    {it.title || (isRTL ? "خدمة السجاد" : "Rug service")}
                  </h3>
                  {it.caption && (
                    <p className="text-[clamp(12px,2.5vw,16px)] opacity-90 leading-snug truncate text-ellipsis overflow-hidden whitespace-nowrap">
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
            aria-label={isRTL ? "إغلاق المعاينة" : "Close preview"}
            type="button"
            data-no-preview
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || (isRTL ? "معاينة الصورة" : "Preview")}
            className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl border border-white/20 object-contain animate-fade-in"
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
