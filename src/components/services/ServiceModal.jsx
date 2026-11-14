// src/components/services/ServiceModal.jsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  Ruler,
  X,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { serviceDetails } from "./serviceDetailsData";

const CARPET_PRICE_OPTIONS = {
  MEASUREMENTS: "measurements",
  METER_PRICE: "meterPrice",
  ON_SITE_MEASURE: "onSiteMeasure",
};

const MATTRESS_SIZES = {
  SINGLE: "single",
  SINGLE_AND_HALF: "singleAndHalf",
  DOUBLE: "double",
};

const MATTRESS_SIDES = {
  ONE: "one",
  TWO: "two",
};

function getText(lang, values) {
  if (lang === "he") {
    return values.he;
  }

  if (lang === "en") {
    return values.en;
  }

  return values.ar;
}

function getLocalizedValue(source, lang, keyPrefix) {
  if (!source) {
    return "";
  }

  if (lang === "he") {
    return source[`${keyPrefix}_he`] || "";
  }

  if (lang === "en") {
    return source[`${keyPrefix}_en`] || "";
  }

  return source[`${keyPrefix}_ar`] || "";
}

function normalizePositiveInteger(value, fallback = 1) {
  const parsedValue = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedValue) || parsedValue < 1) {
    return fallback;
  }

  return parsedValue;
}

export default function ServiceModal({
  isOpen,
  onClose,
  selected,
  onOrderNow,
}) {
  const { lang, t } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [location, setLocation] = useState("");

  // Sofa
  const [quantity, setQuantity] = useState(1);

  // Mattress
  const [mattressCount, setMattressCount] = useState(1);
  const [mattressSize, setMattressSize] = useState("");
  const [mattressSides, setMattressSides] = useState("");

  // Carpet
  const [carpetQuantity, setCarpetQuantity] = useState("");
  const [carpetPriceOption, setCarpetPriceOption] = useState("");

  const [showErrors, setShowErrors] = useState(false);

  const closeTimerRef = useRef(null);
  const locationInputRef = useRef(null);

  const details = useMemo(() => {
    if (!selected) {
      return null;
    }

    return serviceDetails?.[selected.id] || null;
  }, [selected]);

  const firstCard = details?.cards?.[0] || null;

  const isSofa = selected?.id === "sofa";
  const isMattress = selected?.id === "mattress";
  const isCarpet = selected?.id === "carpet";

  const title =
    getLocalizedValue(details, lang, "title") ||
    t?.[selected?.titleKey] ||
    selected?.id ||
    "";

  const description =
    getLocalizedValue(details, lang, "subtitle") ||
    t?.[selected?.descriptionKey] ||
    "";

  const features = useMemo(() => {
    if (!firstCard) {
      return [];
    }

    if (lang === "he") {
      return firstCard.features_he || [];
    }

    if (lang === "en") {
      return firstCard.features_en || [];
    }

    return firstCard.features_ar || [];
  }, [firstCard, lang]);

  const text = useMemo(
    () => ({
      includesTitle: getText(lang, {
        ar: "ماذا تشمل الخدمة؟",
        he: "מה כולל השירות?",
        en: "What does the service include?",
      }),

      locationLabel: getText(lang, {
        ar: "البلدة",
        he: "יישוב",
        en: "Town",
      }),

      locationPlaceholder: getText(lang, {
        ar: "اكتب اسم البلدة",
        he: "הקלידו את שם היישוב",
        en: "Enter your town",
      }),

      locationHint: getText(lang, {
        ar: "الخدمة متاحة في مناطق الشمال والمركز.",
        he: "השירות זמין באזורי הצפון והמרכז.",
        en: "Service is available in the north and center.",
      }),

      locationError: getText(lang, {
        ar: "اكتب اسم البلدة للمتابعة.",
        he: "יש להזין את שם היישוב.",
        en: "Enter your town to continue.",
      }),

      sofaCountLabel: getText(lang, {
        ar: "عدد مقاعد الكنب",
        he: "מספר מושבי הספה",
        en: "Number of sofa seats",
      }),

      sofaCountHint: getText(lang, {
        ar: "احسب مجموع المقاعد التي تريد تنظيفها.",
        he: "יש לחשב את מספר המושבים הכולל שתרצו לנקות.",
        en: "Enter the total number of sofa seats to clean.",
      }),

      mattressCountLabel: getText(lang, {
        ar: "عدد فرشات النوم",
        he: "מספר המזרנים",
        en: "Number of mattresses",
      }),

      mattressCountHint: getText(lang, {
        ar: "اختر عدد الفرشات التي تريد تنظيفها.",
        he: "בחרו את מספר המזרנים שתרצו לנקות.",
        en: "Choose the number of mattresses to clean.",
      }),

      mattressSizeLabel: getText(lang, {
        ar: "حجم الفرشة",
        he: "גודל המזרן",
        en: "Mattress size",
      }),

      mattressSizeHint: getText(lang, {
        ar: "اختر الحجم حتى يتم تحديد السعر بشكل صحيح.",
        he: "בחרו את הגודל כדי לחשב את המחיר נכון.",
        en: "Choose the size so the price can be calculated correctly.",
      }),

      mattressSingle: getText(lang, {
        ar: "مفرد",
        he: "יחיד",
        en: "Single",
      }),

      mattressSingleAndHalf: getText(lang, {
        ar: "مفرد ونص",
        he: "מיטה וחצי",
        en: "Single and a half",
      }),

      mattressDouble: getText(lang, {
        ar: "مزدوج",
        he: "זוגי",
        en: "Double",
      }),

      mattressSidesLabel: getText(lang, {
        ar: "عدد الأوجه",
        he: "מספר צדדים",
        en: "Cleaning sides",
      }),

      mattressOneSide: getText(lang, {
        ar: "وجه واحد",
        he: "צד אחד",
        en: "One side",
      }),

      mattressTwoSides: getText(lang, {
        ar: "وجهين",
        he: "שני צדדים",
        en: "Two sides",
      }),

      mattressPricingHint: getText(lang, {
        ar: "السعر يتحدد حسب الحجم، عدد الفرشات، وتنظيف وجه واحد أو وجهين.",
        he: "המחיר נקבע לפי הגודל, מספר המזרנים וניקוי צד אחד או שני צדדים.",
        en: "The price depends on size, mattress count, and whether one or both sides are cleaned.",
      }),

      mattressSizeError: getText(lang, {
        ar: "اختر حجم الفرشة.",
        he: "יש לבחור את גודל המזרן.",
        en: "Choose the mattress size.",
      }),

      mattressSidesError: getText(lang, {
        ar: "اختر وجه واحد أو وجهين.",
        he: "יש לבחור צד אחד או שני צדדים.",
        en: "Choose one side or two sides.",
      }),

      carpetCountLabel: getText(lang, {
        ar: "عدد السجاد",
        he: "מספר שטיחים",
        en: "Number of carpets",
      }),

      carpetCountOptional: getText(lang, {
        ar: "اختياري",
        he: "אופציונלי",
        en: "Optional",
      }),

      carpetPriceLabel: getText(lang, {
        ar: "كيف تريد معرفة السعر؟",
        he: "איך תרצו לקבל מחיר?",
        en: "How would you like to receive a price?",
      }),

      carpetMeasurements: getText(lang, {
        ar: "بعرف القياسات",
        he: "אני יודע/ת את המידות",
        en: "I know the measurements",
      }),

      carpetMeasurementsHint: getText(lang, {
        ar: "سأرسل طول وعرض كل سجادة.",
        he: "אשלח אורך ורוחב של כל שטיח.",
        en: "I will send the length and width of each carpet.",
      }),

      carpetMeterPrice: getText(lang, {
        ar: "بدي سعر المتر",
        he: "אני רוצה מחיר למטר",
        en: "I want the price per meter",
      }),

      carpetMeterPriceHint: getText(lang, {
        ar: "أريد معرفة تكلفة التنظيف حسب المتر.",
        he: "אני רוצה לדעת את מחיר הניקוי לפי מטר.",
        en: "I want to know the cleaning price per meter.",
      }),

      carpetOnSite: getText(lang, {
        ar: "ما بعرف القياسات",
        he: "אני לא יודע/ת את המידות",
        en: "I do not know the measurements",
      }),

      carpetOnSiteHint: getText(lang, {
        ar: "أحتاج قياس السجاد في الموقع.",
        he: "אני צריך/ה מדידה במקום.",
        en: "I need the carpets measured at my location.",
      }),

      carpetOptionError: getText(lang, {
        ar: "اختر طريقة معرفة السعر.",
        he: "יש לבחור כיצד לקבל מחיר.",
        en: "Choose how you would like to receive a price.",
      }),

      submit: getText(lang, {
        ar: "متابعة عبر واتساب",
        he: "המשך ב-WhatsApp",
        en: "Continue through WhatsApp",
      }),

      close: getText(lang, {
        ar: "إغلاق",
        he: "סגירה",
        en: "Close",
      }),

      orderSummary: getText(lang, {
        ar: "أدخل التفاصيل الأساسية ونكمل الطلب عبر واتساب.",
        he: "הזינו את הפרטים הבסיסיים ונמשיך דרך WhatsApp.",
        en: "Enter the basic details and continue through WhatsApp.",
      }),
    }),
    [lang],
  );

  const closeModal = useCallback(() => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    setIsVisible(false);

    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose?.();
    }, 220);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsVisible(false);
      setIsClosing(false);
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isOpen]);

  useEffect(() => {
    setLocation("");

    setQuantity(1);

    setMattressCount(1);
    setMattressSize("");
    setMattressSides("");

    setCarpetQuantity("");
    setCarpetPriceOption("");

    setShowErrors(false);
  }, [selected?.id]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeModal, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  if (!isOpen || !selected) {
    return null;
  }

  const locationValid = location.trim().length >= 2;

  const sofaQuantityValid =
    !isSofa || (Number.isInteger(Number(quantity)) && Number(quantity) >= 1);

  const mattressCountValid =
    !isMattress ||
    (Number.isInteger(Number(mattressCount)) && Number(mattressCount) >= 1);

  const mattressSizeValid =
    !isMattress || Object.values(MATTRESS_SIZES).includes(mattressSize);

  const mattressSidesValid =
    !isMattress || Object.values(MATTRESS_SIDES).includes(mattressSides);

  const carpetPriceOptionValid =
    !isCarpet ||
    Object.values(CARPET_PRICE_OPTIONS).includes(carpetPriceOption);

  const formValid =
    locationValid &&
    sofaQuantityValid &&
    mattressCountValid &&
    mattressSizeValid &&
    mattressSidesValid &&
    carpetPriceOptionValid;

  const handleSubmit = () => {
    setShowErrors(true);

    if (!formValid) {
      if (!locationValid) {
        locationInputRef.current?.focus();
      }

      return;
    }

    onOrderNow?.({
      location: location.trim(),

      quantity: isSofa
        ? normalizePositiveInteger(quantity)
        : isCarpet && carpetQuantity !== ""
          ? normalizePositiveInteger(carpetQuantity)
          : null,

      mattressCount: isMattress
        ? normalizePositiveInteger(mattressCount)
        : null,

      mattressSize: isMattress ? mattressSize : null,

      mattressSides: isMattress ? mattressSides : null,

      carpetPriceOption: isCarpet ? carpetPriceOption : null,
    });
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed inset-0 z-[10020]",
        "flex items-end justify-center",
        "sm:items-center sm:p-4",
        "transition-colors duration-200",
        isVisible ? "bg-[rgba(3,7,24,0.68)]" : "bg-transparent",
      ].join(" ")}
      role="presentation"
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label={text.close}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className={[
          "relative z-10",
          "flex max-h-[94dvh] w-full flex-col",
          "overflow-hidden bg-white",
          "rounded-t-[28px]",
          "shadow-[0_-20px_70px_rgba(0,0,0,0.28)]",
          "transition-transform duration-200 ease-out",
          "sm:max-w-2xl sm:rounded-[28px]",
          "sm:shadow-[0_28px_90px_rgba(0,0,0,0.34)]",
          isVisible ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.985]",
        ].join(" ")}
      >
        {/* Image header */}
        <div className="relative h-36 shrink-0 overflow-hidden sm:h-44">
          <img
            src={selected.image || details?.image}
            alt=""
            draggable={false}
            className="h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[rgba(8,12,29,0.94)]
              via-[rgba(8,12,29,0.30)]
              to-[rgba(8,12,29,0.08)]
            "
          />

          <button
            type="button"
            onClick={closeModal}
            aria-label={text.close}
            className="
              absolute
              end-3
              top-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/35
              text-white
              backdrop-blur-md
              transition
              hover:bg-black/50
              active:scale-95
            "
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h2
              id="service-modal-title"
              className="
                text-2xl
                font-black
                leading-tight
                text-white
                sm:text-3xl
              "
            >
              {title}
            </h2>

            {description && (
              <p
                className="
                  mt-1.5
                  max-w-xl
                  text-sm
                  font-medium
                  leading-6
                  text-white/78
                "
              >
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="space-y-6 px-4 py-5 sm:px-6 sm:py-6">
            {features.length > 0 && (
              <div>
                <h3
                  className="
                    text-sm
                    font-black
                    text-[var(--lumora-navy-900)]
                  "
                >
                  {text.includesTitle}
                </h3>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={`${feature}-${index}`}
                      className="
                        flex
                        items-start
                        gap-2.5
                        rounded-xl
                        bg-[#f7f9f5]
                        px-3
                        py-2.5
                      "
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-[var(--lumora-green)]
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          leading-5
                          text-slate-700
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div>
              <label
                htmlFor="service-location"
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-black
                  text-[var(--lumora-navy-900)]
                "
              >
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 text-[var(--lumora-cyan)]"
                />

                <span>{text.locationLabel}</span>
              </label>

              <input
                ref={locationInputRef}
                id="service-location"
                type="text"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                placeholder={text.locationPlaceholder}
                autoComplete="address-level2"
                className={[
                  "mt-2 h-12 w-full rounded-xl",
                  "border bg-white px-4",
                  "text-sm font-bold text-slate-900",
                  "outline-none transition",
                  "placeholder:text-slate-400",
                  showErrors && !locationValid
                    ? ["border-rose-400", "ring-2 ring-rose-100"].join(" ")
                    : [
                        "border-slate-200",
                        "focus:border-[var(--lumora-cyan)]",
                        "focus:ring-2",
                        "focus:ring-[rgba(16,148,192,0.12)]",
                      ].join(" "),
                ].join(" ")}
              />

              <p
                className={[
                  "mt-1.5 text-xs leading-5",
                  showErrors && !locationValid
                    ? "font-bold text-rose-600"
                    : "text-slate-500",
                ].join(" ")}
              >
                {showErrors && !locationValid
                  ? text.locationError
                  : text.locationHint}
              </p>
            </div>

            {/* Sofa fields */}
            {isSofa && (
              <QuantityField
                label={text.sofaCountLabel}
                hint={text.sofaCountHint}
                value={quantity}
                onChange={setQuantity}
              />
            )}

            {/* Mattress fields */}
            {isMattress && (
              <div className="space-y-5">
                <QuantityField
                  label={text.mattressCountLabel}
                  hint={text.mattressCountHint}
                  value={mattressCount}
                  onChange={setMattressCount}
                />

                <ChoiceSection
                  icon={<Ruler className="h-4 w-4" />}
                  label={text.mattressSizeLabel}
                  hint={text.mattressSizeHint}
                  error={
                    showErrors && !mattressSizeValid
                      ? text.mattressSizeError
                      : ""
                  }
                  columns="grid-cols-3"
                  options={[
                    {
                      value: MATTRESS_SIZES.SINGLE,
                      label: text.mattressSingle,
                    },
                    {
                      value: MATTRESS_SIZES.SINGLE_AND_HALF,
                      label: text.mattressSingleAndHalf,
                    },
                    {
                      value: MATTRESS_SIZES.DOUBLE,
                      label: text.mattressDouble,
                    },
                  ]}
                  selectedValue={mattressSize}
                  onSelect={setMattressSize}
                />

                <ChoiceSection
                  label={text.mattressSidesLabel}
                  error={
                    showErrors && !mattressSidesValid
                      ? text.mattressSidesError
                      : ""
                  }
                  columns="grid-cols-2"
                  options={[
                    {
                      value: MATTRESS_SIDES.ONE,
                      label: text.mattressOneSide,
                    },
                    {
                      value: MATTRESS_SIDES.TWO,
                      label: text.mattressTwoSides,
                    },
                  ]}
                  selectedValue={mattressSides}
                  onSelect={setMattressSides}
                />

                <div
                  className="
                    rounded-xl
                    border
                    border-[rgba(16,148,192,0.14)]
                    bg-[rgba(16,148,192,0.06)]
                    px-3.5
                    py-3
                    text-xs
                    font-bold
                    leading-5
                    text-slate-600
                  "
                >
                  {text.mattressPricingHint}
                </div>
              </div>
            )}

            {/* Carpet fields */}
            {isCarpet && (
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <label
                      htmlFor="carpet-quantity"
                      className="
                        text-sm
                        font-black
                        text-[var(--lumora-navy-900)]
                      "
                    >
                      {text.carpetCountLabel}
                    </label>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-2
                        py-1
                        text-[10px]
                        font-bold
                        text-slate-500
                      "
                    >
                      {text.carpetCountOptional}
                    </span>
                  </div>

                  <input
                    id="carpet-quantity"
                    type="number"
                    min="1"
                    inputMode="numeric"
                    value={carpetQuantity}
                    onChange={(event) => {
                      const nextValue = event.target.value;

                      if (nextValue === "" || Number(nextValue) >= 1) {
                        setCarpetQuantity(nextValue);
                      }
                    }}
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      text-sm
                      font-bold
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[var(--lumora-cyan)]
                      focus:ring-2
                      focus:ring-[rgba(16,148,192,0.12)]
                    "
                  />
                </div>

                <ChoiceSection
                  icon={<Ruler className="h-4 w-4" />}
                  label={text.carpetPriceLabel}
                  error={
                    showErrors && !carpetPriceOptionValid
                      ? text.carpetOptionError
                      : ""
                  }
                  columns="grid-cols-1"
                  options={[
                    {
                      value: CARPET_PRICE_OPTIONS.MEASUREMENTS,
                      label: text.carpetMeasurements,
                      description: text.carpetMeasurementsHint,
                    },
                    {
                      value: CARPET_PRICE_OPTIONS.METER_PRICE,
                      label: text.carpetMeterPrice,
                      description: text.carpetMeterPriceHint,
                    },
                    {
                      value: CARPET_PRICE_OPTIONS.ON_SITE_MEASURE,
                      label: text.carpetOnSite,
                      description: text.carpetOnSiteHint,
                    },
                  ]}
                  selectedValue={carpetPriceOption}
                  onSelect={setCarpetPriceOption}
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer
          className="
            shrink-0
            border-t
            border-slate-200
            bg-white
            px-4
            pb-[max(16px,env(safe-area-inset-bottom))]
            pt-4
            sm:px-6
            sm:pb-5
          "
        >
          <p className="mb-3 text-center text-xs text-slate-500">
            {text.orderSummary}
          </p>

          <button
            type="button"
            onClick={handleSubmit}
            className="
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[var(--lumora-lime)]
              px-5
              text-sm
              font-black
              text-[var(--lumora-navy-950)]
              shadow-[0_10px_24px_rgba(79,168,37,0.20)]
              transition
              hover:brightness-105
              active:scale-[0.99]
            "
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />

            <span>{text.submit}</span>
          </button>
        </footer>
      </section>
    </div>
  );
}

function QuantityField({ label, hint, value, onChange }) {
  const normalizedValue = normalizePositiveInteger(value);

  const decrease = () => {
    onChange(Math.max(1, normalizedValue - 1));
  };

  const increase = () => {
    onChange(normalizedValue + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p
            className="
              text-sm
              font-black
              text-[var(--lumora-navy-900)]
            "
          >
            {label}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">{hint}</p>
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-[#f7f9f5]
            p-1
          "
        >
          <button
            type="button"
            onClick={decrease}
            disabled={normalizedValue <= 1}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-white
              text-[var(--lumora-navy-900)]
              shadow-sm
              transition
              hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-35
              active:scale-95
            "
          >
            <Minus aria-hidden="true" className="h-4 w-4" />
          </button>

          <input
            type="number"
            min="1"
            inputMode="numeric"
            value={value}
            onChange={(event) => {
              const nextValue = event.target.value;

              if (nextValue === "") {
                onChange("");
                return;
              }

              onChange(normalizePositiveInteger(nextValue));
            }}
            className="
              h-9
              w-11
              bg-transparent
              text-center
              text-base
              font-black
              text-[var(--lumora-navy-900)]
              outline-none
            "
          />

          <button
            type="button"
            onClick={increase}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-[var(--lumora-navy-900)]
              text-white
              transition
              hover:bg-[var(--lumora-navy-800)]
              active:scale-95
            "
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChoiceSection({
  icon = null,
  label,
  hint = "",
  error = "",
  options,
  selectedValue,
  onSelect,
  columns = "grid-cols-2",
}) {
  return (
    <div>
      <div
        className="
          flex
          items-center
          gap-2
          text-sm
          font-black
          text-[var(--lumora-navy-900)]
        "
      >
        {icon && <span className="text-[var(--lumora-cyan)]">{icon}</span>}

        <span>{label}</span>
      </div>

      {hint && <p className="mt-1 text-xs leading-5 text-slate-500">{hint}</p>}

      <div className={`mt-3 grid gap-2 ${columns}`}>
        {options.map((option) => {
          const active = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              aria-pressed={active}
              className={[
                "relative rounded-xl border",
                "px-3 py-3 text-start",
                "transition-all duration-150",
                active
                  ? [
                      "border-[rgba(174,221,57,0.70)]",
                      "bg-[rgba(174,221,57,0.11)]",
                      "text-[var(--lumora-navy-900)]",
                      "ring-2",
                      "ring-[rgba(174,221,57,0.12)]",
                    ].join(" ")
                  : [
                      "border-slate-200",
                      "bg-white",
                      "text-slate-700",
                      "hover:border-[rgba(16,148,192,0.35)]",
                      "hover:bg-slate-50",
                    ].join(" "),
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <span className="flex-1 text-sm font-black">
                  {option.label}
                </span>

                {active && (
                  <CheckCircle2
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-[var(--lumora-green)]
                    "
                  />
                )}
              </div>

              {option.description && (
                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    leading-5
                    text-slate-500
                  "
                >
                  {option.description}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {error && <p className="mt-2 text-xs font-bold text-rose-600">{error}</p>}
    </div>
  );
}
