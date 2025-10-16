import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function CarSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 700,
  loop = true,
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);
  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!items.length) return null;

  // 🔹 التنقل اليدوي مع اتجاه ذكي
  const goTo = (dir) => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (!swiper) return;
    if (isRTL) {
      dir === "next" ? swiper.slidePrev() : swiper.slideNext();
    } else {
      dir === "next" ? swiper.slideNext() : swiper.slidePrev();
    }
  };

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* 🔹 رقم الشريحة */}
      <div className="absolute top-4 end-5 z-20 bg-black/50 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
        {current} / {items.length}
      </div>

      {/* 🔹 السلايدر */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, Keyboard, Mousewheel]}
        effect="slide"
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
        simulateTouch={true}
        spaceBetween={20}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[340px] sm:h-[420px] md:h-[460px] bg-gray-200 overflow-hidden cursor-pointer transition-transform duration-300 ease-out"
              onClick={() => setSelectedImage(it)}
            >
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />

              {/* التدرّج السفلي */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* النصوص */}
              {it.caption && (
                <div className="absolute bottom-6 inset-x-0 z-10 text-white px-6 select-none">
                  <h3 className="text-[clamp(16px,3vw,22px)] font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                    {it.title || "خدمة السيارات"}
                  </h3>
                  <p className="text-[clamp(12px,2.5vw,16px)] opacity-90 leading-snug truncate text-ellipsis overflow-hidden whitespace-nowrap">
                    {it.caption}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 أزرار مريحة وواضحة */}
      <button
        onClick={() => goTo("prev")}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 
        flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md 
        hover:bg-yellow-400/90 text-yellow-400 hover:text-black transition-all duration-200 ease-out shadow-xl border border-yellow-400/50
        active:scale-95 focus:outline-none"
        aria-label="السابق"
      >
        <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute inset-0 rounded-full animate-glowRing pointer-events-none"></span>
      </button>

      <button
        onClick={() => goTo("next")}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 
        flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md 
        hover:bg-yellow-400/90 text-yellow-400 hover:text-black transition-all duration-200 ease-out shadow-xl border border-yellow-400/50
        active:scale-95 focus:outline-none"
        aria-label="التالي"
      >
        <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute inset-0 rounded-full animate-glowRing pointer-events-none"></span>
      </button>

      {/* 🔹 تلميح السحب */}
      <div className="absolute inset-y-0 left-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>

      {/* 🔹 المودال */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white hover:text-yellow-400 transition"
            aria-label="إغلاق المعاينة"
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
