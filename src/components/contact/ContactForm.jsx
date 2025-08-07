// ContactForm.jsx
import { useState, useRef, useEffect } from "react";
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
  const [shakeTarget, setShakeTarget] = useState(null);
  const successSound = useRef(null);

  const validateField = (id, value) => {
    if (!value.trim()) return t.contactFillAllFields;
    if (id === "phone" && !/^05\d{1}-\d{7}$/.test(value))
      return t.contactPhoneError;
    return "";
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const error = validateField(id, value);
    if (error) setErrors((prev) => ({ ...prev, [id]: error }));
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
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  useEffect(() => {
    if (success) {
      try {
        successSound.current.currentTime = 0;
        successSound.current.volume = 0.6;
        successSound.current.play();
      } catch (e) {
        console.warn("🔇 الصوت منع من التشغيل:", e);
      }
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([id, value]) => {
      const error = validateField(id, value);
      if (error) newErrors[id] = error;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      setShakeTarget(firstErrorField);
      setTimeout(() => {
        document
          .getElementById(firstErrorField)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
      setTimeout(() => setShakeTarget(null), 800);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => {
        setTimeout(() => {
          if (successRef.current) {
            const y =
              successRef.current.getBoundingClientRect().top +
              window.scrollY -
              80; // 🧠 80px لتعويض الهيدر
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 200);
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
        <SuccessMessage
          text={t.contactSuccessMessage}
          refEl={successRef}
          onClose={() => setSuccess(false)}
        />
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
        isValid={form.name.trim() !== "" && !errors.name}
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
        isValid={form.phone.trim() !== "" && !errors.phone}
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
        isValid={form.message.trim() !== "" && !errors.message}
      />

      <div className="col-span-full flex justify-center mt-4">
        <button
          type="submit"
          disabled={loading || success}
          className={`relative group w-64 h-14 flex items-center justify-center gap-2 font-semibold rounded-full text-white transition-all duration-300 ease-in-out
            ${
              success
                ? "bg-green-500 shadow-md"
                : loading
                ? "bg-blue-300 shadow"
                : "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            }
          `}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              <span className="text-sm">{t.contactSendButton}</span>
            </>
          ) : success ? (
            <span className="flex items-center gap-2 text-base font-semibold">
              <span className="text-xl">✔</span>
              {t.contactSent}
            </span>
          ) : (
            <span className="flex items-center gap-2 text-base group-hover:translate-x-1 transition-all">
              <span className="text-lg">✉️</span>
              {t.contactSendButton}
            </span>
          )}
        </button>
      </div>

      <audio ref={successSound} src="/sounds/success.mp3" preload="auto" />
    </form>
  );
}
