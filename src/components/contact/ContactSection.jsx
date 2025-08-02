import { useState, useRef } from "react";
import { Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t.contactFillAllFields;
    if (!form.phone.trim()) errs.phone = t.contactFillAllFields;
    if (!form.message.trim()) errs.message = t.contactFillAllFields;

    const phonePattern = /^05\d{1}-\d{7}$/;
    if (form.phone && !phonePattern.test(form.phone)) {
      errs.phone = t.contactPhoneError;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
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
    setForm({ ...form, [id]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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
    <section
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-tr from-blue-50 to-white"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* العنوان */}
      <div className="text-center mb-12 max-w-xl mx-auto animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-blue-600">{t.contactTitleSpan}</span>{" "}
          {t.contactTitle}
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          {t.contactSubtitle}
        </p>
      </div>

      {/* النموذج */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {success && (
          <div
            ref={successRef}
            className="sm:col-span-2 flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-xl shadow animate-fade-in"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>{t.contactSuccessMessage}</span>
          </div>
        )}

        {/* الاسم */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 text-sm text-gray-700 font-medium"
          >
            {t.contactNameLabel}
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder={t.contactNamePlaceholder}
            className={`p-3 rounded-xl border ${
              errors.name ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        {/* الهاتف */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="mb-1 text-sm text-gray-700 font-medium"
          >
            {t.contactPhoneLabel}
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder={t.contactPhonePlaceholder}
            className={`p-3 rounded-xl border ${
              errors.phone ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        {/* الرسالة */}
        <div className="col-span-full flex flex-col">
          <label
            htmlFor="message"
            className="mb-1 text-sm text-gray-700 font-medium"
          >
            {t.contactMessageLabel}
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.contactMessagePlaceholder}
            rows="4"
            className={`p-3 rounded-xl border ${
              errors.message ? "border-red-400" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        {/* زر الإرسال */}
        <div className="col-span-full flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="relative w-64 h-14 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              t.contactSendButton
            )}
          </button>
        </div>
      </form>

      {/* روابط الاتصال */}
      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="tel:+972543075619"
          className="group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl bg-white shadow hover:scale-105 transition"
        >
          <span className="text-gray-800 font-semibold text-base">
            {t.contactCallNow}
          </span>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Phone className="w-5 h-5" />
          </div>
        </a>

        <a
          href="https://waze.com/ul?ll=32.9535,35.3072"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl bg-white shadow hover:scale-105 transition"
        >
          <span className="text-gray-800 font-semibold text-base">
            {t.contactMapLocation}
          </span>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <MapPin className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
}
