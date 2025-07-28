import React, { useState } from "react";

function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderX, setSliderX] = useState(50);

  const handleSlider = (e) => setSliderX(Number(e.target.value));

  // تعطيل تحريك السوايبر عند سحب السلايدر
  const disableSwiper = () => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (swiper) swiper.allowTouchMove = false;
  };

  const enableSwiper = () => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (swiper) swiper.allowTouchMove = true;
  };

  return (
    <section className="relative max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        قبل / بعد الخدمة
      </h2>

      <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg bg-gray-100 touch-none">
        {/* الصورة بعد */}
        <img
          src={afterImage}
          alt="بعد"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* الصورة قبل */}
        <img
          src={beforeImage}
          alt="قبل"
          className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-200"
          style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        />

        {/* خط التقسيم */}
        <div
          className="absolute top-0 h-full w-[3px] bg-yellow-400 z-20 transition-all duration-200"
          style={{ left: `${sliderX}%` }}
        />

        {/* السلايدر */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderX}
          onChange={handleSlider}
          onTouchStart={disableSwiper}
          onTouchEnd={enableSwiper}
          onMouseDown={disableSwiper}
          onMouseUp={enableSwiper}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-30 touch-none accent-yellow-400"
        />
      </div>
    </section>
  );
}

export default BeforeAfter;
