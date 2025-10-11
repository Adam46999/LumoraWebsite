import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader"; // إبقِ العنوان الذي اخترته
import ContactForm from "./ContactForm";
// (اختياري) روابط إضافية
// import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async () => {
    // اربط API/EmailJS هنا
    await new Promise((r) => setTimeout(r, 900));
    setToast({
      type: "success",
      message: lang === "ar" ? "تم الإرسال بنجاح ✅" : "Sent successfully ✅",
    });
    setTimeout(() => setToast({ type: "", message: "" }), 2400);
  };

  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 bg-[#F6F8FC] text-gray-900"
    >
      {/* Toast */}
      <div
        className="fixed top-[max(12px,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-50"
        role="status"
        aria-live="polite"
      >
        {toast.message && (
          <div className="px-4 py-2 rounded-lg shadow-md text-white text-sm font-medium bg-emerald-600">
            {toast.message}
          </div>
        )}
      </div>

      <ContactHeader />

      {/* الكارد */}
      <div className="max-w-3xl mx-auto mt-8 sm:mt-12 rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,24,44,.06)]">
        <ContactForm onSend={handleSend} t={t} isRTL={lang === "ar"} />
      </div>

      {/* <ContactLinks /> */}
    </section>
  );
}
