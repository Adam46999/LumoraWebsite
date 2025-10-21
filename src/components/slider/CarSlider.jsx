import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  EffectFade, // شلّنا Mousewheel لأنه يبطّئ على الموبايل
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

export default function CarSlider({
  items = [],
  autoplayDelay = 3200,
  speed = 380, // انتقال أسرع لإحساس استجابة
  loop = true,
  effect = "slide",
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const startYRef = useRef(0);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (!items.length) return null;

  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return;
    setSelectedImage(it);
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);

  const stopAutoplay = useCallback(() => {
    const sw = swiperRef.current;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, []);

  const resumeAutoplay = useCallback((delay = 1000) => {
    const sw = swiperRef.current;
    if (!sw) return;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => sw?.autoplay?.start?.(), delay);
  }, []);

  useEffect(() => {
    if (!prefersReduced) return;
    const sw = swiperRef.current;
    if (sw?.autoplay?.running) sw.autoplay.stop();
  }, [prefersReduced]);

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label="معرض صور الخدمة"
      // لمس فوري: أوقف الأوتوبلاي وحرّك progress
      onTouchStart={(e) => {
        setPaused(true);
        stopAutoplay(e);
      }}
      onTouchEnd={() => {
        setPaused(false);
        resumeAutoplay(1500);
      }}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* عدّاد + شريط تقدّم هادئ */}
      {items.length > 1 && (
        <>
          <div
            className="absolute top-3 end-4 z-20 bg-black/55 text-white text-[12px] sm:text-sm px-2.5 py-1 rounded-full backdrop-blur-md select-none"
            aria-live="polite"
          >
            {current} / {items.length}
          </div>
          <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-black/15">
            <div
              key={current}
              className={["h-full", paused ? "" : "slide-progress"].join(" ")}
              style={
                !paused
                  ? {
                      animationDuration: `${autoplayDelay}ms`,
                      background: "rgba(59,130,246,.9)",
                    }
                  : { background: "rgba(59,130,246,.4)" }
              }
              aria-hidden="true"
            />
          </div>
        </>
      )}

      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => {
          setCurrent(sw.realIndex + 1);
          const next = items[(sw.realIndex + 1) % items.length];
          if (next?.src) {
            const img = new Image();
            img.decoding = "async";
            img.src = next.src;
          }
        }}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: !selectedImage }}
        autoplay={
          prefersReduced
            ? false
            : { delay: autoplayDelay, disableOnInteraction: false }
        }
        // 💡 إعدادات لمس فورية
        slidesPerView={1}
        loop={loop}
        speed={prefersReduced ? 0 : speed}
        simulateTouch={true}
        allowTouchMove={true}
        touchStartPreventDefault={true} // يمنع تأخير المتصفح
        shortSwipes={true} // سحب قصير = انتقال
        longSwipes={false}
        threshold={3} // أقل = أسرع
        resistanceRatio={0.5} // حافة ألين
        followFinger={true}
        touchRatio={1.1} // إحساس أسرع
        watchSlidesProgress={false}
        observer
        observeParents
        className="rounded-3xl shadow-2xl"
        style={{ touchAction: "pan-y" }} // لا تتعارض مع التمرير العمودي
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full bg-black/35 overflow-hidden active:scale-[0.99] aspect-[16/9]"
              onClick={(e) => openPreview(e, it)}
              style={{ willChange: "transform" }}
            >
              {/* خلفية خفيفة جداً + ترقية GPU */}
              <img
                src={it.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] opacity-30 pointer-events-none"
                style={{ transform: "translateZ(0)" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              {/* الصورة الرئيسية */}
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-[520ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                style={{ willChange: "transform", transform: "translateZ(0)" }}
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {(it.title || it.caption) && (
                <div className="absolute bottom-4 inset-x-0 z-10 text-white px-5 select-none pointer-events-none">
                  <h3
                    className="text-[clamp(15px,3vw,19px)] font-extrabold drop-shadow"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {it.title || "خدمة السيارات"}
                  </h3>
                  {it.caption && (
                    <p
                      className="text-[clamp(12px,2.5vw,15px)] opacity-90 leading-snug"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* مناطق نقر للتنقّل (خفيفة، بدون منع لمس السحب) */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="absolute inset-y-0 left-0 w-1/3 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "السابق" : "Previous"}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slidePrev();
            }}
            data-no-preview
            style={{ touchAction: "manipulation" }}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 w-1/3 md:w-1/4 z-30 bg-transparent"
            aria-label={isRTL ? "التالي" : "Next"}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              swiperRef.current?.slideNext();
            }}
            data-no-preview
            style={{ touchAction: "manipulation" }}
          />
        </>
      )}

      {/* المعاينة */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onTouchStart={(e) => (startYRef.current = e.touches[0].clientY)}
          onTouchEnd={(e) => {
            const dy = e.changedTouches[0].clientY - startYRef.current;
            if (dy > 60) {
              setSelectedImage(null);
              resumeAutoplay(600);
            }
          }}
          onClick={() => {
            setSelectedImage(null);
            resumeAutoplay(600);
          }}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              resumeAutoplay(600);
            }}
            className="absolute top-5 right-5 text-white hover:text-blue-200 transition w-11 h-11 flex items-center justify-center"
            aria-label="إغلاق المعاينة"
            type="button"
            data-no-preview
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || "معاينة الصورة"}
            className="max-w-[92%] max-h-[84%] rounded-2xl shadow-2xl border border-white/15 object-contain"
            loading="eager"
            decoding="async"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />
        </div>
      )}
    </div>
  );
}
