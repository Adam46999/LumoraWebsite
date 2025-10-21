import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ExpandIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M4 9V4h5M20 15v5h-5M15 4h5v5M4 15v5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function BeforeAfter({ beforeImage, afterImage }) {
  const { t } = useLanguage();
  const [sliderX, setSliderX] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hasInteractedRef = useRef(false);
  const containerRef = useRef(null);
  const lastTapRef = useRef(0);

  const dragState = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    locked: false,
    preventedScroll: false,
  });

  const hideHintOnce = () => {
    if (!hasInteractedRef.current) {
      setShowHint(false);
      hasInteractedRef.current = true;
    }
  };
  const updateSlider = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderX(percent);
  };

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (hasInteractedRef.current || prefersReduced) return;
    let rafId, timeoutId;
    timeoutId = window.setTimeout(() => {
      const startVal = 50,
        peakVal = 55,
        duration = 700;
      let startTs;
      const animate = (ts) => {
        if (hasInteractedRef.current) return;
        if (!startTs) startTs = ts;
        const p = Math.min(1, (ts - startTs) / duration);
        const ease = 0.5 - 0.5 * Math.cos(Math.PI * p);
        const val = startVal + Math.sin(ease * Math.PI) * (peakVal - startVal);
        setSliderX(val);
        if (p < 1) rafId = requestAnimationFrame(animate);
        else setSliderX(50);
      };
      rafId = requestAnimationFrame(animate);
    }, 480);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const onPointerDownMouse = (e) => {
    e.preventDefault();
    hideHintOnce();
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      locked: false,
      preventedScroll: false,
    };
    updateSlider(e.clientX);
    const move = (ev) => {
      if (!dragState.current.dragging) return;
      if (!dragState.current.locked) {
        const dx = Math.abs(ev.clientX - dragState.current.startX);
        const dy = Math.abs(ev.clientY - dragState.current.startY);
        if (dx > 6 || dy > 6) dragState.current.locked = dx >= dy;
      }
      if (dragState.current.locked) updateSlider(ev.clientX);
    };
    const up = () => {
      dragState.current.dragging = false;
      setSliderX((v) => (Math.abs(v - 50) <= 6 ? 50 : v));
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onPointerDownTouch = (e) => {
    hideHintOnce();
    const t0 = e.touches[0];
    dragState.current = {
      dragging: true,
      startX: t0.clientX,
      startY: t0.clientY,
      locked: false,
      preventedScroll: false,
    };
    updateSlider(t0.clientX);
    const move = (ev) => {
      const tt = ev.touches[0];
      const dx = Math.abs(tt.clientX - dragState.current.startX);
      const dy = Math.abs(tt.clientY - dragState.current.startY);
      if (!dragState.current.locked && (dx > 6 || dy > 6))
        dragState.current.locked = dx * 1.2 >= dy;
      if (dragState.current.locked) {
        if (!dragState.current.preventedScroll) {
          ev.preventDefault();
          dragState.current.preventedScroll = true;
        }
        updateSlider(tt.clientX);
      }
    };
    const up = () => {
      dragState.current.dragging = false;
      setSliderX((v) => (Math.abs(v - 50) <= 6 ? 50 : v));
      window.removeEventListener("touchmove", move, { passive: false });
      window.removeEventListener("touchend", up);
      dragState.current.preventedScroll = false;
    };
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
  };

  const onDoubleClick = () => {
    hideHintOnce();
    setSliderX(50);
  };
  const onTouchStartDouble = (e) => {
    const now = Date.now();
    if (now - lastTapRef.current < 350) {
      e.preventDefault();
      onDoubleClick();
    }
    lastTapRef.current = now;
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen?.();
        setIsFullscreen(true);
        document.body.style.overflow = "hidden";
      } else {
        await document.exitFullscreen?.();
        setIsFullscreen(false);
        document.body.style.overflow = "";
      }
    } catch {
      setIsFullscreen((v) => !v);
      document.body.style.overflow = !isFullscreen ? "hidden" : "";
    }
  };
  useEffect(() => {
    const exitHandler = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("fullscreenchange", exitHandler);
    return () => {
      document.removeEventListener("fullscreenchange", exitHandler);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      id="beforeafter"
      ref={containerRef}
      onDoubleClick={onDoubleClick}
      onTouchStart={onTouchStartDouble}
      className={[
        "relative w-full overflow-hidden rounded-2xl shadow-md bg-gray-100 select-none",
        // أحجام أكبر: 4/3 موبايل، 16/10 وسط، 16/9 كبير
        "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]",
        isFullscreen ? "fixed inset-0 z-[9999] rounded-none h-auto" : "",
      ].join(" ")}
      aria-roledescription="before-after"
      aria-label={t?.beforeAfterAria || "مقارنة قبل/بعد"}
      style={{ WebkitTapHighlightColor: "transparent", touchAction: "pan-y" }}
    >
      {/* زر ملء الشاشة */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          hideHintOnce();
          toggleFullscreen();
        }}
        className="absolute top-2 right-2 z-40 h-10 w-10 rounded-full bg-black/45 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/55 transition"
        aria-label={
          isFullscreen
            ? t?.exitFullscreen || "خروج من ملء الشاشة"
            : t?.enterFullscreen || "ملء الشاشة"
        }
      >
        <ExpandIcon className="w-5 h-5" />
      </button>

      {/* بعد */}
      <img
        src={afterImage}
        alt={t?.afterAlt || "بعد"}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0"
        sizes="(max-width: 640px) 100vw, 70vw"
      />
      {/* قبل */}
      <img
        src={beforeImage}
        alt={t?.beforeAlt || "قبل"}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        sizes="(max-width: 640px) 100vw, 70vw"
      />

      {/* ظل خفيف حول الفاصل لتحسين تباينه */}
      <div
        className="pointer-events-none absolute top-0 h-full z-20"
        style={{
          left: `${sliderX}%`,
          transform: "translateX(-50%)",
          width: "26px",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.16), rgba(0,0,0,0) 55%), " +
            "linear-gradient(to left, rgba(0,0,0,0.16), rgba(0,0,0,0) 55%)",
        }}
      />

      {/* خط فاصل أوضح قليلًا */}
      <div
        className="absolute top-0 h-full w-[3px] bg-blue-500/95 z-30"
        style={{ left: `${sliderX}%`, transform: "translateX(-50%)" }}
      />

      {/* مقبض أكبر ولمس أسهل */}
      <div
        className="absolute z-40"
        style={{
          left: `${sliderX}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="absolute -inset-8 cursor-ew-resize"
          style={{ touchAction: "pan-y" }}
          onMouseDown={onPointerDownMouse}
          onTouchStart={onPointerDownTouch}
          aria-hidden="true"
        />
        <div
          role="slider"
          aria-label={t?.beforeAfterAria || "مقارنة قبل بعد"}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderX)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setSliderX((v) => Math.max(0, v - 5));
            if (e.key === "ArrowRight") setSliderX((v) => Math.min(100, v + 5));
            if (e.key === "Home") setSliderX(0);
            if (e.key === "End") setSliderX(100);
          }}
          className="h-11 w-11 rounded-full border-[3px] border-white bg-blue-600 shadow-md pointer-events-none flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden>
            <path
              d="M8 12h8M11 9l-3 3 3 3M13 9l3 3-3 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* تلميح مرّة واحدة */}
      {showHint && (
        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="bg-black/55 text-white px-4 py-2 rounded-full text-sm animate-pulse flex items-center gap-2">
            <span className="text-xl">⬅️</span>
            <span>{t?.beforeAfterHint || "اسحب للمقارنة"}</span>
            <span className="text-xl">➡️</span>
          </div>
        </div>
      )}

      {/* طبقة سحب عامّة على كامل الصورة (سحب فقط) */}
      <div
        className="absolute inset-0 z-10 cursor-ew-resize"
        style={{ touchAction: "pan-y" }}
        onMouseDown={onPointerDownMouse}
        onTouchStart={onPointerDownTouch}
        aria-hidden="true"
      />
    </div>
  );
}

export default BeforeAfter;
