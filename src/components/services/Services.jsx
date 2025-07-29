// src/components/services/Services.jsx
import React, { useState } from "react";
import { services } from "./data";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          <span className="text-blue-500">خدمات</span> التنظيف
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          نقدم حلول تنظيف متكاملة للكنب، السجاد، السيارات والمزيد باستخدام أحدث التقنيات.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      <ServiceModal
  isOpen={!!selectedService}
  title={selectedService?.title}
  details={selectedService?.details}
  image={selectedService?.image}
  onClose={() => setSelectedService(null)}
/>

    </section>
  );
}
