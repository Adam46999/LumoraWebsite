import React, { useMemo, useRef, useEffect, useState } from "react";
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

function LabelPill({ text, align = "start" }) {
  // align: "start" | "end"
  return (
    <div
      className={[
        "absolute top-3 z-20 select-none pointer-events-none",
        align === "start" ? "start-3" : "end-3",
        "rounded-full px-3 py-1.5 text-xs sm:text-sm font-extrabold",
        "bg-white/85 text-slate-900 border border-slate-200",
        "shadow-sm backdrop-blur-md",
      ].join(" ")}
    >
      {text}
    </div>
  );
}

export default function BeforeAfter({ beforeImage, afterImage }) {
  const { t, lang } = useLanguage();
  const isRTL = useMemo(() => lang === "ar" || lang === "he", [lang]);

  const beforeLabel =
    t?.beforeAlt || (lang === "he" ? "לפני" : lang === "en" ? "Before" : "قبل");
  const afterLabel =
    t?.afterAlt || (lang === "he" ? "אחרי" : lang === "en" ? "After" : "بعد");

  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      ref={containerRef}
      className={[
        "relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]",
        isFullscreen ? "fixed inset-0 z-[9999] rounded-none border-0" : "",
      ].join(" ")}
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={
        t?.beforeAfterAria || (isRTL ? "قبل / بعد" : "Before / After")
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Fullscreen button (safe, no overlap with images clicks) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}
        className="absolute top-2 end-2 z-30 h-10 w-10 rounded-full bg-black/45 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/55 transition"
        aria-label={
          isFullscreen
            ? t?.exitFullscreen || (isRTL ? "خروج" : "Exit fullscreen")
            : t?.enterFullscreen || (isRTL ? "ملء الشاشة" : "Enter fullscreen")
        }
      >
        <ExpandIcon className="w-5 h-5" />
      </button>

      {/* Two full images side-by-side */}
      <div className="absolute inset-0 grid grid-cols-2">
        {/* BEFORE */}
        <div className="relative overflow-hidden">
          {/* elegant label (no wrong clicks) */}
          <LabelPill text={beforeLabel} align={isRTL ? "end" : "start"} />

          <img
            src={beforeImage}
            alt={beforeLabel}
            draggable={false}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 50vw, 35vw"
          />

          {/* subtle bottom gradient for readability */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* AFTER */}
        <div className="relative overflow-hidden">
          <LabelPill text={afterLabel} align={isRTL ? "start" : "end"} />

          <img
            src={afterImage}
            alt={afterLabel}
            draggable={false}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 50vw, 35vw"
          />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Center divider (premium, crisp) */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20">
        {/* soft edge */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10" />
        {/* main line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80" />
        {/* small center badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full bg-white/90 border border-slate-200 shadow-sm px-3 py-1 text-[11px] sm:text-xs font-extrabold text-slate-700">
            {isRTL ? "قبل | بعد" : "Before | After"}
          </div>
        </div>
      </div>
    </div>
  );
}
