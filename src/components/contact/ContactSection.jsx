import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async () => {
    await new Promise((res) => setTimeout(res, 900)); // اربط API هنا
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
      className="relative bg-[#F6F8FC] px-4 sm:px-6 py-10 sm:py-16 text-gray-900"
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

      {/* بطاقة بحد متدرّج جميل */}
      <div className="max-w-2xl sm:max-w-3xl mx-auto mt-8 sm:mt-12">
        <div className="rounded-2xl p-[1px] bg-gradient-to-r from-blue-200 via-blue-100 to-transparent">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(6,24,44,.06)]">
            <ContactForm onSend={handleSend} t={t} isRTL={lang === "ar"} />
          </div>
        </div>
      </div>

      <ContactLinks />
    </section>
  );
}
