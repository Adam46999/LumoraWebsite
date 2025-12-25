import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext";

export default function BeforeAfterCarousel({
  items,
  pairs,
  hideDescription = false,
}) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const list = useMemo(() => {
    if (Array.isArray(items)) return items;
    if (Array.isArray(pairs)) return pairs;
    return [];
  }, [items, pairs]);

  if (!list.length) return null;

  const title =
    t?.beforeAfterTitle ||
    (lang === "he"
      ? "לפני / אחרי"
      : lang === "en"
      ? "Before / After"
      : "قبل / بعد");

  const subtitle =
    t?.beforeAfterSubtitle ||
    (lang === "he"
      ? "השוואה ישירה לפני / אחרי."
      : lang === "en"
      ? "Side-by-side comparison."
      : "مقارنة مباشرة قبل / بعد.");

  return (
    <section className="mt-2" dir={isRTL ? "rtl" : "ltr"}>
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
        spaceBetween={22}
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
