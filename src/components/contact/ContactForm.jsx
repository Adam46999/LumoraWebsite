import { useState, useRef, useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import ContactField from "./ContactField";

export default function ContactForm() {
  const { t } = useLanguage();

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const flashRef = useRef(null);

  // ✅ حفظ تلقائي مؤقت للبيانات
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  // ✅ تحقق ذكي للهاتف
  const validatePhone = (value) => {
    const clean = value.replace(/\D/g, "");
    return /^05\d{8}$/.test(clean) || /^9725\d{8}$/.test(clean);
  };

  const validateField = (id, value) => {
    if (!value.trim()) return t.contactFillAllFields;
    if (id === "phone" && !validatePhone(value)) return t.contactPhoneError;
    return "";
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const error = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: error }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([id, value]) => {
      const err = validateField(id, value);
      if (err) newErrors[id] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      localStorage.removeItem("contactForm");
      setForm({ name: "", phone: "", message: "" });

      // تأثير ضوء مؤقت بالفلاش
      if (flashRef.current) {
        flashRef.current.classList.add("animate-form-flash");
        setTimeout(() => {
          flashRef.current.classList.remove("animate-form-flash");
        }, 1000);
      }

      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div
      ref={flashRef}
      className="relative isolate max-w-3xl mx-auto p-[2px] rounded-[2rem] bg-gradient-to-r from-blue-400/60 via-blue-200/50 to-blue-300/60 shadow-[0_12px_45px_rgba(59,130,246,0.15)] overflow-hidden"
    >
      {/* 🧊 خلفية متدرجة شفافة */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-[2rem] -z-10"></div>

      <form
        onSubmit={handleSubmit}
        className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 sm:p-12"
      >
        {/* ✅ رسالة نجاح */}
        {success && (
          <div className="col-span-full flex items-center justify-center gap-3 bg-green-50 border border-green-200 text-green-700 py-3 px-6 rounded-2xl animate-fade-in">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm sm:text-base font-medium">
              {t.contactSuccessMessage}
            </span>
          </div>
        )}

        {/* 🧍 الاسم */}
        <ContactField
          id="name"
          label={t.contactNameLabel}
          placeholder={t.contactNamePlaceholder}
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          isValid={form.name.trim() && !errors.name}
        />

        {/* 📞 الهاتف */}
        <ContactField
          id="phone"
          label={t.contactPhoneLabel}
          placeholder={t.contactPhonePlaceholder}
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          isValid={form.phone.trim() && !errors.phone}
        />

        {/* 💬 الرسالة */}
        <ContactField
          id="message"
          label={t.contactMessageLabel}
          placeholder={t.contactMessagePlaceholder}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message}
          isTextArea
          isValid={form.message.trim() && !errors.message}
        />

        {/* ✉️ زر الإرسال */}
        <div className="col-span-full flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading || success}
            className={`relative w-64 h-14 rounded-full font-semibold text-white text-base tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all duration-500 overflow-hidden
            ${
              loading
                ? "bg-blue-300 cursor-wait"
                : success
                ? "bg-green-500"
                : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:scale-[1.04] active:scale-[0.97]"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span>{t.contactSendButton}</span>
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>{t.contactSent}</span>
              </>
            ) : (
              <>
                <span className="text-lg">✉️</span>
                <span>{t.contactSendButton}</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* ✨ أنيميشنات */}
      <style>
        {`
        @keyframes form-flash {
          0% { box-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { box-shadow: 0 0 50px rgba(255,255,255,0.6); }
          100% { box-shadow: 0 0 0 rgba(255,255,255,0); }
        }
        .animate-form-flash {
          animation: form-flash 0.9s ease-in-out;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        `}
      </style>
    </div>
  );
}
