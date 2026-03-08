// src/components/contact/ContactForm.jsx
import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const phoneRegex = /^(?:\+972|0)(?:5\d{8}|[23489]\d{7,8})$/;
const DRAFT_KEY = "CONTACT_DRAFT_V2";
const PREF_KEY = "CONTACT_PREFS_V2";

function fmtIL(v) {
  const s = String(v || "").replace(/[^\d+]/g, "");
  if (s.startsWith("+972")) return s.slice(0, 13);
  if (s.startsWith("0")) return s.slice(0, 10);
  return s.slice(0, 13);
}

function isPhoneComplete(v) {
  const s = String(v || "").replace(/\D/g, "");
  return s.length >= 10;
}

function ContactField({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onEnterNext,
  inputProps = {},
  assistiveText,
  error,
  isValid,
  required,
  isTextArea = false,
  autoGrow = false,
  maxChars,
  isRTL = true,
  refEl,
  shake = false,
}) {
  const common =
    "w-full rounded-2xl border bg-white px-4 text-sm text-gray-900 outline-none transition";
  const stateCls = error
    ? "border-rose-300 focus:border-rose-400"
    : isValid
      ? "border-emerald-300 focus:border-emerald-400"
      : "border-gray-200 focus:border-blue-400";

  const cls = `${common} ${stateCls} ${
    isTextArea ? "min-h-[130px] py-3 resize-none" : "h-12"
  } ${shake ? "animate-[shake_.28s_linear]" : ""}`;

  return (
    <div className={isTextArea ? "md:col-span-2" : ""}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-gray-800"
      >
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </label>

      {isTextArea ? (
        <textarea
          id={id}
          ref={refEl}
          value={value}
          onChange={(e) => {
            onChange(e);
            if (autoGrow) {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }
          }}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) onEnterNext?.();
          }}
          placeholder={placeholder}
          className={cls}
          dir={isRTL ? "rtl" : "ltr"}
          maxLength={maxChars}
          {...inputProps}
        />
      ) : (
        <input
          id={id}
          ref={refEl}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onEnterNext?.();
            }
          }}
          placeholder={placeholder}
          className={cls}
          dir={inputProps.dir || (isRTL ? "rtl" : "ltr")}
          {...inputProps}
        />
      )}

      <div className="mt-2 flex items-start justify-between gap-3">
        <p className="text-xs text-gray-500">{error || assistiveText || " "}</p>
        {typeof maxChars === "number" ? (
          <span className="shrink-0 text-[11px] text-gray-400">
            {String(value || "").length}/{maxChars}
          </span>
        ) : null}
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0) }
          25% { transform: translateX(3px) }
          75% { transform: translateX(-3px) }
        }
      `}</style>
    </div>
  );
}

function SubjectChips({
  id,
  label,
  value,
  onChange,
  required,
  error,
  isRTL = true,
}) {
  const items = [
    {
      value: "inquiry",
      labelAr: "استفسار",
      labelEn: "Inquiry",
      labelHe: "שאלה",
    },
    { value: "booking", labelAr: "حجز", labelEn: "Booking", labelHe: "הזמנה" },
    { value: "complaint", labelAr: "ملاحظة", labelEn: "Note", labelHe: "הערה" },
    { value: "other", labelAr: "أخرى", labelEn: "Other", labelHe: "אחר" },
  ];

  return (
    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-semibold text-gray-800">
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </label>

      <div id={id} className="flex flex-wrap gap-2" dir={isRTL ? "rtl" : "ltr"}>
        {items.map((item) => {
          const active = value === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange({ target: { value: item.value } })}
              className={[
                "h-10 px-4 rounded-full border text-sm font-semibold transition",
                active
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-200 hover:bg-blue-50/60",
              ].join(" ")}
            >
              {item.labelAr}
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-xs text-rose-500">{error || " "}</p>
    </div>
  );
}

function PreferredChannelPicker({ value, onChange, isRTL = true, label }) {
  const items = [
    { value: "either", label: "لا فرق" },
    { value: "whatsapp", label: "واتساب" },
    { value: "phone", label: "اتصال" },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <p className="mb-2 text-sm font-semibold text-gray-800">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = value === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={[
                "h-10 px-4 rounded-full border text-sm font-semibold transition",
                active
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-200 hover:bg-blue-50/60",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RememberMeSwitch({ checked, onChange, isRTL = true }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={[
        "inline-flex items-center gap-2 text-sm font-medium text-gray-700",
        isRTL ? "flex-row-reverse" : "",
      ].join(" ")}
    >
      <span
        className={[
          "relative h-6 w-11 rounded-full transition",
          checked ? "bg-emerald-500" : "bg-gray-300",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition",
            checked
              ? isRTL
                ? "left-0.5"
                : "right-0.5"
              : isRTL
                ? "right-0.5"
                : "left-0.5",
          ].join(" ")}
        />
      </span>
      <span>تذكّرني</span>
    </button>
  );
}

function MagicSendButton({
  state,
  disabled,
  labelIdle,
  labelLoading,
  labelSuccess,
  buttonId,
  buttonRef,
}) {
  const label =
    state === "loading"
      ? labelLoading
      : state === "success"
        ? labelSuccess
        : labelIdle;

  return (
    <button
      id={buttonId}
      ref={buttonRef}
      type="submit"
      disabled={disabled || state === "loading"}
      className={[
        "w-full h-12 rounded-2xl text-sm font-bold transition",
        disabled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : state === "success"
            ? "bg-emerald-600 text-white"
            : "bg-slate-900 hover:bg-slate-800 text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function SlideDown({ open, children, duration = 220 }) {
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

function WaPreview({
  open,
  onClose,
  waText,
  waHref,
  isRTL = true,
  title,
  closeText,
  openNowText,
  copyText,
  overlayCloseLabel,
}) {
  if (!open) return null;
  const decoded = decodeURIComponent(waText);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label={overlayCloseLabel}
      />
      <div
        className="relative w-full md:max-w-2xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-5 animate-[slideUp_.22s_ease] md:animate-[fadeIn_.18s_ease]"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="h-9 px-3 rounded-lg border bg-white text-sm border-gray-200 hover:border-blue-400 transition"
          >
            {closeText}
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
            {openNowText}
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
            {copyText}
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
  const lang = t?.__lang || (isRTL ? "ar" : "en");

  const tr = useCallback(
    (key, ar, en, he) => {
      const v = t?.[key];
      if (typeof v === "string" && v.trim()) return v;
      if (lang === "he") return he ?? en ?? ar;
      if (lang === "en") return en ?? ar ?? he;
      return ar ?? en ?? he;
    },
    [t, lang],
  );

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
  const [showPrefs, setShowPrefs] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const msgRef = useRef(null);
  const sendBtnRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      const draft = raw ? JSON.parse(raw) : {};
      const pref = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
      const urlSubject = new URLSearchParams(window.location.search).get(
        "subject",
      );
      const normalized = ["inquiry", "booking", "complaint", "other"].includes(
        urlSubject || "",
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
      JSON.stringify({ subject, name, phone, message }),
    );
  }, [form.subject, form.name, form.phone, form.message]);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKbOpen(window.innerHeight - vv.height > 150);
    vv.addEventListener("resize", onResize);
    onResize();
    return () => vv.removeEventListener("resize", onResize);
  }, []);

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

  useEffect(() => {
    if (!remember) return;
    const { name, phone } = form;
    localStorage.setItem("CONTACT_ME_v1", JSON.stringify({ name, phone }));
    if (name || phone) {
      setSavedHint(
        tr(
          "contactSavedHint",
          "تم حفظ بياناتك محليًا.",
          "Your details were saved locally.",
          "הפרטים נשמרו מקומית.",
        ),
      );
      const to = setTimeout(() => setSavedHint(""), 3000);
      return () => clearTimeout(to);
    }
  }, [remember, form.name, form.phone, tr]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("CONTACT_ME_v1") || "{}");
      if (saved.name || saved.phone) {
        setForm((p) => ({
          ...p,
          name: saved.name || p.name,
          phone: saved.phone || p.phone,
        }));
      }

      const pref = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
      if (pref.channel) setForm((p) => ({ ...p, channel: pref.channel }));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(PREF_KEY, JSON.stringify({ channel: form.channel }));
  }, [form.channel]);

  const labels = useMemo(() => {
    const phMessage =
      form.subject === "booking"
        ? tr(
            "contactPhMessageBooking",
            "الخدمة + اليوم/الساعة…",
            "Service + day/time…",
            "שירות + יום/שעה…",
          )
        : form.subject === "complaint"
          ? tr(
              "contactPhMessageComplaint",
              "اكتب الشكوى ...",
              "Write your complaint...",
              "כתוב/י את התלונה…",
            )
          : form.subject === "other"
            ? tr(
                "contactPhMessageOther",
                "اكتب رسالتك…",
                "Write your message…",
                "כתוב/י הודעה…",
              )
            : tr(
                "contactPhMessageInquiry",
                "سؤالك أو طلب المعلومات…",
                "Your question or request…",
                "השאלה/הבקשה שלך…",
              );

    return {
      subject: tr("contactSubjectLabel", "موضوع", "Subject", "נושא"),
      name: tr("contactNameLabel", "الاسم", "Name", "שם"),
      phone: tr("contactPhoneLabel", "الهاتف", "Phone", "טלפון"),
      message: tr("contactMessageLabel", "الرسالة", "Message", "הודעה"),

      phName: tr("contactPhName", "الاسم الكامل", "Full name", "שם מלא"),
      phPhone: tr("contactPhPhone", "رقم الهاتف", "Phone number", "מספר טלפון"),
      phMessage,

      send: tr("contactSend", "إرسال", "Send", "שלח"),
      sending: tr("contactSending", "جارٍ الإرسال...", "Sending...", "שולח..."),
      sent: tr("contactSent", "تم الإرسال!", "Sent!", "נשלח!"),
      needMore: tr(
        "contactNeedMore",
        "أكمل الحقول",
        "Complete fields",
        "השלם שדות",
      ),

      assistName: tr(
        "contactAssistName",
        "اكتب اسمك الكامل كما سيظهر بالتواصل.",
        "Enter your full name as it should appear.",
        "כתוב/י שם מלא כפי שיופיע.",
      ),
      assistPhone: tr(
        "contactAssistPhone",
        "يفضّل رقم متاح على واتساب لسهولة الرد.",
        "Prefer a WhatsApp number for faster replies.",
        "עדיף מספר זמין בוואטסאפ לתגובה מהירה.",
      ),
      assistMsg: tr(
        "contactAssistMsg",
        "اختصر الفكرة بجملة واضحة.",
        "Summarize in a clear sentence.",
        "סכם/י במשפט ברור.",
      ),

      moreOpts: tr(
        "contactMoreOpts",
        "خيارات إضافية",
        "More options",
        "אפשרויות נוספות",
      ),
      moreOptsHide: tr(
        "contactMoreOptsHide",
        "إخفاء الخيارات",
        "Hide options",
        "הסתר אפשרויות",
      ),

      prefTitle: tr(
        "contactPrefTitle",
        "طريقة التواصل المفضّلة",
        "Preferred contact method",
        "דרך יצירת קשר מועדפת",
      ),
      prefPhone: tr("contactPrefPhone", "اتصال", "Call", "שיחה"),
      prefWA: tr("contactPrefWA", "واتساب", "WhatsApp", "וואטסאפ"),
      prefEither: tr("contactPrefEither", "لا فرق", "Either", "לא משנה"),

      savedHint,
      prefSummary: tr("contactPrefSummary", "المفضّل:", "Preferred:", "מועדף:"),
      waButton: tr("contactWAButton", "واتساب", "WhatsApp", "וואטסאפ"),
      waPreviewTitle: tr(
        "contactWAPreviewTitle",
        "معاينة واتساب",
        "WhatsApp preview",
        "תצוגה מקדימה - וואטסאפ",
      ),
      close: tr("commonClose", "إغلاق", "Close", "סגור"),
      openNow: tr(
        "contactWAOpenNow",
        "فتح واتساب الآن",
        "Open WhatsApp now",
        "פתח וואטסאפ עכשיו",
      ),
      copyText: tr("contactWACopy", "نسخ النص", "Copy text", "העתק טקסט"),
      overlayCloseLabel: tr(
        "contactWAPreviewClose",
        "إغلاق المعاينة",
        "Close preview",
        "סגור תצוגה מקדימה",
      ),
      clearPrefA11y: tr(
        "contactClearPrefA11y",
        "إزالة التفضيل",
        "Clear preference",
        "נקה העדפה",
      ),
    };
  }, [form.subject, savedHint, tr]);

  const validate = (draft = form) => {
    const e = {};

    if (!draft.subject) {
      e.subject = tr(
        "contactErrSubject",
        "اختر الموضوع",
        "Choose a subject",
        "בחר נושא",
      );
    }

    if (!draft.name.trim()) {
      e.name = tr(
        "contactErrName",
        "اكتب اسمك",
        "Enter your name",
        "הכנס/י שם",
      );
    }

    const clean = draft.phone.replace(/\D/g, "");
    const normalized = clean.startsWith("972")
      ? `+${clean}`
      : clean.startsWith("0")
        ? `0${clean.slice(1)}`
        : draft.phone.trim();

    if (!draft.phone.trim()) {
      e.phone = tr(
        "contactErrPhoneEmpty",
        "أدخل رقمك",
        "Enter your phone",
        "הכנס/י טלפון",
      );
    } else if (!phoneRegex.test(normalized)) {
      e.phone = tr(
        "contactErrPhoneInvalid",
        "رقم غير صالح",
        "Invalid phone number",
        "מספר לא תקין",
      );
    }

    if (!draft.message.trim()) {
      e.message = tr(
        "contactErrMessage",
        "اكتب الرسالة",
        "Enter a message",
        "כתוב/י הודעה",
      );
    }

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

  const channelLabel =
    form.channel === "whatsapp"
      ? labels.prefWA
      : form.channel === "phone"
        ? labels.prefPhone
        : labels.prefEither;

  const waText = encodeURIComponent(
    `${tr("waLabelSubject", "موضوع", "Subject", "נושא")}: ${form.subject}\n` +
      `${tr("waLabelName", "الاسم", "Name", "שם")}: ${form.name}\n` +
      `${tr("waLabelPhone", "الهاتف", "Phone", "טלפון")}: ${form.phone}\n` +
      `${tr(
        "waLabelChannel",
        "القناة المفضلة",
        "Preferred channel",
        "ערוץ מועדף",
      )}: ${channelLabel}\n` +
      `${tr("waLabelMessage", "الرسالة", "Message", "הודעה")}:\n${form.message}`,
  );

  const waHref = `https://wa.me/972543075619?text=${waText}`;

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
        (k) => eNow[k],
      );
      document.getElementById(firstKey)?.focus();
      setTimeout(() => setShake({}), 350);
      return;
    }

    let waWindow = null;

    try {
      waWindow = window.open("", "_blank", "noopener,noreferrer");

      setState("loading");

      await onSend({
        subject: form.subject,
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        channel: form.channel,
      });

      if (waWindow) {
        waWindow.location.href = waHref;
      } else {
        window.open(waHref, "_blank", "noopener,noreferrer");
      }

      setState("success");
      setForm((p) => ({ ...p, name: "", phone: "", message: "" }));
      setTouched({});
      setErrors({});
      setTimeout(() => setState("idle"), 1100);
    } catch {
      if (waWindow) {
        try {
          waWindow.close();
        } catch {}
      }
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

  const isNonDefaultChannel = form.channel !== "either";
  const canShowRemember = form.name.trim() && isPhoneComplete(form.phone);
  const waEnabled = ready;

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 p-4 sm:p-6"
    >
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

      <ContactField
        id="name"
        label={labels.name}
        placeholder={labels.phName}
        value={form.name}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => phoneRef.current?.focus()}
        inputProps={{ enterKeyHint: "next", autoCapitalize: "words" }}
        assistiveText={!errors.name ? labels.assistName : undefined}
        error={touched.name ? errors.name : undefined}
        isValid={touched.name && !errors.name}
        required
        isRTL={isRTL}
        refEl={nameRef}
        shake={shake.name}
      />

      <ContactField
        id="phone"
        label={labels.phone}
        placeholder={labels.phPhone}
        value={form.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => msgRef.current?.focus()}
        inputProps={{ enterKeyHint: "next", inputMode: "tel", dir: "ltr" }}
        assistiveText={!errors.phone ? labels.assistPhone : undefined}
        error={touched.phone ? errors.phone : undefined}
        isValid={touched.phone && !errors.phone}
        required
        isRTL={isRTL}
        refEl={phoneRef}
        shake={shake.phone}
      />

      <ContactField
        id="message"
        label={labels.message}
        placeholder={labels.phMessage}
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onEnterNext={() => sendBtnRef.current?.click()}
        inputProps={{ enterKeyHint: "send" }}
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
                aria-label={labels.clearPrefA11y}
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

      <div className="md:col-span-2">
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
            {labels.waButton}
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
            aria-label={labels.waButton}
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

      <WaPreview
        open={waOpen}
        onClose={() => setWaOpen(false)}
        waText={waText}
        waHref={waHref}
        isRTL={isRTL}
        title={labels.waPreviewTitle}
        closeText={labels.close}
        openNowText={labels.openNow}
        copyText={labels.copyText}
        overlayCloseLabel={labels.overlayCloseLabel}
      />
    </form>
  );
}
