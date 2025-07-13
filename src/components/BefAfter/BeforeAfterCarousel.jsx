// src/components/BeforeAfterCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderX, setSliderX] = useState(50);

  const handleSlider = (e) => setSliderX(Number(e.target.value));

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-md shadow-md bg-white">
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover absolute top-0 left-0"
          style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        />
      </div>
      <input
  type="range"
  min="0"
  max="100"
  value={sliderX}
  onChange={handleSlider}
  onTouchStart={(e) => e.stopPropagation()}   // لمنع Swiper يشتغل في الموبايل
  onMouseDown={(e) => e.stopPropagation()}    // لمنع Swiper يشتغل في الكمبيوتر
  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-30"
/>

    </div>
  );
}

export default function BeforeAfterCarousel({ items }) {
  return (
    <section className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
      <span className="text-black"> قبل /</span>{" "}
  <span className="text-blue-500">بعد التنظيف </span>
      </h2>
      <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  allowTouchMove={false} // ✅ إيقاف السحب باللمس
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
