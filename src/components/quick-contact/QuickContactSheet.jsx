// src/components/quick-contact/QuickContactSheet.jsx
import React from "react";
import { Phone, MessageCircle, X } from "lucide-react";

/**
 * Dropdown/Popover (NOT a full-screen bottom sheet)
 * - Must be rendered inside a parent: <div className="relative"> ... </div>
 *
 * props:
 * open: boolean
 * onClose: () => void
 * contacts: [{ id, name, phoneDisplay, phoneRaw, whatsappRaw, note? }]
 * anchor: "start" | "end"  (logical, respects RTL)
 * lang: "ar" | "en" | "he"
 */
export default function QuickContactSheet({
  open,
  onClose,
  contacts = [],
  anchor = "end",
  lang = "ar",
}) {
  if (!open) return null;

  const isRTL = lang === "ar" || lang === "he";

  // ✅ logical anchor: start/end depending on direction
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

  const textAlign = isRTL ? "text-right" : "text-left";
  const rowDir = isRTL ? "flex-row-reverse" : "flex-row";

  const t = {
    title:
      lang === "en"
        ? "Quick contact"
        : lang === "he"
        ? "צור קשר מהר"
        : "تواصل سريع",
    hint:
      lang === "en"
        ? "Choose who you want to contact"
        : lang === "he"
        ? "בחר עם מי ליצור קשר"
        : "اختر الشخص المناسب للتواصل",
    call: lang === "en" ? "Call" : lang === "he" ? "שיחה" : "اتصال",
    wa: lang === "en" ? "WhatsApp" : lang === "he" ? "וואטסאפ" : "واتساب",
    fast:
      lang === "en" ? "Fast reply" : lang === "he" ? "מענה מהיר" : "رد سريع",
  };

  const callNow = (phoneRaw) => {
    window.location.href = `tel:${phoneRaw}`;
  };

  const waNow = (whatsappRaw) => {
    window.open(
      `https://wa.me/${whatsappRaw}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className={[
        "absolute top-full mt-2 z-[99999]",
        sideClass,
        // ✅ width that never exceeds viewport
        "w-[320px] max-w-[calc(100vw-24px)]",
      ].join(" ")}
      role="dialog"
      aria-modal="false"
    >
      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className={`flex items-center justify-between ${rowDir}`}>
            <div className={`${textAlign}`}>
              <div className="font-extrabold text-gray-900 leading-tight">
                {t.title}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{t.hint}</div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-3">
          <div className="flex flex-col gap-2">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="border border-gray-100 rounded-2xl p-3 hover:border-gray-200 transition"
              >
                {/* name + number */}
                <div
                  className={`flex items-start justify-between gap-3 ${rowDir}`}
                >
                  <div className={`${textAlign}`}>
                    <div className="font-bold text-gray-900 leading-tight">
                      {c.name}
                    </div>
                    <div className="text-sm text-gray-600 mt-0.5">
                      {c.phoneDisplay}
                    </div>
                  </div>

                  <div className="text-[11px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-bold">
                    {t.fast}
                  </div>
                </div>

                {/* actions */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                      callNow(c.phoneRaw);
                    }}
                    className={`h-10 rounded-xl border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition font-bold text-sm flex items-center justify-center gap-2 ${rowDir}`}
                  >
                    <Phone className="w-4 h-4" />
                    {t.call}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                      waNow(c.whatsappRaw);
                    }}
                    className={`h-10 rounded-xl border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition font-bold text-sm flex items-center justify-center gap-2 ${rowDir}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.wa}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
