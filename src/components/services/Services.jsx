// src/components/services/Services.jsx
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "../../context/LanguageContext";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { services } from "./servicesData";

/*
  توزيع المسؤولين حسب الخدمة:

  السجاد:
  054-307-5619

  باقي الخدمات:
  050-272-7724
*/
const WHATSAPP_NUMBERS = {
  sofa: "972502727724",
  carpet: "972543075619",
  carSeats: "972502727724",
  glass: "972502727724",
};

const DEFAULT_WHATSAPP_NUMBER = "972502727724";

function getText(lang, values) {
  if (lang === "he") return values.he;
  if (lang === "en") return values.en;

  return values.ar;
}

function normalizeWhatsAppNumber(value) {
  return String(value || "").replace(/\D/g, "");
}

function getCarpetPriceOptionText(lang, option) {
  const options = {
    measurements: {
      ar: "أعرف القياسات وسأرسل طول وعرض كل سجادة.",
      he: "אני יודע/ת את המידות ואשלח אורך ורוחב של כל שטיח.",
      en: "I know the measurements and will send the length and width of each carpet.",
    },

    meterPrice: {
      ar: "أريد معرفة سعر المتر.",
      he: "אני רוצה לדעת מה המחיר למטר.",
      en: "I would like to know the price per meter.",
    },

    onSiteMeasure: {
      ar: "لا أعرف القياسات وأحتاج قياس السجاد في الموقع.",
      he: "אני לא יודע/ת את המידות וצריך/ה מדידה במקום.",
      en: "I do not know the measurements and need the carpets measured at my location.",
    },
  };

  const selectedOption = options[option];

  if (!selectedOption) return "";

  return getText(lang, selectedOption);
}

function getServiceName(service, translations, lang) {
  if (!service) {
    return getText(lang, {
      ar: "خدمة تنظيف",
      he: "שירות ניקיון",
      en: "Cleaning service",
    });
  }

  return (
    translations?.[service.titleKey] ||
    getText(lang, {
      ar: "خدمة تنظيف",
      he: "שירות ניקיון",
      en: "Cleaning service",
    })
  );
}

function buildWhatsAppMessage({ service, orderDetails, translations, lang }) {
  const serviceName = getServiceName(service, translations, lang);

  const location = String(orderDetails?.location || "").trim();
  const quantity = orderDetails?.quantity;
  const carpetPriceOption = orderDetails?.carpetPriceOption;

  const lines = [];

  if (lang === "he") {
    lines.push("שלום, אני מעוניין/ת להזמין שירות דרך אתר Lumora.");
    lines.push("");
    lines.push(`שירות: ${serviceName}`);

    if (location) {
      lines.push(`יישוב / אזור: ${location}`);
    }

    if (quantity !== null && quantity !== undefined && quantity !== "") {
      lines.push(
        service?.id === "carpet"
          ? `מספר שטיחים משוער: ${quantity}`
          : `כמות משוערת: ${quantity}`,
      );
    }

    const carpetChoice = getCarpetPriceOptionText(lang, carpetPriceOption);

    if (carpetChoice) {
      lines.push(`פרטי מחיר / מדידה: ${carpetChoice}`);
    }

    lines.push("");
    lines.push("אשמח לקבל פרטים לגבי המחיר והמועד האפשרי.");

    return lines.join("\n");
  }

  if (lang === "en") {
    lines.push(
      "Hello, I would like to request a service through the Lumora website.",
    );
    lines.push("");
    lines.push(`Service: ${serviceName}`);

    if (location) {
      lines.push(`Town / area: ${location}`);
    }

    if (quantity !== null && quantity !== undefined && quantity !== "") {
      lines.push(
        service?.id === "carpet"
          ? `Estimated number of carpets: ${quantity}`
          : `Estimated quantity: ${quantity}`,
      );
    }

    const carpetChoice = getCarpetPriceOptionText(lang, carpetPriceOption);

    if (carpetChoice) {
      lines.push(`Pricing / measurement details: ${carpetChoice}`);
    }

    lines.push("");
    lines.push(
      "Please send me more information about the price and available time.",
    );

    return lines.join("\n");
  }

  lines.push("مرحبًا، أريد طلب خدمة من خلال موقع Lumora.");
  lines.push("");
  lines.push(`الخدمة: ${serviceName}`);

  if (location) {
    lines.push(`البلدة / المنطقة: ${location}`);
  }

  if (quantity !== null && quantity !== undefined && quantity !== "") {
    lines.push(
      service?.id === "carpet"
        ? `عدد السجاد التقريبي: ${quantity}`
        : `الكمية التقريبية: ${quantity}`,
    );
  }

  const carpetChoice = getCarpetPriceOptionText(lang, carpetPriceOption);

  if (carpetChoice) {
    lines.push(`تفاصيل السعر أو القياس: ${carpetChoice}`);
  }

  lines.push("");
  lines.push("أريد معرفة السعر والموعد المتاح، شكرًا.");

  return lines.join("\n");
}

function openWhatsAppWindow(number, message) {
  const normalizedNumber = normalizeWhatsAppNumber(number);

  if (!normalizedNumber) return;

  const url = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const openedWindow = window.open(url, "_blank", "noopener,noreferrer");

  /*
    بعض متصفحات الموبايل تمنع window.open.
    إذا انمنعت، ننقل المستخدم للرابط مباشرة.
  */
  if (!openedWindow) {
    window.location.href = url;
  }
}

export default function Services() {
  const { t, lang, isRTL } = useLanguage();

  const [selected, setSelected] = useState(null);
  const [titleVisible, setTitleVisible] = useState(false);

  const serviceList = useMemo(
    () =>
      services.filter(
        (service) =>
          service &&
          service.id &&
          service.titleKey &&
          service.descriptionKey &&
          service.image,
      ),
    [],
  );

  const sectionCopy = useMemo(
    () => ({
      badge: getText(lang, {
        ar: "نخدمك في موقعك",
        he: "השירות מגיע עד אליך",
        en: "Service at your location",
      }),

      title: getText(lang, {
        ar: "اختر خدمة التنظيف المناسبة",
        he: "בחרו את שירות הניקיון המתאים",
        en: "Choose the right cleaning service",
      }),

      subtitle: getText(lang, {
        ar: "اختر الخدمة، أدخل التفاصيل الأساسية، وسنفتح لك واتساب برسالة مرتبة إلى الشخص المسؤول عنها.",
        he: "בחרו שירות, מלאו את הפרטים הבסיסיים ונפתח עבורכם הודעת WhatsApp מסודרת לאיש הקשר המתאים.",
        en: "Choose a service, enter the basic details, and continue through WhatsApp with a prepared message to the right contact.",
      }),

      ariaLabel: getText(lang, {
        ar: "خدمات التنظيف",
        he: "שירותי ניקיון",
        en: "Cleaning services",
      }),
    }),
    [lang],
  );

  useEffect(() => {
    const element = document.getElementById("services-title");

    if (!element) {
      setTitleVisible(true);
      return undefined;
    }

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setTitleVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const openWhatsApp = (service, orderDetails = {}) => {
    if (!service) return;

    const number = WHATSAPP_NUMBERS[service.id] || DEFAULT_WHATSAPP_NUMBER;

    const message = buildWhatsAppMessage({
      service,
      orderDetails,
      translations: t,
      lang,
    });

    openWhatsAppWindow(number, message);
  };

  const handleOrder = (orderDetails) => {
    const currentService = selected;

    if (!currentService) return;

    /*
      نغلق المودال أولًا، ثم نفتح واتساب.
      التأخير القصير يمنع تعارض الحركة مع فتح التطبيق.
    */
    setSelected(null);

    window.setTimeout(() => {
      openWhatsApp(currentService, orderDetails);
    }, 180);
  };

  return (
    <>
      <section
        id="services"
        aria-label={sectionCopy.ariaLabel}
        className="
          relative scroll-mt-[calc(var(--app-topbar-h,64px)+12px)]
          overflow-hidden
          bg-gradient-to-b
          from-white via-slate-50/70 to-white
          px-4 py-14
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div
          className="
            pointer-events-none absolute inset-x-0 top-0 h-px
            bg-gradient-to-r
            from-transparent via-slate-200 to-transparent
          "
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl">
          <header
            id="services-title"
            className={[
              "mx-auto mb-8 max-w-3xl text-center sm:mb-10",
              "transition-all duration-700 ease-out",
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0",
            ].join(" ")}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-slate-200
                bg-white px-4 py-2
                text-xs font-extrabold text-slate-700
                shadow-sm
              "
            >
              <span
                className="h-2 w-2 rounded-full bg-emerald-600"
                aria-hidden="true"
              />

              <span>{sectionCopy.badge}</span>
            </div>

            <h2
              className="
                mt-5
                text-[clamp(26px,7vw,42px)]
                font-black leading-tight
                tracking-tight text-slate-950
              "
            >
              {sectionCopy.title}
            </h2>

            <p
              className="
                mx-auto mt-3 max-w-2xl
                text-[15px] font-medium leading-7
                text-slate-600 sm:text-base
              "
            >
              {sectionCopy.subtitle}
            </p>
          </header>

          <div
            className="
              grid grid-cols-1 gap-5
              sm:grid-cols-2 sm:gap-6
              xl:grid-cols-4 xl:gap-5
            "
          >
            {serviceList.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                image={service.image}
                priority={service.priority}
                onClick={() => setSelected(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={Boolean(selected)}
        selected={selected}
        onClose={() => setSelected(null)}
        onOrderNow={handleOrder}
      />
    </>
  );
}
