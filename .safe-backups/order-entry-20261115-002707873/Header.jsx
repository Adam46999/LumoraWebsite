// src/components/Header.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  BedDouble,
  Check,
  ChevronDown,
  Layers as CarpetIcon,
  Menu,
  MessageCircle,
  Sofa as SofaIcon,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import SidebarMenu from "../header/SidebarMenu";
import QuickContactSheet from "./quick-contact/QuickContactSheet";
import { CONTACTS } from "./quick-contact/contacts";

const LANGUAGES = [
  {
    code: "ar",
    short: "AR",
    label: "العربية",
  },
  {
    code: "en",
    short: "EN",
    label: "English",
  },
  {
    code: "he",
    short: "HE",
    label: "עברית",
  },
];

export default function Header({ scrollToSection }) {
  const { lang, setLang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);
  const desktopLanguageRef = useRef(null);
  const mobileLanguageRef = useRef(null);
  const servicesRef = useRef(null);

  const text = useMemo(() => {
    if (lang === "he") {
      return {
        brand: "LUMORA",
        brandSub: "CLEANING",
        results: "תוצאות",
        services: "שירותים",
        faq: "שאלות נפוצות",
        allServices: "כל השירותים",
        sofa: "ניקוי ספות",
        mattress: "ניקוי מזרנים",
        carpet: "ניקוי שטיחים",
        request: "הזמנת שירות",
        contact: "יצירת קשר",
        language: "שפה",
        openMenu: "פתיחת תפריט",
        home: "חזרה לראש הדף",
        skip: "דלג לתוכן",
        menuHint: "ניווט מהיר וברור באתר.",
      };
    }

    if (lang === "en") {
      return {
        brand: "LUMORA",
        brandSub: "CLEANING",
        results: "Results",
        services: "Services",
        faq: "FAQ",
        allServices: "All services",
        sofa: "Sofa cleaning",
        mattress: "Mattress cleaning",
        carpet: "Carpet cleaning",
        request: "Request service",
        contact: "Contact us",
        language: "Language",
        openMenu: "Open menu",
        home: "Back to top",
        skip: "Skip to content",
        menuHint: "Fast and clear website navigation.",
      };
    }

    return {
      brand: "LUMORA",
      brandSub: "CLEANING",
      results: "النتائج",
      services: "الخدمات",
      faq: "الأسئلة الشائعة",
      allServices: "كل الخدمات",
      sofa: "تنظيف الكنب",
      mattress: "تنظيف فرشات النوم",
      carpet: "تنظيف السجاد",
      request: "جهّز طلبك",
      contact: "تواصل معنا",
      language: "اللغة",
      openMenu: "فتح القائمة",
      home: "العودة للأعلى",
      skip: "تجاوز إلى المحتوى",
      menuHint: "تنقّل سريع وواضح داخل الموقع.",
    };
  }, [lang]);

  const navItems = useMemo(
    () => [
      {
        id: "beforeafter",
        label: text.results,
      },
      {
        id: "services",
        label: text.services,
        subItems: [
          {
            id: "sofa",
            label: text.sofa,
            icon: SofaIcon,
          },
          {
            id: "mattress",
            label: text.mattress,
            icon: BedDouble,
          },
          {
            id: "carpet",
            label: text.carpet,
            icon: CarpetIcon,
          },
        ],
      },
      {
        id: "faq",
        label: text.faq,
      },
    ],
    [text],
  );

  const currentLanguage = useMemo(
    () => LANGUAGES.find((language) => language.code === lang) || LANGUAGES[0],
    [lang],
  );

  const contactItems = useMemo(
    () =>
      (CONTACTS || []).map((contact) => ({
        id: contact.id,

        name:
          lang === "en"
            ? contact.nameEn
            : lang === "he"
              ? contact.nameHe
              : contact.nameAr,

        phoneDisplay: contact.phone,
        phoneRaw: contact.tel,
        whatsappRaw: contact.whatsapp,

        note:
          lang === "en"
            ? contact.noteEn
            : lang === "he"
              ? contact.noteHe
              : contact.noteAr,
      })),
    [lang],
  );

  const closeDropdowns = useCallback(() => {
    setLanguageOpen(false);
    setServicesOpen(false);
  }, []);

  const scrollToId = useCallback(
    (id) => {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      const serviceIds = ["sofa", "mattress", "carpet"];

      let element = document.getElementById(id);

      if (!element && serviceIds.includes(id)) {
        element = document.getElementById("services");
      }

      if (element) {
        const headerHeight = headerRef.current?.offsetHeight || 68;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          10;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        return;
      }

      scrollToSection?.(id);
    },
    [scrollToSection],
  );

  const handleNavigation = useCallback(
    (id) => {
      setActiveId(id);
      setMenuOpen(false);
      closeDropdowns();
      scrollToId(id);
    },
    [closeDropdowns, scrollToId],
  );

  const openContactSheet = useCallback(() => {
    setMenuOpen(false);
    closeDropdowns();
    setContactOpen(true);
  }, [closeDropdowns]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.scrollY < 120) {
        setActiveId("home");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["beforeafter", "services", "faq"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0 || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleEntry?.target?.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.05, 0.2, 0.4],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const insideDesktopLanguage = desktopLanguageRef.current?.contains(
        event.target,
      );

      const insideMobileLanguage = mobileLanguageRef.current?.contains(
        event.target,
      );

      const insideServices = servicesRef.current?.contains(event.target);

      if (!insideDesktopLanguage && !insideMobileLanguage) {
        setLanguageOpen(false);
      }

      if (!insideServices) {
        setServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeDropdowns]);

  const servicesActive = ["services", "sofa", "mattress", "carpet"].includes(
    activeId,
  );

  const navButtonClasses = (active) =>
    [
      "relative inline-flex h-10 items-center justify-center gap-1.5",
      "rounded-xl px-3.5 text-sm font-extrabold",
      "transition-colors duration-200",

      active
        ? "bg-white/10 text-[var(--lumora-lime-light)]"
        : "text-white/75 hover:bg-white/[0.06] hover:text-white",
    ].join(" ");

  return (
    <>
      <a
        href="#beforeafter"
        className="
          sr-only
          focus:not-sr-only
          focus:fixed
          focus:start-3
          focus:top-3
          focus:z-[99999]
          focus:rounded-xl
          focus:bg-white
          focus:px-4
          focus:py-2
          focus:text-slate-900
          focus:shadow-xl
        "
      >
        {text.skip}
      </a>

      <header
        ref={headerRef}
        dir={isRTL ? "rtl" : "ltr"}
        className={[
          "sticky top-0 z-[9998] w-full border-b",
          "transition-colors duration-200",

          scrolled
            ? [
                "border-white/10",
                "bg-[rgba(8,12,29,0.97)]",
                "shadow-[0_10px_30px_rgba(3,7,24,0.22)]",
                "backdrop-blur-xl",
              ].join(" ")
            : [
                "border-white/[0.08]",
                "bg-[rgba(8,12,29,0.94)]",
                "backdrop-blur-lg",
              ].join(" "),
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div className="flex h-[66px] items-center justify-between gap-2 sm:h-[72px]">
            {/* Logo */}
            <button
              type="button"
              dir="ltr"
              onClick={() => handleNavigation("home")}
              aria-label={text.home}
              className="
                flex
                min-w-0
                shrink-0
                items-center
                gap-2.5
                rounded-xl
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[rgba(174,221,57,0.32)]
                  bg-[var(--lumora-navy-900)]
                  sm:h-12
                  sm:w-12
                "
              >
                <img
                  src="/lumora-icon.png"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </span>

              <span className="hidden sm:block">
                <span
                  className="
                    block
                    text-[16px]
                    font-black
                    leading-none
                    tracking-[0.08em]
                    text-white
                  "
                >
                  {text.brand}
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[8px]
                    font-black
                    leading-none
                    tracking-[0.3em]
                    text-[var(--lumora-lime)]
                  "
                >
                  {text.brandSub}
                </span>
              </span>
            </button>

            {/* Desktop navigation */}
            <nav
              aria-label="Primary navigation"
              className="
                hidden
                items-center
                gap-1
                lg:flex
              "
            >
              <button
                type="button"
                onClick={() => handleNavigation("beforeafter")}
                className={navButtonClasses(activeId === "beforeafter")}
              >
                {text.results}
              </button>

              <div ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((current) => !current);

                    setLanguageOpen(false);
                  }}
                  className={navButtonClasses(servicesActive)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  <span>{text.services}</span>

                  <ChevronDown
                    aria-hidden="true"
                    className={[
                      "h-4 w-4 transition-transform duration-200",

                      servicesOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {servicesOpen && (
                  <div
                    role="menu"
                    className={[
                      "absolute top-full mt-2 w-[260px]",
                      "rounded-2xl border border-white/10",
                      "bg-[rgba(8,12,29,0.98)] p-2",
                      "shadow-[0_20px_55px_rgba(0,0,0,0.38)]",
                      "backdrop-blur-xl",

                      isRTL ? "right-0" : "left-0",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleNavigation("services")}
                      className="
                        mb-1
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-2.5
                        text-start
                        text-sm
                        font-extrabold
                        text-[var(--lumora-lime-light)]
                        transition
                        hover:bg-white/[0.06]
                      "
                    >
                      <span>{text.allServices}</span>

                      {activeId === "services" && (
                        <Check aria-hidden="true" className="h-4 w-4" />
                      )}
                    </button>

                    <div className="my-1 h-px bg-white/[0.08]" />

                    {navItems
                      .find((item) => item.id === "services")
                      ?.subItems?.map((service) => {
                        const Icon = service.icon;

                        const active = activeId === service.id;

                        return (
                          <button
                            key={service.id}
                            type="button"
                            role="menuitem"
                            onClick={() => handleNavigation(service.id)}
                            className={[
                              "flex w-full items-center gap-3",
                              "rounded-xl px-3 py-2.5",
                              "text-start text-sm font-bold",
                              "transition",

                              active
                                ? [
                                    "bg-[rgba(174,221,57,0.10)]",
                                    "text-[var(--lumora-lime-light)]",
                                  ].join(" ")
                                : [
                                    "text-white/72",
                                    "hover:bg-white/[0.06]",
                                    "hover:text-white",
                                  ].join(" "),
                            ].join(" ")}
                          >
                            <span
                              className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  bg-[rgba(16,148,192,0.10)]
                                  text-[var(--lumora-cyan-light)]
                                "
                            >
                              <Icon aria-hidden="true" className="h-4 w-4" />
                            </span>

                            <span className="flex-1">{service.label}</span>

                            {active && (
                              <Check aria-hidden="true" className="h-4 w-4" />
                            )}
                          </button>
                        );
                      })}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleNavigation("faq")}
                className={navButtonClasses(activeId === "faq")}
              >
                {text.faq}
              </button>
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <div ref={desktopLanguageRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLanguageOpen((current) => !current);

                    setServicesOpen(false);
                  }}
                  className="
                    inline-flex
                    h-10
                    items-center
                    gap-1.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    text-xs
                    font-extrabold
                    text-white/80
                    transition
                    hover:bg-white/[0.07]
                    hover:text-white
                  "
                  aria-expanded={languageOpen}
                >
                  <span>{currentLanguage.short}</span>

                  <ChevronDown
                    aria-hidden="true"
                    className={[
                      "h-3.5 w-3.5 transition-transform",

                      languageOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {languageOpen && (
                  <LanguageMenu
                    lang={lang}
                    isRTL={isRTL}
                    onSelect={(languageCode) => {
                      setLang(languageCode);

                      setLanguageOpen(false);
                    }}
                  />
                )}
              </div>

              <button
                type="button"
                onClick={openContactSheet}
                className="
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--lumora-lime)]
                  px-4
                  text-sm
                  font-black
                  text-[var(--lumora-navy-950)]
                  transition
                  hover:brightness-105
                  active:scale-[0.98]
                "
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />

                <span>{text.request}</span>
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <div ref={mobileLanguageRef} className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageOpen((current) => !current)}
                  aria-label={text.language}
                  aria-expanded={languageOpen}
                  className="
                    flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    gap-1
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-2
                    text-[11px]
                    font-black
                    text-white
                  "
                >
                  <span>{currentLanguage.short}</span>

                  <ChevronDown
                    aria-hidden="true"
                    className={[
                      "h-3 w-3 transition-transform",

                      languageOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {languageOpen && (
                  <LanguageMenu
                    lang={lang}
                    isRTL={isRTL}
                    onSelect={(languageCode) => {
                      setLang(languageCode);

                      setLanguageOpen(false);
                    }}
                  />
                )}
              </div>

              <button
                type="button"
                onClick={openContactSheet}
                aria-label={text.contact}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[rgba(174,221,57,0.26)]
                  bg-[rgba(174,221,57,0.08)]
                  text-[var(--lumora-lime-light)]
                  active:scale-95
                "
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  closeDropdowns();
                  setMenuOpen(true);
                }}
                aria-label={text.openMenu}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-white
                  active:scale-95
                "
              >
                <Menu aria-hidden="true" className="h-5 w-5" />
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
          hintText={text.menuHint}
          labels={text}
        />
      </header>

      <QuickContactSheet
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        contacts={contactItems}
        lang={lang}
      />

      <a
        href="https://wa.me/972543075619?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81."
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          lang === "en" ? "WhatsApp" : lang === "he" ? "וואטסאפ" : "واتساب"
        }
        className={[
          "fixed bottom-4 z-[9997]",
          "flex h-14 w-14 items-center justify-center",
          "rounded-full border border-white/25",
          "bg-[#25D366] text-white",
          "shadow-[0_12px_30px_rgba(0,0,0,0.24)]",
          "transition-transform duration-200",
          "hover:-translate-y-1",
          "active:scale-95",

          isRTL ? "left-4" : "right-4",
        ].join(" ")}
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6" />
      </a>
    </>
  );
}

function LanguageMenu({ lang, isRTL, onSelect }) {
  return (
    <div
      className={[
        "absolute top-full z-[9999] mt-2",
        "w-[170px] rounded-2xl",
        "border border-white/10",
        "bg-[rgba(8,12,29,0.98)]",
        "p-2 shadow-[0_18px_50px_rgba(0,0,0,0.38)]",
        "backdrop-blur-xl",

        isRTL ? "left-0" : "right-0",
      ].join(" ")}
    >
      {LANGUAGES.map((language) => {
        const active = lang === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => onSelect(language.code)}
            className={[
              "flex h-10 w-full items-center gap-2.5",
              "rounded-xl px-3 text-start",
              "text-sm font-bold transition",

              active
                ? [
                    "bg-[rgba(174,221,57,0.10)]",
                    "text-[var(--lumora-lime-light)]",
                  ].join(" ")
                : [
                    "text-white/72",
                    "hover:bg-white/[0.06]",
                    "hover:text-white",
                  ].join(" "),
            ].join(" ")}
          >
            <span
              className="
                flex
                h-6
                min-w-8
                items-center
                justify-center
                rounded-md
                bg-white/[0.05]
                text-[10px]
                font-black
              "
            >
              {language.short}
            </span>

            <span className="flex-1">{language.label}</span>

            {active && <Check aria-hidden="true" className="h-4 w-4" />}
          </button>
        );
      })}
    </div>
  );
}
