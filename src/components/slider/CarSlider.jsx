import { useMemo, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function CarSlider({
  items = [],
  autoplayDelay = 3500,
  speed = 750,
  loop = true,
  effect = "slide", // "slide" | "fade"
}) {
  const { lang } = useLanguage();
  const isRTL = useMemo(() => ["ar", "he"].includes(lang), [lang]);

  const [current, setCurrent] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const swiperRef = useRef(null);

  if (!items.length) return null;

  const goTo = (dir) => {
    const sw = swiperRef.current;
    if (!sw || isAnimating) return; // 🔒 قفل أثناء الحركة
    if (isRTL) {
      dir === "next" ? sw.slidePrev() : sw.slideNext();
    } else {
      dir === "next" ? sw.slideNext() : sw.slidePrev();
    }
  };

  // فتح المعاينة — تجاهُل الضغط لو كان على زر
  const openPreview = useCallback((e, it) => {
    if (e.defaultPrevented) return;
    if (e.target.closest("[data-no-preview]")) return;
    setSelectedImage(it);
  }, []);

  // زر أنيق مع Ripple + Halo + تعطيل hover مؤقتًا + منع تسرّب الحدث
  const pressButton = (e, dir) => {
    e.preventDefault();
    e.stopPropagation();

    const btn = e.currentTarget;
    btn.classList.add("clicked", "no-hover", "btn-active");
    createRipple(btn, e);

    goTo(dir);

    setTimeout(() => {
      btn.classList.remove("clicked", "no-hover");
    }, 160);
    setTimeout(() => {
      btn.classList.remove("btn-active");
    }, 260);
  };

  // Ripple
  const createRipple = (btn, e) => {
    const rect = btn.getBoundingClientRect();
    const x = ("clientX" in e ? e.clientX : rect.width / 2) - rect.left;
    const y = ("clientY" in e ? e.clientY : rect.height / 2) - rect.top;

    const span = document.createElement("span");
    span.className = "ripple";
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    btn.appendChild(span);
    setTimeout(() => span.remove(), 450);
  };

  return (
    <div
      className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden group animate-fade-in"
      dir={isRTL ? "rtl" : "ltr"}
      aria-roledescription="carousel"
      aria-label="معرض صور الخدمة"
    >
      {/* عدّاد الشرائح */}
      <div
        className="absolute top-4 end-5 z-20 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md shadow-lg"
        aria-live="polite"
      >
        {current} / {items.length}
      </div>

      {/* حافة تظليل جانبية تعطي عمق */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/25 to-transparent z-10 hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/25 to-transparent z-10 hidden sm:block" />

      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          Autoplay,
          Keyboard,
          Mousewheel,
          EffectFade,
        ]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        onSlideChange={(sw) => setCurrent(sw.realIndex + 1)}
        onSlideChangeTransitionStart={() => setIsAnimating(true)}
        onSlideChangeTransitionEnd={() => setIsAnimating(false)}
        effect={effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        loop={loop}
        speed={speed}
        grabCursor
        simulateTouch
        className="rounded-3xl shadow-2xl"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[340px] sm:h-[420px] md:h-[460px] bg-gray-200 overflow-hidden transition-transform duration-200 ease-out active:scale-[0.985]"
              onClick={(e) => openPreview(e, it)}
            >
              <img
                src={it.src}
                alt={it.alt || "صورة الخدمة"}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                draggable={false}
              />

              {/* تدرّج سفلي */}
              <div
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* عنوان/وصف */}
              {(it.title || it.caption) && (
                <div className="absolute bottom-6 inset-x-0 z-10 text-white px-6 select-none pointer-events-none">
                  <h3 className="text-[clamp(16px,3vw,22px)] font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                    {it.title || "خدمة السيارات"}
                  </h3>
                  {it.caption && (
                    <p className="text-[clamp(12px,2.5vw,16px)] opacity-90 leading-snug truncate text-ellipsis overflow-hidden whitespace-nowrap">
                      {it.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل — احترافية وواسعة اللمس */}
      <NavButton
        side="left"
        label="السابق"
        onPointerDown={(e) => pressButton(e, "prev")}
        disabled={isAnimating}
      >
        <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
      </NavButton>

      <NavButton
        side="right"
        label="التالي"
        onPointerDown={(e) => pressButton(e, "next")}
        disabled={isAnimating}
      >
        <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none" />
      </NavButton>

      {/* تلميح سحب */}
      <div className="absolute inset-y-0 left-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center opacity-0 group-hover:opacity-50 transition animate-pulse pointer-events-none">
        <span className="text-white/60 text-2xl">↔️</span>
      </div>

      {/* مودال معاينة */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-5 right-5 text-white hover:text-yellow-400 transition"
            aria-label="إغلاق المعاينة"
            type="button"
            data-no-preview
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || "معاينة الصورة"}
            className="max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl border border-white/20 object-contain animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}

/* ============ زر ملاحة مخصص ============ */
function NavButton({ side = "left", label, disabled, children, ...rest }) {
  const pos = side === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3";

  return (
    <div
      className={`absolute ${pos} top-1/2 -translate-y-1/2 z-30`}
      aria-hidden={disabled ? "true" : "false"}
    >
      {/* منطقة لمس أكبر (Hit Area) */}
      <button
        data-no-preview
        type="button"
        title={label}
        aria-label={label}
        disabled={disabled}
        {...rest}
        onMouseUp={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onPointerUp={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`relative group/nav w-18 h-18 sm:w-20 sm:h-20 p-2 rounded-full outline-none
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          transition-all duration-150 ease-out`}
        style={{ touchAction: "manipulation" }}
      >
        {/* الهالة الخلفية (Halo) */}
        <span className="absolute inset-0 rounded-full bg-black/25 blur-xl opacity-70 group-hover/nav:opacity-90 transition pointer-events-none" />

        {/* الزر نفسه */}
        <span
          className={`relative z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16
          rounded-full border border-yellow-400/50 shadow-xl backdrop-blur-md
          bg-black/45 text-yellow-400 transition-all duration-150
          group-hover/nav:bg-yellow-400/95 group-hover/nav:text-black
          group-active/nav:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70
          btn-elevated`}
        >
          {/* Halo داخلي متحرك بسيط */}
          <span className="absolute inset-0 rounded-full animate-glowRing pointer-events-none" />
          {children}
        </span>
      </button>
    </div>
  );
}
