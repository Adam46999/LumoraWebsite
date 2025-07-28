import React, { useState, useRef } from "react";

function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderX, setSliderX] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleSlider = (e) => setSliderX(Number(e.target.value));

  const disableSwiper = () => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (swiper) swiper.allowTouchMove = false;
  };

  const enableSwiper = () => {
    const swiper = document.querySelector(".swiper")?.swiper;
    if (swiper) swiper.allowTouchMove = true;
  };

  const startDrag = (e) => {
    isDragging.current = true;
    disableSwiper();
    moveSlider(e);
    document.addEventListener("pointermove", moveSlider);
    document.addEventListener("pointerup", stopDrag);
  };

  const stopDrag = () => {
    isDragging.current = false;
    enableSwiper();
    document.removeEventListener("pointermove", moveSlider);
    document.removeEventListener("pointerup", stopDrag);
  };

  const moveSlider = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderX(percent);
  };

  return (
    <section className="relative max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        قبل / بعد الخدمة
      </h2>

      <div
        ref={containerRef}
        onPointerDown={startDrag}
        className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg bg-gray-100 touch-none cursor-ew-resize"
      >
        <img
          src={afterImage}
          alt="بعد"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <img
          src={beforeImage}
          alt="قبل"
          className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-200"
          style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        />

        <div
          className="absolute top-0 h-full w-[3px] bg-yellow-400 z-20 transition-all duration-200"
          style={{ left: `${sliderX}%` }}
        />

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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-30 appearance-none bg-transparent"
          style={{
            WebkitAppearance: "none",
            height: "44px",
          }}
        />

        {/* تخصيص شكل السلايدر */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-runnable-track {
            height: 8px;
            background: #d1d5db;
            border-radius: 9999px;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 36px;
            width: 36px;
            background-color: #facc15;
            border: 3px solid white;
            border-radius: 9999px;
            margin-top: -14px;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
          }

          input[type="range"]::-moz-range-track {
            height: 8px;
            background: #d1d5db;
            border-radius: 9999px;
          }

          input[type="range"]::-moz-range-thumb {
            height: 36px;
            width: 36px;
            background-color: #facc15;
            border: 3px solid white;
            border-radius: 9999px;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </section>
  );
}

export default BeforeAfter;
