// src/components/Header.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CarFront,
  ChevronDown,
  Layers as CarpetIcon,
  Menu,
  Sofa as SofaIcon,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import DesktopNav from "../header/DesktopNav";
import SidebarMenu from "../header/SidebarMenu";

const LANGUAGES = [
  {
    code: "ar",
    label: "العربية",
    shortLabel: "AR",
  },
  {
    code: "he",
    label: "עברית",
    shortLabel: "HE",
  },
  {
    code: "en",
    label: "English",
    shortLabel: "EN",
  },
];

const MAIN_SECTION_IDS = ["home", "services", "beforeafter", "faq", "contact"];

function getServiceElement(id) {
  if (!id) return null;

  return (
    document.querySelector(`[data-service-id="${id}"]`) ||
    document.getElementById(`service-${id}`) ||
    document.getElementById(id)
  );
}

function LanguageMenu({
  lang,
  setLang,
  isRTL,
  open,
  setOpen,
  containerRef,
  label,
  mobile = false,
}) {
  const activeLanguage =
    LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={[
          "inline-flex items-center justify-center gap-1.5",
          "border border-slate-200 bg-white text-slate-800",
          "font-bold transition",
          "hover:border-slate-300 hover:bg-slate-50",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-blue-500/30",
          mobile
            ? "h-10 min-w-16 rounded-xl px-2.5 text-xs"
            : "h-11 rounded-2xl px-4 text-sm",
        ].join(" ")}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className={mobile ? "uppercase" : ""}>
          {mobile ? activeLanguage.shortLabel : label}
        </span>

        <ChevronDown
          className={[
            "h-4 w-4 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          className={[
            "absolute top-full z-[10020] mt-2 min-w-[170px]",
            "rounded-2xl border border-slate-200 bg-white p-2",
            "shadow-[0_18px_50px_rgba(15,23,42,0.16)]",
            isRTL ? "left-0" : "right-0",
          ].join(" ")}
        >
          {LANGUAGES.map((item) => {
            const selected = lang === item.code;

            return (
              <button
                key={item.code}
                type="button"
                role="menuitem"
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
                className={[
                  "flex h-11 w-full items-center justify-between",
                  "rounded-xl px-3 text-sm font-bold transition",
                  isRTL ? "text-right" : "text-left",
                  selected
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                <span>{item.label}</span>

                {selected ? (
                  <span
                    className="h-2 w-2 rounded-full bg-blue-600"
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default function Header({ scrollToSection }) {
  const { lang, setLang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [compact, setCompact] = useState(false);

  const fixedHeaderRef = useRef(null);
  const desktopLanguageRef = useRef(null);
  const mobileLanguageRef = useRef(null);
  const scrollFrameRef = useRef(null);

  const labels = useMemo(() => {
    if (lang === "he") {
      return {
        brand: "Lumora",
        home: "ראשי",
        services: "שירותים",
        sofa: "ניקוי ספות",
        carpet: "ניקוי שטיחים",
        carSeats: "ניקוי פנים הרכב",
        gallery: "גלריה",
        faq: "שאלות נפוצות",
        contact: "צור קשר",
        cta: "הזמנת שירות",
        ctaShort: "הזמנה",
        language: "שפה",
        navigationHint: "בחר שירות או עבור ישירות לחלק הרצוי.",
        skip: "דלג לשירותים",
        homeAria: "חזרה לראש העמוד",
        menuAria: "פתיחת התפריט",
        primaryNavigation: "ניווט ראשי",
      };
    }

    if (lang === "en") {
      return {
        brand: "Lumora",
        home: "Home",
        services: "Services",
        sofa: "Sofa cleaning",
        carpet: "Carpet cleaning",
        carSeats: "Car interior cleaning",
        gallery: "Gallery",
        faq: "FAQ",
        contact: "Contact us",
        cta: "Request service",
        ctaShort: "Request",
        language: "Language",
        navigationHint:
          "Choose a service or go directly to the section you need.",
        skip: "Skip to services",
        homeAria: "Return to the top",
        menuAria: "Open navigation menu",
        primaryNavigation: "Primary navigation",
      };
    }

    return {
      brand: "Lumora",
      home: "الرئيسية",
      services: "خدماتنا",
      sofa: "تنظيف الكنب",
      carpet: "تنظيف السجاد",
      carSeats: "تنظيف فرش السيارات",
      gallery: "معرض النتائج",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      cta: "اطلب الخدمة",
      ctaShort: "اطلب",
      language: "اللغة",
      navigationHint: "اختر الخدمة أو انتقل مباشرة للقسم الذي تحتاجه.",
      skip: "تجاوز إلى الخدمات",
      homeAria: "العودة إلى أعلى الصفحة",
      menuAria: "فتح قائمة التنقل",
      primaryNavigation: "التنقل الرئيسي",
    };
  }, [lang]);

  const navItems = useMemo(
    () => [
      {
        id: "services",
        label: labels.services,
        subItems: [
          {
            id: "sofa",
            label: labels.sofa,
            icon: SofaIcon,
          },
          {
            id: "carpet",
            label: labels.carpet,
            icon: CarpetIcon,
          },
          {
            id: "carSeats",
            label: labels.carSeats,
            icon: CarFront,
          },
        ],
      },
      {
        id: "beforeafter",
        label: labels.gallery,
      },
      {
        id: "faq",
        label: labels.faq,
      },
      {
        id: "contact",
        label: labels.contact,
      },
    ],
    [labels],
  );

  const fallbackScroll = useCallback((id) => {
    if (!id) return false;

    let element = null;

    if (["sofa", "carpet", "carSeats", "glass"].includes(id)) {
      element = getServiceElement(id);
    } else {
      element = document.getElementById(id);
    }

    if (!element) return false;

    const headerHeight = fixedHeaderRef.current?.offsetHeight || 64;

    const top =
      element.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    return true;
  }, []);

  const handleNavigation = useCallback(
    (id) => {
      if (!id) return;

      setActiveId(id);
      setMenuOpen(false);
      setLangOpen(false);

      if (typeof scrollToSection === "function") {
        scrollToSection(id);
        return;
      }

      fallbackScroll(id);
    },
    [fallbackScroll, scrollToSection],
  );

  const updateActiveSection = useCallback(() => {
    const headerHeight = fixedHeaderRef.current?.offsetHeight || 64;
    const readingLine = window.scrollY + headerHeight + 120;

    let currentId = "home";

    MAIN_SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY;

      if (top <= readingLine) {
        currentId = id;
      }
    });

    setActiveId((previous) => (previous === currentId ? previous : currentId));

    setCompact(window.scrollY > 10);
  }, []);

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (scrollFrameRef.current) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        updateActiveSection();
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScrollOrResize, {
      passive: true,
    });

    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [updateActiveSection]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedInsideDesktop = desktopLanguageRef.current?.contains(
        event.target,
      );

      const clickedInsideMobile = mobileLanguageRef.current?.contains(
        event.target,
      );

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setLangOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setLangOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <a
        href="#services"
        onClick={(event) => {
          event.preventDefault();
          handleNavigation("services");
        }}
        className="
          sr-only
          focus:not-sr-only
          focus:fixed focus:start-3 focus:top-3 focus:z-[10050]
          focus:rounded-xl focus:bg-white focus:px-4 focus:py-2
          focus:font-bold focus:text-slate-900 focus:shadow-lg
        "
      >
        {labels.skip}
      </a>

      <div
        ref={fixedHeaderRef}
        className={[
          "fixed inset-x-0 top-0 z-[9998] w-full",
          "transition-[background-color,box-shadow,border-color]",
          "duration-300",
          compact
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-white/90 backdrop-blur-lg",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-2 sm:h-[74px] sm:gap-4">
            <button
              type="button"
              onClick={() => handleNavigation("home")}
              className={[
                "flex shrink-0 items-center gap-2.5 rounded-2xl",
                "select-none py-1 transition",
                "hover:opacity-80",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-blue-500/30",
                isRTL ? "flex-row-reverse" : "",
              ].join(" ")}
              aria-label={labels.homeAria}
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-2xl border border-blue-100 bg-blue-50
                  text-xl shadow-sm
                "
                aria-hidden="true"
              >
                🧼
              </span>

              <span className="hidden text-start min-[370px]:block">
                <span className="block text-lg font-extrabold leading-none tracking-tight text-blue-600">
                  {labels.brand}
                </span>

                <span className="mt-1 hidden text-[10px] font-semibold text-slate-500 sm:block">
                  {labels.home}
                </span>
              </span>
            </button>

            <div aria-label={labels.primaryNavigation}>
              <DesktopNav
                navItems={navItems}
                activeId={activeId}
                scrollToSection={handleNavigation}
              />
            </div>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <LanguageMenu
                lang={lang}
                setLang={setLang}
                isRTL={isRTL}
                open={langOpen}
                setOpen={setLangOpen}
                containerRef={desktopLanguageRef}
                label={labels.language}
              />

              <button
                type="button"
                onClick={() => handleNavigation("services")}
                className="
                  h-11 rounded-2xl bg-slate-900 px-5
                  text-sm font-extrabold text-white
                  shadow-sm transition
                  hover:bg-slate-800 active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-slate-500/40
                "
              >
                {labels.cta}
              </button>
            </div>

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <LanguageMenu
                lang={lang}
                setLang={setLang}
                isRTL={isRTL}
                open={langOpen}
                setOpen={setLangOpen}
                containerRef={mobileLanguageRef}
                label={labels.language}
                mobile
              />

              <button
                type="button"
                onClick={() => {
                  setLangOpen(false);
                  setMenuOpen(true);
                }}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-slate-200 bg-white
                  text-slate-800 transition
                  hover:bg-slate-50 active:scale-95
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-500/30
                "
                aria-label={labels.menuAria}
                aria-expanded={menuOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <SidebarMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navItems}
          scrollToSection={handleNavigation}
          activeId={activeId}
          hintText={labels.navigationHint}
          labels={labels}
        />
      </div>

      {/*
        الهيدر ثابت، لذلك هذا العنصر يحجز مكانه داخل الصفحة
        ويمنع الهيرو من الاختباء خلفه.
      */}
      <div className="h-16 w-full shrink-0 sm:h-[74px]" aria-hidden="true" />
    </>
  );
}
