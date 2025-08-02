import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  onOrderNow,
}) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-2xl w-[90%] max-w-md overflow-hidden animate-fadeIn
        ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        {/* الصورة */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover shadow-sm"
        />

        {/* المحتوى */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {description}
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {lang === "ar" ? "إغلاق ✖️" : "Close ✖️"}
          </button>

          <button
            onClick={onOrderNow}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {lang === "ar" ? "اطلب الآن" : "Order Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
