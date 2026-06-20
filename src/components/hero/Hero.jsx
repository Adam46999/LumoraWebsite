// src/components/hero/Hero.jsx
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Images,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import heroImage from "../../assets/hero1.jpg";

const HERO_COPY = {
  ar: {
    eyebrow: "تنظيف احترافي بفرق واضح",
    title: "تنظيف عميق ومرتب",
    accent: "لبيتك وسيارتك",
    subtitle:
      "نساعدك تختار الخدمة المناسبة بسهولة، مع اهتمام بالتفاصيل، التزام بالمواعيد، ونتائج واضحة من أول نظرة.",
    primary: "اختر الخدمة",
    secondary: "شاهد نتائجنا",
    scroll: "استكشف الخدمات",
    imageAlt: "خدمة تنظيف احترافية من Lumora",
    trustItems: [
      { icon: Clock3, text: "التزام بالمواعيد" },
      { icon: Sparkles, text: "نتائج واضحة" },
      { icon: MessageCircle, text: "طلب سهل وسريع" },
    ],
  },

  he: {
    eyebrow: "ניקוי מקצועי עם הבדל ברור",
    title: "ניקוי יסודי ומסודר",
    accent: "לבית ולרכב שלך",
    subtitle:
      "נעזור לך לבחור את השירות המתאים בקלות, עם תשומת לב לפרטים, עמידה בזמנים ותוצאות ברורות.",
    primary: "בחירת שירות",
    secondary: "צפייה בתוצאות",
    scroll: "לשירותים",
    imageAlt: "שירות ניקוי מקצועי של Lumora",
    trustItems: [
      { icon: Clock3, text: "עמידה בזמנים" },
      { icon: Sparkles, text: "תוצאות ברורות" },
      { icon: MessageCircle, text: "הזמנה פשוטה ומהירה" },
    ],
  },

  en: {
    eyebrow: "Professional cleaning with visible results",
    title: "Deep, careful cleaning",
    accent: "for your home and car",
    subtitle:
      "Choose the right service easily, with careful attention to detail, dependable timing, and results you can clearly see.",
    primary: "Choose a service",
    secondary: "See our results",
    scroll: "Explore services",
    imageAlt: "Professional Lumora cleaning service",
    trustItems: [
      { icon: Clock3, text: "Dependable timing" },
      { icon: Sparkles, text: "Visible results" },
      { icon: MessageCircle, text: "Quick, easy request" },
    ],
  },
};

export default function Hero({ scrollToSection }) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const copy = HERO_COPY[lang] || HERO_COPY.ar;
  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  const navigateTo = (sectionId) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(sectionId);
      return;
    }

    const target =
      document.getElementById(sectionId) ||
      document.querySelector(`[data-section="${sectionId}"]`);

    if (!target) return;

    const header = document.getElementById("site-header");
    const headerHeight = header?.offsetHeight || 64;

    const top =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        relative isolate flex min-h-[calc(100svh-var(--app-topbar-h,64px))]
        w-full items-center overflow-hidden bg-slate-950
      "
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* الخلفية - zoom out خفيف على الموبايل */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-[-6%] sm:inset-[-2%]">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            draggable={false}
            fetchPriority="high"
            decoding="async"
            className="
              h-full w-full object-cover
              scale-[0.92] sm:scale-[0.98] lg:scale-100
              transition-transform duration-500
            "
            style={{
              objectPosition: "center 32%",
            }}
          />
        </div>
      </div>

      {/* طبقات تغميق لتحسين وضوح الكتابة */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-slate-950/72
          via-slate-950/52
          to-slate-950/86
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-blue-950/20
          via-transparent
          to-slate-950/25
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute left-1/2 top-1/2 -z-10
          h-[420px] w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-blue-500/10 blur-3xl
          sm:h-[620px] sm:w-[620px]
        "
        aria-hidden="true"
      />

      <div
        className="
          mx-auto flex w-full max-w-7xl
          flex-col items-center justify-center
          px-4 py-12 text-center
          sm:px-6 sm:py-16
          lg:px-8 lg:py-20
        "
      >
        <div
          className="
            inline-flex items-center gap-2
            rounded-full border border-white/20
            bg-black/20 px-3.5 py-2
            text-xs font-bold text-white/90
            shadow-sm backdrop-blur-md
            sm:text-sm
          "
        >
          <span
            className="
              flex h-6 w-6 items-center justify-center
              rounded-full bg-blue-500/20
            "
            aria-hidden="true"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-200" />
          </span>

          <span>{copy.eyebrow}</span>
        </div>

        <h1
          className="
            mt-5 max-w-4xl
            text-[clamp(2rem,8vw,4.5rem)]
            font-black leading-[1.1]
            tracking-[-0.035em] text-white
            drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]
            sm:mt-6
          "
        >
          <span className="block">{copy.title}</span>

          <span
            className="
              mt-1 block
              bg-gradient-to-r
              from-blue-200 via-white to-cyan-200
              bg-clip-text text-transparent
            "
          >
            {copy.accent}
          </span>
        </h1>

        <p
          className="
            mt-5 max-w-2xl
            text-sm font-medium leading-7
            text-white/85
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
            sm:mt-6 sm:text-lg sm:leading-8
          "
        >
          {copy.subtitle}
        </p>

        <div
          className="
            mt-7 flex w-full max-w-md
            flex-col gap-3
            sm:mt-8 sm:max-w-none sm:flex-row
            sm:items-center sm:justify-center
          "
        >
          <button
            type="button"
            onClick={() => navigateTo("services")}
            className="
              group inline-flex min-h-12 w-full
              items-center justify-center gap-2.5
              rounded-2xl bg-blue-600
              px-6 py-3.5
              text-sm font-extrabold text-white
              shadow-[0_12px_34px_rgba(37,99,235,0.35)]
              transition
              hover:bg-blue-500
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-900
              sm:w-auto sm:min-w-[190px] sm:text-base
            "
          >
            <span>{copy.primary}</span>

            <DirectionArrow
              className="
                h-4 w-4 transition-transform
                group-hover:-translate-x-0.5
                ltr:group-hover:translate-x-0.5
              "
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => navigateTo("beforeafter")}
            className="
              inline-flex min-h-12 w-full
              items-center justify-center gap-2.5
              rounded-2xl border border-white/25
              bg-white/10 px-6 py-3.5
              text-sm font-extrabold text-white
              shadow-lg backdrop-blur-md
              transition
              hover:border-white/40
              hover:bg-white/15
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              sm:w-auto sm:min-w-[190px] sm:text-base
            "
          >
            <Images className="h-4 w-4" aria-hidden="true" />
            <span>{copy.secondary}</span>
          </button>
        </div>

        <div
          className="
            mt-7 grid w-full max-w-3xl
            grid-cols-1 gap-2.5
            min-[430px]:grid-cols-3
            sm:mt-9 sm:gap-3
          "
        >
          {copy.trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="
                  flex min-h-11 items-center justify-center gap-2
                  rounded-2xl border border-white/15
                  bg-black/20 px-3 py-2.5
                  text-xs font-bold text-white/90
                  backdrop-blur-md
                  sm:min-h-12 sm:text-sm
                "
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-blue-200"
                  aria-hidden="true"
                />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => navigateTo("services")}
          className="
            mt-9 inline-flex items-center gap-2
            rounded-full px-3 py-2
            text-xs font-bold text-white/70
            transition hover:bg-white/10 hover:text-white
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white/70
            sm:mt-11
          "
          aria-label={copy.scroll}
        >
          <span>{copy.scroll}</span>
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
