import React, { useMemo, useState, useEffect } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { serviceDetails } from "./serviceDetailsData";
import { useLanguage } from "../../context/LanguageContext";

const WA_PHONE = "972543075619";

function getServiceCategory(id) {
  if (id === "car" || id === "carSeats") return "auto";
  if (id === "carpet") return "carpet";
  return "home";
}

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
  const [filter, setFilter] = useState("all");
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

  const filterOptions = useMemo(() => {
    const counts = { all: services.length, home: 0, auto: 0, carpet: 0 };
    services.forEach((s) => {
      const c = getServiceCategory(s.id);
      counts[c] = (counts[c] || 0) + 1;
    });

    return [
      { key: "all", label: isRTL ? "الكل" : "All", count: counts.all },
      { key: "home", label: isRTL ? "منزلي" : "Home", count: counts.home },
      { key: "auto", label: isRTL ? "سيارات" : "Auto", count: counts.auto },
      { key: "carpet", label: isRTL ? "سجاد" : "Carpet", count: counts.carpet },
    ];
  }, [isRTL]);

  const filtered = useMemo(() => {
    if (filter === "all") return services;
    return services.filter((s) => getServiceCategory(s.id) === filter);
  }, [filter]);

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

  return (
    <section
      id="services"
      className="relative px-6 py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ✅ هيدر أنيق ومناسب للألوان */}
      <div
        id="services-title"
        className={[
          "max-w-5xl mx-auto text-center mb-10 transition-all duration-700 ease-out",
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
          <span>{isRTL ? "خدماتنا" : "Services"}</span>
        </div>

        <h2 className="mt-4 text-[clamp(20px,4.6vw,34px)] font-extrabold tracking-tight text-slate-900">
          {isRTL ? "اختر الخدمة المناسبة" : "Choose the right service"}
          <span className="text-slate-500">{isRTL ? " بسرعة" : " fast"}</span>
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {isRTL
            ? "فلتر سريع، تفاصيل واضحة، وحجز مباشر عبر واتساب بدون فورم."
            : "Quick filter, clear details, and direct WhatsApp booking — no form."}
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => {
            const active = filter === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setFilter(opt.key)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all border",
                  active
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                <span>{opt.label}</span>
                <span
                  className={[
                    "ms-2 text-xs",
                    active ? "text-white/90" : "text-slate-500",
                  ].join(" ")}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s, i) => {
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
