import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  X,
  CheckCircle2,
  Info,
  ShieldCheck,
  Clock,
  Tag,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { serviceDetails } from "./serviceDetailsData";

export default function ServiceModal({
  isOpen,
  onClose,
  selected,
  onOrderNow,
  onQuickQuestion,
}) {
  const { lang, t, tFn, dir } = useLanguage();

  const details = useMemo(() => {
    if (!selected) return null;
    return serviceDetails?.[selected.id] || null;
  }, [selected]);

  const first = details?.cards?.[0] || null;

  const [preferredTime, setPreferredTime] = useState("today"); // today | tomorrow | week
  const [note, setNote] = useState("");
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setPreferredTime("today");
    setNote("");
    setIsOpening(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !selected) return null;

  const title =
    details?.[
      lang === "ar" ? "title_ar" : lang === "he" ? "title_he" : "title_en"
    ] ||
    t?.[selected.titleKey] ||
    selected.id;

  const subtitle =
    details?.[
      lang === "ar"
        ? "subtitle_ar"
        : lang === "he"
        ? "subtitle_he"
        : "subtitle_en"
    ] ||
    t?.[selected.descriptionKey] ||
    "";

  const includes =
    (lang === "ar"
      ? first?.features_ar
      : lang === "he"
      ? first?.features_he
      : first?.features_en) || [];

  // ✅ IMPORTANT: keep bidi stable for mixed RTL/LTR (₪ + numbers + text)
  const duration = first?.[`duration_${lang}`] ?? first?.duration ?? null;
  const price = first?.[`price_${lang}`] ?? first?.price ?? null;

  const prefOptions = [
    { key: "today", label: tFn("services.modal.pref.today") },
    { key: "tomorrow", label: tFn("services.modal.pref.tomorrow") },
    { key: "week", label: tFn("services.modal.pref.week") },
  ];

  const payload = { preferredTime, note };

  const safeOpen = (fn) => {
    if (isOpening) return;
    setIsOpening(true);
    try {
      fn?.(payload);
    } finally {
      window.setTimeout(() => setIsOpening(false), 700);
    }
  };

  const bidiBoxProps = {
    dir: "ltr",
    style: { unicodeBidi: "plaintext" },
  };

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
        aria-label={tFn("common.close")}
      />

      <div className="relative w-full h-full p-4 sm:p-6 flex items-start sm:items-center justify-center">
        <div
          className="w-full max-w-3xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          dir={dir}
        >
          <div className="relative h-44 sm:h-56 shrink-0">
            <img
              src={details?.image || selected.image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 end-4 rounded-full bg-white/90 hover:bg-white text-gray-900 p-2 shadow-sm transition"
              aria-label={tFn("common.close")}
            >
              <X size={18} />
            </button>

            <div className="absolute bottom-4 start-4 end-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">
                {title}
              </h3>
              {subtitle ? (
                <p className="mt-2 text-white/90 text-sm sm:text-base max-w-2xl">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 sm:px-8 pt-6 pb-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} />
                  <span className="text-xs font-black">
                    {tFn("services.modal.quick.durationLabel")}
                  </span>
                </div>

                <div className="mt-1 text-sm font-bold text-gray-900">
                  {duration ? (
                    <span {...bidiBoxProps}>{duration}</span>
                  ) : (
                    tFn("services.modal.quick.varies")
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Tag size={16} />
                  <span className="text-xs font-black">
                    {tFn("services.modal.quick.priceLabel")}
                  </span>
                </div>

                <div className="mt-1 text-sm font-bold text-gray-900">
                  {price ? (
                    <span {...bidiBoxProps}>{price}</span>
                  ) : (
                    tFn("services.modal.quick.varies")
                  )}
                </div>
              </div>

              <div className="hidden sm:block rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-black">
                    {tFn("services.modal.quick.assuranceLabel")}
                  </span>
                </div>
                <div className="mt-1 text-sm font-bold text-gray-900">
                  {tFn("services.modal.quick.assuranceValue")}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle2 size={18} />
                <h4 className="text-lg font-extrabold">
                  {tFn("services.modal.includesTitle")}
                </h4>
              </div>

              <ul className="mt-4 grid gap-2">
                {includes.length ? (
                  includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-600">
                    {tFn("services.modal.moreDetails")}
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-4 rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6">
              <div>
                <h4 className="text-lg font-extrabold text-gray-900">
                  {tFn("services.modal.bookingTitle")}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {tFn("services.modal.bookingSubtitle")}
                </p>
              </div>

              <div className="mt-4">
                <div className="text-xs font-black text-gray-700 mb-2">
                  {tFn("services.modal.prefTitle")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {prefOptions.map((o) => {
                    const active = preferredTime === o.key;
                    return (
                      <button
                        key={o.key}
                        type="button"
                        onClick={() => setPreferredTime(o.key)}
                        className={[
                          "rounded-full px-4 py-2 text-sm font-bold border transition",
                          active
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-200",
                        ].join(" ")}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-black text-gray-700 mb-2">
                  {tFn("services.modal.noteTitle")}
                </div>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder={tFn("services.modal.notePlaceholder")}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
                />
              </div>

              <div className="mt-4 rounded-2xl bg-blue-50/60 border border-blue-100 px-4 py-3 text-sm text-blue-900">
                {tFn("services.modal.afterSend")}
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-gray-100 bg-amber-50/40 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-amber-900">
                <Info size={18} />
                <h4 className="text-lg font-extrabold">
                  {tFn("services.modal.notesTitle")}
                </h4>
              </div>
              <p className="mt-3 text-sm text-amber-950/80 leading-relaxed">
                {tFn("services.modal.notesBody")}
              </p>
            </div>
          </div>

          <div className="sticky bottom-0 border-t border-gray-100 bg-white/95 backdrop-blur px-5 sm:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {duration ? (
                  <span className="rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-extrabold inline-flex items-center gap-2">
                    <Clock size={14} />
                    <span {...bidiBoxProps}>{duration}</span>
                  </span>
                ) : null}

                {price ? (
                  <span className="rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-extrabold inline-flex items-center gap-2">
                    <Tag size={14} />
                    <span {...bidiBoxProps}>{price}</span>
                  </span>
                ) : null}

                <span className="text-xs font-semibold text-gray-500">
                  {tFn("services.modal.footerHint")}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isOpening}
                  className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-bold px-4 py-2.5 transition active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {tFn("common.close")}
                </button>

                <button
                  type="button"
                  onClick={() => safeOpen(onQuickQuestion)}
                  disabled={!onQuickQuestion || isOpening}
                  className="rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-extrabold px-4 py-2.5 transition active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <HelpCircle size={16} />
                  {isOpening
                    ? tFn("common.opening")
                    : tFn("services.modal.quickQuestion")}
                </button>

                <button
                  type="button"
                  onClick={() => safeOpen(onOrderNow)}
                  disabled={!onOrderNow || isOpening}
                  className="rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-extrabold px-5 py-2.5 transition active:scale-95 inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {isOpening
                    ? tFn("common.opening")
                    : tFn("services.modal.bookNow")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
