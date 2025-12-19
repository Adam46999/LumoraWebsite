// src/components/BefAfter/BeforeAfterCarousel.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext";

export default function BeforeAfterCarousel({
  // ✅ supports both old/new names
  items,
  pairs,
  hideDescription = false,
}) {
  const { t, lang } = useLanguage();

  // ✅ always an array -> prevents "map of undefined"
  const list = useMemo(() => {
    if (Array.isArray(items)) return items;
    if (Array.isArray(pairs)) return pairs;
    return [];
  }, [items, pairs]);

  if (!list.length) {
    // optional: render nothing if empty (keeps UI clean)
    return null;
  }

  const title =
    t?.beforeAfterTitle1 ||
    (lang === "ar" ? "قبل / بعد التنظيف" : "Before / After");

  const subtitle =
    t?.beforeAfterTitle2 ||
    (lang === "ar"
      ? "اسحب الخط وشوف الفرق."
      : "Drag the line to see the difference.");

  return (
    <section className="mt-2">
      {!hideDescription ? (
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {title}
            <span className="text-blue-600 ms-1">{subtitle}</span>
          </h3>
        </div>
      ) : null}

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={list.length > 1}
        allowTouchMove
        className="mt-4"
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <BeforeAfter beforeImage={item?.before} afterImage={item?.after} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
