import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  Sofa,
  Car,
  Layers,
  Droplet,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

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
  onBook,
  meta,
  badge,
}) {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // ✅ ظهور تدريجي عند التمرير
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
        "shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out",
        "flex flex-col p-5 sm:p-6",
        "min-h-[340px]",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 duration-700",
      ].join(" ")}
      aria-label={t[titleKey]}
      data-service-id={id}
    >
      {/* صورة الخدمة */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={t[titleKey]}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* ✅ Badge صغير */}
        {badge ? (
          <div className="absolute top-3 start-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-black text-gray-800 shadow-sm">
            {badge}
          </div>
        ) : null}
      </div>

      {/* المحتوى */}
      <div className="flex flex-col flex-1">
        {/* العنوان + الأيقونة */}
        <div className="flex items-center gap-2 mb-2 text-blue-600">
          {iconMap[icon]}
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
            {t[titleKey]}
          </h3>
        </div>

        {/* ✅ meta (مدة + سعر تقريبي) */}
        {meta ? (
          <div className="mb-3 text-xs font-semibold text-gray-500">{meta}</div>
        ) : null}

        {/* الوصف */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {t[descriptionKey]}
        </p>

        {/* ✅ أزرار واضحة: تفاصيل + احجز */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2.5 text-sm transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            {lang === "ar" ? "تفاصيل" : "Details"}
            <ArrowRight
              size={16}
              className={lang === "ar" ? "rotate-180" : ""}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBook?.();
            }}
            className="rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold py-2.5 text-sm transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {lang === "ar" ? "احجز" : "Book"}
          </button>
        </div>
      </div>
    </article>
  );
}
