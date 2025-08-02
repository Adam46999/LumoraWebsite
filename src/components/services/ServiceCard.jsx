import React, { forwardRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ServiceCard = forwardRef(
  ({ id, icon, titleKey, descriptionKey, onClick }, ref) => {
    const { t, lang } = useLanguage();

    return (
      <div
        id={id}
        ref={ref}
        onClick={onClick}
        className={`cursor-pointer p-6 bg-white rounded-xl shadow group
          hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
          text-center ${lang === "ar" ? "text-right" : "text-left"}`}
      >
        <div className="flex justify-center mb-4 text-blue-600 text-4xl transition-transform group-hover:scale-110">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <h3 className="text-lg font-bold mb-2">{t[titleKey]}</h3>
        <p className="text-gray-600 text-sm">{t[descriptionKey]}</p>
      </div>
    );
  }
);

export default ServiceCard;
