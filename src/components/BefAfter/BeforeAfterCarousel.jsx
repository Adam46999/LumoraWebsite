import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y } from "swiper/modules";
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
      ? "השוואה ברורה בלי חצים."
      : lang === "en"
      ? "Clean comparison — no arrows."
      : "مقارنة واضحة — بدون أسهم.");

  return (
    <section className="mt-2" dir={isRTL ? "rtl" : "ltr"}>
      {!hideDescription ? (
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {title}
            <span className="text-blue-600 ms-2">{subtitle}</span>
          </h3>
        </div>
      ) : null}

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={22}
        slidesPerView={1}
        loop={list.length > 1}
        allowTouchMove
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mt-4"
        style={{
          // شكل dots أرقى شوي (بدون ما نحتاج CSS خارجي)
          ["--swiper-pagination-bullet-size"]: "9px",
          ["--swiper-pagination-bullet-horizontal-gap"]: "6px",
        }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <BeforeAfter beforeImage={item?.before} afterImage={item?.after} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* تحسين بسيط لمكان الـ dots */}
      <style>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 12px !important;
        }
        .swiper-pagination-bullet {
          opacity: .55;
          transform: translateZ(0);
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
