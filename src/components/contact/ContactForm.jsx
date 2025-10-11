import { useEffect, useMemo, useRef, useState } from "react";
import MagicSendButton from "./MagicSendButton";
import ContactField from "./ContactField";
import SubjectChips from "./SubjectChips";

const DRAFT_KEY = "CONTACT_FORM_STICKY_v1";
const phoneRegex = /^(?:\+9725\d{8}|0(?:5\d{8}|[2-9]\d{7}))$/;

const fmtIL = (v) => {
  const d = v.replace(/\D/g, "");
  if (d.startsWith("972")) return `+${d.slice(0, 12)}`;
  const s = d.slice(0, 10);
  if (s.length <= 3) return s.startsWith("5") ? `0${s}` : s;
  if (s.length <= 6) return `${s.slice(0, 3)}-${s.slice(3)}`;
  return `${s.slice(0, 3)}-${s.slice(3, 6)}-${s.slice(6)}`;
};
const isPhoneComplete = (v) => v.replace(/\D/g, "").length >= 10;

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
  const [errors, setErrors] = useState({});
  const [kbOpen, setKbOpen] = useState(false);

  const phoneRef = useRef(null);
  const msgRef = useRef(null);
  const firstErrorRef = useRef(null);

  // draft + subject from URL
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

  // mobile keyboard height (لتحسين الهوامش فقط)
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKbOpen(window.innerHeight - vv.height > 150);
    vv.addEventListener("resize", onResize);
    onResize();
    return () => vv.removeEventListener("resize", onResize);
  }, []);

  const labels = useMemo(
    () => ({
      subject: "1) موضوع",
      name: "2) الاسم",
      phone: "3) الهاتف",
      message: "4) الرسالة",
      phName: "الاسم الأول + الكُنية",
      phPhone: "05X-XXX-XXXX",
      phMessage:
        form.subject === "booking"
          ? "الخدمة والوقت المناسب…"
          : form.subject === "complaint"
          ? "المشكلة باختصار…"
          : form.subject === "other"
          ? "اكتب رسالتك…"
          : "سؤالك أو طلب المعلومات…",
      send: "إرسال",
      sending: "جارٍ الإرسال...",
      sent: "تم الإرسال!",
    }),
    [form.subject]
  );

  const validate = (draft = form) => {
    const e = {};
    if (!draft.subject) e.subject = "اختر الموضوع";
    if (!draft.name.trim()) e.name = "اكتب اسمك";
    const clean = draft.phone.replace(/\D/g, "");
    const normalized = clean.startsWith("972")
      ? `+${clean}`
      : clean.startsWith("0")
      ? `0${clean.slice(1)}`
      : draft.phone.trim();
    if (!draft.phone.trim()) e.phone = "أدخل رقمك";
    else if (!phoneRegex.test(normalized)) e.phone = "رقم غير صالح";
    if (!draft.message.trim()) e.message = "اكتب الرسالة";
    if (draft.honey) e.honey = "Spam";
    return e;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const next = id === "phone" ? fmtIL(value) : value;
    setForm((p) => ({ ...p, [id]: next }));
    if (touched[id]) {
      const now = validate({ ...form, [id]: next });
      setErrors((prev) => ({ ...prev, [id]: now[id] }));
    }
    if (id === "phone" && isPhoneComplete(next)) {
      setTimeout(() => msgRef.current?.focus(), 0);
    }
  };
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((p) => ({ ...p, [id]: true }));
    const eOne = validate();
    setErrors((prev) => ({ ...prev, [id]: eOne[id] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ subject: true, name: true, phone: true, message: true });
    const eNow = validate();
    setErrors(eNow);
    if (Object.keys(eNow).length) {
      const firstKey = ["subject", "name", "phone", "message"].find(
        (k) => eNow[k]
      );
      document.getElementById(firstKey)?.focus();
      firstErrorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
      setForm((p) => ({ ...p, name: "", phone: "", message: "" }));
      setTouched({});
      setErrors({});
      setTimeout(() => setState("idle"), 1100);
    } catch {
      setState("idle");
    }
  };

  // جاهزية زر الإرسال
  const validPhone = (() => {
    const clean = form.phone.replace(/\D/g, "");
    const normalized = clean.startsWith("972")
      ? `+${clean}`
      : clean.startsWith("0")
      ? `0${clean.slice(1)}`
      : form.phone.trim();
    return phoneRegex.test(normalized);
  })();
  const ready =
    !!(form.subject && form.name.trim() && validPhone && form.message.trim()) &&
    state !== "loading";

  const waText = encodeURIComponent(
    `موضوع: ${form.subject}\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالرسالة:\n${form.message}`
  );
  const waHref = `https://wa.me/972543075619?text=${waText}`;
  const canWa = form.name.trim() || form.message.trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 p-4 sm:p-6"
    >
      {/* سطر طمأنة صغير */}

      {/* شريط خطأ صغير (اختياري) */}
      {!!Object.keys(errors).length && (
        <div
          ref={firstErrorRef}
          className="md:col-span-2 rounded-lg border border-rose-200 bg-rose-50/90 text-rose-700 px-3 py-2 text-[13px]"
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

      {/* 1) الموضوع */}
      <SubjectChips
        id="subject"
        label={labels.subject}
        value={form.subject}
        onChange={(e) => {
          setForm((p) => ({ ...p, subject: e.target.value }));
          setTouched((p) => ({ ...p, subject: true }));
          setErrors((p) => ({ ...p, subject: undefined }));
        }}
        required
        error={touched.subject ? errors.subject : undefined}
        isRTL={isRTL}
      />

      {/* 2) الاسم */}
      <ContactField
        id="name"
        label={labels.name}
        placeholder={labels.phName}
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => phoneRef.current?.focus()}
        inputProps={{ enterKeyHint: "next" }}
        error={touched.name ? errors.name : undefined}
        isValid={touched.name && !errors.name}
        required
        isRTL={isRTL}
      />

      {/* 3) الهاتف */}
      <ContactField
        id="phone"
        label={labels.phone}
        placeholder={labels.phPhone}
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => msgRef.current?.focus()}
        inputProps={{ enterKeyHint: "next", inputMode: "tel" }}
        error={touched.phone ? errors.phone : undefined}
        isValid={touched.phone && !errors.phone}
        required
        isRTL={isRTL}
        refEl={phoneRef}
      />

      {/* 4) الرسالة */}
      <ContactField
        id="message"
        label={labels.message}
        placeholder={labels.phMessage}
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message ? errors.message : undefined}
        isValid={touched.message && !errors.message}
        required
        isTextArea
        autoGrow
        maxChars={500}
        smartCounter
        isRTL={isRTL}
        refEl={msgRef}
        inputProps={{ enterKeyHint: "done" }}
      />

      {/* الأزرار */}
      <div className="md:col-span-2">
        {/* Desktop actions */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-11 px-4 rounded-full border flex items-center justify-center text-sm font-medium transition
              ${
                canWa
                  ? "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                  : "pointer-events-none opacity-50 bg-white text-gray-400 border-gray-200"
              }`}
            aria-disabled={!canWa}
          >
            واتساب
          </a>
          <MagicSendButton
            state={state}
            disabled={!ready}
            labelIdle={ready ? labels.send : "أكمل الحقول"}
            labelLoading={labels.sending}
            labelSuccess={labels.sent}
          />
        </div>

        {/* Mobile bar — STICKY داخل الكارد فقط */}
        <div
          className={`md:hidden sticky bottom-0 z-40
            px-4 ${
              kbOpen ? "pb-2" : "pb-[max(10px,env(safe-area-inset-bottom))]"
            } pt-2
            bg-white border-t border-gray-200
            flex items-center gap-2`}
        >
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-11 rounded-full border flex items-center justify-center text-sm font-semibold
              ${
                canWa
                  ? "text-emerald-700 border-emerald-300 bg-white"
                  : "pointer-events-none opacity-50 text-gray-400 border-gray-200"
              }`}
            aria-disabled={!canWa}
            aria-label="واتساب"
          >
            WA
          </a>
          <div className="flex-1">
            <MagicSendButton
              state={state}
              disabled={!ready}
              labelIdle={ready ? labels.send : "أكمل الحقول"}
              labelLoading={labels.sending}
              labelSuccess={labels.sent}
            />
          </div>
        </div>
      </div>

      {/* ما في هامش إضافي لأن الشريط صار sticky */}
    </form>
  );
}
