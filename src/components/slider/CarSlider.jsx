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

export default function CarSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 750,
  loop = true,
  effect = "slide", // "slide" | "fade"
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);

  if (!items.length) return null;

  // (6) فتح المعاينة — تجاهُل الضغط لو كان على زر
  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return;
    setSelectedImage(it);
    // (5) أوقف التشغيل التلقائي أثناء المعاينة
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);

  // (5) إيقاف/استئناف التشغيل التلقائي عند التفاعل باللمس
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
      aria-label="معرض صور الخدمة"
      onTouchStart={stopAutoplay} // (5) يوقف أثناء اللمس/السحب
      onTouchEnd={() => resumeAutoplay()} // (5) يرجع يكمل بعد اللمس
    >
      {/* عدّاد الشرائح */}
      {items.length > 1 && (
        <div
          className="absolute top-4 end-5 z-20 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg select-none"
          aria-live="polite"
        >
          {current} / {items.length}
        </div>
      )}

      {/* حواف تدرّج جانبية خفيفة */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/25 to-transparent z-10 hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/25 to-transparent z-10 hidden sm:block" />

      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard, Mousewheel, EffectFade]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setCurrent(sw.realIndex + 1)}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        pagination={{
          clickable: true,
          dynamicBullets: false, // (3) نقاط ثابتة أوضح
        }}
        keyboard={{ enabled: !selectedImage }} // (6) عطّل الكيبورد أثناء المودال
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false, // إحنا بنوقف/نرجّع يدويًا
          pauseOnMouseEnter: true,
        }}
        mousewheel
        slidesPerView={1}
        loop={loop}
        speed={speed}
        grabCursor
        simulateTouch
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[340px] sm:h-[420px] md:h-[460px] bg-gray-200 overflow-hidden transition-transform duration-200 ease-out active:scale-[0.985]"
              onClick={(e) => openPreview(e, it)} // (6)
            >
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                draggable={false}
                loading="lazy" // (أداء)
                decoding="async" // (أداء)
              />

              {/* تدرّج سفلي يحسن قراءة النص */}
              <div
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* عنوان/وصف */}
              {(it.title || it.caption) && (
                <div className="absolute bottom-6 inset-x-0 z-10 text-white px-6 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,22px)] font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                    {it.title || "خدمة السيارات"}
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

      {/* مودال المعاينة (6) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedImage(null);
            resumeAutoplay(500); // يرجّع التشغيل بعد الغلق
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

      {/* (3) نقاط Pagination كبيرة ومريحة للمس */}
      {items.length > 1 && (
        <style jsx>{`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
            background: rgba(255, 255, 255, 0.55);
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #fde047; /* أصفر واضح */
          }
          @supports (padding: max(0px)) {
            /* مراعاة الـ safe areas أسفل الشاشة */
            :global(.swiper) {
              padding-bottom: max(16px, env(safe-area-inset-bottom));
            }
          }
        `}</style>
      )}
    </div>
  );
}
