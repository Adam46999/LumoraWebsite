// src/components/contact/ContactSection.jsx
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async (formData) => {
    // هنا تقدر تربط EmailJS / API خاص بك
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
      className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f7faff] via-[#edf3ff] to-[#e5eeff] text-gray-800"
    >
      {/* خلفيات خفيفة */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[650px] h-[650px] bg-blue-200/40 rounded-full blur-3xl top-[-200px] left-[-220px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl bottom-[-150px] right-[-140px]" />
      </div>

      <ContactHeader />

      {/* Toast (aria-live) */}
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        role="status"
        aria-live="polite"
      >
        {toast.message && (
          <div
            className={`px-6 py-3 rounded-xl shadow-lg text-white font-medium backdrop-blur-md transition-all
            ${toast.type === "success" ? "bg-green-500/90" : "bg-red-500/90"}`}
          >
            {toast.message}
          </div>
        )}
      </div>

      {/* البطاقة */}
      <div className="max-w-3xl mx-auto mt-12 backdrop-blur-2xl bg-white/60 border border-white/70 rounded-[2rem] shadow-[0_8px_40px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.12)] transition-all duration-700 hover:-translate-y-1.5">
        <ContactForm onSend={handleSend} t={t} isRTL={lang === "ar"} />
      </div>

      {/* الروابط */}
      <ContactLinks />
    </section>
  );
}
