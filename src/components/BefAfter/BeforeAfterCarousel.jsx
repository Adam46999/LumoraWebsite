import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";

export default function BeforeAfterCarousel({ items }) {
  return (
    <section className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        <span className="text-black">قبل /</span>{" "}
        <span className="text-yellow-500">بعد التنظيف</span>
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false} // منع السحب التلقائي لتجنب مشاكل التفاعل
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
