// src/components/BefAfter/BeforeAfterCarousel.jsx
import { useCallback, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import BeforeAfter from "./BeforeAfter";
import { useLanguage } from "../../context/LanguageContext";

function getCopy(lang) {
  if (lang === "he") {
    return {
      title: "לפני / אחרי",
      subtitle: "השוואה ברורה בין התוצאה לפני ואחרי הניקוי.",
      previous: "התוצאה הקודמת",
      next: "התוצאה הבאה",
      counter: (current, total) => `${current} מתוך ${total}`,
      swipeHint: "החליקו לצדדים כדי לראות תוצאות נוספות",
      carouselLabel: "גלריית תוצאות לפני ואחרי",
      resultLabel: (index) => `תוצאת ניקוי מספר ${index}`,
    };
  }

  if (lang === "en") {
    return {
      title: "Before / After",
      subtitle: "A clear comparison of the result before and after cleaning.",
      previous: "Previous result",
      next: "Next result",
      counter: (current, total) => `${current} of ${total}`,
      swipeHint: "Swipe sideways to see more results",
      carouselLabel: "Before and after results gallery",
      resultLabel: (index) => `Cleaning result ${index}`,
    };
  }

  return {
    title: "قبل / بعد",
    subtitle: "مقارنة واضحة للنتيجة قبل التنظيف وبعده.",
    previous: "النتيجة السابقة",
    next: "النتيجة التالية",
    counter: (current, total) => `${current} من ${total}`,
    swipeHint: "اسحب لليمين أو اليسار لمشاهدة نتائج إضافية",
    carouselLabel: "معرض نتائج قبل وبعد التنظيف",
    resultLabel: (index) => `نتيجة التنظيف رقم ${index}`,
  };
}

export default function BeforeAfterCarousel({
  items,
  pairs,
  hideDescription = false,
}) {
  const { lang, isRTL } = useLanguage();

  const swiperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const copy = useMemo(() => getCopy(lang), [lang]);

  const list = useMemo(() => {
    if (Array.isArray(items)) {
      return items.filter((item) => item?.before && item?.after);
    }

    if (Array.isArray(pairs)) {
      return pairs.filter((item) => item?.before && item?.after);
    }

    return [];
  }, [items, pairs]);

  const total = list.length;
  const hasMultipleItems = total > 1;

  const goPrevious = useCallback(() => {
    const swiper = swiperRef.current;

    if (!swiper || !hasMultipleItems) return;

    swiper.slidePrev();
  }, [hasMultipleItems]);

  const goNext = useCallback(() => {
    const swiper = swiperRef.current;

    if (!swiper || !hasMultipleItems) return;

    swiper.slideNext();
  }, [hasMultipleItems]);

  if (!total) return null;

  /*
    في RTL:
    السهم الموجود بصريًا على اليمين يقود للنتيجة السابقة،
    والسهم الموجود على اليسار يقود للنتيجة التالية.
  */
  const StartArrowIcon = isRTL ? ChevronRight : ChevronLeft;
  const EndArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section
      className="lumora-before-after-carousel mt-2"
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={copy.carouselLabel}
    >
      {!hideDescription ? (
        <header className="mx-auto mb-5 max-w-2xl text-center">
          <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
            {copy.title}
          </h3>

          <p className="mt-2 text-sm font-medium leading-6 text-slate-600 sm:text-base">
            {copy.subtitle}
          </p>
        </header>
      ) : null}

      <div className="relative">
        {/* عداد الصور */}
        {hasMultipleItems ? (
          <div
            className="
              absolute start-3 top-3 z-40
              inline-flex min-h-9 items-center justify-center
              rounded-full border border-white/20
              bg-slate-950/60 px-3
              text-xs font-extrabold text-white
              shadow-lg backdrop-blur-md
              sm:start-4 sm:top-4
            "
            aria-live="polite"
            aria-atomic="true"
          >
            {copy.counter(currentIndex + 1, total)}
          </div>
        ) : null}

        <Swiper
          key={lang}
          modules={[Pagination, A11y, Keyboard]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setCurrentIndex(swiper.realIndex || 0);
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={hasMultipleItems}
          allowTouchMove={hasMultipleItems}
          grabCursor={hasMultipleItems}
          keyboard={{
            enabled: hasMultipleItems,
            onlyInViewport: true,
          }}
          pagination={
            hasMultipleItems
              ? {
                  clickable: true,
                  dynamicBullets: total > 7,
                }
              : false
          }
          speed={420}
          threshold={5}
          resistanceRatio={0.7}
          watchOverflow
          observer
          observeParents
          className="overflow-hidden rounded-3xl"
          aria-label={copy.carouselLabel}
          style={{
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "5px",
          }}
        >
          {list.map((item, index) => (
            <SwiperSlide
              key={`${item.before}-${item.after}-${index}`}
              aria-label={copy.resultLabel(index + 1)}
            >
              <BeforeAfter beforeImage={item.before} afterImage={item.after} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الأسهم — واضحة على الكمبيوتر */}
        {hasMultipleItems ? (
          <>
            <button
              type="button"
              onClick={goPrevious}
              className="
                absolute start-3 top-1/2 z-40
                hidden h-12 w-12 -translate-y-1/2
                items-center justify-center
                rounded-full border border-white/25
                bg-slate-950/60 text-white
                shadow-[0_10px_30px_rgba(15,23,42,0.30)]
                backdrop-blur-md transition
                hover:scale-105 hover:bg-slate-950/75
                active:scale-95
                focus-visible:outline-none
                focus-visible:ring-4 focus-visible:ring-white/40
                sm:flex
              "
              aria-label={copy.previous}
            >
              <StartArrowIcon
                className="h-6 w-6"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="
                absolute end-3 top-1/2 z-40
                hidden h-12 w-12 -translate-y-1/2
                items-center justify-center
                rounded-full border border-white/25
                bg-slate-950/60 text-white
                shadow-[0_10px_30px_rgba(15,23,42,0.30)]
                backdrop-blur-md transition
                hover:scale-105 hover:bg-slate-950/75
                active:scale-95
                focus-visible:outline-none
                focus-visible:ring-4 focus-visible:ring-white/40
                sm:flex
              "
              aria-label={copy.next}
            >
              <EndArrowIcon
                className="h-6 w-6"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleItems ? (
        <>
          {/* تلميح للموبايل */}
          <div
            className="
              mt-3 flex items-center justify-center gap-2
              text-center text-xs font-bold text-slate-500
              sm:hidden
            "
          >
            <MoveHorizontal
              className="h-4 w-4 shrink-0 text-blue-600"
              aria-hidden="true"
            />

            <span>{copy.swipeHint}</span>
          </div>

          {/* أزرار إضافية سهلة تحت الصورة للموبايل */}
          <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
            <button
              type="button"
              onClick={goPrevious}
              className="
                inline-flex min-h-11 items-center justify-center gap-2
                rounded-2xl border border-slate-200
                bg-white px-3 text-sm font-extrabold text-slate-700
                shadow-sm transition
                active:scale-[0.98] active:bg-slate-50
                focus-visible:outline-none
                focus-visible:ring-4 focus-visible:ring-blue-100
              "
            >
              <StartArrowIcon className="h-4 w-4" aria-hidden="true" />

              <span>{copy.previous}</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              className="
                inline-flex min-h-11 items-center justify-center gap-2
                rounded-2xl bg-blue-600
                px-3 text-sm font-extrabold text-white
                shadow-sm transition
                active:scale-[0.98] active:bg-blue-700
                focus-visible:outline-none
                focus-visible:ring-4 focus-visible:ring-blue-100
              "
            >
              <span>{copy.next}</span>

              <EndArrowIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </>
      ) : null}

      {/* تنسيق خاص بهذا المعرض فقط */}
      <style>{`
        .lumora-before-after-carousel .swiper-pagination {
          position: relative !important;
          inset: auto !important;
          display: flex;
          min-height: 30px;
          align-items: center;
          justify-content: center;
          margin-top: 10px !important;
        }

        .lumora-before-after-carousel .swiper-pagination-bullet {
          opacity: 0.42;
          background: rgb(100 116 139);
          transition:
            width 180ms ease,
            opacity 180ms ease,
            background-color 180ms ease;
        }

        .lumora-before-after-carousel .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          opacity: 1;
          background: rgb(37 99 235);
        }

        @media (prefers-reduced-motion: reduce) {
          .lumora-before-after-carousel *,
          .lumora-before-after-carousel *::before,
          .lumora-before-after-carousel *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
