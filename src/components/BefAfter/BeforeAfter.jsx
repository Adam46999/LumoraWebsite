import React, { useState } from 'react';
import beforeImage from '../../assets/before1.jpg';
import afterImage from '../../assets/after1.jpg';

function BeforeAfter() {
  const [sliderX, setSliderX] = useState(50); // نسبة الكشف

  const handleSlider = (e) => {
    setSliderX(Number(e.target.value));
  };

  return (
    <section className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
  <span className="text-gray-800">قبل /</span>{' '}
  <span className="text-blue-500">بعد التنظيف</span>
</h2>


      <div className="relative w-full h-[400px] overflow-hidden rounded-md shadow-lg">
        {/* الصورة الأساسية (قبل) */}
        <img
          src={beforeImage}
          alt="قبل"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* الصورة اللي فوق (بعد) مع كليب حسب السلايدر */}
        <img
          src={afterImage}
          alt="بعد"
          className="absolute top-0 left-0 h-full object-cover"
          style={{
            width: '100%',
            clipPath: `inset(0 ${100 - sliderX}% 0 0)`, // هذا هو السر 🎯
          }}
        />

        {/* خط فاصل أبيض بالمكان الحالي للسلايدر */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white"
          style={{ left: `${sliderX}%` }}
        />

        {/* السلايدر */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderX}
          onChange={handleSlider}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 z-10"
        />
      </div>
    </section>
  );
}

export default BeforeAfter;
