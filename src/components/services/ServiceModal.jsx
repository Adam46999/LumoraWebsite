import React, { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { X } from "lucide-react";

export default function ServiceModal({
  isOpen,
  onClose,
  titleKey,
  descriptionKey,
  image,
  onOrderNow,
}) {
  const { lang, t } = useLanguage();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const body = document.body;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const raw = t[descriptionKey] || "";
  const lines = raw.split(/\r?\n/);
  const bullets = lines
    .filter((l) => l.trim().startsWith("-"))
    .map((l) => l.replace(/^-+\s?/, ""));
  const paragraph = lines.filter((l) => !l.trim().startsWith("-")).join("\n");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[92%] max-w-lg overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-2xl ${
          lang === "ar" ? "text-right" : "text-left"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute end-3 top-3 rounded-full p-1.5 text-gray-600 hover:bg-gray-100"
          aria-label={lang === "ar" ? "إغلاق" : "Close"}
        >
          <X size={18} />
        </button>

        <img
          src={image}
          alt={t[titleKey]}
          className="h-48 w-full object-cover"
        />

        <div className="max-h-[60vh] overflow-y-auto p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-600">
            {t[titleKey]}
          </h2>
          {paragraph && (
            <p className="whitespace-pre-line leading-7 text-gray-800">
              {paragraph}
            </p>
          )}
          {bullets.length > 0 && (
            <ul className="mt-3 list-disc ps-6 text-gray-800">
              {bullets.map((b, i) => (
                <li key={i} className="leading-7">
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-200 p-4">
          <button
            onClick={onClose}
            type="button"
            className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            {lang === "ar" ? "إغلاق" : "Close"}
          </button>
          <button
            onClick={onOrderNow}
            type="button"
            className="rounded-md bg-blue-600 text-white font-medium px-4 py-2 text-sm hover:bg-blue-700 transition-colors"
          >
            {lang === "ar" ? "اطلب الآن" : "Order Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
