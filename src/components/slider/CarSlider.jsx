import { useMemo, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

  if (!items.length) return null;

  const goTo = (dir) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (isRTL) {
      dir === "next" ? swiper.slidePrev() : swiper.slideNext();
    } else {
      dir === "next" ? swiper.slideNext() : swiper.slidePrev();
    }
  };

  // فتح المعاينة — نتجاهل الضغط إذا كان على زر أو عنصر معلّم كـ data-no-preview
  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return; // لا تفتح إذا كان الضغط على زر التنقل
    setSelectedImage(it);
  }, []);

  // يطفي الأصفر ويمنع تسرّب الحدث للأب (ما يفتح المودال)
  const handlePress = (e, dir) => {
    e.preventDefault();
    e.stopPropagation(); // مهم جداً!
    const btn = e.currentTarget;
    btn.classList.add("clicked", "no-hover");
    goTo(dir);
    setTimeout(() => {
      btn.classList.remove("clicked", "no-hover");
    }, 180);
  };

  // تأمين إضافي لكل أنواع الأحداث (ماوس/لمس/بوينتر)
  const stopAll = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* عدّاد الشرائح */}
      <div className="absolute top-4 end-5 z-20 bg-black/50 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
        {current} / {items.length}
      </div>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          Autoplay,
          Keyboard,
          Mousewheel,
          EffectFade,
        ]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setCurrent(sw.realIndex + 1)}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
              onClick={(e) => openPreview(e, it)}
            >
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                draggable={false}
              />

              {/* تدرّج سفلي */}
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

      {/* أزرار التنقل — مع منع تسرّب الحدث */}
      <button
        data-no-preview
        type="button"
        onPointerDown={(e) => handlePress(e, "prev")}
        onPointerUp={stopAll}
        onMouseDown={stopAll}
        onMouseUp={stopAll}
        onTouchStart={stopAll}
        onTouchEnd={stopAll}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16
        flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md
        text-yellow-400 transition-all duration-150 ease-out shadow-xl border border-yellow-400/50
        hover:bg-yellow-400/90 hover:text-black active:scale-95 focus:outline-none"
        style={{ touchAction: "manipulation" }} // يمنع الـ "ghost click" على الموبايل
        aria-label="السابق"
      >
        <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
      </button>

      <button
        data-no-preview
        type="button"
        onPointerDown={(e) => handlePress(e, "next")}
        onPointerUp={stopAll}
        onMouseDown={stopAll}
        onMouseUp={stopAll}
        onTouchStart={stopAll}
        onTouchEnd={stopAll}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16
        flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md
        text-yellow-400 transition-all duration-150 ease-out shadow-xl border border-yellow-400/50
        hover:bg-yellow-400/90 hover:text-black active:scale-95 focus:outline-none"
        style={{ touchAction: "manipulation" }}
        aria-label="التالي"
      >
        <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
      </button>

      {/* تلميح سحب */}
      <div className="absolute inset-y-0 left-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>

      {/* معاينة الصورة */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
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
          />
        </div>
      )}
    </div>
  );
}
