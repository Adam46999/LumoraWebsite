// src/components/services/Services.jsx
import React, { useEffect, useMemo, useState } from "react";

import { ClipboardList, MessageCircle, Plus } from "lucide-react";

import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import OrderBuilderModal from "./OrderBuilderModal";
import { useLanguage } from "../../context/LanguageContext";

const WHATSAPP_NUMBERS = {
  upholstery: "972502727724",
  carpet: "972543075619",
  mixed: "972543075619",
};

const EMPTY_SUMMARY = {
  sofaSeats: 0,
  carpetCount: 0,
  mattressCount: 0,
  selectedServiceCount: 0,
  totalItems: 0,
  hasItems: false,
};

const UNAVAILABLE_SERVICE_IDS = new Set(["glass"]);

const getText = (lang, values) => {
  if (lang === "he") {
    return values.he;
  }

  if (lang === "en") {
    return values.en;
  }

  return values.ar;
};

const getOrderWhatsAppNumber = (order) => {
  const hasCarpets = order?.carpets?.length > 0;

  const hasUpholstery =
    order?.sofas?.length > 0 || order?.mattresses?.length > 0;

  if (hasCarpets && hasUpholstery) {
    return WHATSAPP_NUMBERS.mixed;
  }

  if (hasCarpets) {
    return WHATSAPP_NUMBERS.carpet;
  }

  return WHATSAPP_NUMBERS.upholstery;
};

export default function Services() {
  const { lang, isRTL } = useLanguage();

  const [titleVisible, setTitleVisible] = useState(false);

  const [orderBuilderOpen, setOrderBuilderOpen] = useState(false);

  const [initialServiceId, setInitialServiceId] = useState(null);

  const [orderSummary, setOrderSummary] = useState(EMPTY_SUMMARY);

  useEffect(() => {
    const element = document.getElementById("services-title");

    if (!element) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setTitleVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setTitleVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * حماية إضافية:
   * أي خدمة سيارات لن تظهر حتى لو أضيفت
   * إلى بيانات الخدمات بالخطأ لاحقًا.
   */
  const serviceList = useMemo(
    () =>
      services.filter(
        (service) =>
          service.id !== "car" &&
          service.id !== "cars" &&
          service.id !== "carSeats",
      ),
    [],
  );

  const isServiceAvailable = (service) => {
    return Boolean(service) && !UNAVAILABLE_SERVICE_IDS.has(service.id);
  };

  const openOrderBuilder = (serviceId = null) => {
    setInitialServiceId(serviceId);
    setOrderBuilderOpen(true);
  };

  const closeOrderBuilder = () => {
    setOrderBuilderOpen(false);
    setInitialServiceId(null);
  };

  const handleOrderSubmit = ({ order, message }) => {
    const phone = getOrderWhatsAppNumber(order);

    const whatsappUrl =
      `https://wa.me/${phone}` + `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    closeOrderBuilder();
  };

  const sectionBadge = getText(lang, {
    ar: "خدمات في بيت الزبون",
    he: "שירותים בבית הלקוח",
    en: "Services at your location",
  });

  const sectionTitle = getText(lang, {
    ar: "شو الخدمة اللي بتحتاجها؟",
    he: "איזה שירות אתם צריכים?",
    en: "Which service do you need?",
  });

  const sectionSubtitle = getText(lang, {
    ar: "اختار خدمة واحدة أو اجمع أكثر من خدمة بنفس الطلب. بتقدر تضيف كل سجادة وكل فرشة بتفاصيلها لحالها.",
    he: "בחרו שירות אחד או שלבו כמה שירותים באותה הזמנה. ניתן להוסיף כל שטיח וכל מזרן עם הפרטים שלו.",
    en: "Choose one service or combine several in the same order. Each carpet and mattress can have its own details.",
  });

  const startOrderText = getText(lang, {
    ar: "جهّز طلب متعدد الخدمات",
    he: "בניית הזמנה עם כמה שירותים",
    en: "Build a multi-service order",
  });

  const startOrderHint = getText(lang, {
    ar: "كنب، سجاد وفرشات نوم في رسالة واحدة",
    he: "ספות, שטיחים ומזרנים בהודעה אחת",
    en: "Sofas, carpets, and mattresses in one message",
  });

  const viewOrderText = getText(lang, {
    ar: "عرض الطلب",
    he: "צפייה בהזמנה",
    en: "View order",
  });

  const itemText = getText(lang, {
    ar: orderSummary.totalItems === 1 ? "عنصر" : "عناصر",

    he: "פריטים",
    en: orderSummary.totalItems === 1 ? "item" : "items",
  });

  return (
    <>
      <div dir={isRTL ? "rtl" : "ltr"} className="mx-auto w-full max-w-5xl">
        <header
          id="services-title"
          className={[
            "mx-auto mb-8 max-w-3xl text-center sm:mb-10",
            "transition-all duration-500 ease-out",

            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[rgba(17,21,47,0.10)]
              bg-[#f7f9f5]
              px-3.5
              py-1.5
              text-xs
              font-extrabold
              text-[var(--lumora-navy-900)]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--lumora-lime)]
              "
            />

            <span>{sectionBadge}</span>
          </div>

          <h2
            className="
              mt-4
              text-[clamp(26px,6vw,40px)]
              font-black
              leading-tight
              tracking-tight
              text-[var(--lumora-navy-900)]
            "
          >
            {sectionTitle}
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-[15px]
              font-medium
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            {sectionSubtitle}
          </p>
        </header>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
          "
        >
          {serviceList.map((service) => {
            const available = isServiceAvailable(service);

            return (
              <div key={service.id} className="h-full">
                <ServiceCard
                  id={service.id}
                  icon={service.icon}
                  titleKey={service.titleKey}
                  descriptionKey={service.descriptionKey}
                  image={service.image}
                  priority={service.priority}
                  onClick={
                    available ? () => openOrderBuilder(service.id) : undefined
                  }
                  onBook={
                    available ? () => openOrderBuilder(service.id) : undefined
                  }
                />
              </div>
            );
          })}
        </div>

        {/* Main multi-service order button */}
        <button
          type="button"
          onClick={() => openOrderBuilder()}
          className="
            group
            mt-7
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            border
            border-[rgba(16,148,192,0.18)]
            bg-[var(--lumora-navy-950)]
            px-4
            py-4
            text-start
            shadow-[0_16px_40px_rgba(8,12,29,0.12)]
            transition
            hover:-translate-y-0.5
            hover:shadow-[0_20px_48px_rgba(8,12,29,0.17)]
            active:translate-y-0
            sm:px-5
          "
        >
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[rgba(174,221,57,0.12)]
              text-[var(--lumora-lime-light)]
            "
          >
            <ClipboardList className="h-5 w-5" />
          </span>

          <span className="min-w-0 flex-1">
            <span
              className="
                block
                text-sm
                font-black
                text-white
                sm:text-base
              "
            >
              {startOrderText}
            </span>

            <span
              className="
                mt-1
                block
                text-xs
                font-medium
                leading-5
                text-white/60
                sm:text-sm
              "
            >
              {startOrderHint}
            </span>
          </span>

          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--lumora-lime)]
              text-[var(--lumora-navy-950)]
              transition
              group-hover:scale-105
            "
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </div>

      <OrderBuilderModal
        isOpen={orderBuilderOpen}
        onClose={closeOrderBuilder}
        initialServiceId={initialServiceId}
        onSummaryChange={setOrderSummary}
        onSubmit={handleOrderSubmit}
      />

      {/* Persistent order button */}
      {orderSummary.hasItems && (
        <button
          type="button"
          dir={isRTL ? "rtl" : "ltr"}
          onClick={() => openOrderBuilder()}
          className={[
            "fixed bottom-4 z-[9996]",
            "flex min-h-14 items-center gap-3",
            "rounded-2xl",
            "border border-white/15",
            "bg-[var(--lumora-navy-950)]",
            "px-3.5 py-2.5",
            "text-white",
            "shadow-[0_16px_45px_rgba(0,0,0,0.28)]",
            "transition",
            "hover:-translate-y-1",
            "active:scale-[0.98]",

            isRTL ? "right-4" : "left-4",
          ].join(" ")}
        >
          <span
            className="
              relative
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[rgba(174,221,57,0.13)]
              text-[var(--lumora-lime-light)]
            "
          >
            <ClipboardList className="h-5 w-5" />

            <span
              className="
                absolute
                -end-1.5
                -top-1.5
                flex
                min-h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-[var(--lumora-lime)]
                px-1
                text-[10px]
                font-black
                leading-none
                text-[var(--lumora-navy-950)]
              "
            >
              {orderSummary.totalItems}
            </span>
          </span>

          <span className="text-start">
            <span
              className="
                block
                text-xs
                font-black
                leading-tight
              "
            >
              {viewOrderText}
            </span>

            <span
              className="
                mt-0.5
                block
                text-[10px]
                font-bold
                text-white/60
              "
            >
              {orderSummary.totalItems} {itemText}
            </span>
          </span>

          <MessageCircle
            aria-hidden="true"
            className="
              h-4
              w-4
              text-[var(--lumora-lime-light)]
            "
          />
        </button>
      )}
    </>
  );
}
