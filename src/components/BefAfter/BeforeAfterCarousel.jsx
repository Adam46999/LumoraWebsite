import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext"; // ✅ استيراد الترجمة

export default function BeforeAfterCarousel({ items }) {
  const { t } = useLanguage(); // ✅ استخدام الترجمة

  return (
    <section className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">
        <span className="text-black">{t.beforeAfterTitle1}</span>
        <span className="text-blue-500">{t.beforeAfterTitle2}</span>
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
        {t.beforeAfterDescription}
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
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
