import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Sofa, Car, Layers, Droplet } from "lucide-react"; // أيقونات احترافية

// خريطة أيقونات حسب نوع الخدمة
const iconMap = {
  couch: <Sofa size={36} strokeWidth={2.5} />,
  car: <Car size={36} strokeWidth={2.5} />,
  "layer-group": <Layers size={36} strokeWidth={2.5} />,
  tint: <Droplet size={36} strokeWidth={2.5} />,
};

export default function ServiceCard({
  id,
  icon,
  titleKey,
  descriptionKey,
  onClick,
  bgColor = "bg-white", // لتخصيص اللون حسب الخدمة
}) {
  const { t, lang } = useLanguage();

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🟡 Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      onClick={onClick}
      className={`relative p-6 rounded-2xl shadow-md cursor-pointer 
        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-inner
        ${bgColor}
        ${lang === "ar" ? "text-right" : "text-left"}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ease-in-out duration-700`}
    >
      {/* دائرة الأيقونة */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl shadow-inner">
        {iconMap[icon] || <Sofa size={36} />}
      </div>

      {/* العنوان */}
      <h3 className="text-xl font-bold text-gray-800 mb-1">{t[titleKey]}</h3>

      {/* الوصف */}
      <p className="text-sm text-gray-500 mb-4">{t[descriptionKey]}</p>

      {/* الزر */}
      <div className="text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-2 inline-block px-5 py-2 text-sm sm:text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          {lang === "ar" ? "تعرّف على الخدمة" : "View Details"}
        </button>
      </div>
    </div>
  );
}
