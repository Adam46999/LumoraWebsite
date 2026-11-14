// src/components/services/ServiceCard.jsx

import React, { useEffect, useRef, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Check,
  Clock3,
  Layers,
  Plus,
  Sofa,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const iconMap = {
  couch: Sofa,
  bed: BedDouble,
  "layer-group": Layers,
  sparkles: Sparkles,
};

const getText = (lang, values) => {
  if (lang === "he") {
    return values.he;
  }

  if (lang === "en") {
    return values.en;
  }

  return values.ar;
};

export default function ServiceCard({
  id,
  icon,
  titleKey,
  descriptionKey,
  image,
  priority = "secondary",
  onClick,
  onBook,
}) {
  const { t, lang, isRTL } = useLanguage();

  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  const Icon = iconMap[icon] || Sparkles;
  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  const isUnavailable = id === "glass";
  const isPrimary = priority === "primary";

  const title = t?.[titleKey] || titleKey;
  const description = t?.[descriptionKey] || descriptionKey;

  const text = {
    addToOrder: getText(lang, {
      ar: "أضف للطلب",
      en: "Add to order",
      he: "הוספה להזמנה",
    }),

    available: getText(lang, {
      ar: "متاح للطلب",
      en: "Available",
      he: "זמין להזמנה",
    }),

    unavailable: getText(lang, {
      ar: "غير متاح حاليًا",
      en: "Currently unavailable",
      he: "לא זמין כרגע",
    }),

    unavailableDescription: getText(lang, {
      ar: "هذه الخدمة متوقفة مؤقتًا ولا يمكن إضافتها إلى الطلب.",
      en: "This service is temporarily paused and cannot be added to the order.",
      he: "השירות מושהה זמנית ולא ניתן להוסיף אותו להזמנה.",
    }),

    flexibleOrder: getText(lang, {
      ar: "يمكن دمجها مع خدمات أخرى",
      en: "Can be combined with other services",
      he: "ניתן לשלב עם שירותים נוספים",
    }),

    primary: getText(lang, {
      ar: "خدمة أساسية",
      en: "Main service",
      he: "שירות מרכזי",
    }),
  };

  useEffect(() => {
    const element = cardRef.current;

    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const openService = () => {
    if (isUnavailable) {
      return;
    }

    onClick?.();
  };

  const handleKeyboard = (event) => {
    if (isUnavailable) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openService();
    }
  };

  const handleAddToOrder = (event) => {
    event.stopPropagation();

    if (isUnavailable) {
      return;
    }

    onBook?.();
  };

  return (
    <article
      ref={cardRef}
      id={id}
      dir={isRTL ? "rtl" : "ltr"}
      role={isUnavailable ? undefined : "button"}
      tabIndex={isUnavailable ? -1 : 0}
      aria-disabled={isUnavailable}
      aria-label={isUnavailable ? `${title} - ${text.unavailable}` : title}
      onClick={openService}
      onKeyDown={handleKeyboard}
      className={[
        "group relative flex h-full min-h-[390px]",
        "flex-col overflow-hidden rounded-[26px]",
        "border bg-white",
        "transition-all duration-500 ease-out",

        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",

        isUnavailable
          ? [
              "cursor-not-allowed",
              "border-slate-200",
              "shadow-[0_12px_34px_rgba(8,12,29,0.06)]",
            ].join(" ")
          : [
              "cursor-pointer",
              "border-[rgba(17,21,47,0.10)]",
              "shadow-[0_14px_38px_rgba(8,12,29,0.08)]",
              "hover:-translate-y-1.5",
              "hover:border-[rgba(16,148,192,0.28)]",
              "hover:shadow-[0_24px_58px_rgba(8,12,29,0.14)]",
              "focus:outline-none",
              "focus:ring-4",
              "focus:ring-[rgba(174,221,57,0.18)]",
            ].join(" "),
      ].join(" ")}
    >
      {/* Brand top line */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-x-0 top-0 z-20 h-1",
          isUnavailable
            ? "bg-slate-300"
            : [
                "bg-gradient-to-r",
                "from-[var(--lumora-cyan)]",
                "via-[var(--lumora-lime)]",
                "to-[var(--lumora-cyan-light)]",
              ].join(" "),
        ].join(" ")}
      />

      {/* Image */}
      <div
        className="
          relative
          h-[185px]
          shrink-0
          overflow-hidden
          bg-[var(--lumora-navy-950)]
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={[
            "h-full w-full object-cover",
            "transition-transform duration-700 ease-out",

            isUnavailable
              ? "scale-[1.02] grayscale-[35%] opacity-65"
              : "group-hover:scale-[1.055]",
          ].join(" ")}
        />

        <div
          aria-hidden="true"
          className={[
            "absolute inset-0",
            "bg-gradient-to-t",
            "from-[rgba(8,12,29,0.88)]",
            "via-[rgba(8,12,29,0.12)]",
            "to-transparent",
          ].join(" ")}
        />

        {/* Icon */}
        <div
          className={[
            "absolute bottom-4 start-4",
            "flex h-12 w-12 items-center",
            "justify-center rounded-2xl",
            "border backdrop-blur-md",

            isUnavailable
              ? ["border-white/15", "bg-slate-700/75", "text-white/70"].join(
                  " ",
                )
              : [
                  "border-[rgba(174,221,57,0.30)]",
                  "bg-[rgba(8,12,29,0.78)]",
                  "text-[var(--lumora-lime-light)]",
                  "shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
                ].join(" "),
          ].join(" ")}
        >
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
        </div>

        {/* Status badge */}
        <div
          className={[
            "absolute end-3 top-3",
            "inline-flex min-h-8 items-center",
            "gap-1.5 rounded-full border",
            "px-3 py-1",
            "text-[11px] font-black",
            "backdrop-blur-md",

            isUnavailable
              ? [
                  "border-white/15",
                  "bg-[rgba(15,23,42,0.82)]",
                  "text-white",
                ].join(" ")
              : [
                  "border-[rgba(174,221,57,0.30)]",
                  "bg-[rgba(8,12,29,0.80)]",
                  "text-[var(--lumora-lime-light)]",
                ].join(" "),
          ].join(" ")}
        >
          {isUnavailable ? (
            <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
          ) : (
            <Check aria-hidden="true" className="h-3.5 w-3.5" />
          )}

          <span>{isUnavailable ? text.unavailable : text.available}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className={[
                "text-xl font-black leading-tight",
                "tracking-tight",

                isUnavailable
                  ? "text-slate-600"
                  : "text-[var(--lumora-navy-900)]",
              ].join(" ")}
            >
              {title}
            </h3>

            {isPrimary && !isUnavailable && (
              <span
                className="
                  mt-2
                  inline-flex
                  rounded-full
                  bg-[rgba(16,148,192,0.07)]
                  px-2.5
                  py-1
                  text-[10px]
                  font-black
                  text-[var(--lumora-cyan)]
                "
              >
                {text.primary}
              </span>
            )}
          </div>
        </div>

        <p
          className={[
            "mt-3 text-sm font-medium leading-6",
            isUnavailable ? "text-slate-500" : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>

        {isUnavailable && (
          <div
            className="
              mt-4
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-3.5
              py-3
              text-xs
              font-bold
              leading-5
              text-slate-500
            "
          >
            {text.unavailableDescription}
          </div>
        )}

        {!isUnavailable && (
          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              text-xs
              font-bold
              text-[var(--lumora-cyan)]
            "
          >
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />

            <span>{text.flexibleOrder}</span>
          </div>
        )}

        <div className="mt-auto pt-5">
          <button
            type="button"
            disabled={isUnavailable}
            onClick={handleAddToOrder}
            className={[
              "flex h-12 w-full items-center",
              "justify-center gap-2 rounded-xl",
              "px-4 text-sm font-black",
              "transition-all duration-200",

              isUnavailable
                ? [
                    "cursor-not-allowed",
                    "border border-slate-200",
                    "bg-slate-100",
                    "text-slate-400",
                  ].join(" ")
                : [
                    "bg-[var(--lumora-lime)]",
                    "text-[var(--lumora-navy-950)]",
                    "shadow-[0_10px_24px_rgba(79,168,37,0.18)]",
                    "hover:brightness-105",
                    "active:scale-[0.985]",
                  ].join(" "),
            ].join(" ")}
          >
            {isUnavailable ? (
              <Clock3 aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Plus aria-hidden="true" className="h-4 w-4" />
            )}

            <span>{isUnavailable ? text.unavailable : text.addToOrder}</span>

            {!isUnavailable && (
              <DirectionArrow
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:-translate-x-0.5
                  ltr:group-hover:translate-x-0.5
                "
              />
            )}
          </button>
        </div>
      </div>

      {/* Disabled overlay */}
      {isUnavailable && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[26px]
            bg-white/[0.06]
          "
        />
      )}
    </article>
  );
}
