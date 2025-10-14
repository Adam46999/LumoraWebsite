// src/components/services/ServiceModal.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { X, Clock, DollarSign, CheckCircle2, ChevronDown } from "lucide-react";
import { serviceDetails } from "./serviceDetailsData";

export default function ServiceModal({
  isOpen,
  onClose,
  selected,
  onOrderNow,
}) {
  const { lang } = useLanguage();

  // ── Hooks ثابتة
  const [activeIdx, setActiveIdx] = useState(null);
  const [sqm, setSqm] = useState(""); // للسجاد
  const startY = useRef(null);
  const [dragY, setDragY] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    setActiveIdx(null);
    setSqm("");
    return () => {
      document.body.style.overflow = "auto";
      setDragY(0);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const details = selected?.id ? serviceDetails[selected.id] : null;
  if (!isOpen || !details) return null;

  const isCarpet = details.id === "carpet";
  const isCarSeats = details.id === "carSeats";
  const selectedCard = activeIdx != null ? details.cards[activeIdx] : null;

  const colorBtn =
    {
      blue: "bg-blue-600 hover:bg-blue-700",
      amber: "bg-amber-500 hover:bg-amber-600",
      teal: "bg-teal-600 hover:bg-teal-700",
      emerald: "bg-emerald-600 hover:bg-emerald-700",
    }[details.color] || "bg-blue-600 hover:bg-blue-700";

  // سحب للإغلاق — حساسية أعلى وأسهل
  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e) => {
    if (startY.current == null) return;
    const dy = e.touches[0].clientY - startY.current;
    if (dy > 0) setDragY(Math.min(dy, 180)); // قبضة أطول
  };
  const onTouchEnd = () => {
    if (dragY > 60) onClose?.(); // عتبة أقل = أسهل إغلاق
    setDragY(0);
    startY.current = null;
  };

  // حاسبة السجاد
  const unit = isCarpet
    ? Number((details.cards?.[0]?.price || "0").split(" ")[0]) || 0
    : 0;
  const total = isCarpet && sqm ? `${unit * Number(sqm)} ₪` : "";
  const canBook = isCarpet ? Number(sqm) > 0 : activeIdx != null;

  const makePayload = () => ({
    serviceId: details.id,
    serviceName:
      lang === "ar"
        ? selectedCard?.name_ar || details.title_ar
        : selectedCard?.name_en || details.title_en,
    duration: selectedCard?.duration || (lang === "ar" ? "غير محدد" : "N/A"),
    price: isCarpet ? total || selectedCard?.price : selectedCard?.price,
    note: isCarpet
      ? lang === "ar"
        ? `المساحة: ${sqm} م²`
        : `Area: ${sqm} m²`
      : "",
    lang,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        onClick={(e) => e.stopPropagation()}
        className="relative w-[100vw] md:max-w-3xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden"
        style={{
          transform: dragY ? `translateY(${dragY}px)` : undefined,
          transition: dragY ? "none" : "transform 200ms ease",
          maxHeight: "100dvh",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="dialog"
        aria-modal="true"
      >
        {/* مقبض سحب أكبر + زر إغلاق كبير */}
        <div className="relative">
          <div className="md:hidden flex justify-center pt-2 pb-1">
            <div className="h-2 w-14 rounded-full bg-gray-300" />
          </div>
          <button
            aria-label={lang === "ar" ? "إغلاق" : "Close"}
            onClick={onClose}
            className="absolute top-2 end-2 z-10 rounded-full bg-black/60 hover:bg-black/80 p-3 text-white"
            style={{ width: 44, height: 44 }}
          >
            <X size={22} />
          </button>

          {/* صورة الهيدر */}
          <div className="relative aspect-[16/9] w-full">
            <img
              src={details.image}
              alt={lang === "ar" ? details.title_ar : details.title_en}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-3 start-3 pe-12">
              <h2 className="text-white font-extrabold text-[clamp(18px,4vw,26px)] leading-6">
                {lang === "ar" ? details.title_ar : details.title_en}
              </h2>
              <p className="text-white/90 text-xs sm:text-sm">
                {lang === "ar" ? details.subtitle_ar : details.subtitle_en}
              </p>
            </div>
          </div>
        </div>

        {/* المحتوى قابل للتمرير */}
        <div
          className="overflow-y-auto overscroll-contain"
          style={{
            WebkitOverflowScrolling: "touch",
            maxHeight: "calc(100dvh - 56px - 70px)",
          }}
        >
          <div className="p-4 sm:p-6">
            {/* === تنسيق خاص لموبايل لخدمة carSeats: Radio List مضغوطة === */}
            {isCarSeats ? (
              <ul className="space-y-3">
                {details.cards.map((card, i) => (
                  <MobileOptionItem
                    key={i}
                    lang={lang}
                    card={card}
                    active={activeIdx === i}
                    onSelect={() => setActiveIdx(i)}
                    mostPopular={
                      Number(String(card.price).replace(/[^\d]/g, "")) === 550
                    }
                  />
                ))}
              </ul>
            ) : (
              // باقي الخدمات: شبكة عادية (1 عمود موبايل / 2 من md)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {details.cards.map((card, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`relative text-left rounded-xl border p-4 sm:p-5 transition
                    ${
                      activeIdx === i
                        ? "border-emerald-400 ring-2 ring-emerald-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* السعر */}
                    {card.price && (
                      <span className="absolute top-2.5 end-2.5 rounded-full bg-black/70 text-white text-[11px] px-2.5 py-1">
                        {isCarpet && i === 0 && total ? total : card.price}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold mb-1.5">
                      {lang === "ar" ? card.name_ar : card.name_en}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-700 text-sm mb-2.5">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={16} />
                        {card.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <DollarSign size={16} />
                        {card.price}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-gray-700 text-[13px] leading-relaxed">
                      {(lang === "ar" ? card.features_ar : card.features_en)
                        .slice(0, 3)
                        .map((f, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2
                              className="text-emerald-500"
                              size={15}
                            />
                            {f}
                          </li>
                        ))}
                    </ul>

                    {/* حاسبة السجاد – أول كرت فقط */}
                    {details.id === "carpet" && i === 0 && (
                      <div className="mt-3">
                        <label className="block text-xs text-gray-600 mb-1.5">
                          {lang === "ar" ? "المساحة (م²)" : "Area (m²)"}
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setSqm((v) =>
                                String(Math.max(1, Number(v || 0) - 1))
                              )
                            }
                            className="px-3 py-2 rounded-lg border"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="1"
                            step="1"
                            value={sqm}
                            onChange={(e) => setSqm(e.target.value)}
                            placeholder={
                              lang === "ar" ? "مثال: 12" : "e.g., 12"
                            }
                            className="w-24 text-center rounded-lg border py-2"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setSqm((v) => String(Number(v || 0) + 1))
                            }
                            className="px-3 py-2 rounded-lg border"
                          >
                            +
                          </button>
                        </div>
                        <p className="mt-1.5 text-xs text-gray-600">
                          {lang === "ar"
                            ? unit && !total
                              ? `السعر: ${unit} ₪ / متر — الطول × العرض = المساحة`
                              : `المجموع: ${total}`
                            : unit && !total
                            ? `Price: ${unit} ₪ / m² — length × width = area`
                            : `Total: ${total}`}
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* شريط أزرار سُفلي (مع زر إلغاء لسهولة الإغلاق) */}
        <div
          className="sticky bottom-0 bg-white border-t px-4 sm:px-6 py-3 flex items-center justify-between gap-2"
          style={{ paddingBottom: "max(env(safe-area-inset-bottom), 10px)" }}
        >
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl border text-gray-700 font-medium min-w-[110px]"
          >
            {lang === "ar" ? "إلغاء" : "Cancel"}
          </button>
          <button
            disabled={!canBook}
            onClick={() => onOrderNow?.(makePayload())}
            className={`px-5 sm:px-6 py-3 rounded-xl text-white font-semibold min-w-[140px] ${
              canBook ? colorBtn : "bg-gray-300"
            }`}
          >
            {lang === "ar" ? "احجز الآن" : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ====== عنصر خيار مبسّط للموبايل لخدمة carSeats ====== */
function MobileOptionItem({ lang, card, active, onSelect, mostPopular }) {
  const [open, setOpen] = useState(false);
  const title = lang === "ar" ? card.name_ar : card.name_en;
  const feats = (lang === "ar" ? card.features_ar : card.features_en) || [];

  return (
    <li
      className={`rounded-xl border p-3.5 ${
        active
          ? "border-emerald-400 ring-2 ring-emerald-200"
          : "border-gray-200"
      }`}
    >
      <label className="flex items-start gap-3">
        <input
          type="radio"
          name="carSeatsOption"
          checked={active}
          onChange={onSelect}
          className="mt-1 h-5 w-5 accent-emerald-600"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[15px] font-bold truncate">{title}</h3>
            <span className="rounded-full bg-black/70 text-white text-[11px] px-2.5 py-1 shrink-0">
              {card.price}
            </span>
          </div>
          <div className="mt-1.5 text-gray-700 text-[13px] flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Clock size={14} /> {card.duration}
            </span>
            {mostPopular && (
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500 text-white">
                {lang === "ar" ? "الأكثر طلبًا" : "Most popular"}
              </span>
            )}
          </div>

          {/* تفاصيل قابلة للطيّ */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-2 inline-flex items-center gap-1 text-[13px] text-emerald-700"
          >
            {open
              ? lang === "ar"
                ? "إخفاء التفاصيل"
                : "Hide details"
              : lang === "ar"
              ? "عرض التفاصيل"
              : "Show details"}
            <ChevronDown
              size={16}
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <ul className="mt-2 space-y-1 text-gray-700 text-[13px]">
              {feats.slice(0, 5).map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={14} /> {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>
    </li>
  );
}
