import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async (formData) => {
    // مكان الربط مع EmailJS / API
    await new Promise((res) => setTimeout(res, 1200));
    setToast({
      type: "success",
      message: lang === "ar" ? "✅ تم الإرسال بنجاح!" : "✅ Sent successfully!",
    });
    setTimeout(() => setToast({ type: "", message: "" }), 3500);
  };

  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#F7FAFF] px-4 sm:px-6 py-12 sm:py-20 text-gray-800"
    >
      {/* خلفيات زخرفية — نخفيها على الموبايل لتقليل الضوضاء البصرية */}
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <div className="absolute w-[650px] h-[650px] bg-blue-200/40 rounded-full blur-3xl -top-52 -left-56" />
        <div className="absolute w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -bottom-40 -right-36" />
      </div>

      {/* Toast آمن بالنسبة لشريط متصفح iOS */}
      <div
        className="fixed top-[max(12px,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-50"
        role="status"
        aria-live="polite"
      >
        {toast.message && (
          <div
            className={`px-4 py-2 rounded-lg shadow-lg text-white text-sm font-semibold
            ${toast.type === "success" ? "bg-green-600/95" : "bg-red-600/95"}`}
          >
            {toast.message}
          </div>
        )}
      </div>

      <ContactHeader />

      {/* البطاقة أخف على الموبايل */}
      <div
        className="max-w-3xl mx-auto mt-8 sm:mt-12 bg-white border border-gray-100 rounded-2xl sm:rounded-[2rem]
                      shadow-[0_6px_24px_rgba(59,130,246,0.06)] sm:shadow-[0_8px_40px_rgba(59,130,246,0.08)]
                      transition-all"
      >
        <ContactForm onSend={handleSend} t={t} isRTL={lang === "ar"} />
      </div>

      <ContactLinks />
    </section>
  );
}
