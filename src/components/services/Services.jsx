import React, { useMemo, useState, useEffect } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { serviceDetails } from "./serviceDetailsData";
import { useLanguage } from "../../context/LanguageContext";

const WA_PHONE = "972543075619";

function formatMeta({ lang, duration, price }) {
  const parts = [];
  if (duration) parts.push(duration);
  if (price)
    parts.push(lang === "ar" ? `ابتداءً من ${price}` : `From ${price}`);
  return parts.join(" • ");
}

function preferredTimeLabel(lang, key) {
  const mapAr = { today: "اليوم", tomorrow: "بكرة", week: "هذا الأسبوع" };
  const mapEn = { today: "Today", tomorrow: "Tomorrow", week: "This week" };
  return (lang === "ar" ? mapAr : mapEn)[key] || "";
}

export default function Services() {
  const { t, lang } = useLanguage();
  const isRTL = lang === "ar";

  const [selected, setSelected] = useState(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("services-title");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTitleVisible(true),
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const openWhatsApp = (service, opts = {}) => {
    if (!service) return;

    const mode = opts.mode || "book"; // "book" | "question"
    const preferred = opts.preferredTime || null;
    const note = (opts.note || "").trim();

    const title = t[service.titleKey] || service.id;
    const details = serviceDetails?.[service.id];
    const firstCard = details?.cards?.[0];
    const duration = firstCard?.duration;
    const price = firstCard?.price;

    const preferredText = preferred ? preferredTimeLabel(lang, preferred) : "";
    const preferredLine = preferredText
      ? isRTL
        ? `الوقت المفضل: ${preferredText}\n`
        : `Preferred time: ${preferredText}\n`
      : "";

    const noteLine = note
      ? isRTL
        ? `ملاحظة: ${note}\n`
        : `Note: ${note}\n`
      : "";

    const baseInfo =
      (duration
        ? isRTL
          ? `المدة: ${duration}\n`
          : `Duration: ${duration}\n`
        : "") +
      (price ? (isRTL ? `السعر: ${price}\n` : `Price: ${price}\n`) : "");

    let msg = "";
    if (mode === "question") {
      msg = isRTL
        ? `مرحبًا، عندي استفسار عن خدمة: ${title}\n${baseInfo}${preferredLine}${noteLine}ممكن تفاصيل أكثر؟`
        : `Hi, I have a question about: ${title}\n${baseInfo}${preferredLine}${noteLine}Can you share more details?`;
    } else {
      msg = isRTL
        ? `مرحبًا، أرغب بحجز خدمة: ${title}\n${baseInfo}${preferredLine}${noteLine}متى أقرب موعد متاح؟`
        : `Hi, I'd like to book: ${title}\n${baseInfo}${preferredLine}${noteLine}What is the earliest available slot?`;
    }

    const href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const list = useMemo(() => services, []);

  return (
    <section
      className="relative px-6 py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ✅ نفس الشارة الصغيرة (نفس الحجم) + عنوان + ساب تايتل (بدون فلاتر) */}
      <div
        id="services-title"
        className={[
          "max-w-5xl mx-auto text-center mb-10 transition-all duration-700 ease-out",
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        {/* الشارة مثل ما هي */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
          <span>{isRTL ? "خدماتنا" : "Services"}</span>
        </div>

        {/* العنوان بدون "بسرعة" */}
        {/* Premium Title */}
        <h2
          className="
  mt-5
  text-[clamp(24px,4.8vw,38px)]
  font-extrabold
  tracking-tight
  text-slate-900
"
        >
          {isRTL ? (
            <>
              اختر الخدمة <span className="text-sky-600">المناسبة</span>
            </>
          ) : (
            <>
              Choose the right <span className="text-sky-600">service</span>
            </>
          )}
        </h2>
        <div className="mt-3 mx-auto h-[3px] w-12 rounded-full bg-sky-500/80" />

        {/* Subtitle */}
        <p
          className="
  mt-3
  text-sm sm:text-base
  text-slate-600
  max-w-2xl
  mx-auto
  leading-relaxed
"
        >
          {isRTL
            ? "تفاصيل واضحة لكل خدمة، والحجز يتم برسالة واتساب جاهزة."
            : "Clear details for each service, with booking via a ready WhatsApp message."}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const details = serviceDetails?.[s.id];
          const firstCard = details?.cards?.[0];
          const meta = formatMeta({
            lang,
            duration: firstCard?.duration,
            price: firstCard?.price,
          });

          const badge =
            s.id === "sofa"
              ? isRTL
                ? "الأكثر طلبًا"
                : "Popular"
              : s.id === "car"
              ? isRTL
                ? "سريع"
                : "Fast"
              : null;

          return (
            <div
              key={s.id}
              style={{ transitionDelay: `${Math.min(i, 6) * 90}ms` }}
              className="transition-all duration-700 ease-out"
            >
              <ServiceCard
                id={s.id}
                icon={s.icon}
                titleKey={s.titleKey}
                descriptionKey={s.descriptionKey}
                image={s.image}
                meta={meta}
                badge={badge}
                onClick={() => setSelected(s)}
                onBook={() => openWhatsApp(s, { mode: "book" })}
              />
            </div>
          );
        })}
      </div>

      <ServiceModal
        isOpen={!!selected}
        selected={selected}
        onClose={() => setSelected(null)}
        onOrderNow={(payload) => {
          openWhatsApp(selected, { mode: "book", ...payload });
          setSelected(null);
        }}
        onQuickQuestion={(payload) => {
          openWhatsApp(selected, { mode: "question", ...payload });
          setSelected(null);
        }}
      />
    </section>
  );
}
