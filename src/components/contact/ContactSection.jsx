// src/components/contact/ContactSection.jsx
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async (formData) => {
    try {
      // محاكاة إرسال فعلي (يمكن لاحقًا نربط EmailJS)
      await new Promise((res) => setTimeout(res, 2000));
      setToast({
        type: "success",
        message:
          lang === "ar" ? "✅ تم الإرسال بنجاح!" : "✅ Sent successfully!",
      });
      setTimeout(() => setToast({ type: "", message: "" }), 4000);
    } catch {
      setToast({
        type: "error",
        message:
          lang === "ar"
            ? "❌ حدث خطأ، حاول مجددًا."
            : "❌ Something went wrong.",
      });
    }
  };

  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f7faff] via-[#edf3ff] to-[#e5eeff] text-gray-800"
    >
      {/* خلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[650px] h-[650px] bg-blue-200/50 rounded-full blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl bottom-[-150px] right-[-120px]" />
      </div>

      {/* عنوان */}
      <div className="animate-fade-in">
        <ContactHeader />
      </div>

      {/* Toast */}
      {toast.message && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg text-white font-medium z-50 backdrop-blur-md transition-all ${
            toast.type === "success" ? "bg-green-500/90" : "bg-red-500/90"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* بطاقة */}
      <div className="max-w-3xl mx-auto mt-14 backdrop-blur-2xl bg-white/55 border border-white/70 rounded-[2rem] shadow-[0_8px_40px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_45px_rgba(59,130,246,0.12)] transition-all duration-700 hover:-translate-y-1.5">
        <ContactForm onSend={handleSend} />
      </div>

      {/* روابط */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in delay-300">
        <ContactLinks />
      </div>

      <style>
        {`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out both; }
        `}
      </style>
    </section>
  );
}
