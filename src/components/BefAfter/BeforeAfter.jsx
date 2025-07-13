import React, { useState, useEffect } from "react";

function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderX, setSliderX] = useState(50);

  const handleSlider = (e) => setSliderX(Number(e.target.value));

  // 👉 نبلغ Swiper لما نبدأ السحب
  const disableSwiper = () => {
    const swiperEl = document.querySelector(".swiper")?.swiper;
    if (swiperEl) swiperEl.allowTouchMove = false;
  };

  // 👉 نعيد تفعيل Swiper لما نرفع الإصبع
  const enableSwiper = () => {
    const swiperEl = document.querySelector(".swiper")?.swiper;
    if (swiperEl) swiperEl.allowTouchMove = true;
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-md shadow-md bg-white">
      <img
        src={afterImage}
        alt="بعد"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <img
        src={beforeImage}
        alt="قبل"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
      />

      <div
        className="absolute top-0 h-full w-[2px] bg-white z-20"
        style={{ left: `${sliderX}%` }}
      />

      <input
        type="range"
        min="0"
        max="100"
        value={sliderX}
        onChange={handleSlider}
        onTouchStart={disableSwiper}   // نمنع التفاعل
        onTouchEnd={enableSwiper}      // نعيد التفاعل
        onMouseDown={disableSwiper}
        onMouseUp={enableSwiper}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-30"
      />
    </div>
  );
}

export default BeforeAfter;
