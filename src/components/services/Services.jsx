import React, { useState } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const { t, lang } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const handleOrderNow = () => {
    const id = selectedService?.id;
    setSelectedService(null);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          <span className="text-blue-600">{t.servicesTitle1}</span>{" "}
          {t.servicesTitle2}
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          {t.servicesDescription}
        </p>
      </div>

      {/* شبكة الكروت */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            icon={service.icon}
            titleKey={service.titleKey}
            descriptionKey={service.descriptionKey}
            onClick={() => setSelectedService(service)}
            bgColor={service.bgColor} // ✅ اللون يمر للكرت
          />
        ))}
      </div>

      {/* المودال */}
      <ServiceModal
        isOpen={!!selectedService}
        titleKey={selectedService?.titleKey}
        descriptionKey={selectedService?.detailsKey}
        image={selectedService?.image}
        onClose={() => setSelectedService(null)}
        onOrderNow={handleOrderNow}
      />
    </section>
  );
}
