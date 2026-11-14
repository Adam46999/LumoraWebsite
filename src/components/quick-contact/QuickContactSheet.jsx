import React, { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Phone, MessageCircle, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const COPY = {
  ar: {
    title: "كيف نقدر نساعدك؟",
    subtitle: "للاستفسار عن خدمات التنظيف وتنسيق المواعيد",
    wa: "راسلنا على واتساب",
    call: "اتصل بنا",
    hint: "أرسل تفاصيل الخدمة والصور",
    close: "إغلاق",
    message: "مرحبًا، حابب أستفسر عن خدمات التنظيف لدى Lumora.",
  },
  he: {
    title: "איך נוכל לעזור?",
    subtitle: "לשאלות על שירותי הניקיון ולתיאום מועד",
    wa: "שלחו לנו הודעה בוואטסאפ",
    call: "התקשרו אלינו",
    hint: "שלחו פרטים ותמונות",
    close: "סגירה",
    message: "שלום, אשמח לפרטים על שירותי הניקיון של Lumora.",
  },
  en: {
    title: "How can we help?",
    subtitle: "Ask about cleaning services or arrange a visit",
    wa: "Message us on WhatsApp",
    call: "Call us",
    hint: "Send service details and photos",
    close: "Close",
    message: "Hi, I'd like to ask about Lumora's cleaning services.",
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
              <div
                dir="ltr"
                className="mb-2 text-xs font-extrabold tracking-[0.2em] text-gray-500"
                style={{ textAlign: direction === "rtl" ? "right" : "left" }}
              >
                LUMORA
              </div>
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



          <div className="mt-4 grid gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeRef.current?.()}
              className="flex min-h-14 items-center gap-4 rounded-2xl bg-emerald-700 px-4 py-4 text-start text-base font-bold text-white transition-colors hover:bg-emerald-800 active:bg-emerald-900"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block leading-6">{text.wa}</span>
                <span className="mt-1 block text-xs font-normal leading-5 text-white/90">
                  {text.hint}
                </span>
              </span>
            </a>

            <a
              href={`tel:${phone}`}
              onClick={() => closeRef.current?.()}
              className="flex min-h-14 items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-start text-base font-bold text-gray-900 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block leading-6">{text.call}</span>
                <span className="mt-1 block text-sm font-normal leading-5 tracking-wide text-gray-600">
                  <bdi dir="ltr">{contact.phoneDisplay}</bdi>
                </span>
              </span>
            </a>
          </div>


        </div>
      </dialog>
    </>,
    document.body,
  );
}