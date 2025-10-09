// src/components/contact/ContactForm.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import MagicSendButton from "./MagicSendButton";
import ContactField from "./ContactField";
import SubjectChips from "./SubjectChips";

const DRAFT_KEY = "CONTACT_FORM_DRAFT_v2";
const phoneRegex = /^(?:\+9725\d{8}|0(?:5\d{8}|[2-9]\d{7}))$/;

// تنسيق هاتف لطيف أثناء الكتابة
function formatILPhone(v) {
  const digits = v.replace(/\D/g, "");
  if (digits.startsWith("972")) return `+${digits.slice(0, 12)}`;
  const d = digits.slice(0, 10);
  if (d.length <= 3) return d.startsWith("5") ? `0${d}` : d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

export default function ContactForm({ onSend, t = {}, isRTL = true }) {
  // مرحلتان: 1) موضوع + رسالة  2) الاسم + الهاتف + إرسال
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    subject: "inquiry",
    message: "",
    name: "",
    phone: "",
    honey: "",
  });

  const [state, setState] = useState("idle"); // idle | loading | success
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);
  const messageRef = useRef(null);

  // تحميل مسودة + subject من URL
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      const draft = raw ? JSON.parse(raw) : {};
      const urlSubject = new URLSearchParams(window.location.search).get(
        "subject"
      );
      const normalized = ["inquiry", "booking", "complaint", "other"].includes(
        urlSubject || ""
      )
        ? urlSubject
        : undefined;
      setForm((p) => ({
        ...p,
        ...draft,
        ...(normalized ? { subject: normalized } : {}),
      }));
    } catch {}
  }, []);

  // حفظ مسودة مختصرة
  useEffect(() => {
    const { subject, message, name, phone } = form;
    localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({ subject, message, name, phone })
    );
  }, [form.subject, form.message, form.name, form.phone]);

  // نصوص ديناميكية
  const labels = useMemo(
    () => ({
      subject: t.subjectLabel || "موضوع الرسالة",
      name: t.nameLabel || "الاسم الكامل",
      phone: t.phoneLabel || "رقم الهاتف",
      message: t.messageLabel || "رسالتك",
      phMessage:
        form.subject === "booking"
          ? "اذكر الخدمة والوقت المناسب لك…"
          : form.subject === "complaint"
          ? "أخبرنا بالمشكلة باختصار محترم…"
          : form.subject === "other"
          ? "اكتب رسالتك هنا…"
          : "اكتب سؤالك أو طلب المعلومات…",
      send: t.send || "إرسال",
      sending: t.sending || "جارٍ الإرسال...",
      sent: t.sent || "تم الإرسال!",
    }),
    [t, form.subject]
  );

  const messageAssist =
    form.subject === "booking"
      ? "مثال سريع: الإثنين بعد 4 م / الخدمة المطلوبة."
      : form.subject === "complaint"
      ? "وعدنا: نعود إليك بحل واضح وسريع."
      : form.subject === "inquiry"
      ? "اسأل أي شيء—نرد خلال ساعتين (أوقات العمل)."
      : "ضع تفاصيل مختصرة وسنعود إليك.";

  const sendLabel = useMemo(() => {
    switch (form.subject) {
      case "inquiry":
        return "أرسل سؤالك";
      case "booking":
        return "اطلب حجزًا";
      case "complaint":
        return "أرسل شكواك";
      default:
        return labels.send;
    }
  }, [form.subject, labels.send]);

  // فالديشن بسيط لكل مرحلة
  const validateStep1 = () => {
    const e = {};
    if (!form.subject) e.subject = "اختر الموضوع الأنسب.";
    if (!form.message.trim()) e.message = "اكتب لنا سطرين عن المطلوب.";
    return e;
  };
  const validateStep2 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "اكتب اسمك الكامل لطفًا.";
    const clean = form.phone.replace(/\D/g, "");
    const normalized = clean.startsWith("972")
      ? `+${clean}`
      : clean.startsWith("0")
      ? `0${clean.slice(1)}`
      : form.phone.trim();
    if (!form.phone.trim()) e.phone = "اكتب رقمك لنتواصل بسهولة.";
    else if (!phoneRegex.test(normalized))
      e.phone = "خلّيه بالصّيغة 05X-XXX-XXXX.";
    return e;
  };

  // تغييرات الحقول
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      const formatted = formatILPhone(value);
      setForm((p) => ({ ...p, phone: formatted }));
      if (touched.phone) setErrors((p) => ({ ...p, ...validateStep2() }));
      return;
    }
    setForm((p) => ({ ...p, [id]: value }));
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((p) => ({ ...p, [id]: true }));
    setErrors((p) => ({
      ...p,
      ...(step === 1 ? validateStep1() : validateStep2()),
    }));
  };

  // أزرار التنقل
  const goNext = () => {
    const e = validateStep1();
    setErrors(e);
    if (Object.keys(e).length) {
      firstErrorRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setStep(2);
    setTimeout(() => document.getElementById("name")?.focus(), 50);
  };

  const goBack = () => setStep(1);

  // إرسال
  const handleSubmit = async (e) => {
    e.preventDefault();
    const eAll = { ...validateStep1(), ...validateStep2() };
    setErrors(eAll);
    if (Object.keys(eAll).length) {
      firstErrorRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    try {
      setState("loading");
      await onSend({
        subject: form.subject,
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      });
      setState("success");
      setForm({
        subject: form.subject,
        message: "",
        name: "",
        phone: "",
        honey: "",
      });
      setStep(1);
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  // رابط واتساب (اختياري)
  const waText = encodeURIComponent(
    `موضوع: ${form.subject}\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالرسالة:\n${form.message}`
  );
  const waHref = `https://wa.me/972543075619?text=${waText}`;

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 sm:p-10"
    >
      {/* سطر طمأنة قصير */}
      <div className="sm:col-span-2 text-gray-600 text-sm -mb-2">
        نردّ عادة خلال <strong>ساعتين</strong> (أوقات العمل). بياناتك للردّ فقط.
      </div>

      {/* تنبيه لطيف لأوّل خطأ */}
      {Object.keys(errors).length > 0 && (
        <div
          ref={firstErrorRef}
          className="sm:col-span-2 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 px-4 py-3 text-sm"
          role="status"
          aria-live="polite"
        >
          {errors.subject || errors.message || errors.name || errors.phone}
        </div>
      )}

      {/* honeypot */}
      <input
        id="honey"
        name="honey"
        value={form.honey}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* === الخطوة 1: موضوع + رسالة (فقط) === */}
      {step === 1 && (
        <>
          <SubjectChips
            id="subject"
            label={labels.subject}
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            error={errors.subject}
            isRTL={isRTL}
          />

          <div className="sm:col-span-2">
            <ContactField
              id="message"
              label={labels.message}
              placeholder={labels.phMessage}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              required
              isTextArea
              autoGrow
              assistiveText={messageAssist}
              maxChars={500}
              isRTL={isRTL}
              refEl={messageRef}
            />
          </div>

          {/* زر متابعة واضح وكبير */}
          <div className="sm:col-span-2 flex justify-center mt-2">
            <button
              type="button"
              onClick={goNext}
              className="h-12 px-6 rounded-full bg-blue-600 text-white font-semibold shadow-[0_6px_20px_rgba(59,130,246,.35)] hover:shadow-[0_8px_24px_rgba(59,130,246,.45)] active:scale-[.98] focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              التالي
            </button>
          </div>
        </>
      )}

      {/* === الخطوة 2: الاسم + الهاتف + إرسال === */}
      {step === 2 && (
        <>
          <ContactField
            id="name"
            label={labels.name}
            placeholder="اكتب اسمك هنا"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            required
            isRTL={isRTL}
          />

          <ContactField
            id="phone"
            label={labels.phone}
            placeholder="05X-XXX-XXXX"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            required
            isRTL={isRTL}
          />

          {/* أزرار: رجوع + إرسال + واتساب */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-3 justify-center mt-2">
            <button
              type="button"
              onClick={goBack}
              className="h-12 px-5 rounded-full border border-gray-200 bg-white/80 text-gray-700 hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              رجوع
            </button>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-12 px-5 rounded-full border flex items-center justify-center gap-2 text-sm font-semibold transition
                ${
                  form.message
                    ? "bg-white/80 text-green-700 border-green-300 hover:bg-white"
                    : "pointer-events-none opacity-50 bg-white/60 text-gray-400 border-gray-200"
                }`}
              title="إرسال عبر واتساب"
            >
              واتساب
            </a>

            <MagicSendButton
              state={state}
              disabled={false}
              labelIdle={sendLabel}
              labelLoading={labels.sending}
              labelSuccess={labels.sent}
            />
          </div>
        </>
      )}

      {/* سياسة خصوصية قصيرة */}
      <div className="sm:col-span-2 flex items-center justify-between text-xs text-gray-600 mt-1">
        <a className="underline hover:text-gray-700" href="/privacy">
          بيان الخصوصية
        </a>
        <span>اختصار: Ctrl/⌘ + Enter للإرسال</span>
      </div>
    </form>
  );
}
