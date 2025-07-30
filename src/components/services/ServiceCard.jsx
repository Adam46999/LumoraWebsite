import React, { forwardRef } from "react";

const ServiceCard = forwardRef(
  ({ id, icon, title, description, onClick }, ref) => {
    return (
      <div
        id={id} // ✅ هذا هو السطر اللي بيخلي الرابط من الهيدر يشتغل
        ref={ref}
        onClick={onClick}
        className="cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
      >
        {/* أيقونة الخدمة */}
        <div className="text-blue-500 mb-4">
          <i className={`fas fa-${icon} fa-2x`}></i>
        </div>

        {/* عنوان الخدمة */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* وصف مختصر */}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }
);

export default ServiceCard;
