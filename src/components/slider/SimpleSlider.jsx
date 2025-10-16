import { useMemo } from "react";
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

export default function SimpleSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 800,
  loop = true,
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);
  if (!items.length) return null;

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group"
      dir={isRTL ? "rtl" : "ltr"}
    >
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
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
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
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] bg-gray-200 overflow-hidden">
              <img
                src={it.src} // ✅ استخدم src مباشرة بدل data-src
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />

              {it.caption && (
                <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent text-white px-5 py-4 text-sm sm:text-base font-medium tracking-wide">
                  {it.caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أسهم أنيقة */}
      <div className="swiper-button-next after:!text-white after:!text-3xl after:!font-bold opacity-0 group-hover:opacity-100 transition duration-300 drop-shadow-lg"></div>
      <div className="swiper-button-prev after:!text-white after:!text-3xl after:!font-bold opacity-0 group-hover:opacity-100 transition duration-300 drop-shadow-lg"></div>
    </div>
  );
}
