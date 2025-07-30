import React, { forwardRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ServiceCard = forwardRef(
  ({ id, icon, titleKey, descriptionKey, onClick }, ref) => {
    const { t } = useLanguage();

    return (
      <div
        id={id}
        ref={ref}
        onClick={onClick}
        className="cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
      >
        <div className="text-blue-500 mb-4">
          <i className={`fas fa-${icon} fa-2x`}></i>
        </div>

        <h3 className="text-lg font-semibold mb-2">{t[titleKey]}</h3>
        <p className="text-gray-600 text-sm">{t[descriptionKey]}</p>
      </div>
    );
  }
);

export default ServiceCard;
