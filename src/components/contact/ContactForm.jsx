import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import ContactField from "./ContactField";
import SuccessMessage from "./SuccessMessage";

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);
  const [shakeTarget, setShakeTarget] = useState(null); // ✅ جديد

  const validateField = (id, value) => {
    let error = "";
    if (!value.trim()) {
      error = t.contactFillAllFields;
    }

    if (id === "phone") {
      const phonePattern = /^05\d{1}-\d{7}$/;
      if (value && !phonePattern.test(value)) {
        error = t.contactPhoneError;
      }
    }

    return error;
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const error = validateField(id, value);

    if (error) {
      setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updated = value;

    if (id === "phone") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10) digits = digits.slice(0, 10);
      if (digits.length > 3)
        digits = digits.slice(0, 3) + "-" + digits.slice(3);
      updated = digits;
    }

    setForm((prev) => ({ ...prev, [id]: updated }));

    // نحذف الخطأ مباشرة إذا صحّح المستخدم الإدخال
    setErrors((prev) => ({
      ...prev,
      [id]: "", // إفراغ رسالة الخطأ
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من كل الحقول يدويًا
    const newErrors = {};
    Object.entries(form).forEach(([id, value]) => {
      const error = validateField(id, value);
      if (error) {
        newErrors[id] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // نحدد أول حقل فيه خطأ ونعمله اهتزاز
      const firstErrorField = Object.keys(newErrors)[0];
      setShakeTarget(firstErrorField);

      // نرجعه null بعد شوية عشان يسمح بإعادة الحركة
      setTimeout(() => setShakeTarget(null), 600);

      return;
    }

    // إذا كله تمام، نكمل
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      setTimeout(() => setSuccess(false), 6000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {success && (
        <SuccessMessage text={t.contactSuccessMessage} refEl={successRef} />
      )}

      <ContactField
        onBlur={handleBlur}
        id="name"
        label={t.contactNameLabel}
        placeholder={t.contactNamePlaceholder}
        value={form.name}
        onChange={handleChange}
        error={errors.name}
        shake={shakeTarget === "name"}
      />

      <ContactField
        onBlur={handleBlur}
        id="phone"
        label={t.contactPhoneLabel}
        placeholder={t.contactPhonePlaceholder}
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
        shake={shakeTarget === "phone"}
      />

      <ContactField
        onBlur={handleBlur}
        id="message"
        label={t.contactMessageLabel}
        placeholder={t.contactMessagePlaceholder}
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        isTextArea
        shake={shakeTarget === "message"}
      />

      {/* زر الإرسال */}
      <div className="col-span-full flex justify-center mt-4">
        <button
          type="submit"
          disabled={loading || success} // 🚫 يمنع الضغط المتكرر
          className={`relative w-64 h-14 flex items-center justify-center font-semibold rounded-full shadow-lg transition-all duration-300
    ${
      loading || success
        ? "bg-green-500 text-white"
        : "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:scale-105"
    }
    ${success ? "animate-pulse" : ""}
  `}
        >
          {loading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : success ? (
            <span className="flex items-center gap-2">
              <span>✔</span> {t.contactSent}
            </span>
          ) : (
            t.contactSendButton
          )}
        </button>
      </div>
    </form>
  );
}
