import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext";

export default function BeforeAfterCarousel({
  items,
  hideDescription = false,
}) {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto px-4 my-8 sm:my-10">
      <h2
        className="text-center font-extrabold text-gray-900
                     text-[clamp(20px,4.5vw,32px)] tracking-tight"
      >
        <span className="text-black">{t.beforeAfterTitle1}</span>
        <span className="text-blue-600 ms-1">{t.beforeAfterTitle2}</span>
      </h2>

      {!hideDescription && (
        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mt-2
                      text-[clamp(12px,3.2vw,16px)]"
        >
          {t.beforeAfterDescription}
        </p>
      )}

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop
        allowTouchMove={false}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <BeforeAfter beforeImage={item.before} afterImage={item.after} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
