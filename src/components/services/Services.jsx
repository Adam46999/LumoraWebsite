import React, { useMemo, useState, useEffect } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { serviceDetails } from "./serviceDetailsData";
import { useLanguage } from "../../context/LanguageContext";

const WA_PHONE = "972543075619";

function formatMeta({ duration, price }) {
  const parts = [];
  if (duration) parts.push(duration);
  if (price) parts.push(price);
  return parts.join(" • ");
}

export default function Services() {
  const { t, tFn, lang, isRTL } = useLanguage();

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

  const preferredTimeLabel = (key) => tFn(`services.modal.pref.${key}`);

  const readLangValue = (card, baseKey) => {
    // baseKey: "duration" | "price"
    return card?.[`${baseKey}_${lang}`] ?? card?.[baseKey] ?? null;
  };

  const openWhatsApp = (service, opts = {}) => {
    if (!service) return;

    const mode = opts.mode || "book"; // "book" | "question"
    const preferred = opts.preferredTime || null;
    const note = (opts.note || "").trim();

    const title = t?.[service.titleKey] || service.id;
    const details = serviceDetails?.[service.id];
    const firstCard = details?.cards?.[0];

    const duration = readLangValue(firstCard, "duration");
    const price = readLangValue(firstCard, "price");

    const preferredText = preferred ? preferredTimeLabel(preferred) : "";
    const preferredLine = preferredText
      ? tFn("services.whatsapp.linePreferred", { preferred: preferredText }) +
        "\n"
      : "";

    const noteLine = note
      ? tFn("services.whatsapp.lineNote", { note }) + "\n"
      : "";

    const baseInfo =
      (duration
        ? tFn("services.whatsapp.lineDuration", { duration }) + "\n"
        : "") +
      (price ? tFn("services.whatsapp.linePrice", { price }) + "\n" : "");

    let msg = "";
    if (mode === "question") {
      msg =
        tFn("services.whatsapp.questionIntro", { title }) +
        "\n" +
        baseInfo +
        preferredLine +
        noteLine +
        tFn("services.whatsapp.questionOutro");
    } else {
      msg =
        tFn("services.whatsapp.bookIntro", { title }) +
        "\n" +
        baseInfo +
        preferredLine +
        noteLine +
        tFn("services.whatsapp.bookOutro");
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
          <span>{tFn("services.section.badge")}</span>
        </div>

        <h2 className="mt-5 text-[clamp(24px,4.8vw,38px)] font-extrabold tracking-tight text-slate-900">
          {tFn("services.section.title")}{" "}
          <span className="text-sky-600">
            {tFn("services.section.titleAccent")}
          </span>
        </h2>

        <div className="mt-3 mx-auto h-[3px] w-12 rounded-full bg-sky-500/80" />

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {tFn("services.section.subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const details = serviceDetails?.[s.id];
          const firstCard = details?.cards?.[0];

          const duration = readLangValue(firstCard, "duration");
          const price = readLangValue(firstCard, "price");

          const meta = formatMeta({ duration, price });

          const badge =
            s.id === "sofa"
              ? tFn("services.badges.popular")
              : s.id === "car"
              ? tFn("services.badges.fast")
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
