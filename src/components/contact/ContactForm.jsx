import { useEffect, useMemo, useRef, useState } from "react";
import MagicSendButton from "./MagicSendButton";
import ContactField from "./ContactField";
import SubjectChips from "./SubjectChips";
import RememberMeSwitch from "./RememberMeSwitch";
import PreferredChannelPicker from "./PreferredChannelPicker";

// لا نحتاج MessageFullscreen بعد الآن
const DRAFT_KEY = "CONTACT_FORM_CLEAN_v2";
const PREF_KEY = "CONTACT_PREF_v2";
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

/* مكوّن انزلاق/طي مرن وسلس */
function SlideDown({ open, children, duration = 260 }) {
  const ref = useRef(null);
  const [maxH, setMaxH] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setMaxH(open ? el.scrollHeight : 0);
  }, [open, children]);
  return (
    <div
      style={{
        maxHeight: maxH,
        transition: `max-height ${duration}ms ease, opacity ${duration}ms ease`,
        opacity: open ? 1 : 0,
        overflow: "hidden",
      }}
      aria-hidden={!open}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

/* حوار/Bottom Sheet لمعاينة واتساب */
function WaPreview({ open, onClose, waText, waHref, isRTL = true }) {
  if (!open) return null;
  const decoded = decodeURIComponent(waText);
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="معاينة واتساب"
    >
      <button
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="إغلاق المعاينة"
      />
      <div
        className="relative w-full md:max-w-2xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-5 animate-[slideUp_.22s_ease] md:animate-[fadeIn_.18s_ease]"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">معاينة واتساب</h3>
          <button
            onClick={onClose}
            className="h-9 px-3 rounded-lg border bg-white text-sm border-gray-200 hover:border-blue-400 transition"
          >
            إغلاق
          </button>
        </div>
        <div className="rounded-xl border bg-gray-50 text-[13px] text-gray-800 p-3 max-h-[46vh] md:max-h-[52vh] overflow-auto">
          <pre className="whitespace-pre-wrap">{decoded}</pre>
        </div>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold grid place-items-center"
          >
            فتح واتساب الآن
          </a>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(decoded);
              } catch {}
            }}
            className="h-11 px-4 rounded-xl border bg-white text-sm font-semibold border-gray-200 hover:border-blue-400 transition"
          >
            نسخ النص
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideUp { from { transform: translateY(8%); opacity:.8 } to { transform: translateY(0); opacity:1 } }
        @keyframes fadeIn { from { opacity:.85 } to { opacity:1 } }
      `}</style>
    </div>
  );
}

export default function ContactForm({ onSend, t = {}, isRTL = true }) {
  const [form, setForm] = useState({
    subject: "inquiry",
    name: "",
    phone: "",
    message: "",
    honey: "",
    channel: "either",
  });
  const [state, setState] = useState("idle");
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [kbOpen, setKbOpen] = useState(false);
  const [shake, setShake] = useState({});
  const [remember, setRemember] = useState(true);
  const [savedHint, setSavedHint] = useState("");

  // أزلنا msgFont/msgLH/fullOpen بالكامل
  const [showPrefs, setShowPrefs] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  const phoneRef = useRef(null);
  const msgRef = useRef(null);
  const sendBtnRef = useRef(null);

  // draft + subject + channel
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      const draft = raw ? JSON.parse(raw) : {};
      const pref = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
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
        ...(pref.channel ? { channel: pref.channel } : {}),
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

  // كشف لوحة المفاتيح للموبايل
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKbOpen(window.innerHeight - vv.height > 150);
    vv.addEventListener("resize", onResize);
    onResize();
    return () => vv.removeEventListener("resize", onResize);
  }, []);

  // تحذير قبل الخروج إذا في مسودة
  useEffect(() => {
    const hasDraft =
      (form.name && form.name.trim().length) ||
      (form.phone && form.phone.trim().length) ||
      (form.message && form.message.trim().length);
    const onBeforeUnload = (e) => {
      if (state !== "success" && hasDraft) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [form.name, form.phone, form.message, state]);

  // حفظ “تذكّرني”
  useEffect(() => {
    if (!remember) return;
    const { name, phone } = form;
    localStorage.setItem("CONTACT_ME_v1", JSON.stringify({ name, phone }));
    if (name || phone) {
      setSavedHint(
        isRTL ? "تم حفظ بياناتك محليًا." : "Your details were saved locally."
      );
      const to = setTimeout(() => setSavedHint(""), 3000);
      return () => clearTimeout(to);
    }
  }, [remember, form.name, form.phone, isRTL]);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("CONTACT_ME_v1") || "{}");
      if (saved.name || saved.phone)
        setForm((p) => ({
          ...p,
          name: saved.name || p.name,
          phone: saved.phone || p.phone,
        }));
      const pref = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
      if (pref.channel) setForm((p) => ({ ...p, channel: pref.channel }));
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(PREF_KEY, JSON.stringify({ channel: form.channel }));
  }, [form.channel]);

  const labels = useMemo(
    () => ({
      subject: "موضوع",
      name: "الاسم",
      phone: "الهاتف",
      message: "الرسالة",
      phName: "الاسم الكامل",
      phPhone: "05X-XXX-XXXX",
      phMessage:
        form.subject === "booking"
          ? "الخدمة + اليوم/الساعة…"
          : form.subject === "complaint"
          ? "اكتب الشكوى ..."
          : form.subject === "other"
          ? "اكتب رسالتك…"
          : "سؤالك أو طلب المعلومات…",
      send: "إرسال",
      sending: "جارٍ الإرسال...",
      sent: "تم الإرسال!",
      needMore: "أكمل الحقول",
      a11yTopic: "اختر موضوع رسالتك",
      assistName: "اكتب اسمك الكامل كما سيظهر بالتواصل.",
      assistPhone: "يفضّل رقم متاح على واتساب لسهولة الرد.",
      assistMsg: "اختصر الفكرة بجملة واضحة.",
      moreOpts: "خيارات إضافية",
      moreOptsHide: "إخفاء الخيارات",
      prefTitle: "طريقة التواصل المفضّلة",
      prefPhone: "اتصال",
      prefWA: "واتساب",
      prefEither: "لا فرق",
      savedHint: savedHint,
      prefSummary: "المفضّل:",
    }),
    [form.subject, savedHint, isRTL]
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
    if (id === "phone" && isPhoneComplete(next))
      setTimeout(() => msgRef.current?.focus(), 0);
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
    setShake({
      name: !!eNow.name,
      phone: !!eNow.phone,
      message: !!eNow.message,
    });
    if (Object.keys(eNow).length) {
      const firstKey = ["subject", "name", "phone", "message"].find(
        (k) => eNow[k]
      );
      document.getElementById(firstKey)?.focus();
      setTimeout(() => setShake({}), 350);
      return;
    }
    try {
      setState("loading");
      await onSend({
        subject: form.subject,
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        channel: form.channel,
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
    `موضوع: ${form.subject}\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالقناة المفضلة: ${form.channel}\nالرسالة:\n${form.message}`
  );
  const waHref = `https://wa.me/972543075619?text=${waText}`;

  const isNonDefaultChannel = form.channel !== "either";
  const canShowRemember = form.name.trim() && isPhoneComplete(form.phone);
  const waEnabled = ready;

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 p-4 sm:p-6"
    >
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

      {/* الموضوع */}
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

      {/* الاسم */}
      <ContactField
        id="name"
        label={labels.name}
        placeholder={labels.phName}
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => (phoneRef.current ? phoneRef.current.focus() : null)}
        inputProps={{ enterKeyHint: "next", autoCapitalize: "words" }}
        assistiveText={!errors.name ? labels.assistName : undefined}
        error={touched.name ? errors.name : undefined}
        isValid={touched.name && !errors.name}
        required
        isRTL={isRTL}
        refEl={phoneRef}
        shake={shake.name}
      />

      {/* الهاتف */}
      <ContactField
        id="phone"
        label={labels.phone}
        placeholder={labels.phPhone}
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => (msgRef.current ? msgRef.current.focus() : null)}
        inputProps={{ enterKeyHint: "next", inputMode: "tel", dir: "ltr" }}
        assistiveText={!errors.phone ? labels.assistPhone : undefined}
        error={touched.phone ? errors.phone : undefined}
        isValid={touched.phone && !errors.phone}
        required
        isRTL={isRTL}
        refEl={phoneRef}
        shake={shake.phone}
      />

      {/* الرسالة */}
      <ContactField
        id="message"
        label={labels.message}
        placeholder={labels.phMessage}
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => sendBtnRef.current?.click()}
        inputProps={{ enterKeyHint: "send" }} // أزلنا تخصيص الحجم والتباعد
        assistiveText={!errors.message ? labels.assistMsg : undefined}
        error={touched.message ? errors.message : undefined}
        isValid={touched.message && !errors.message}
        required
        isTextArea
        autoGrow
        maxChars={500}
        isRTL={isRTL}
        refEl={msgRef}
        shake={shake.message}
      />

      {/* --- زر/لوحة "خيارات إضافية" (بعد إزالة أدوات الراحة) --- */}
      <div className="md:col-span-2 -mt-1">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowPrefs((v) => !v)}
            aria-expanded={showPrefs}
            aria-controls="more-prefs-panel"
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full text-[13px] sm:text-sm font-medium bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition"
          >
            <span>{showPrefs ? labels.moreOptsHide : labels.moreOpts}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                showPrefs ? (isRTL ? "-rotate-180" : "rotate-180") : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{ transformOrigin: "50% 50%" }}
            >
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
            </svg>
          </button>

          {isNonDefaultChannel && !showPrefs && (
            <span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100">
              {labels.prefSummary}{" "}
              {form.channel === "whatsapp" ? labels.prefWA : labels.prefPhone}
              <button
                type="button"
                onClick={() => setForm((p) => ({ ...p, channel: "either" }))}
                aria-label="إزالة التفضيل"
                className="text-blue-700 hover:text-blue-900"
              >
                ✕
              </button>
            </span>
          )}
        </div>

        <SlideDown open={showPrefs}>
          <div
            id="more-prefs-panel"
            className="mt-3 p-3 rounded-xl border bg-white border-gray-200"
          >
            <PreferredChannelPicker
              value={form.channel}
              onChange={(v) => setForm((p) => ({ ...p, channel: v }))}
              isRTL={isRTL}
              label={labels.prefTitle}
            />

            {canShowRemember && (
              <div className="mt-3 flex items-center justify-between gap-2">
                <RememberMeSwitch
                  checked={remember}
                  onChange={setRemember}
                  isRTL={isRTL}
                />
                {labels.savedHint && (
                  <span className="text-xs text-emerald-700">
                    {labels.savedHint}
                  </span>
                )}
              </div>
            )}
          </div>
        </SlideDown>
      </div>

      {/* أزرار الإرسال */}
      <div className="md:col-span-2">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-1">
          <button
            type="button"
            onClick={() => waEnabled && setWaOpen(true)}
            className={`h-12 px-5 rounded-full border flex items-center justify-center text-sm font-semibold transition ${
              waEnabled
                ? "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                : "pointer-events-none opacity-50 bg-white text-gray-400 border-gray-200"
            }`}
            aria-disabled={!waEnabled}
          >
            واتساب
          </button>

          <MagicSendButton
            state={state}
            disabled={!ready}
            labelIdle={ready ? labels.send : labels.needMore}
            labelLoading={labels.sending}
            labelSuccess={labels.sent}
            buttonId="sendBtn"
            buttonRef={sendBtnRef}
          />
        </div>

        {/* Mobile sticky bar */}
        <div
          className={`md:hidden sticky bottom-0 z-40 px-4 ${
            kbOpen ? "pb-2" : "pb-[max(10px,env(safe-area-inset-bottom))]"
          } pt-2 bg-white border-t border-gray-200 flex items-center gap-2`}
        >
          <button
            type="button"
            onClick={() => waEnabled && setWaOpen(true)}
            className={`w-12 h-11 rounded-full border flex items-center justify-center text-sm font-semibold ${
              waEnabled
                ? "text-emerald-700 border-emerald-300 bg-white"
                : "opacity-50 text-gray-400 border-gray-200"
            }`}
            aria-label="واتساب"
            aria-disabled={!waEnabled}
          >
            WA
          </button>

          <div className="flex-1">
            <MagicSendButton
              state={state}
              disabled={!ready}
              labelIdle={labels.send}
              labelLoading={labels.sending}
              labelSuccess={labels.sent}
              buttonId="sendBtnMobile"
              buttonRef={sendBtnRef}
            />
          </div>
        </div>
      </div>

      {/* معاينة واتساب تظهر فقط بعد الضغط */}
      <WaPreview
        open={waOpen}
        onClose={() => setWaOpen(false)}
        waText={waText}
        waHref={waHref}
        isRTL={isRTL}
      />
    </form>
  );
}
