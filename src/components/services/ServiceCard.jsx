// src/components/services/ServiceCard.jsx
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Check,
  Layers,
  MessageCircle,
  Sofa,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const ICONS = {
  couch: Sofa,
  car: Car,
  "layer-group": Layers,
  sparkles: Sparkles,
};

function getCopy(lang) {
  if (lang === "he") {
    return {
      available: "השירות זמין",
      popular: "מבוקש",
      request: "הזמנת השירות",
      details: "פרטים",
      requestHint: "בחירת פרטים והמשך ב-WhatsApp",
      imageAltPrefix: "תמונה של",
      ariaOpen: "פתיחת פרטי השירות",
    };
  }

  if (lang === "en") {
    return {
      available: "Service available",
      popular: "Popular",
      request: "Request service",
      details: "Details",
      requestHint: "Choose the details, then continue through WhatsApp",
      imageAltPrefix: "Image of",
      ariaOpen: "Open service details",
    };
  }

  return {
    available: "الخدمة متاحة",
    popular: "الأكثر طلبًا",
    request: "اطلب الخدمة",
    details: "التفاصيل",
    requestHint: "حدد التفاصيل ثم تابع عبر واتساب",
    imageAltPrefix: "صورة خدمة",
    ariaOpen: "فتح تفاصيل الخدمة",
  };
}

export default function ServiceCard({
  id,
  icon,
  titleKey,
  descriptionKey,
  image,
  priority = "secondary",
  onClick,
}) {
  const { t, lang, isRTL } = useLanguage();

  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const copy = getCopy(lang);

  const Icon = ICONS[icon] || Sparkles;
  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  const title = t?.[titleKey] || titleKey;
  const description = t?.[descriptionKey] || descriptionKey;

  const isPrimary = priority === "primary";

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return undefined;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const openDetails = () => {
    onClick?.();
  };

  return (
    <article
      ref={cardRef}
      id={`service-${id}`}
      data-service-id={id}
      data-service-priority={priority}
      data-service-available="true"
      className={[
        "group relative flex h-full scroll-mt-[calc(var(--app-topbar-h,64px)+18px)]",
        "flex-col overflow-hidden rounded-[28px] border bg-white",
        "text-start transition-[transform,opacity,box-shadow,border-color]",
        "duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        isPrimary
          ? "border-blue-100 shadow-[0_16px_44px_rgba(15,23,42,0.10)]"
          : "border-slate-200 shadow-[0_12px_34px_rgba(15,23,42,0.07)]",
        "hover:-translate-y-1 hover:border-blue-200",
        "hover:shadow-[0_22px_55px_rgba(15,23,42,0.13)]",
      ].join(" ")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* صورة الخدمة */}
      <button
        type="button"
        onClick={openDetails}
        className="
          relative block aspect-[16/10] w-full
          overflow-hidden bg-slate-100 text-start
          focus-visible:outline-none
          focus-visible:ring-4 focus-visible:ring-inset
          focus-visible:ring-blue-300
        "
        aria-label={`${copy.ariaOpen}: ${title}`}
      >
        <img
          src={image}
          alt={`${copy.imageAltPrefix} ${title}`}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.035]
          "
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            25vw
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-slate-950/65
            via-slate-950/5
            to-transparent
          "
          aria-hidden="true"
        />

        {/* حالة الخدمة */}
        <div
          className="
            absolute start-3 top-3
            inline-flex items-center gap-1.5
            rounded-full border border-white/25
            bg-slate-950/55 px-3 py-1.5
            text-[11px] font-extrabold text-white
            shadow-sm backdrop-blur-md
          "
        >
          <span
            className="
              flex h-4 w-4 items-center justify-center
              rounded-full bg-emerald-500
            "
            aria-hidden="true"
          >
            <Check size={11} strokeWidth={3} />
          </span>

          <span>{copy.available}</span>
        </div>

        {isPrimary ? (
          <div
            className="
              absolute end-3 top-3
              rounded-full border border-blue-200/40
              bg-blue-600/90 px-3 py-1.5
              text-[11px] font-extrabold text-white
              shadow-sm backdrop-blur-md
            "
          >
            {copy.popular}
          </div>
        ) : null}

        {/* أيقونة الخدمة */}
        <div
          className="
            absolute bottom-3 start-3
            flex h-11 w-11 items-center justify-center
            rounded-2xl border border-white/20
            bg-white/90 text-slate-900
            shadow-lg backdrop-blur-md
          "
          aria-hidden="true"
        >
          <Icon size={22} strokeWidth={2.3} />
        </div>
      </button>

      {/* محتوى الكرت */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <h3
            className="
              text-xl font-black leading-tight
              tracking-tight text-slate-950
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-2 min-h-[48px]
              text-sm font-medium leading-6
              text-slate-600
            "
          >
            {description}
          </p>

          <div
            className="
              mt-4 flex items-start gap-2
              rounded-2xl bg-slate-50
              px-3.5 py-3
              text-xs font-bold leading-5
              text-slate-600
            "
          >
            <MessageCircle
              size={17}
              className="mt-0.5 shrink-0 text-blue-600"
              aria-hidden="true"
            />

            <span>{copy.requestHint}</span>
          </div>
        </div>

        {/* الأزرار */}
        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2.5">
          <button
            type="button"
            onClick={openDetails}
            className="
              inline-flex min-h-12 items-center
              justify-center gap-2 rounded-2xl
              bg-blue-600 px-4 py-3
              text-sm font-extrabold text-white
              shadow-[0_10px_25px_rgba(37,99,235,0.25)]
              transition
              hover:bg-blue-700
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-blue-200
            "
          >
            <span>{copy.request}</span>

            <DirectionArrow size={17} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={openDetails}
            className="
              inline-flex min-h-12 items-center
              justify-center rounded-2xl
              border border-slate-200 bg-white
              px-4 py-3
              text-sm font-extrabold text-slate-700
              transition
              hover:border-slate-300 hover:bg-slate-50
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-slate-200
            "
            aria-label={`${copy.details}: ${title}`}
          >
            {copy.details}
          </button>
        </div>
      </div>
    </article>
  );
}
