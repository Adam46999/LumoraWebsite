import React, {
  useMemo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

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

function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [locked]);
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  aspectClass = "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",
  ariaLabel,
}) {
  const { t, lang } = useLanguage();
  const isRTL = useMemo(() => lang === "ar" || lang === "he", [lang]);

  // ✅ helper: minimal + easy future translation
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

  const beforeLabel = tr("ba_before", "قبل", "Before", "לפני");
  const afterLabel = tr("ba_after", "بعد", "After", "אחרי");

  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fallbackOpen, setFallbackOpen] = useState(false);

  useBodyLock(isFullscreen || fallbackOpen);

  const closeFallback = useCallback(() => setFallbackOpen(false), []);
  const openFallback = useCallback(() => setFallbackOpen(true), []);

  const toggleFullscreenOrFallback = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;

    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen?.();
      } catch {}
      setIsFullscreen(false);
      return;
    }

    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen();
        setIsFullscreen(true);
        return;
      }
      openFallback();
    } catch {
      openFallback();
    }
  }, [openFallback]);

  useEffect(() => {
    const exitHandler = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", exitHandler);
    return () => document.removeEventListener("fullscreenchange", exitHandler);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (fallbackOpen) setFallbackOpen(false);
      if (document.fullscreenElement) document.exitFullscreen?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [fallbackOpen]);

  const aria = useMemo(() => {
    return (
      ariaLabel || tr("ba_aria", "قبل / بعد", "Before / After", "לפני / אחרי")
    );
  }, [ariaLabel, tr]);

  const zoomLabel = useMemo(() => {
    return tr("ba_zoom", "تكبير", "Zoom", "הגדלה");
  }, [tr]);

  const closeLabel = useMemo(() => {
    return tr("ba_close", "إغلاق", "Close", "סגור");
  }, [tr]);

  return (
    <>
      <div
        ref={containerRef}
        className={[
          "relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
          aspectClass,
          isFullscreen ? "fixed inset-0 z-[9999] rounded-none border-0" : "",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={aria}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreenOrFallback();
          }}
          className="absolute top-2 end-2 z-30 h-10 w-10 rounded-full bg-black/45 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/55 transition"
          aria-label={isFullscreen || fallbackOpen ? closeLabel : zoomLabel}
        >
          <ExpandIcon className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden">
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
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
              aria-hidden="true"
            />
          </div>

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

        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80" />
        </div>
      </div>

      {fallbackOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={closeFallback}
          role="dialog"
          aria-modal="true"
          aria-label={tr(
            "ba_previewAria",
            "معاينة قبل وبعد",
            "Before/After preview",
            "תצוגה לפני/אחרי"
          )}
        >
          <button
            type="button"
            data-no-preview
            onClick={(e) => {
              e.stopPropagation();
              closeFallback();
            }}
            className="absolute top-5 end-5 text-white hover:text-yellow-400 transition"
            aria-label={closeLabel}
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="w-[94vw] max-w-5xl bg-white/95 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] grid grid-cols-2">
              <div className="relative overflow-hidden">
                <LabelPill text={beforeLabel} align={isRTL ? "end" : "start"} />
                <img
                  src={beforeImage}
                  alt={beforeLabel}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="relative overflow-hidden">
                <LabelPill text={afterLabel} align={isRTL ? "start" : "end"} />
                <img
                  src={afterImage}
                  alt={afterLabel}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 z-20">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-black/10 via-black/0 to-black/10" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/80" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
