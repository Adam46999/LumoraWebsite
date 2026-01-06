import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  Sofa,
  Car,
  Layers,
  Droplet,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { serviceDetails } from "./serviceDetailsData";

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
  meta, // نخليه موجود للتوافق، بس رح نعمل override إذا قدرنا نطلع meta من data
  badge,
}) {
  const { t, tFn, lang, isRTL } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // ✅ Fade-in on scroll
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

  // ✅ pull duration/price from serviceDetailsData like the modal does
  const computedMeta = useMemo(() => {
    const d = serviceDetails?.[id];
    const first = d?.cards?.[0];
    if (!first) return meta || null;

    const duration = first?.[`duration_${lang}`] ?? first?.duration ?? null;
    const price = first?.[`price_${lang}`] ?? first?.price ?? null;

    // إذا ناقص ترجمة للـ he/en رح يبان هون — بس على الأقل ما نخلط لغات بدون قصد
    if (!duration && !price) return meta || null;

    // ✅ نص موحد + مترجم (بدون ما نجبر شكل/ترتيب) — بس نضمن اللغة صح
    // مثال بالعربي: "45 دقيقة · ₪ 150"
    // بالانجليزي: "45 min · ₪ 150"
    // بالعبري: "45 דק׳ · ₪ 150"
    const parts = [];
    if (duration) parts.push(duration);
    if (price) parts.push(price);

    return parts.join(" · ");
  }, [id, lang, meta]);

  const bidiBoxProps = { dir: "ltr", style: { unicodeBidi: "plaintext" } };

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
      aria-label={t?.[titleKey] || titleKey}
      data-service-id={id}
    >
      {/* Image */}
      <div className="relative w-full h-36 sm:h-40 overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={t?.[titleKey] || titleKey}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {badge ? (
          <div
            className="absolute top-3 start-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-black text-gray-800 shadow-sm"
            style={{ unicodeBidi: "plaintext" }}
          >
            {badge}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 text-blue-600">
          {iconMap[icon]}
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
            {t?.[titleKey] || titleKey}
          </h3>
        </div>

        {/* ✅ Meta (duration + price) */}
        {computedMeta ? (
          <div className="mb-3 text-xs font-semibold text-gray-500">
            <span {...bidiBoxProps}>{computedMeta}</span>
          </div>
        ) : null}

        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {t?.[descriptionKey] || descriptionKey}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2.5 text-sm transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            {/* ✅ FIX: لازم {} */}
            {tFn("services.actions.details")}
            <ArrowRight
              size={16}
              className={isRTL ? "rotate-180" : ""}
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
            {/* ✅ FIX: لازم {} */}
            {tFn("services.actions.book")}
          </button>
        </div>
      </div>
    </article>
  );
}
