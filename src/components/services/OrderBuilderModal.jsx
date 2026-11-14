// src/components/services/OrderBuilderModal.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  BedDouble,
  CheckCircle2,
  ClipboardList,
  Layers,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  Ruler,
  Sofa,
  Trash2,
  X,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const STORAGE_KEY = "lumora-multi-service-order-v1";

const MATTRESS_SIZES = [
  {
    value: "single",
    ar: "مفرد",
    en: "Single",
    he: "יחיד",
  },
  {
    value: "singleAndHalf",
    ar: "مفرد ونص",
    en: "Single and a half",
    he: "מיטה וחצי",
  },
  {
    value: "double",
    ar: "مزدوج",
    en: "Double",
    he: "זוגי",
  },
];

const MATTRESS_SIDES = [
  {
    value: "one",
    ar: "وجه واحد",
    en: "One side",
    he: "צד אחד",
  },
  {
    value: "two",
    ar: "وجهين",
    en: "Two sides",
    he: "שני צדדים",
  },
];

const createId = (prefix) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const createSofa = () => ({
  id: createId("sofa"),
  seats: 1,
});

const createCarpet = () => ({
  id: createId("carpet"),
  length: "",
  width: "",
  unknownMeasurements: false,
});

const createMattress = () => ({
  id: createId("mattress"),
  count: 1,
  size: "single",
  sides: "one",
});

const createEmptyOrder = () => ({
  location: "",
  sofas: [],
  carpets: [],
  mattresses: [],
  notes: "",
});

const getText = (lang, values) => {
  if (lang === "he") {
    return values.he;
  }

  if (lang === "en") {
    return values.en;
  }

  return values.ar;
};

const getOptionText = (lang, option) =>
  getText(lang, {
    ar: option.ar,
    en: option.en,
    he: option.he,
  });

const getMattressSizeText = (lang, value) => {
  const option = MATTRESS_SIZES.find((item) => item.value === value);

  return option ? getOptionText(lang, option) : value;
};

const getMattressSidesText = (lang, value) => {
  const option = MATTRESS_SIDES.find((item) => item.value === value);

  return option ? getOptionText(lang, option) : value;
};

const normalizeInteger = (value, fallback = 1) => {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }

  return parsed;
};

const normalizeDecimal = (value) => {
  const parsed = Number.parseFloat(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }

  return parsed;
};

const loadSavedOrder = () => {
  if (typeof window === "undefined") {
    return createEmptyOrder();
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return createEmptyOrder();
    }

    const parsed = JSON.parse(saved);

    return {
      location: typeof parsed?.location === "string" ? parsed.location : "",

      sofas: Array.isArray(parsed?.sofas) ? parsed.sofas : [],

      carpets: Array.isArray(parsed?.carpets) ? parsed.carpets : [],

      mattresses: Array.isArray(parsed?.mattresses) ? parsed.mattresses : [],

      notes: typeof parsed?.notes === "string" ? parsed.notes : "",
    };
  } catch {
    return createEmptyOrder();
  }
};

export const getOrderSummary = (order) => {
  const sofaSeats = order.sofas.reduce(
    (total, item) => total + normalizeInteger(item.seats),
    0,
  );

  const carpetCount = order.carpets.length;

  const mattressCount = order.mattresses.reduce(
    (total, item) => total + normalizeInteger(item.count),
    0,
  );

  const selectedServiceCount = [
    order.sofas.length > 0,
    order.carpets.length > 0,
    order.mattresses.length > 0,
  ].filter(Boolean).length;

  return {
    sofaSeats,
    carpetCount,
    mattressCount,
    selectedServiceCount,
    totalItems: sofaSeats + carpetCount + mattressCount,
    hasItems: sofaSeats > 0 || carpetCount > 0 || mattressCount > 0,
  };
};

export const buildOrderWhatsAppMessage = (order, lang = "ar") => {
  const lines = [];

  lines.push(
    getText(lang, {
      ar: "مرحبًا، أريد طلب خدمات تنظيف.",
      en: "Hello, I would like to request cleaning services.",
      he: "שלום, אני רוצה להזמין שירותי ניקיון.",
    }),
  );

  lines.push(
    getText(lang, {
      ar: `البلدة: ${order.location}`,
      en: `Town: ${order.location}`,
      he: `יישוב: ${order.location}`,
    }),
  );

  lines.push("");

  lines.push(
    getText(lang, {
      ar: "الخدمات المطلوبة:",
      en: "Requested services:",
      he: "השירותים המבוקשים:",
    }),
  );

  if (order.sofas.length > 0) {
    lines.push("");

    lines.push(
      getText(lang, {
        ar: "الكنب:",
        en: "Sofas:",
        he: "ספות:",
      }),
    );

    order.sofas.forEach((item, index) => {
      lines.push(
        getText(lang, {
          ar: `${index + 1}. عدد المقاعد: ${normalizeInteger(item.seats)}`,

          en: `${index + 1}. Number of seats: ${normalizeInteger(item.seats)}`,

          he: `${index + 1}. מספר מושבים: ${normalizeInteger(item.seats)}`,
        }),
      );
    });
  }

  if (order.carpets.length > 0) {
    lines.push("");

    lines.push(
      getText(lang, {
        ar: "السجاد:",
        en: "Carpets:",
        he: "שטיחים:",
      }),
    );

    order.carpets.forEach((item, index) => {
      if (item.unknownMeasurements) {
        lines.push(
          getText(lang, {
            ar: `${index + 1}. القياسات غير معروفة`,
            en: `${index + 1}. Measurements are unknown`,
            he: `${index + 1}. המידות אינן ידועות`,
          }),
        );

        return;
      }

      lines.push(
        getText(lang, {
          ar: `${index + 1}. الطول: ${
            item.length
          } متر × العرض: ${item.width} متر`,

          en: `${index + 1}. Length: ${item.length} m × Width: ${item.width} m`,

          he: `${index + 1}. אורך: ${item.length} מ׳ × רוחב: ${item.width} מ׳`,
        }),
      );
    });
  }

  if (order.mattresses.length > 0) {
    lines.push("");

    lines.push(
      getText(lang, {
        ar: "فرشات النوم:",
        en: "Mattresses:",
        he: "מזרנים:",
      }),
    );

    order.mattresses.forEach((item, index) => {
      const size = getMattressSizeText(lang, item.size);

      const sides = getMattressSidesText(lang, item.sides);

      lines.push(
        getText(lang, {
          ar: `${index + 1}. العدد: ${normalizeInteger(
            item.count,
          )} | الحجم: ${size} | التنظيف: ${sides}`,

          en: `${index + 1}. Quantity: ${normalizeInteger(
            item.count,
          )} | Size: ${size} | Cleaning: ${sides}`,

          he: `${index + 1}. כמות: ${normalizeInteger(
            item.count,
          )} | גודל: ${size} | ניקוי: ${sides}`,
        }),
      );
    });
  }

  if (order.notes.trim()) {
    lines.push("");

    lines.push(
      getText(lang, {
        ar: `ملاحظات: ${order.notes.trim()}`,
        en: `Notes: ${order.notes.trim()}`,
        he: `הערות: ${order.notes.trim()}`,
      }),
    );
  }

  lines.push("");

  lines.push(
    getText(lang, {
      ar: "سأرسل الصور اللازمة عبر واتساب.",
      en: "I will send the necessary photos through WhatsApp.",
      he: "אשלח את התמונות הדרושות דרך WhatsApp.",
    }),
  );

  return lines.join("\n");
};

export default function OrderBuilderModal({
  isOpen,
  onClose,
  initialServiceId = null,
  onSubmit,
  onSummaryChange,
}) {
  const { lang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const [order, setOrder] = useState(loadSavedOrder);
  const [showErrors, setShowErrors] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const locationInputRef = useRef(null);

  const text = useMemo(
    () => ({
      title: getText(lang, {
        ar: "جهّز طلبك",
        en: "Build your order",
        he: "בניית ההזמנה",
      }),

      subtitle: getText(lang, {
        ar: "أضف أي عدد من الخدمات والعناصر، ثم أرسلها برسالة واتساب واحدة.",
        en: "Add any number of services and items, then send one WhatsApp message.",
        he: "הוסיפו כל מספר של שירותים ופריטים ושלחו הודעת WhatsApp אחת.",
      }),

      close: getText(lang, {
        ar: "إغلاق",
        en: "Close",
        he: "סגירה",
      }),

      location: getText(lang, {
        ar: "البلدة",
        en: "Town",
        he: "יישוב",
      }),

      locationPlaceholder: getText(lang, {
        ar: "اكتب اسم البلدة",
        en: "Enter your town",
        he: "הקלידו את שם היישוב",
      }),

      locationError: getText(lang, {
        ar: "اكتب اسم البلدة للمتابعة.",
        en: "Enter your town to continue.",
        he: "יש להזין את שם היישוב.",
      }),

      addServices: getText(lang, {
        ar: "أضف الخدمات المطلوبة",
        en: "Add requested services",
        he: "הוספת שירותים",
      }),

      sofa: getText(lang, {
        ar: "كنب",
        en: "Sofa",
        he: "ספות",
      }),

      carpet: getText(lang, {
        ar: "سجاد",
        en: "Carpet",
        he: "שטיחים",
      }),

      mattress: getText(lang, {
        ar: "فرشات نوم",
        en: "Mattresses",
        he: "מזרנים",
      }),

      sofasTitle: getText(lang, {
        ar: "الكنب",
        en: "Sofas",
        he: "ספות",
      }),

      sofaItem: getText(lang, {
        ar: "كنب",
        en: "Sofa",
        he: "ספה",
      }),

      seats: getText(lang, {
        ar: "عدد المقاعد",
        en: "Number of seats",
        he: "מספר מושבים",
      }),

      addSofa: getText(lang, {
        ar: "إضافة كنب آخر",
        en: "Add another sofa",
        he: "הוספת ספה נוספת",
      }),

      carpetsTitle: getText(lang, {
        ar: "السجاد",
        en: "Carpets",
        he: "שטיחים",
      }),

      carpetItem: getText(lang, {
        ar: "سجادة",
        en: "Carpet",
        he: "שטיח",
      }),

      length: getText(lang, {
        ar: "الطول بالمتر",
        en: "Length in meters",
        he: "אורך במטרים",
      }),

      width: getText(lang, {
        ar: "العرض بالمتر",
        en: "Width in meters",
        he: "רוחב במטרים",
      }),

      unknownMeasurements: getText(lang, {
        ar: "لا أعرف القياسات",
        en: "I do not know the measurements",
        he: "אני לא יודע/ת את המידות",
      }),

      carpetMeasurementError: getText(lang, {
        ar: "أدخل الطول والعرض أو اختر أن القياسات غير معروفة.",
        en: "Enter the length and width, or mark the measurements as unknown.",
        he: "יש להזין אורך ורוחב או לסמן שהמידות אינן ידועות.",
      }),

      addCarpet: getText(lang, {
        ar: "إضافة سجادة أخرى",
        en: "Add another carpet",
        he: "הוספת שטיח נוסף",
      }),

      mattressesTitle: getText(lang, {
        ar: "فرشات النوم",
        en: "Mattresses",
        he: "מזרנים",
      }),

      mattressGroup: getText(lang, {
        ar: "مجموعة فرشات",
        en: "Mattress group",
        he: "קבוצת מזרנים",
      }),

      mattressCount: getText(lang, {
        ar: "عدد الفرشات",
        en: "Number of mattresses",
        he: "מספר מזרנים",
      }),

      size: getText(lang, {
        ar: "الحجم",
        en: "Size",
        he: "גודל",
      }),

      sides: getText(lang, {
        ar: "عدد الأوجه",
        en: "Cleaning sides",
        he: "מספר צדדים",
      }),

      addMattressGroup: getText(lang, {
        ar: "إضافة تركيبة فرشات أخرى",
        en: "Add another mattress combination",
        he: "הוספת שילוב מזרנים נוסף",
      }),

      notes: getText(lang, {
        ar: "ملاحظات إضافية",
        en: "Additional notes",
        he: "הערות נוספות",
      }),

      notesPlaceholder: getText(lang, {
        ar: "مثال: يوجد درج، طابق مرتفع، بقع معينة...",
        en: "Example: stairs, high floor, specific stains...",
        he: "לדוגמה: מדרגות, קומה גבוהה, כתמים מסוימים...",
      }),

      emptyTitle: getText(lang, {
        ar: "لسه ما أضفت أي خدمة",
        en: "No services added yet",
        he: "עדיין לא נוספו שירותים",
      }),

      emptyText: getText(lang, {
        ar: "اختر الكنب أو السجاد أو فرشات النوم من الأزرار فوق.",
        en: "Choose sofa, carpet, or mattresses from the buttons above.",
        he: "בחרו ספות, שטיחים או מזרנים מהכפתורים למעלה.",
      }),

      atLeastOneError: getText(lang, {
        ar: "أضف خدمة واحدة على الأقل.",
        en: "Add at least one service.",
        he: "יש להוסיף לפחות שירות אחד.",
      }),

      clear: getText(lang, {
        ar: "مسح الطلب",
        en: "Clear order",
        he: "ניקוי ההזמנה",
      }),

      send: getText(lang, {
        ar: "مراجعة وإرسال عبر واتساب",
        en: "Review and send through WhatsApp",
        he: "בדיקה ושליחה דרך WhatsApp",
      }),

      items: getText(lang, {
        ar: "عناصر",
        en: "items",
        he: "פריטים",
      }),

      delete: getText(lang, {
        ar: "حذف",
        en: "Delete",
        he: "מחיקה",
      }),
    }),
    [lang],
  );

  const summary = useMemo(() => getOrderSummary(order), [order]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
    } catch {
      // Local storage may be unavailable.
    }

    onSummaryChange?.(summary);
  }, [onSummaryChange, order, summary]);

  useEffect(() => {
    if (!isOpen) {
      setIsVisible(false);
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !initialServiceId) {
      return;
    }

    setOrder((current) => {
      if (initialServiceId === "sofa" && current.sofas.length === 0) {
        return {
          ...current,
          sofas: [createSofa()],
        };
      }

      if (initialServiceId === "carpet" && current.carpets.length === 0) {
        return {
          ...current,
          carpets: [createCarpet()],
        };
      }

      if (initialServiceId === "mattress" && current.mattresses.length === 0) {
        return {
          ...current,
          mattresses: [createMattress()],
        };
      }

      return current;
    });
  }, [initialServiceId, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const addSofa = () => {
    setOrder((current) => ({
      ...current,
      sofas: [...current.sofas, createSofa()],
    }));
  };

  const addCarpet = () => {
    setOrder((current) => ({
      ...current,
      carpets: [...current.carpets, createCarpet()],
    }));
  };

  const addMattress = () => {
    setOrder((current) => ({
      ...current,
      mattresses: [...current.mattresses, createMattress()],
    }));
  };

  const updateSofa = (id, changes) => {
    setOrder((current) => ({
      ...current,
      sofas: current.sofas.map((item) =>
        item.id === id
          ? {
              ...item,
              ...changes,
            }
          : item,
      ),
    }));
  };

  const updateCarpet = (id, changes) => {
    setOrder((current) => ({
      ...current,
      carpets: current.carpets.map((item) =>
        item.id === id
          ? {
              ...item,
              ...changes,
            }
          : item,
      ),
    }));
  };

  const updateMattress = (id, changes) => {
    setOrder((current) => ({
      ...current,
      mattresses: current.mattresses.map((item) =>
        item.id === id
          ? {
              ...item,
              ...changes,
            }
          : item,
      ),
    }));
  };

  const removeSofa = (id) => {
    setOrder((current) => ({
      ...current,
      sofas: current.sofas.filter((item) => item.id !== id),
    }));
  };

  const removeCarpet = (id) => {
    setOrder((current) => ({
      ...current,
      carpets: current.carpets.filter((item) => item.id !== id),
    }));
  };

  const removeMattress = (id) => {
    setOrder((current) => ({
      ...current,
      mattresses: current.mattresses.filter((item) => item.id !== id),
    }));
  };

  const locationValid = order.location.trim().length >= 2;

  const sofasValid = order.sofas.every(
    (item) => normalizeInteger(item.seats, 0) >= 1,
  );

  const carpetsValid = order.carpets.every(
    (item) =>
      item.unknownMeasurements ||
      (normalizeDecimal(item.length) !== null &&
        normalizeDecimal(item.width) !== null),
  );

  const mattressesValid = order.mattresses.every(
    (item) =>
      normalizeInteger(item.count, 0) >= 1 &&
      MATTRESS_SIZES.some((option) => option.value === item.size) &&
      MATTRESS_SIDES.some((option) => option.value === item.sides),
  );

  const formValid =
    locationValid &&
    summary.hasItems &&
    sofasValid &&
    carpetsValid &&
    mattressesValid;

  const handleSubmit = () => {
    setShowErrors(true);

    if (!formValid) {
      if (!locationValid) {
        locationInputRef.current?.focus();
      }

      return;
    }

    const normalizedOrder = {
      location: order.location.trim(),

      sofas: order.sofas.map((item) => ({
        ...item,
        seats: normalizeInteger(item.seats),
      })),

      carpets: order.carpets.map((item) => ({
        ...item,

        length: item.unknownMeasurements
          ? ""
          : String(normalizeDecimal(item.length)),

        width: item.unknownMeasurements
          ? ""
          : String(normalizeDecimal(item.width)),
      })),

      mattresses: order.mattresses.map((item) => ({
        ...item,
        count: normalizeInteger(item.count),
      })),

      notes: order.notes.trim(),
    };

    onSubmit?.({
      order: normalizedOrder,

      message: buildOrderWhatsAppMessage(normalizedOrder, lang),

      summary: getOrderSummary(normalizedOrder),
    });
  };

  const clearOrder = () => {
    setOrder(createEmptyOrder());
    setShowErrors(false);
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed inset-0 z-[10030]",
        "flex items-end justify-center",
        "bg-[rgba(3,7,24,0.72)]",
        "transition-opacity duration-200",
        "sm:items-center sm:p-4",
        isVisible ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={text.close}
        className="absolute inset-0 h-full w-full"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-builder-title"
        className={[
          "relative z-10 flex max-h-[96dvh]",
          "w-full flex-col overflow-hidden",
          "rounded-t-[28px] bg-[#f7f9f5]",
          "shadow-[0_-24px_80px_rgba(0,0,0,0.32)]",
          "transition-transform duration-200",
          "sm:max-w-3xl sm:rounded-[28px]",
          isVisible ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.985]",
        ].join(" ")}
      >
        {/* Header */}
        <header
          className="
            relative
            shrink-0
            overflow-hidden
            bg-[var(--lumora-navy-950)]
            px-4
            py-5
            text-white
            sm:px-6
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -end-14
              -top-14
              h-36
              w-36
              rounded-full
              bg-[rgba(174,221,57,0.10)]
              blur-2xl
            "
          />

          <div className="relative flex items-start gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[rgba(174,221,57,0.12)]
                text-[var(--lumora-lime-light)]
              "
            >
              <ClipboardList className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h2
                id="order-builder-title"
                className="
                  text-xl
                  font-black
                  leading-tight
                  sm:text-2xl
                "
              >
                {text.title}
              </h2>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-sm
                  font-medium
                  leading-6
                  text-white/70
                "
              >
                {text.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={text.close}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-white
                transition
                hover:bg-white/10
                active:scale-95
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Body */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
          "
        >
          <div className="space-y-5 p-4 sm:p-6">
            {/* Location */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
              "
            >
              <label
                htmlFor="order-location"
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
                  className="
                    h-4
                    w-4
                    text-[var(--lumora-cyan)]
                  "
                />

                {text.location}
              </label>

              <input
                ref={locationInputRef}
                id="order-location"
                type="text"
                value={order.location}
                onChange={(event) => {
                  setOrder((current) => ({
                    ...current,
                    location: event.target.value,
                  }));
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
                    ? "border-rose-400 ring-2 ring-rose-100"
                    : [
                        "border-slate-200",
                        "focus:border-[var(--lumora-cyan)]",
                        "focus:ring-2",
                        "focus:ring-[rgba(16,148,192,0.12)]",
                      ].join(" "),
                ].join(" ")}
              />

              {showErrors && !locationValid && (
                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-rose-600
                  "
                >
                  {text.locationError}
                </p>
              )}
            </div>

            {/* Service buttons */}
            <div>
              <p
                className="
                  mb-3
                  text-sm
                  font-black
                  text-[var(--lumora-navy-900)]
                "
              >
                {text.addServices}
              </p>

              <div className="grid grid-cols-3 gap-2">
                <ServiceAddButton
                  icon={Sofa}
                  label={text.sofa}
                  active={order.sofas.length > 0}
                  onClick={addSofa}
                />

                <ServiceAddButton
                  icon={Layers}
                  label={text.carpet}
                  active={order.carpets.length > 0}
                  onClick={addCarpet}
                />

                <ServiceAddButton
                  icon={BedDouble}
                  label={text.mattress}
                  active={order.mattresses.length > 0}
                  onClick={addMattress}
                />
              </div>
            </div>

            {!summary.hasItems && (
              <div
                className={[
                  "rounded-2xl border-2 border-dashed",
                  "px-5 py-8 text-center",
                  showErrors
                    ? ["border-rose-300", "bg-rose-50"].join(" ")
                    : ["border-slate-200", "bg-white"].join(" "),
                ].join(" ")}
              >
                <ClipboardList
                  className="
                    mx-auto
                    h-8
                    w-8
                    text-slate-300
                  "
                />

                <p
                  className="
                    mt-3
                    font-black
                    text-[var(--lumora-navy-900)]
                  "
                >
                  {text.emptyTitle}
                </p>

                <p
                  className="
                    mx-auto
                    mt-1
                    max-w-md
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  {showErrors ? text.atLeastOneError : text.emptyText}
                </p>
              </div>
            )}

            {/* Sofas */}
            {order.sofas.length > 0 && (
              <OrderSection icon={Sofa} title={text.sofasTitle}>
                <div className="space-y-3">
                  {order.sofas.map((item, index) => (
                    <ItemCard
                      key={item.id}
                      title={`${text.sofaItem} ${index + 1}`}
                      deleteLabel={text.delete}
                      onDelete={() => removeSofa(item.id)}
                    >
                      <QuantityControl
                        label={text.seats}
                        value={item.seats}
                        onChange={(value) =>
                          updateSofa(item.id, {
                            seats: value,
                          })
                        }
                      />
                    </ItemCard>
                  ))}
                </div>

                <AddRowButton label={text.addSofa} onClick={addSofa} />
              </OrderSection>
            )}

            {/* Carpets */}
            {order.carpets.length > 0 && (
              <OrderSection icon={Layers} title={text.carpetsTitle}>
                <div className="space-y-3">
                  {order.carpets.map((item, index) => {
                    const valid =
                      item.unknownMeasurements ||
                      (normalizeDecimal(item.length) !== null &&
                        normalizeDecimal(item.width) !== null);

                    return (
                      <ItemCard
                        key={item.id}
                        title={`${text.carpetItem} ${index + 1}`}
                        deleteLabel={text.delete}
                        onDelete={() => removeCarpet(item.id)}
                      >
                        <label
                          className="
                              flex
                              cursor-pointer
                              items-center
                              gap-2
                              rounded-xl
                              bg-slate-50
                              px-3
                              py-2.5
                              text-sm
                              font-bold
                              text-slate-700
                            "
                        >
                          <input
                            type="checkbox"
                            checked={item.unknownMeasurements}
                            onChange={(event) => {
                              updateCarpet(item.id, {
                                unknownMeasurements: event.target.checked,

                                ...(event.target.checked
                                  ? {
                                      length: "",
                                      width: "",
                                    }
                                  : {}),
                              });
                            }}
                            className="
                                h-4
                                w-4
                                accent-[var(--lumora-green)]
                              "
                          />

                          <span>{text.unknownMeasurements}</span>
                        </label>

                        {!item.unknownMeasurements && (
                          <div className="mt-3 grid grid-cols-2 gap-3">
                            <DecimalInput
                              label={text.length}
                              value={item.length}
                              invalid={
                                showErrors &&
                                normalizeDecimal(item.length) === null
                              }
                              onChange={(value) =>
                                updateCarpet(item.id, {
                                  length: value,
                                })
                              }
                            />

                            <DecimalInput
                              label={text.width}
                              value={item.width}
                              invalid={
                                showErrors &&
                                normalizeDecimal(item.width) === null
                              }
                              onChange={(value) =>
                                updateCarpet(item.id, {
                                  width: value,
                                })
                              }
                            />
                          </div>
                        )}

                        {showErrors && !valid && (
                          <p
                            className="
                                mt-2
                                text-xs
                                font-bold
                                text-rose-600
                              "
                          >
                            {text.carpetMeasurementError}
                          </p>
                        )}
                      </ItemCard>
                    );
                  })}
                </div>

                <AddRowButton label={text.addCarpet} onClick={addCarpet} />
              </OrderSection>
            )}

            {/* Mattresses */}
            {order.mattresses.length > 0 && (
              <OrderSection icon={BedDouble} title={text.mattressesTitle}>
                <div className="space-y-3">
                  {order.mattresses.map((item, index) => (
                    <ItemCard
                      key={item.id}
                      title={`${text.mattressGroup} ${index + 1}`}
                      deleteLabel={text.delete}
                      onDelete={() => removeMattress(item.id)}
                    >
                      <QuantityControl
                        label={text.mattressCount}
                        value={item.count}
                        onChange={(value) =>
                          updateMattress(item.id, {
                            count: value,
                          })
                        }
                      />

                      <ChoiceGroup
                        label={text.size}
                        options={MATTRESS_SIZES}
                        lang={lang}
                        value={item.size}
                        onChange={(value) =>
                          updateMattress(item.id, {
                            size: value,
                          })
                        }
                      />

                      <ChoiceGroup
                        label={text.sides}
                        options={MATTRESS_SIDES}
                        lang={lang}
                        value={item.sides}
                        columns="grid-cols-2"
                        onChange={(value) =>
                          updateMattress(item.id, {
                            sides: value,
                          })
                        }
                      />
                    </ItemCard>
                  ))}
                </div>

                <AddRowButton
                  label={text.addMattressGroup}
                  onClick={addMattress}
                />
              </OrderSection>
            )}

            {/* Notes */}
            {summary.hasItems && (
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                "
              >
                <label
                  htmlFor="order-notes"
                  className="
                    text-sm
                    font-black
                    text-[var(--lumora-navy-900)]
                  "
                >
                  {text.notes}
                </label>

                <textarea
                  id="order-notes"
                  value={order.notes}
                  onChange={(event) => {
                    setOrder((current) => ({
                      ...current,
                      notes: event.target.value,
                    }));
                  }}
                  placeholder={text.notesPlaceholder}
                  rows={3}
                  className="
                    mt-2
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    font-medium
                    leading-6
                    text-slate-900
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-[var(--lumora-cyan)]
                    focus:ring-2
                    focus:ring-[rgba(16,148,192,0.12)]
                  "
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
            pb-[max(14px,env(safe-area-inset-bottom))]
            pt-3
            sm:px-6
            sm:pb-5
          "
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-bold
                text-slate-600
              "
            >
              <CheckCircle2
                className="
                  h-4
                  w-4
                  text-[var(--lumora-green)]
                "
              />

              <span>
                {summary.totalItems} {text.items}
              </span>
            </div>

            {summary.hasItems && (
              <button
                type="button"
                onClick={clearOrder}
                className="
                  text-xs
                  font-black
                  text-rose-600
                  transition
                  hover:text-rose-700
                "
              >
                {text.clear}
              </button>
            )}
          </div>

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
              px-4
              text-sm
              font-black
              text-[var(--lumora-navy-950)]
              shadow-[0_10px_24px_rgba(79,168,37,0.20)]
              transition
              hover:brightness-105
              active:scale-[0.99]
            "
          >
            <MessageCircle className="h-5 w-5" />

            <span>{text.send}</span>
          </button>
        </footer>
      </section>
    </div>
  );
}

function ServiceAddButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex min-h-[84px] flex-col",
        "items-center justify-center gap-2",
        "rounded-2xl border px-2 py-3",
        "text-center text-xs font-black",
        "transition active:scale-[0.98]",
        active
          ? [
              "border-[rgba(174,221,57,0.55)]",
              "bg-[rgba(174,221,57,0.10)]",
              "text-[var(--lumora-navy-900)]",
            ].join(" ")
          : [
              "border-slate-200",
              "bg-white",
              "text-slate-700",
              "hover:border-[rgba(16,148,192,0.30)]",
            ].join(" "),
      ].join(" ")}
    >
      <Icon
        className={[
          "h-5 w-5",
          active ? "text-[var(--lumora-green)]" : "text-[var(--lumora-cyan)]",
        ].join(" ")}
      />

      <span>{label}</span>

      <Plus className="h-3.5 w-3.5" />
    </button>
  );
}

function OrderSection({ icon: Icon, title, children }) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          gap-2
          border-b
          border-slate-100
          pb-3
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-[rgba(16,148,192,0.08)]
            text-[var(--lumora-cyan)]
          "
        >
          <Icon className="h-4 w-4" />
        </div>

        <h3
          className="
            text-base
            font-black
            text-[var(--lumora-navy-900)]
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

function ItemCard({ title, deleteLabel, onDelete, children }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-[#fbfcfa]
        p-3.5
      "
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p
          className="
            text-sm
            font-black
            text-[var(--lumora-navy-900)]
          "
        >
          {title}
        </p>

        <button
          type="button"
          onClick={onDelete}
          aria-label={deleteLabel}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-slate-400
            transition
            hover:bg-rose-50
            hover:text-rose-600
            active:scale-95
          "
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}

function AddRowButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        mt-3
        flex
        min-h-11
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-dashed
        border-[rgba(16,148,192,0.35)]
        bg-[rgba(16,148,192,0.04)]
        px-3
        text-sm
        font-black
        text-[var(--lumora-cyan)]
        transition
        hover:bg-[rgba(16,148,192,0.08)]
        active:scale-[0.99]
      "
    >
      <Plus className="h-4 w-4" />

      <span>{label}</span>
    </button>
  );
}

function QuantityControl({ label, value, onChange }) {
  const normalized = normalizeInteger(value);

  return (
    <div className="flex items-center justify-between gap-3">
      <p
        className="
          text-sm
          font-bold
          text-slate-700
        "
      >
        {label}
      </p>

      <div
        className="
          flex
          items-center
          gap-1.5
          rounded-xl
          border
          border-slate-200
          bg-white
          p-1
        "
      >
        <button
          type="button"
          onClick={() => onChange(Math.max(1, normalized - 1))}
          disabled={normalized <= 1}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            bg-slate-100
            text-slate-700
            transition
            disabled:opacity-35
            active:scale-95
          "
        >
          <Minus className="h-4 w-4" />
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

            onChange(normalizeInteger(nextValue));
          }}
          className="
            h-9
            w-12
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
          onClick={() => onChange(normalized + 1)}
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
            active:scale-95
          "
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function DecimalInput({ label, value, invalid, onChange }) {
  return (
    <label className="block">
      <span
        className="
          flex
          items-center
          gap-1.5
          text-xs
          font-bold
          text-slate-600
        "
      >
        <Ruler className="h-3.5 w-3.5" />
        {label}
      </span>

      <input
        type="number"
        min="0.1"
        step="0.1"
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="0.0"
        className={[
          "mt-1.5 h-11 w-full rounded-xl",
          "border bg-white px-3",
          "text-sm font-black text-slate-900",
          "outline-none transition",
          invalid
            ? "border-rose-400 ring-2 ring-rose-100"
            : [
                "border-slate-200",
                "focus:border-[var(--lumora-cyan)]",
                "focus:ring-2",
                "focus:ring-[rgba(16,148,192,0.12)]",
              ].join(" "),
        ].join(" ")}
      />
    </label>
  );
}

function ChoiceGroup({
  label,
  options,
  lang,
  value,
  onChange,
  columns = "grid-cols-3",
}) {
  return (
    <div>
      <p
        className="
          mb-2
          text-xs
          font-bold
          text-slate-600
        "
      >
        {label}
      </p>

      <div className={`grid gap-2 ${columns}`}>
        {options.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={[
                "min-h-11 rounded-xl border",
                "px-2 py-2 text-xs font-black",
                "transition",
                active
                  ? [
                      "border-[rgba(174,221,57,0.65)]",
                      "bg-[rgba(174,221,57,0.12)]",
                      "text-[var(--lumora-navy-900)]",
                    ].join(" ")
                  : [
                      "border-slate-200",
                      "bg-white",
                      "text-slate-600",
                      "hover:bg-slate-50",
                    ].join(" "),
              ].join(" ")}
            >
              {getOptionText(lang, option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
