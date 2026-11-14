import React, { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const COPY = {
  ar: {
    title: "تواصل مع أمير",
    subtitle: "للاستفسار عن الخدمات أو تنسيق موعد",
    wa: "احكي مع أمير عالواتساب",
    call: "اتصل بأمير",
    hint: "ابعث تفاصيل الخدمة والصور على واتساب",
    close: "إغلاق",
    message: "مرحبًا أمير، حابب أستفسر عن خدمات التنظيف.",
  },
  he: {
    title: "יצירת קשר עם אמיר",
    subtitle: "לשאלות על השירותים או לתיאום מועד",
    wa: "שליחת הודעה לאמיר",
    call: "להתקשר לאמיר",
    hint: "אפשר לשלוח פרטים ותמונות בוואטסאפ",
    close: "סגירה",
    message: "שלום אמיר, אשמח לפרטים על שירותי הניקיון.",
  },
  en: {
    title: "Contact Amir",
    subtitle: "Ask about a service or arrange a visit",
    wa: "Message Amir on WhatsApp",
    call: "Call Amir",
    hint: "Send service details and photos on WhatsApp",
    close: "Close",
    message: "Hi Amir, I'd like to ask about your cleaning services.",
  },
};

export default function QuickContactSheet({
  open,
  onClose,
  contacts = [],
}) {
  const { lang } = useLanguage();
  const text = COPY[lang] || COPY.ar;
  const direction = lang === "en" ? "ltr" : "rtl";
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const contact = contacts.find((item) => item.id === "amir");
  const visible = Boolean(open && contact);

  useEffect(() => {
    if (!visible) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [visible]);

  if (!visible || typeof document === "undefined") return null;

  const whatsapp = String(contact.whatsappRaw || "").replace(/\D/g, "");
  const phone = String(contact.phoneRaw || "").replace(/[^\d+]/g, "");
  const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text.message)}`;

  return createPortal(
    <>
      <style>{`
        .lumora-contact-dialog {
          position: fixed;
          inset: auto 0 0;
          margin: 0 auto;
          width: 100%;
          max-width: 100%;
          max-height: 90dvh;
          padding: 0;
          border: 0;
          border-radius: 26px 26px 0 0;
          background: #fff;
          color: #111827;
          overflow-y: auto;
          overscroll-behavior: contain;
          box-shadow: 0 -12px 60px rgb(0 0 0 / 20%);
          font-family: inherit;
        }
        .lumora-contact-dialog::backdrop {
          background: rgb(10 15 26 / 60%);
          backdrop-filter: blur(4px);
        }
        .lumora-contact-dialog[open] {
          animation: lumora-contact-enter 180ms ease-out;
        }
        .lumora-contact-dialog a:focus-visible,
        .lumora-contact-dialog button:focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 4px;
        }
        @keyframes lumora-contact-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .lumora-contact-dialog {
            inset: 0;
            margin: auto;
            width: min(420px, calc(100vw - 32px));
            max-height: calc(100dvh - 48px);
            border-radius: 26px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lumora-contact-dialog[open] { animation: none; }
        }
      `}</style>

      <dialog
        ref={dialogRef}
        className="lumora-contact-dialog"
        dir={direction}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onCancel={(event) => {
          event.preventDefault();
          closeRef.current?.();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const box = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          ) {
            closeRef.current?.();
          }
        }}
      >
        <div
          className="p-5 md:p-6"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 pt-1 text-start">
              <h2
                id={titleId}
                className="m-0 text-xl font-extrabold leading-relaxed text-gray-900"
              >
                {text.title}
              </h2>
              <p
                id={descriptionId}
                className="mt-1 text-sm leading-6 text-gray-500"
              >
                {text.subtitle}
              </p>
            </div>

            <button
              type="button"
              autoFocus
              onClick={() => closeRef.current?.()}
              aria-label={text.close}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <a
            href={`tel:${phone}`}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg text-lg font-bold tracking-wide text-gray-700"
            aria-label={`${text.call}: ${contact.phoneDisplay}`}
            onClick={() => closeRef.current?.()}
          >
            <bdi dir="ltr">{contact.phoneDisplay}</bdi>
          </a>

          <div className="mt-4 grid gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeRef.current?.()}
              className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-700 px-4 py-4 text-center text-base font-bold text-white transition-colors hover:bg-emerald-800 active:bg-emerald-900"
            >
              <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>{text.wa}</span>
            </a>

            <a
              href={`tel:${phone}`}
              onClick={() => closeRef.current?.()}
              className="flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-center text-base font-bold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{text.call}</span>
            </a>
          </div>

          <p className="mb-0 mt-4 text-center text-xs leading-6 text-gray-500">
            {text.hint}
          </p>
        </div>
      </dialog>
    </>,
    document.body,
  );
}