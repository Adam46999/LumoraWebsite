// src/components/services/ServiceModal.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  Check,
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

const CARPET_PRICE_OPTIONS = [
  {
    id: "measurements",
    icon: Ruler,
  },
  {
    id: "meterPrice",
    icon: MessageCircle,
  },
  {
    id: "onSiteMeasure",
    icon: MapPin,
  },
];

function getCopy(lang) {
  if (lang === "he") {
    return {
      dialogLabel: "פרטי בקשת השירות",
      available: "השירות זמין",
      detailsTitle: "מה כולל השירות?",
      requestTitle: "פרטי הבקשה",
      requestSubtitle: "מלאו רק את הפרטים הבסיסיים והמשיכו ל-WhatsApp.",
      locationLabel: "יישוב או אזור",
      locationPlaceholder: "לדוגמה: עכו",
      locationHint: "כתבו את היישוב שבו נדרש השירות.",
      locationError: "יש להזין יישוב או אזור.",
      sofaQuantity: "מספר חלקי הספה",
      carpetQuantity: "מספר השטיחים",
      quantityHint: "הערכה ראשונית מספיקה בשלב הזה.",
      quantityError: "יש לבחור כמות תקינה.",
      carpetOptionTitle: "איך תרצו לקבל הצעת מחיר?",
      carpetOptionError: "יש לבחור אפשרות אחת.",
      carpetOptions: {
        measurements: {
          title: "יש לי מידות",
          description: "אשלח אורך ורוחב של כל שטיח בהודעת WhatsApp.",
        },
        meterPrice: {
          title: "מחיר למטר",
          description: "אני רוצה לקבל מידע על מחיר הניקוי לפי מטר.",
        },
        onSiteMeasure: {
          title: "מדידה במקום",
          description: "אין לי מידות ואני צריך בדיקה או מדידה במקום.",
        },
      },
      cancel: "ביטול",
      submit: "המשך ל-WhatsApp",
      submitHint: "שום דבר לא נשלח לפני פתיחת WhatsApp ואישור ההודעה.",
      close: "סגירת החלון",
      imageAlt: "תמונת השירות",
      decrease: "הפחתת כמות",
      increase: "הגדלת כמות",
    };
  }

  if (lang === "en") {
    return {
      dialogLabel: "Service request details",
      available: "Service available",
      detailsTitle: "What is included?",
      requestTitle: "Request details",
      requestSubtitle:
        "Enter the basic details, then continue through WhatsApp.",
      locationLabel: "Town or area",
      locationPlaceholder: "For example: Acre",
      locationHint: "Enter the town where the service is needed.",
      locationError: "Please enter your town or area.",
      sofaQuantity: "Number of sofa sections",
      carpetQuantity: "Number of carpets",
      quantityHint: "An approximate quantity is enough for now.",
      quantityError: "Please choose a valid quantity.",
      carpetOptionTitle: "How would you like to receive a quote?",
      carpetOptionError: "Please choose one option.",
      carpetOptions: {
        measurements: {
          title: "I have measurements",
          description:
            "I will send the length and width of each carpet through WhatsApp.",
        },
        meterPrice: {
          title: "Price per meter",
          description:
            "I would like information about the cleaning price per meter.",
        },
        onSiteMeasure: {
          title: "On-site measurement",
          description:
            "I do not know the measurements and need an on-site check.",
        },
      },
      cancel: "Cancel",
      submit: "Continue to WhatsApp",
      submitHint:
        "Nothing is sent until WhatsApp opens and you approve the message.",
      close: "Close dialog",
      imageAlt: "Service image",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
    };
  }

  return {
    dialogLabel: "تفاصيل طلب الخدمة",
    available: "الخدمة متاحة",
    detailsTitle: "شو بتشمل الخدمة؟",
    requestTitle: "تفاصيل الطلب",
    requestSubtitle: "اكتب التفاصيل الأساسية فقط، وبعدها كمل عبر واتساب.",
    locationLabel: "البلدة أو المنطقة",
    locationPlaceholder: "مثال: عكا",
    locationHint: "اكتب البلدة التي تريد تنفيذ الخدمة فيها.",
    locationError: "لازم تكتب البلدة أو المنطقة.",
    sofaQuantity: "عدد قطع أو مقاعد الكنب",
    carpetQuantity: "عدد السجاد",
    quantityHint: "عدد تقريبي بكفي حاليًا.",
    quantityError: "اختار كمية صحيحة.",
    carpetOptionTitle: "كيف بدك تعرف السعر؟",
    carpetOptionError: "اختار واحد من الخيارات.",
    carpetOptions: {
      measurements: {
        title: "بعرف القياسات",
        description: "سأرسل طول وعرض كل سجادة برسالة واتساب.",
      },
      meterPrice: {
        title: "بدي أعرف سعر المتر",
        description: "أريد تفاصيل عن سعر التنظيف حسب المتر.",
      },
      onSiteMeasure: {
        title: "بدي قياس بالموقع",
        description: "ما بعرف القياسات وبحتاج فحص أو قياس بالمكان.",
      },
    },
    cancel: "إلغاء",
    submit: "متابعة عبر واتساب",
    submitHint: "ما رح ينبعث أي شيء قبل ما يفتح واتساب وتراجع الرسالة.",
    close: "إغلاق النافذة",
    imageAlt: "صورة الخدمة",
    decrease: "تقليل الكمية",
    increase: "زيادة الكمية",
  };
}

function getLocalizedValue(object, key, lang) {
  return (
    object?.[`${key}_${lang}`] ||
    object?.[`${key}_ar`] ||
    object?.[`${key}_he`] ||
    object?.[`${key}_en`] ||
    ""
  );
}

export default function ServiceModal({
  isOpen,
  onClose,
  selected,
  onOrderNow,
}) {
  const { lang, t } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";
  const copy = useMemo(() => getCopy(lang), [lang]);

  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(false);
  const [activeService, setActiveService] = useState(selected);

  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [carpetPriceOption, setCarpetPriceOption] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const locationInputRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (selected) {
      setActiveService(selected);
    }
  }, [selected]);

  useEffect(() => {
    let frame;
    let timer;

    if (isOpen) {
      setMounted(true);

      frame = window.requestAnimationFrame(() => {
        setVisible(true);
      });
    } else {
      setVisible(false);

      timer = window.setTimeout(() => {
        setMounted(false);
      }, 220);
    }

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !activeService) return;

    setLocation("");
    setQuantity(1);
    setCarpetPriceOption("");
    setShowErrors(false);
  }, [activeService?.id, isOpen]);

  const details = useMemo(() => {
    if (!activeService) return null;

    return serviceDetails?.[activeService.id] || null;
  }, [activeService]);

  const title =
    getLocalizedValue(details, "title", lang) ||
    t?.[activeService?.titleKey] ||
    activeService?.id ||
    "";

  const description =
    getLocalizedValue(details, "subtitle", lang) ||
    t?.[activeService?.descriptionKey] ||
    "";

  const features = useMemo(() => {
    const firstCard = details?.cards?.[0];

    return (
      firstCard?.[`features_${lang}`] ||
      firstCard?.features_ar ||
      firstCard?.features_he ||
      firstCard?.features_en ||
      []
    );
  }, [details, lang]);

  const serviceImage = details?.image || activeService?.image;

  const isSofa = activeService?.id === "sofa";
  const isCarpet = activeService?.id === "carpet";
  const showsQuantity = isSofa || isCarpet;

  const locationIsValid = location.trim().length >= 2;

  const quantityIsValid =
    !showsQuantity ||
    (Number.isInteger(quantity) && quantity >= 1 && quantity <= 99);

  const carpetOptionIsValid = !isCarpet || Boolean(carpetPriceOption);

  const formIsValid = locationIsValid && quantityIsValid && carpetOptionIsValid;

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;

    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        [
          "button:not([disabled])",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          '[tabindex]:not([tabindex="-1"])',
        ].join(","),
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      if (
        previousFocusRef.current &&
        typeof previousFocusRef.current.focus === "function"
      ) {
        previousFocusRef.current.focus();
      }
    };
  }, [handleClose, isOpen]);

  const changeQuantity = (amount) => {
    setQuantity((currentQuantity) => {
      const nextQuantity = currentQuantity + amount;

      return Math.min(99, Math.max(1, nextQuantity));
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setShowErrors(true);

      if (!locationIsValid) {
        locationInputRef.current?.focus();
      }

      return;
    }

    onOrderNow?.({
      location: location.trim(),
      quantity: showsQuantity ? quantity : null,
      carpetPriceOption: isCarpet ? carpetPriceOption : "",
    });
  };

  if (!mounted || !activeService) {
    return null;
  }

  return (
    <div
      className={[
        "fixed inset-0 z-[10050] flex items-end justify-center",
        "bg-slate-950/60 px-0 backdrop-blur-[3px]",
        "transition-opacity duration-200",
        "sm:items-center sm:px-4 sm:py-6",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${copy.dialogLabel}: ${title}`}
        aria-describedby="service-modal-description"
        className={[
          "relative flex max-h-[calc(100dvh-10px)] w-full",
          "flex-col overflow-hidden bg-white",
          "rounded-t-[30px] border border-slate-200",
          "shadow-[0_-18px_60px_rgba(15,23,42,0.28)]",
          "transition-transform duration-200 ease-out",
          "sm:max-h-[min(820px,calc(100dvh-48px))]",
          "sm:max-w-2xl sm:rounded-[30px]",
          "sm:shadow-[0_28px_90px_rgba(15,23,42,0.30)]",
          visible ? "translate-y-0 scale-100" : "translate-y-5 scale-[0.985]",
        ].join(" ")}
      >
        {/* المقبض يظهر فقط على الموبايل */}
        <div
          className="flex h-6 shrink-0 items-center justify-center sm:hidden"
          aria-hidden="true"
        >
          <span className="h-1.5 w-11 rounded-full bg-slate-300" />
        </div>

        {/* رأس النافذة */}
        <header className="relative shrink-0">
          <div className="relative h-36 overflow-hidden bg-slate-200 sm:h-48">
            {serviceImage ? (
              <img
                src={serviceImage}
                alt={`${copy.imageAlt}: ${title}`}
                draggable={false}
                className="h-full w-full object-cover"
                decoding="async"
              />
            ) : null}

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-slate-950/85 via-slate-950/20 to-slate-950/20
              "
              aria-hidden="true"
            />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="
                absolute end-3 top-3
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/25
                bg-slate-950/55 text-white
                shadow-lg backdrop-blur-md
                transition hover:bg-slate-950/75
                active:scale-95
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-white
              "
              aria-label={copy.close}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div
                className="
                  mb-2 inline-flex items-center gap-1.5
                  rounded-full border border-white/20
                  bg-black/25 px-2.5 py-1
                  text-[11px] font-extrabold text-white
                  backdrop-blur-md
                "
              >
                <CheckCircle2
                  className="h-3.5 w-3.5 text-emerald-300"
                  aria-hidden="true"
                />

                <span>{copy.available}</span>
              </div>

              <h2 className="text-xl font-black text-white sm:text-2xl">
                {title}
              </h2>

              {description ? (
                <p
                  id="service-modal-description"
                  className="
                    mt-1 line-clamp-2
                    text-xs font-medium leading-5
                    text-white/85 sm:text-sm
                  "
                >
                  {description}
                </p>
              ) : null}
            </div>
          </div>
        </header>

        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6">
            {/* ما تشمل الخدمة */}
            {features.length > 0 ? (
              <div>
                <h3 className="text-sm font-black text-slate-950">
                  {copy.detailsTitle}
                </h3>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={`${feature}-${index}`}
                      className="
                        flex items-start gap-2.5
                        rounded-2xl bg-slate-50
                        px-3.5 py-3
                      "
                    >
                      <span
                        className="
                          mt-0.5 flex h-5 w-5 shrink-0
                          items-center justify-center
                          rounded-full bg-emerald-100
                          text-emerald-700
                        "
                        aria-hidden="true"
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>

                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div
              className={[
                features.length ? "mt-6 border-t border-slate-200 pt-6" : "",
              ].join(" ")}
            >
              <h3 className="text-base font-black text-slate-950">
                {copy.requestTitle}
              </h3>

              <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                {copy.requestSubtitle}
              </p>

              {/* البلدة */}
              <div className="mt-5">
                <label
                  htmlFor="service-location"
                  className="block text-sm font-extrabold text-slate-800"
                >
                  {copy.locationLabel}
                </label>

                <div className="relative mt-2">
                  <MapPin
                    className="
                      pointer-events-none absolute start-3.5 top-1/2
                      h-5 w-5 -translate-y-1/2 text-slate-400
                    "
                    aria-hidden="true"
                  />

                  <input
                    ref={locationInputRef}
                    id="service-location"
                    type="text"
                    value={location}
                    onChange={(event) => {
                      setLocation(event.target.value);

                      if (showErrors) {
                        setShowErrors(false);
                      }
                    }}
                    placeholder={copy.locationPlaceholder}
                    autoComplete="address-level2"
                    maxLength={60}
                    aria-invalid={
                      showErrors && !locationIsValid ? "true" : "false"
                    }
                    aria-describedby="service-location-hint"
                    className={[
                      "h-13 w-full rounded-2xl border bg-white",
                      "py-3 ps-11 pe-4 text-sm font-bold text-slate-900",
                      "outline-none transition",
                      "placeholder:font-medium placeholder:text-slate-400",
                      showErrors && !locationIsValid
                        ? "border-rose-400 ring-4 ring-rose-100"
                        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
                    ].join(" ")}
                  />
                </div>

                <p
                  id="service-location-hint"
                  className={[
                    "mt-1.5 text-xs font-medium",
                    showErrors && !locationIsValid
                      ? "text-rose-600"
                      : "text-slate-500",
                  ].join(" ")}
                >
                  {showErrors && !locationIsValid
                    ? copy.locationError
                    : copy.locationHint}
                </p>
              </div>

              {/* الكمية */}
              {showsQuantity ? (
                <div className="mt-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <label className="block text-sm font-extrabold text-slate-800">
                        {isCarpet ? copy.carpetQuantity : copy.sofaQuantity}
                      </label>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {copy.quantityHint}
                      </p>
                    </div>

                    <div
                      className="
                        flex shrink-0 items-center gap-1
                        rounded-2xl border border-slate-200
                        bg-slate-50 p-1
                      "
                    >
                      <button
                        type="button"
                        onClick={() => changeQuantity(-1)}
                        disabled={quantity <= 1}
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl bg-white text-slate-700
                          shadow-sm transition
                          hover:bg-slate-100 active:scale-95
                          disabled:cursor-not-allowed disabled:opacity-35
                          focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-blue-400
                        "
                        aria-label={copy.decrease}
                      >
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <output
                        className="
                          min-w-10 text-center
                          text-base font-black text-slate-950
                        "
                        aria-live="polite"
                      >
                        {quantity}
                      </output>

                      <button
                        type="button"
                        onClick={() => changeQuantity(1)}
                        disabled={quantity >= 99}
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl bg-white text-slate-700
                          shadow-sm transition
                          hover:bg-slate-100 active:scale-95
                          disabled:cursor-not-allowed disabled:opacity-35
                          focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-blue-400
                        "
                        aria-label={copy.increase}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {showErrors && !quantityIsValid ? (
                    <p className="mt-2 text-xs font-bold text-rose-600">
                      {copy.quantityError}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* خيارات تسعير السجاد */}
              {isCarpet ? (
                <fieldset className="mt-6">
                  <legend className="text-sm font-extrabold text-slate-800">
                    {copy.carpetOptionTitle}
                  </legend>

                  <div className="mt-3 grid gap-2.5">
                    {CARPET_PRICE_OPTIONS.map((option) => {
                      const optionCopy = copy.carpetOptions[option.id];

                      const Icon = option.icon;
                      const selectedOption = carpetPriceOption === option.id;

                      return (
                        <label
                          key={option.id}
                          className={[
                            "relative flex cursor-pointer items-start gap-3",
                            "rounded-2xl border p-3.5 transition",
                            selectedOption
                              ? "border-blue-500 bg-blue-50 ring-4 ring-blue-100"
                              : "border-slate-200 bg-white hover:border-slate-300",
                          ].join(" ")}
                        >
                          <input
                            type="radio"
                            name="carpet-price-option"
                            value={option.id}
                            checked={selectedOption}
                            onChange={() => {
                              setCarpetPriceOption(option.id);

                              if (showErrors) {
                                setShowErrors(false);
                              }
                            }}
                            className="sr-only"
                          />

                          <span
                            className={[
                              "flex h-10 w-10 shrink-0",
                              "items-center justify-center rounded-xl",
                              selectedOption
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-600",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            <Icon className="h-5 w-5" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-black text-slate-900">
                              {optionCopy.title}
                            </span>

                            <span className="mt-1 block text-xs font-medium leading-5 text-slate-500">
                              {optionCopy.description}
                            </span>
                          </span>

                          <span
                            className={[
                              "mt-1 flex h-5 w-5 shrink-0",
                              "items-center justify-center rounded-full border",
                              selectedOption
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-white text-transparent",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {showErrors && !carpetOptionIsValid ? (
                    <p
                      className="mt-2 text-xs font-bold text-rose-600"
                      role="alert"
                    >
                      {copy.carpetOptionError}
                    </p>
                  ) : null}
                </fieldset>
              ) : null}
            </div>
          </div>

          {/* أزرار ثابتة بأسفل النافذة */}
          <footer
            className="
              shrink-0 border-t border-slate-200
              bg-white/95 px-4 pb-[max(14px,env(safe-area-inset-bottom))]
              pt-3 backdrop-blur-xl sm:px-6 sm:pb-5
            "
          >
            <div className="grid grid-cols-[auto_1fr] gap-2.5">
              <button
                type="button"
                onClick={handleClose}
                className="
                  min-h-12 rounded-2xl border border-slate-200
                  bg-white px-4 text-sm font-extrabold text-slate-700
                  transition hover:bg-slate-50 active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-4 focus-visible:ring-slate-200
                "
              >
                {copy.cancel}
              </button>

              <button
                type="submit"
                className="
                  inline-flex min-h-12 items-center
                  justify-center gap-2 rounded-2xl
                  bg-emerald-600 px-4
                  text-sm font-extrabold text-white
                  shadow-[0_10px_28px_rgba(5,150,105,0.25)]
                  transition hover:bg-emerald-700
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-4 focus-visible:ring-emerald-200
                "
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />

                <span>{copy.submit}</span>
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] font-medium leading-4 text-slate-400">
              {copy.submitHint}
            </p>
          </footer>
        </form>
      </section>
    </div>
  );
}
