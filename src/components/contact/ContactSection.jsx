// src/components/contact/ContactSection.jsx
import { useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const GENERAL_PHONE_DISPLAY = "050-272-7724";
const GENERAL_PHONE_LINK = "tel:+972502727724";
const GENERAL_WHATSAPP_NUMBER = "972502727724";

function getCopy(lang) {
  if (lang === "he") {
    return {
      eyebrow: "יצירת קשר",
      title: "בחרו את הדרך הנוחה לכם",
      subtitle:
        "להזמנת שירות בחרו קודם את סוג הניקוי. לשאלה כללית אפשר לפנות ישירות ב-WhatsApp או להתקשר.",

      serviceBadge: "הדרך המומלצת",
      serviceTitle: "אני רוצה להזמין שירות",
      serviceText:
        "בחרו את סוג השירות, הוסיפו כמה פרטים קצרים והבקשה תועבר לאיש הקשר המתאים.",
      serviceButton: "לבחירת שירות",

      whatsappTitle: "שאלה כללית ב-WhatsApp",
      whatsappText: "מתאים לשאלה קצרה שאינה קשורה עדיין לשירות מסוים.",
      whatsappButton: "פתיחת WhatsApp",

      phoneTitle: "מעדיפים לדבר?",
      phoneText: "אפשר להתקשר אלינו ישירות.",
      phoneButton: "התקשרו עכשיו",

      generalMessage: "שלום, יש לי שאלה כללית לגבי שירותי הניקיון של Lumora.",

      footerText: "שירותי ניקוי לספות, שטיחים, פנים הרכב וזכוכית.",
      quickLinks: "קישורים מהירים",
      home: "ראשי",
      services: "שירותים",
      gallery: "תוצאות",
      faq: "שאלות נפוצות",
      contact: "צור קשר",
      backToTop: "חזרה למעלה",
      rights: "כל הזכויות שמורות",
    };
  }

  if (lang === "en") {
    return {
      eyebrow: "Contact us",
      title: "Choose the easiest way to continue",
      subtitle:
        "To request a service, start by choosing the cleaning service. For a general question, contact us through WhatsApp or call directly.",

      serviceBadge: "Recommended",
      serviceTitle: "I want to request a service",
      serviceText:
        "Choose the service, add a few short details, and the request will reach the right contact.",
      serviceButton: "Choose a service",

      whatsappTitle: "General WhatsApp question",
      whatsappText:
        "Best for a quick question that is not related to a specific service yet.",
      whatsappButton: "Open WhatsApp",

      phoneTitle: "Prefer to talk?",
      phoneText: "Call us directly.",
      phoneButton: "Call now",

      generalMessage:
        "Hello, I have a general question about Lumora cleaning services.",

      footerText:
        "Cleaning services for sofas, carpets, car interiors, and glass.",
      quickLinks: "Quick links",
      home: "Home",
      services: "Services",
      gallery: "Results",
      faq: "FAQ",
      contact: "Contact",
      backToTop: "Back to top",
      rights: "All rights reserved",
    };
  }

  return {
    eyebrow: "تواصل معنا",
    title: "اختار أسهل طريقة تناسبك",
    subtitle:
      "لطلب خدمة اختار نوع التنظيف أولًا. للاستفسار العام بتقدر تتواصل مباشرة عبر واتساب أو تتصل فينا.",

    serviceBadge: "الطريقة الأفضل",
    serviceTitle: "بدي أطلب خدمة",
    serviceText:
      "اختار نوع الخدمة، أضف تفاصيل بسيطة، والطلب بوصل تلقائيًا للشخص المسؤول.",
    serviceButton: "اختيار الخدمة",

    whatsappTitle: "استفسار عام عبر واتساب",
    whatsappText: "مناسب لسؤال سريع لسا مش مرتبط بخدمة محددة.",
    whatsappButton: "فتح واتساب",

    phoneTitle: "بتفضل تحكي معنا؟",
    phoneText: "اتصل فينا مباشرة.",
    phoneButton: "اتصل الآن",

    generalMessage: "مرحبًا، عندي استفسار عام بخصوص خدمات التنظيف في Lumora.",

    footerText: "خدمات تنظيف الكنب، السجاد، فرش السيارات والزجاج.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    services: "الخدمات",
    gallery: "النتائج",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    backToTop: "العودة للأعلى",
    rights: "جميع الحقوق محفوظة",
  };
}

function scrollToSection(id) {
  const element = document.getElementById(id);

  if (!element) return;

  const header = document.getElementById("site-header");
  const headerHeight = header?.offsetHeight || 64;

  const top =
    element.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

function ContactCard({ icon: Icon, title, description, children }) {
  return (
    <article
      className="
        flex h-full min-w-0 items-start gap-3
        rounded-[22px] border border-slate-200
        bg-white p-4
        shadow-[0_8px_24px_rgba(15,23,42,0.05)]
        transition duration-300
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)]
        sm:p-5
      "
    >
      <span
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-2xl bg-slate-100
          text-slate-700
        "
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-sm font-black text-slate-950 sm:text-base">
          {title}
        </h3>

        <p className="mt-1 flex-1 text-xs font-medium leading-5 text-slate-500">
          {description}
        </p>

        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
}

export default function ContactSection() {
  const { lang, isRTL } = useLanguage();

  const copy = useMemo(() => getCopy(lang), [lang]);
  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  const generalWhatsAppLink = useMemo(
    () =>
      `https://wa.me/${GENERAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
        copy.generalMessage,
      )}`,
    [copy.generalMessage],
  );

  const footerLinks = [
    {
      id: "home",
      label: copy.home,
    },
    {
      id: "services",
      label: copy.services,
    },
    {
      id: "beforeafter",
      label: copy.gallery,
    },
    {
      id: "faq",
      label: copy.faq,
    },
    {
      id: "contact",
      label: copy.contact,
    },
  ];

  return (
    <>
      <section
        id="contact"
        dir={isRTL ? "rtl" : "ltr"}
        aria-labelledby="contact-title"
        className="
          relative scroll-mt-[calc(var(--app-topbar-h,64px)+12px)]
          overflow-hidden border-t border-slate-100
          bg-[#F6F8FC] px-4 py-14
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
      >
        <div
          className="
            pointer-events-none absolute start-[-130px] top-[-150px]
            h-[320px] w-[320px]
            rounded-full bg-blue-100/60 blur-3xl
          "
          aria-hidden="true"
        />

        <div
          className="
            pointer-events-none absolute bottom-[-170px] end-[-140px]
            h-[340px] w-[340px]
            rounded-full bg-slate-200/60 blur-3xl
          "
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-blue-100
                bg-white px-4 py-2
                text-xs font-extrabold text-blue-700
                shadow-sm
              "
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />

              <span>{copy.eyebrow}</span>
            </div>

            <h2
              id="contact-title"
              className="
                mt-5 text-[clamp(28px,7vw,44px)]
                font-black leading-tight
                tracking-tight text-slate-950
              "
            >
              {copy.title}
            </h2>

            <p
              className="
                mx-auto mt-4 max-w-2xl
                text-sm font-medium leading-7
                text-slate-600
                sm:text-base sm:leading-8
              "
            >
              {copy.subtitle}
            </p>
          </header>

          {/* طلب الخدمة الرئيسي */}
          <div
            className="
              mt-9 overflow-hidden rounded-[28px]
              border border-blue-200
              bg-gradient-to-br from-blue-600 to-blue-700
              p-5 text-white
              shadow-[0_18px_45px_rgba(37,99,235,0.20)]
              sm:p-7
            "
          >
            <div
              className="
                flex flex-col gap-5
                md:flex-row md:items-center md:justify-between
              "
            >
              <div className="max-w-2xl">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/20
                    bg-white/10 px-3 py-1.5
                    text-[11px] font-extrabold text-blue-50
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />

                  <span>{copy.serviceBadge}</span>
                </div>

                <h3 className="mt-3 text-xl font-black sm:text-2xl">
                  {copy.serviceTitle}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-blue-50">
                  {copy.serviceText}
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="
                  group inline-flex min-h-12 w-full shrink-0
                  items-center justify-center gap-2
                  rounded-2xl bg-white px-5
                  text-sm font-extrabold text-blue-700
                  shadow-sm transition
                  hover:bg-blue-50 active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-4 focus-visible:ring-white/30
                  md:w-auto md:min-w-[190px]
                "
              >
                <span>{copy.serviceButton}</span>

                <DirectionArrow
                  className="
                    h-4 w-4 transition-transform
                    group-hover:-translate-x-0.5
                    ltr:group-hover:translate-x-0.5
                  "
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* طرق التواصل السريعة */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ContactCard
              icon={MessageCircle}
              title={copy.whatsappTitle}
              description={copy.whatsappText}
            >
              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-h-11 w-full
                  items-center justify-center gap-2
                  rounded-xl bg-emerald-600 px-4
                  text-sm font-extrabold text-white
                  transition
                  hover:bg-emerald-700 active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-4 focus-visible:ring-emerald-100
                  sm:w-auto
                "
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />

                <span>{copy.whatsappButton}</span>
              </a>
            </ContactCard>

            <ContactCard
              icon={Phone}
              title={copy.phoneTitle}
              description={
                <>
                  {copy.phoneText}{" "}
                  <bdi className="font-extrabold text-slate-700">
                    {GENERAL_PHONE_DISPLAY}
                  </bdi>
                </>
              }
            >
              <a
                href={GENERAL_PHONE_LINK}
                className="
                  inline-flex min-h-11 w-full
                  items-center justify-center gap-2
                  rounded-xl bg-slate-900 px-4
                  text-sm font-extrabold text-white
                  transition
                  hover:bg-slate-800 active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-4 focus-visible:ring-slate-200
                  sm:w-auto
                "
              >
                <Phone className="h-4 w-4" aria-hidden="true" />

                <span>{copy.phoneButton}</span>
              </a>
            </ContactCard>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-slate-200 bg-white"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div
          className="
            mx-auto grid max-w-7xl gap-8
            px-4 py-9
            sm:px-6
            md:grid-cols-[1fr_auto]
            md:items-start
            lg:px-8
          "
        >
          <div className="max-w-md">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                rounded-xl text-xl font-black
                tracking-tight text-blue-600
                transition hover:text-blue-700
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-400
              "
            >
              Lumora
            </button>

            <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
              {copy.footerText}
            </p>

            <a
              href={GENERAL_PHONE_LINK}
              className="
                mt-4 inline-flex items-center gap-2
                rounded-xl text-sm font-extrabold
                text-slate-700 transition
                hover:text-blue-700
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-400
              "
            >
              <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />

              <bdi>{GENERAL_PHONE_DISPLAY}</bdi>
            </a>
          </div>

          <nav aria-label={copy.quickLinks}>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              {copy.quickLinks}
            </p>

            <div className="mt-3 flex max-w-lg flex-wrap gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="
                    inline-flex min-h-10 items-center gap-1
                    rounded-xl border border-slate-200
                    bg-white px-3
                    text-xs font-extrabold text-slate-600
                    transition
                    hover:border-blue-200
                    hover:bg-blue-50
                    hover:text-blue-700
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-blue-300
                  "
                >
                  <span>{link.label}</span>

                  <ChevronRight
                    className={["h-3.5 w-3.5", isRTL ? "rotate-180" : ""].join(
                      " ",
                    )}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/70">
          <div
            className="
              mx-auto flex max-w-7xl
              flex-col gap-3
              px-4 py-5
              text-xs font-medium text-slate-400
              sm:flex-row sm:items-center
              sm:justify-between sm:px-6
              lg:px-8
            "
          >
            <p>
              © {new Date().getFullYear()} Lumora — {copy.rights}
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                inline-flex min-h-10 items-center gap-2
                self-start rounded-xl px-2
                font-extrabold text-slate-500
                transition
                hover:bg-white hover:text-blue-700
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-300
                sm:self-auto
              "
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />

              <span>{copy.backToTop}</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
