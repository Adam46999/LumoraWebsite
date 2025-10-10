// src/components/contact/ContactForm.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import MagicSendButton from "./MagicSendButton";
import ContactField from "./ContactField";
import SubjectChips from "./SubjectChips";

const DRAFT_KEY = "CONTACT_FORM_RESP_v2";
const phoneRegex = /^(?:\+9725\d{8}|0(?:5\d{8}|[2-9]\d{7}))$/;

function formatILPhone(v) {
  const digits = v.replace(/\D/g, "");
  if (digits.startsWith("972")) return `+${digits.slice(0, 12)}`;
  const d = digits.slice(0, 10);
  if (d.length <= 3) return d.startsWith("5") ? `0${d}` : d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}
function isPhoneComplete(v) {
  return v.replace(/\D/g, "").length >= 10;
}

export default function ContactForm({ onSend, t = {}, isRTL = true }) {
  const [form, setForm] = useState({
    subject: "inquiry",
    name: "",
    phone: "",
    message: "",
    honey: "",
  });
  const [state, setState] = useState("idle");
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [okMsg, setOkMsg] = useState("");
  const [kbOpen, setKbOpen] = useState(false); // للكبيورد على الموبايل
  const firstErrorRef = useRef(null);
  const messageRef = useRef(null);

  // مسودة + subject من URL
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
  useEffect(() => {
    const { subject, name, phone, message } = form;
    localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({ subject, name, phone, message })
    );
  }, [form.subject, form.name, form.phone, form.message]);

  // كشف لوحة المفاتيح لتعديل شريط الإرسال
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => {
      const delta = window.innerHeight - vv.height;
      setKbOpen(delta > 150);
    };
    vv.addEventListener("resize", onResize);
    onResize();
    return () => vv.removeEventListener("resize", onResize);
  }, []);

  // نصوص وديناميكيات
  const labels = useMemo(
    () => ({
      subject: t.subjectLabel || "موضوع الرسالة",
      name: t.nameLabel || "الاسم الكامل",
      phone: t.phoneLabel || "رقم الهاتف",
      message: t.messageLabel || "رسالتك",
      phName: t.namePlaceholder || "اكتب اسمك هنا",
      phPhone: t.phonePlaceholder || "05X-XXX-XXXX",
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
      ? "مثال: الإثنين بعد 4 م / الخدمة المطلوبة."
      : form.subject === "complaint"
      ? "وعدنا: نعود بحل واضح وسريع."
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

  const validate = (draft = form) => {
    const e = {};
    if (!draft.subject) e.subject = "اختر الموضوع.";
    if (!draft.name.trim()) e.name = "اكتب اسمك الكامل لطفًا.";
    const clean = draft.phone.replace(/\D/g, "");
    const normalized = clean.startsWith("972")
      ? `+${clean}`
      : clean.startsWith("0")
      ? `0${clean.slice(1)}`
      : draft.phone.trim();
    if (!draft.phone.trim()) e.phone = "اكتب رقمك للتواصل.";
    else if (!phoneRegex.test(normalized)) e.phone = "خلّيه 05X-XXX-XXXX.";
    if (!draft.message.trim()) e.message = "اكتب المطلوب باختصار.";
    if (draft.honey) e.honey = "Spam detected.";
    return e;
  };

  // تحديث فوري للأخطاء أثناء الكتابة
  const handleChange = (e) => {
    const { id, value } = e.target;
    const next = id === "phone" ? formatILPhone(value) : value;
    setForm((p) => ({ ...p, [id]: next }));
    if (touched[id] || submitted) {
      const now = validate({ ...form, [id]: next });
      setErrors((prev) => ({ ...prev, [id]: now[id] }));
    }
    if (id === "phone" && isPhoneComplete(next))
      setTimeout(() => messageRef.current?.focus(), 0);
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((p) => ({ ...p, [id]: true }));
    const eOne = validate();
    setErrors((prev) => ({ ...prev, [id]: eOne[id] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const eNow = validate();
    setErrors(eNow);
    if (Object.keys(eNow).length) {
      const firstKey = ["subject", "name", "phone", "message"].find(
        (k) => eNow[k]
      );
      if (firstKey) document.getElementById(firstKey)?.focus();
      firstErrorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }
    try {
      setOkMsg("");
      setState("loading");
      await onSend({
        subject: form.subject,
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      });
      setState("success");
      setOkMsg("تم الاستلام! سنعاودك غالبًا خلال ساعتين 🙌");
      setForm({
        subject: form.subject,
        name: "",
        phone: "",
        message: "",
        honey: "",
      });
      setTouched({});
      setSubmitted(false);
      setTimeout(() => setState("idle"), 1600);
    } catch {
      setState("idle");
    }
  };

  // واتساب (اختياري)
  const waText = encodeURIComponent(
    `موضوع: ${form.subject}\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالرسالة:\n${form.message}`
  );
  const waHref = `https://wa.me/972543075619?text=${waText}`;
  const canWa = form.name.trim() || form.message.trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6 md:p-8"
    >
      {/* طمأنة قصيرة */}
      <div className="md:col-span-2 text-gray-600 text-[clamp(12px,1.3vw,14px)] -mb-1">
        نردّ عادة خلال <strong>ساعتين</strong> (أوقات العمل).
      </div>

      {/* أخطاء لطيفة */}
      {submitted &&
        ["subject", "name", "phone", "message"].some((k) => errors[k]) && (
          <div
            ref={firstErrorRef}
            className="md:col-span-2 rounded-xl border border-amber-200 bg-amber-50 text-amber-700 px-3 py-2 text-[13px]"
            role="status"
            aria-live="polite"
          >
            {errors.subject || errors.name || errors.phone || errors.message}
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

      {/* موضوع */}
      <SubjectChips
        id="subject"
        label={labels.subject}
        value={form.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={submitted || touched.subject ? errors.subject : undefined}
        isRTL={isRTL}
      />

      {/* الاسم */}
      <ContactField
        id="name"
        label={labels.name}
        placeholder={labels.phName}
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={submitted || touched.name ? errors.name : undefined}
        required
        isValid={touched.name && !errors.name}
        assistiveText="يكفينا الاسم الأول + الكُنية."
        isRTL={isRTL}
      />

      {/* الهاتف */}
      <ContactField
        id="phone"
        label={labels.phone}
        placeholder={labels.phPhone}
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={submitted || touched.phone ? errors.phone : undefined}
        required
        isValid={touched.phone && !errors.phone}
        assistiveText="مثال: 059-123-4567."
        isRTL={isRTL}
      />

      {/* الرسالة */}
      <ContactField
        id="message"
        label={labels.message}
        placeholder={labels.phMessage}
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={submitted || touched.message ? errors.message : undefined}
        required
        isTextArea
        autoGrow
        isValid={touched.message && !errors.message}
        assistiveText={messageAssist}
        maxChars={500}
        isRTL={isRTL}
        refEl={messageRef}
      />

      {/* أزرار */}
      <div className="md:col-span-2">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-12 px-5 rounded-full border flex items-center justify-center gap-2 text-sm font-semibold transition
              ${
                canWa
                  ? "bg-white/80 text-green-700 border-green-300 hover:bg-white"
                  : "pointer-events-none opacity-50 bg-white/60 text-gray-400 border-gray-200"
              }`}
            aria-disabled={!canWa}
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

        {/* Mobile sticky bar */}
        <div
          className={`md:hidden fixed left-0 right-0 bottom-0 z-40
            px-4 ${
              kbOpen ? "pb-2" : "pb-[max(12px,env(safe-area-inset-bottom))]"
            } pt-2
            bg-white/90 backdrop-blur-md border-t border-gray-200
            flex items-center justify-between gap-3 transition-all`}
        >
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 h-11 rounded-full border flex items-center justify-center text-sm font-semibold
              ${
                canWa
                  ? "bg-white text-green-700 border-green-300"
                  : "pointer-events-none opacity-50 bg-white text-gray-400 border-gray-200"
              }`}
            aria-disabled={!canWa}
          >
            واتساب
          </a>
          <div className="flex-1">
            <MagicSendButton
              state={state}
              disabled={false}
              labelIdle={sendLabel}
              labelLoading={labels.sending}
              labelSuccess={labels.sent}
            />
          </div>
        </div>

        {/* رسالة نجاح */}
        {okMsg && (
          <div className="mt-3 text-center text-green-700 bg-green-50 border border-green-200 rounded-xl py-2 text-sm">
            {okMsg}
          </div>
        )}
      </div>

      {/* سياسة خصوصية + هامش للستكي بار */}
      <div className="md:col-span-2 flex items-center justify-between text-[12px] text-gray-600 mt-1 mb-[72px] md:mb-0">
        <a href="/privacy" className="underline hover:text-gray-700">
          بيان الخصوصية
        </a>
        <span>اختصار: Ctrl/⌘ + Enter للإرسال</span>
      </div>
    </form>
  );
}
