import React, { useState, useRef } from "react";

function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderX, setSliderX] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const hasInteractedRef = useRef(false); // يتبع التفاعل مرة واحدة فقط
  const containerRef = useRef(null);

  const hideHintOnce = () => {
    if (!hasInteractedRef.current) {
      setShowHint(false);
      hasInteractedRef.current = true;
    }
  };

  const updateSlider = (clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderX(percent);
    hideHintOnce();
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateSlider(e.clientX);

    const move = (e) => updateSlider(e.clientX);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateSlider(e.touches[0].clientX);

    const move = (e) => updateSlider(e.touches[0].clientX);
    const up = () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };

    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-md bg-gray-100 touch-none select-none cursor-ew-resize"
    >
      {/* الصورة بعد */}
      <img
        src={afterImage}
        alt="بعد"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* الصورة قبل */}
      <img
        src={beforeImage}
        alt="قبل"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
      />

      {/* الخط الفاصل */}
      <div
        className="absolute top-0 h-full w-[3px] bg-blue-500 z-20 transition-all"
        style={{ left: `${sliderX}%` }}
      />

      {/* التلميح البصري */}
      {showHint && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm animate-pulse flex items-center gap-2">
            <span className="text-xl">⬅️</span>
            <span>اسحب لرؤية الفرق</span>
            <span className="text-xl">➡️</span>
          </div>
        </div>
      )}

      {/* السلايدر */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderX}
        onChange={(e) => {
          setSliderX(Number(e.target.value));
          hideHintOnce(); // ✅ إخفاء التلميح حتى من السلايدر
        }}
        onTouchStart={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-30 appearance-none bg-transparent"
        style={{
          WebkitAppearance: "none",
          height: "44px",
        }}
      />

      {/* تنسيقات السلايدر */}
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
          background-color: #3B82F6;
          border: 3px solid white;
          border-radius: 9999px;
          margin-top: -14px;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          height: 36px;
          width: 36px;
          background-color: #3B82F6;
          border: 3px solid white;
          border-radius: 9999px;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-track {
          height: 8px;
          background: #d1d5db;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}

export default BeforeAfter;
