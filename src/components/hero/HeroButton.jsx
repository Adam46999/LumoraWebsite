import { ClipboardList } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroButton({ t = {} }) {
  const { lang } = useLanguage();

  const text =
    lang === "he"
      ? { order: "בניית ההזמנה", services: "השירותים שלנו" }
      : lang === "en"
        ? { order: "Build your order", services: "Explore services" }
        : { order: "جهّز طلبك", services: "شاهد خدماتنا" };

  const openOrder = () => {
    window.dispatchEvent(new Event("lumora:open-order"));
  };

  return (
    <>
      <div className="hidden sm:flex items-center gap-3 animate-slide-up">
        <button
          type="button"
          onClick={openOrder}
          aria-haspopup="dialog"
          className="btn-primary shadow-lg px-6 py-3 inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <ClipboardList className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm sm:text-base font-semibold">
            {text.order}
          </span>
        </button>

        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/25 text-white shadow-lg transition-all duration-200"
        >
          <span className="text-sm sm:text-base font-semibold">
            {text.services}
          </span>
        </a>

        {t.showCallButton && t.callLink ? (
          <a
            href={t.callLink}
            className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/25 text-white shadow-lg"
          >
            {t.callNow || (lang === "en" ? "Call" : lang === "he" ? "שיחה" : "اتصال")}
          </a>
        ) : null}
      </div>

      <button
        type="button"
        onClick={openOrder}
        aria-haspopup="dialog"
        aria-label={text.order}
        className="sm:hidden fixed bottom-6 right-6 z-50 flex min-h-14 items-center justify-center gap-2 rounded-full px-5 bg-[var(--primary)] hover:bg-[var(--primary-600)] text-white shadow-xl transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <ClipboardList className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-bold">{text.order}</span>
      </button>
    </>
  );
}