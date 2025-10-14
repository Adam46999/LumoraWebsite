import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Sofa, Car, Layers, Droplet } from "lucide-react";

const iconMap = {
  couch: <Sofa size={22} strokeWidth={2.2} />,
  car: <Car size={22} strokeWidth={2.2} />,
  "layer-group": <Layers size={22} strokeWidth={2.2} />,
  tint: <Droplet size={22} strokeWidth={2.2} />,
};

export default function ServiceCard({
  id,
  icon,
  titleKey,
  descriptionKey,
  image,
  onClick,
}) {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // ✅ ظهور تدريجي عند التمرير (رقم 10 + 16)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      onClick={onClick}
      className={[
        "group cursor-pointer select-none overflow-hidden rounded-2xl border border-gray-100 bg-white",
        "shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out",
        "flex flex-col min-h-[400px] p-6",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 duration-700",
      ].join(" ")}
    >
      {/* صورة الخدمة */}
      <div className="relative w-full h-40 overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={t[titleKey]}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* تدرج خفيف */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* المحتوى */}
      <div className="flex flex-col flex-1">
        {/* العنوان + الأيقونة */}
        <div className="flex items-center gap-2 mb-3 text-blue-600">
          {iconMap[icon]}
          <h3 className="text-xl font-semibold text-gray-900">{t[titleKey]}</h3>
        </div>

        {/* الوصف */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {t[descriptionKey]}
        </p>

        {/* الزر */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="mt-5 w-full rounded-lg bg-blue-50 hover:bg-gradient-to-b hover:from-blue-100 hover:to-white 
          text-blue-700 font-semibold py-2 text-sm transition-all duration-300 
          active:scale-95"
        >
          {lang === "ar" ? "تعرّف على الخدمة" : "View Details"}
        </button>
      </div>
    </article>
  );
}
