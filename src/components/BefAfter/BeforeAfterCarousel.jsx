import React, { useMemo, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y } from "swiper/modules";
import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext";

export default function BeforeAfterCarousel({
  items,
  pairs,
  hideDescription = false,
  speed = 400,
  showCounter = true,
  aspectClass = "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",
  showDots = true,
}) {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const tr = useCallback(
    (key, ar, en, he) => {
      const v = t?.[key];
      if (typeof v === "string" && v.trim()) return v;
      if (lang === "he") return he ?? en ?? ar;
      if (lang === "en") return en ?? ar ?? he;
      return ar ?? en ?? he;
    },
    [t, lang]
  );

  const list = useMemo(() => {
    if (Array.isArray(items)) return items;
    if (Array.isArray(pairs)) return pairs;
    return [];
  }, [items, pairs]);

  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);

  if (!list.length) return null;

  const title = tr("ba_title", "قبل / بعد", "Before / After", "לפני / אחרי");
  const subtitle = tr(
    "ba_subtitle",
    "مقارنة واضحة — بدون أسهم.",
    "Clean comparison — no arrows.",
    "השוואה נקייה — בלי חצים."
  );

  const slideToIndex = useCallback(
    (idx) => {
      const sw = swiperRef.current;
      if (!sw) return;
      if (typeof sw.slideToLoop === "function") sw.slideToLoop(idx, speed);
      else sw.slideTo(idx, speed);
    },
    [speed]
  );

  const total = list.length;
  const DOT_SIZE = 10;
  const DOT_GAP = 8;
  const GLIDER_WIDTH = 16;
  const DOTS_PADDING_X = 12;

  const slideAria = useCallback(
    (n) =>
      tr(
        "ba_gotoSlide",
        `اذهب إلى الشريحة ${n}`,
        `Go to slide ${n}`,
        `עבור לשקופית ${n}`
      ),
    [tr]
  );

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

      {showCounter && total > 1 && (
        <div className="absolute bottom-3 end-3 z-30 bg-black/50 text-white text-[11px] sm:text-sm px-2 py-1 rounded-full backdrop-blur-md select-none">
          {current + 1} / {total}
        </div>
      )}

      <div className="relative">
        <Swiper
          modules={[A11y]}
          spaceBetween={18}
          slidesPerView={1}
          loop={list.length > 1}
          allowTouchMove
          onSwiper={(sw) => (swiperRef.current = sw)}
          onSlideChange={(sw) => setCurrent(sw.realIndex)}
          speed={speed}
          threshold={4}
          resistanceRatio={0.7}
          touchRatio={1.05}
          followFinger
          shortSwipes
          longSwipes={false}
          touchStartPreventDefault={false}
          touchMoveStopPropagation
          style={{ touchAction: "pan-y" }}
          className="mt-4"
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <BeforeAfter
                beforeImage={item?.before}
                afterImage={item?.after}
                aspectClass={aspectClass}
                ariaLabel={tr(
                  "ba_aria",
                  "قبل / بعد",
                  "Before / After",
                  "לפני / אחרי"
                )}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {showDots && total > 1 && (
          <div className="absolute inset-x-0 bottom-0 pb-[max(12px,env(safe-area-inset-bottom))] z-30 flex items-center justify-center pointer-events-none">
            <div className="relative inline-flex items-center justify-start gap-[8px] px-3 py-2 rounded-full bg-black/40 backdrop-blur-md pointer-events-auto">
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 h-6 rounded-full bg-white/20 transition-transform duration-250 ease-out"
                style={{
                  width: GLIDER_WIDTH,
                  transform: `translateX(${
                    DOTS_PADDING_X +
                    DOT_SIZE / 2 -
                    GLIDER_WIDTH / 2 +
                    current * (DOT_SIZE + DOT_GAP)
                  }px) translateY(-50%)`,
                }}
                aria-hidden="true"
              />
              {list.map((_, idx) => {
                const activeDot = idx === current;
                return (
                  <button
                    key={idx}
                    type="button"
                    aria-label={slideAria(idx + 1)}
                    onClick={() => slideToIndex(idx)}
                    className={[
                      "relative rounded-full transition-all duration-200 ease-out outline-none border border-white/40",
                      activeDot
                        ? "bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)] scale-110"
                        : "bg-white/70 hover:bg-white",
                    ].join(" ")}
                    style={{ width: DOT_SIZE, height: DOT_SIZE }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
