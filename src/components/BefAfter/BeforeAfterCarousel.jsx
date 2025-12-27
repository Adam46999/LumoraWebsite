// src/components/BefAfter/BeforeAfterCarousel.jsx
import React, { useMemo, useState } from "react";
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
  speed = 400, // ✅ (7)
  showCounter = true, // ✅ (6)
}) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const list = useMemo(() => {
    if (Array.isArray(items)) return items;
    if (Array.isArray(pairs)) return pairs;
    return [];
  }, [items, pairs]);

  const [current, setCurrent] = useState(0);

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
    <section className="mt-2 relative" dir={isRTL ? "rtl" : "ltr"}>
      {!hideDescription ? (
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {title}
            <span className="text-blue-600 ms-2">{subtitle}</span>
          </h3>
        </div>
      ) : null}

      {/* ✅ (6) Counter */}
      <div className="absolute bottom-3 end-3 z-20 bg-black/50 text-white text-[11px] sm:text-sm px-2 py-1 rounded-full backdrop-blur-md select-none">
        {current + 1} / {list.length}
      </div>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={18}
        slidesPerView={1}
        loop={list.length > 1}
        allowTouchMove
        onSlideChange={(sw) => setCurrent(sw.realIndex)}
        // ✅ (7) + لمسة أنعم
        speed={speed}
        threshold={4}
        resistanceRatio={0.7}
        touchRatio={1.05}
        followFinger
        shortSwipes
        longSwipes={false}
        touchStartPreventDefault={false}
        touchMoveStopPropagation
        style={{
          touchAction: "pan-y",
          ["--swiper-pagination-bullet-size"]: "9px",
          ["--swiper-pagination-bullet-horizontal-gap"]: "6px",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="mt-4"
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <BeforeAfter beforeImage={item?.before} afterImage={item?.after} />
          </SwiperSlide>
        ))}
      </Swiper>

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
