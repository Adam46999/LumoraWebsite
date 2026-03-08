// src/components/BefAfter/CleaningShowcase.jsx
import React, { useMemo, useCallback } from "react";
import { useLanguage } from "../../context/LanguageContext";
import BeforeAfterCarousel from "./BeforeAfterCarousel";

const SLIDER_SPEED = 450;

function EmptyState({ text, soon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm px-6 py-10 text-center">
      <p className="text-base font-bold text-slate-800">{text}</p>
      <p className="mt-2 text-sm text-slate-500">{soon}</p>
    </div>
  );
}

export default function CleaningShowcase({ sofaPairs = [] }) {
  const { lang } = useLanguage();

  const tr = useCallback(
    (ar, en, he) => {
      if (lang === "he") return he;
      if (lang === "en") return en;
      return ar;
    },
    [lang],
  );

  const titleLead = tr("نتائج", "Results", "תוצאות");
  const titleEmph = tr("التنظيف", "Cleaning", "הניקוי");
  const activeLabel = tr("الكنب", "Sofa", "ספות");
  const trustLine = tr(
    "مقارنات حقيقية وواضحة قبل وبعد التنظيف.",
    "Clear real-life before and after comparisons.",
    "השוואות אמיתיות וברורות לפני ואחרי הניקוי.",
  );

  const counts = useMemo(
    () => ({
      sofa: sofaPairs.length,
    }),
    [sofaPairs.length],
  );

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
            <span>{tr("قبل / بعد", "Before / After", "לפני / אחרי")}</span>
          </div>

          <h2 className="mt-5 text-[clamp(24px,4.8vw,38px)] font-extrabold tracking-tight text-slate-900">
            {titleLead} <span className="text-blue-600">{titleEmph}</span>
            <span className="text-slate-400 mx-2">—</span>
            <span className="text-slate-700">{activeLabel}</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-500">{trustLine}</p>
        </header>

        <div className="mx-auto max-w-5xl mt-4">
          {counts.sofa ? (
            <BeforeAfterCarousel
              pairs={sofaPairs}
              hideDescription
              speed={SLIDER_SPEED}
              showCounter
            />
          ) : (
            <EmptyState
              text={tr(
                "لا يوجد صور كنب حالياً.",
                "No sofa results yet.",
                "אין עדיין תמונות ספה.",
              )}
              soon={tr("قريبًا المزيد.", "More coming soon.", "עוד בקרוב.")}
            />
          )}
        </div>
      </div>
    </section>
  );
}
