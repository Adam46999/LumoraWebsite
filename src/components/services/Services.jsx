import React, { useMemo, useState, useEffect } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState(null);

  const waMessage = useMemo(() => {
    if (!selected) return "";
    const title = t[selected.titleKey];
    return lang === "ar"
      ? `مرحبًا، أرغب بحجز خدمة: ${title}\nمتى أقرب موعد متاح؟`
      : `Hi, I'd like to book: ${title}\nWhat is the earliest available slot?`;
  }, [selected, t, lang]);

  // ✨ حركة دخول العنوان عند التمرير (رقم 12 + 16)
  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById("services-title");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="relative px-6 py-24 bg-gradient-to-b from-white via-blue-50/20 to-amber-50/10 overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Divider أنيق (رقم 13) */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* العنوان */}
      <div
        id="services-title"
        className={[
          "mx-auto mb-16 max-w-6xl text-center transition-all duration-700",
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <h2 className="relative inline-block text-5xl font-black leading-tight tracking-tight text-main">
          <span className="bg-gradient-to-r from-blue-600 to-amber-400 bg-clip-text text-transparent">
            {t.servicesTitle1}
          </span>{" "}
          {t.servicesTitle2}
          <span className="absolute inset-x-0 -bottom-2 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 to-amber-400"></span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg leading-relaxed">
          {t.servicesDescription}
        </p>
      </div>

      {/* شبكة الكروت */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={s.id}
            style={{ transitionDelay: `${i * 150}ms` }}
            className="transition-all duration-700 ease-out"
          >
            <ServiceCard
              id={s.id}
              icon={s.icon}
              titleKey={s.titleKey}
              descriptionKey={s.descriptionKey}
              image={s.image}
              onClick={() => setSelected(s)}
            />
          </div>
        ))}
      </div>

      {/* مودال التفاصيل */}
      <ServiceModal
        isOpen={!!selected}
        titleKey={selected?.titleKey}
        descriptionKey={selected?.detailsKey}
        image={selected?.image}
        onClose={() => setSelected(null)}
        onOrderNow={() => {}}
      />
    </section>
  );
}
