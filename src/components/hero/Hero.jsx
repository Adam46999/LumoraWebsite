// src/components/hero/Hero.jsx
import { useMemo } from "react";

import { useLanguage } from "../../context/LanguageContext";

import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButton from "./HeroButton";
import HeroTrustPills from "./HeroTrustPills";
import ScrollHint from "./ScrollHint";

export default function Hero() {
  const { t, lang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const eyebrow = useMemo(() => {
    if (lang === "he") {
      return "ניקוי מקצועי עם תוצאות ברורות";
    }

    if (lang === "en") {
      return "Professional cleaning with visible results";
    }

    return "تنظيف احترافي بنتائج واضحة";
  }, [lang]);

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="
        relative
        isolate
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[var(--lumora-navy-950)]
        sm:min-h-[660px]
        lg:min-h-[690px]
      "
    >
      {/* Existing rotating cleaning images */}
      <HeroBackground />

      {/* Main readable overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[rgba(8,12,29,0.66)]
        "
      />

      {/* Directional overlay keeps text readable without hiding the photo */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-y-0 z-[3] w-full",
          "lg:w-[72%]",
          isRTL
            ? "right-0 bg-gradient-to-l from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent"
            : "left-0 bg-gradient-to-r from-[rgba(8,12,29,0.94)] via-[rgba(8,12,29,0.68)] to-transparent",
        ].join(" ")}
      />

      {/* One subtle brand watermark only */}
      <img
        src="/lumora-icon.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className={[
          "pointer-events-none absolute z-[4]",
          "top-1/2 -translate-y-1/2",
          "h-[280px] w-[280px]",
          "select-none object-contain opacity-[0.075]",
          "sm:h-[360px] sm:w-[360px]",
          "lg:h-[470px] lg:w-[470px]",
          isRTL
            ? "-left-24 sm:-left-20 lg:left-[4%]"
            : "-right-24 sm:-right-20 lg:right-[4%]",
        ].join(" ")}
      />

      {/* Main content */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[620px]
          w-full
          max-w-7xl
          items-center
          px-4
          pb-28
          pt-14
          sm:min-h-[660px]
          sm:px-6
          sm:pb-28
          sm:pt-16
          lg:min-h-[690px]
          lg:px-8
          lg:pb-24
          lg:pt-16
        "
      >
        <div
          className={[
            "flex w-full flex-col",
            "items-center text-center",
            "lg:max-w-[720px]",
            isRTL
              ? "lg:items-start lg:text-right"
              : "lg:items-start lg:text-left",
          ].join(" ")}
        >
          {/* Small, clean brand label */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-black/15
              px-3
              py-1.5
              text-[11px]
              font-bold
              text-white/85
              backdrop-blur-sm
              sm:text-xs
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--lumora-lime)]
              "
            />

            <span>{eyebrow}</span>
          </div>

          <HeroTitle />

          <HeroSubtitle />

          <HeroButton t={t} />

          <HeroTrustPills />
        </div>
      </div>

      {/* Very light transition to the next section */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[21]
          h-20
          bg-gradient-to-t
          from-[rgba(8,12,29,0.72)]
          to-transparent
        "
      />

      <ScrollHint />
    </section>
  );
}
