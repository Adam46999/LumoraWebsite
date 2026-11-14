// src/components/quick-contact/QuickContactSheet.jsx
import React, { useEffect, useMemo } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

/**
 * QuickContactSheet (Professional)
 * - Mobile: centered overlay card (premium)
 * - Desktop: anchored popover
 *
 * props:
 * open: boolean
 * onClose: () => void
 * contacts: [{ id, name, phoneDisplay, phoneRaw, whatsappRaw, note? }]
 * anchor: "start" | "end"
 */
export default function QuickContactSheet({
  open,
  onClose,
  contacts = [],
  anchor = "end",
}) {
  const { lang, tFn, isRTL, dir } = useLanguage();

  if (!open) return null;

  // Safe translate with fallback (no UI breaks)
  const tx = (key, fallback) => {
    const v = tFn?.(key);
    return v && v !== key ? v : fallback;
  };

  const t = useMemo(() => {
    const title =
      lang === "en" ? "Contact" : lang === "he" ? "יצירת קשר" : "تواصل";
    const sub =
      lang === "en"
        ? "Choose the fastest way to reach us"
        : lang === "he"
        ? "בחר את הדרך המהירה ביותר ליצור קשר"
        : "اختر أسرع طريقة للتواصل";
    const call = lang === "en" ? "Call" : lang === "he" ? "שיחה" : "اتصال";
    const wa =
      lang === "en" ? "WhatsApp" : lang === "he" ? "וואטסאפ" : "واتساب";
    const close = lang === "en" ? "Close" : lang === "he" ? "סגור" : "إغلاق";
    const fast =
      lang === "en" ? "Fast reply" : lang === "he" ? "מענה מהיר" : "رد سريع";

    return {
      title: tx("quickContact.title", title),
      sub: tx("quickContact.sub", sub),
      call: tx("quickContact.call", call),
      wa: tx("quickContact.wa", wa),
      close: tx("common.close", close),
      fast: tx("quickContact.fast", fast),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, tFn]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const callNow = (phoneRaw) => {
    if (!phoneRaw) return;
    window.location.href = `tel:${phoneRaw}`;
  };

  const waNow = (whatsappRaw) => {
    if (!whatsappRaw) return;
    window.open(
      `https://wa.me/${whatsappRaw}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Desktop anchor:
  // start = right in RTL, left in LTR
  // end   = left  in RTL, right in LTR
  const sideClass =
    anchor === "start"
      ? isRTL
        ? "right-0"
        : "left-0"
      : isRTL
      ? "left-0"
      : "right-0";

  const Card = ({ dense = false } = {}) => (
    <div
      dir={dir}
      className={[
        "bg-white rounded-3xl border border-gray-200/80",
        "shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
        "overflow-hidden",
        dense ? "" : "ring-1 ring-black/5",
      ].join(" ")}
      role="document"
    >
      {/* Header */}
      <div className="px-5 py-4">
        <div
          className={[
            "flex items-start justify-between gap-3",
            isRTL ? "flex-row-reverse" : "flex-row",
          ].join(" ")}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="text-[15px] font-extrabold tracking-tight text-gray-900">
              {t.title}
            </div>
            <div className="mt-1 text-xs text-gray-500">{t.sub}</div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-gray-100 active:bg-gray-200 transition"
            aria-label={t.close}
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="h-px bg-gray-100" />

      {/* Body */}
      <div className={dense ? "p-3" : "p-4"}>
        <div className="flex flex-col gap-3">
          {(contacts || []).map((c) => {
            const badge = c?.note || t.fast;

            return (
              <div
                key={c.id}
                className={[
                  "rounded-3xl border border-gray-100",
                  "bg-white",
                  "p-4",
                  "hover:border-gray-200 hover:shadow-sm transition",
                ].join(" ")}
              >
                {/* top row */}
                <div
                  className={[
                    "flex items-start justify-between gap-3",
                    isRTL ? "flex-row-reverse" : "flex-row",
                  ].join(" ")}
                >
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="text-sm font-extrabold text-gray-900 leading-tight">
                      {c?.name}
                    </div>

                    {/* Phone number: force LTR + stable bidi */}
                    <div
                      className="mt-1 text-sm text-gray-600"
                      dir="ltr"
                      style={{ unicodeBidi: "plaintext" }}
                    >
                      {c?.phoneDisplay}
                    </div>
                  </div>

                  {/* badge: keep stable for RTL+numbers */}
                  <div
                    className={[
                      "shrink-0",
                      "text-[11px] font-extrabold",
                      "px-2.5 py-1 rounded-full",
                      "bg-gray-50 text-gray-700 border border-gray-100",
                    ].join(" ")}
                    style={{ unicodeBidi: "plaintext" }}
                  >
                    {badge}
                  </div>
                </div>

                {/* actions */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {/* WhatsApp as primary */}
                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                      waNow(c?.whatsappRaw);
                    }}
                    className={[
                      "h-11 rounded-2xl",
                      "bg-blue-600 text-white",
                      "hover:bg-blue-700 active:bg-blue-800 transition",
                      "font-extrabold text-sm",
                      "flex items-center justify-center gap-2",
                      isRTL ? "flex-row-reverse" : "flex-row",
                    ].join(" ")}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.wa}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                      callNow(c?.phoneRaw);
                    }}
                    className={[
                      "h-11 rounded-2xl",
                      "border border-gray-200 bg-white",
                      "hover:bg-gray-50 active:bg-gray-100 transition",
                      "font-extrabold text-sm text-gray-900",
                      "flex items-center justify-center gap-2",
                      isRTL ? "flex-row-reverse" : "flex-row",
                    ].join(" ")}
                  >
                    <Phone className="w-4 h-4" />
                    {t.call}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-2" />
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[99999] md:hidden"
        role="dialog"
        aria-modal="true"
        dir={dir}
      >
        {/* backdrop closes */}
        <div
          className="absolute inset-0 bg-black/35"
          onMouseDown={() => onClose?.()}
        />

        {/* layout that doesn't block backdrop clicks */}
        <div
          className="relative h-full w-full flex justify-center items-start px-4 pointer-events-none"
          style={{ paddingTop: "calc(var(--app-topbar-h, 72px) + 16px)" }}
        >
          <div className="w-full max-w-[420px] pointer-events-auto">
            <div className="translate-y-1">
              <Card />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop popover */}
      <div
        className={[
          "hidden md:block",
          "absolute top-full mt-2 z-[99999]",
          sideClass,
          "w-[340px]",
        ].join(" ")}
        role="dialog"
        aria-modal="false"
        dir={dir}
      >
        <Card dense />
      </div>
    </>
  );
}
