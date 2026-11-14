// src/components/BefAfter/CleaningShowcase.jsx
import { useCallback, useEffect } from "react";

import { useLanguage } from "../../context/LanguageContext";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

export default function CleaningShowcase({ sofaPairs = [] }) {
  const { lang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const tr = useCallback(
    (arabic, english, hebrew) => {
      if (lang === "he") {
        return hebrew;
      }

      if (lang === "en") {
        return english;
      }

      return arabic;
    },
    [lang],
  );

  useEffect(() => {
    const firstImages = sofaPairs
      .slice(0, 2)
      .flatMap((pair) => [pair?.before, pair?.after])
      .filter(Boolean);

    firstImages.forEach((imageUrl) => {
      const image = new Image();
      image.decoding = "async";
      image.src = imageUrl;
    });
  }, [sofaPairs]);

  const resultsCount = sofaPairs.length;

  return (
    <section
      id="cleaning-showcase"
      dir={isRTL ? "rtl" : "ltr"}
      className="
        mx-auto
        w-full
        max-w-6xl
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:py-16
      "
    >
      {/* Section heading */}
      <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[rgba(17,21,47,0.10)]
            bg-white
            px-3.5
            py-1.5
            text-xs
            font-extrabold
            text-[var(--lumora-navy-900)]
            shadow-sm
          "
        >
          <span
            aria-hidden="true"
            className="
              h-2
              w-2
              rounded-full
              bg-[var(--lumora-lime)]
              shadow-[0_0_0_4px_rgba(174,221,57,0.12)]
            "
          />

          <span>{tr("نتائج حقيقية", "Real results", "תוצאות אמיתיות")}</span>
        </div>

        <h2
          className="
            mt-4
            text-[clamp(25px,5vw,39px)]
            font-black
            leading-tight
            tracking-tight
            text-[var(--lumora-navy-900)]
          "
        >
          {tr(
            "الفرق واضح من أول نظرة",
            "The difference is clear",
            "רואים את ההבדל מיד",
          )}
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-sm
            font-medium
            leading-7
            text-slate-600
            sm:text-base
          "
        >
          {tr(
            "صور حقيقية قبل وبعد تنظيف الكنب، بدون مبالغة وبدون فلاتر.",
            "Real before-and-after sofa cleaning results, without exaggeration or filters.",
            "תמונות אמיתיות לפני ואחרי ניקוי ספות, ללא הגזמה וללא פילטרים.",
          )}
        </p>

        {resultsCount > 0 && (
          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[rgba(16,148,192,0.07)]
              px-3
              py-2
              text-xs
              font-bold
              text-[var(--lumora-navy-900)]
            "
          >
            <span className="text-[var(--lumora-cyan)]">{resultsCount}</span>

            <span>
              {tr("نتائج موثقة", "documented results", "תוצאות מתועדות")}
            </span>
          </div>
        )}
      </header>

      {/* Sofa results only */}
      <div className="mx-auto max-w-5xl">
        {resultsCount > 0 ? (
          <BeforeAfterCarousel pairs={sofaPairs} hideDescription />
        ) : (
          <EmptyState
            title={tr(
              "سيتم إضافة النتائج قريبًا",
              "Results will be added soon",
              "התוצאות יתווספו בקרוב",
            )}
            description={tr(
              "صور قبل وبعد تنظيف الكنب ستظهر هنا.",
              "Before-and-after sofa cleaning images will appear here.",
              "תמונות לפני ואחרי ניקוי ספות יופיעו כאן.",
            )}
          />
        )}
      </div>
    </section>
  );
}

function EmptyState({ title, description }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-5
        py-10
        text-center
        shadow-sm
        sm:px-8
        sm:py-14
      "
    >
      <div
        aria-hidden="true"
        className="
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[rgba(174,221,57,0.12)]
        "
      >
        <span
          className="
            h-5
            w-5
            rounded-full
            bg-[var(--lumora-lime)]
          "
        />
      </div>

      <h3
        className="
          mt-4
          text-lg
          font-black
          text-[var(--lumora-navy-900)]
        "
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}
