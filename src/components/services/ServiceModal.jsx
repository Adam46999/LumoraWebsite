import React, { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ServiceModal({
  isOpen,
  onClose,
  titleKey,
  descriptionKey,
  image,
  onOrderNow,
}) {
  const { lang, t } = useLanguage();
  const modalRef = useRef();

  // 🔐 قفل التمرير أثناء فتح المودال
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // 🟢 إغلاق بالضغط على ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // إذا مغلق، لا تظهر شيء
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose} // ✅ ضغط بالخارج
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // يمنع الإغلاق عند الضغط داخل المودال
        className={`bg-white rounded-2xl shadow-2xl w-[90%] max-w-md overflow-hidden animate-fade-in
        ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        {/* الصورة */}
        <img
          src={image}
          alt={t[titleKey]}
          className="w-full h-48 object-cover shadow-sm"
        />

        {/* المحتوى */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            {t[titleKey]}
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {t[descriptionKey]}
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {lang === "ar" ? "✖️ إغلاق" : "✖️ Close"}
          </button>

          <button
            onClick={onOrderNow}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
          >
            {lang === "ar" ? "اطلب الآن" : "Order Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
