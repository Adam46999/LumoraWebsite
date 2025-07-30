import React, { useEffect } from "react";

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  image,
  description,
  onOrderNow,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md overflow-hidden">
        {/* الصورة */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* المحتوى */}
        <div className="p-6 max-h-[60vh] overflow-y-auto text-right">
          <h2 className="text-xl font-bold text-blue-600 mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* زر الإغلاق وطلب الآن */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            إغلاق ✖️
          </button>

          <button
            onClick={onOrderNow}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
}
