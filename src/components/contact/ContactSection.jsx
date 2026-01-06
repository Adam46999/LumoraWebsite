// src/components/contact/ContactSection.jsx
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import { saveContactMessage } from "../../services/contactMessages";

export default function ContactSection() {
  const { lang, t } = useLanguage(); // ✅ لازم تكون موجودة
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleSend = async (data) => {
    try {
      await saveContactMessage(data);

      setToast({
        type: "success",
        message:
          lang === "ar"
            ? "تم إرسال رسالتك بنجاح ✅"
            : lang === "he"
            ? "ההודעה נשלחה בהצלחה ✅"
            : "Your message was sent successfully ✅",
      });
    } catch (err) {
      console.error("Error saving contact message:", err);
      setToast({
        type: "error",
        message:
          lang === "ar"
            ? "حدث خطأ أثناء الإرسال ❌"
            : lang === "he"
            ? "אירעה שגיאה בשליחה ❌"
            : "Something went wrong while sending ❌",
      });
    } finally {
      setTimeout(() => setToast({ type: "", message: "" }), 2400);
    }
  };

  const isRTL = lang === "ar" || lang === "he";

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 bg-[#F6F8FC] text-gray-900"
    >
      {/* Toast */}
      <div
        className="fixed top-[max(12px,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-50"
        role="status"
        aria-live="polite"
      >
        {toast.message && (
          <div
            className={`px-4 py-2 rounded-lg shadow-md text-white text-sm font-medium ${
              toast.type === "error" ? "bg-rose-600" : "bg-emerald-600"
            }`}
          >
            {toast.message}
          </div>
        )}
      </div>

      <ContactHeader />

      <div className="max-w-3xl mx-auto mt-8 sm:mt-12 rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(6,24,44,.06)]">
        <ContactForm
          onSend={handleSend}
          t={{ ...(t || {}), __lang: lang }} // ✅ هي السطر المهم
          isRTL={isRTL}
        />
      </div>
    </section>
  );
}
