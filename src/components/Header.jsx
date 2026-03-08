// src/components/Header.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  Layers as CarpetIcon,
  Sofa as SofaIcon,
  CarFront as CarIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SidebarMenu from "../header/SidebarMenu";
import DesktopNav from "../header/DesktopNav";

import QuickContactSheet from "./quick-contact/QuickContactSheet";
import { CONTACTS } from "./quick-contact/contacts";

export default function Header({ scrollToSection }) {
  const { lang, setLang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const t = useMemo(() => {
    if (lang === "he") {
      return {
        brand: "Lumora",
        cta: "הזמן עכשיו — מענה מהיר",
        ctaShort: "הזמן",
        hint: "טיפ: פתח את התפריט ונווט במהירות.",
        navHint: "ניווט מהיר וברור.",
        langLabel: "שפה",
        actions: "צור קשר",
        contact: "צור קשר",
        skip: "דלג לתוכן",
      };
    }
    if (lang === "en") {
      return {
        brand: "Lumora",
        cta: "Book now — fast response",
        ctaShort: "Book",
        hint: "Tip: open the menu to navigate quickly.",
        navHint: "Fast, clear navigation.",
        langLabel: "Language",
        actions: "Contact",
        contact: "Contact",
        skip: "Skip to content",
      };
    }
    return {
      brand: "Lumora",
      cta: "احجز الآن — رد سريع",
      ctaShort: "احجز",
      hint: "تلميح: افتح القائمة للتنقّل بسرعة.",
      navHint: "تنقّل بسرعة، وكل شيء واضح.",
      langLabel: "اللغة",
      actions: "تواصل",
      contact: "تواصل",
      skip: "تجاوز للمحتوى",
    };
  }, [lang]);

  const navItems = useMemo(
    () => [
      {
        id: "services",
        label:
          lang === "en" ? "Services" : lang === "he" ? "שירותים" : "خدماتنا",
        subItems: [
          {
            id: "sofa",
            label:
              lang === "en"
                ? "Sofa cleaning"
                : lang === "he"
                  ? "ניקוי ספות"
                  : "تنظيف الكنب",
            icon: SofaIcon,
          },
          {
            id: "carpet",
            label:
              lang === "en"
                ? "Carpet cleaning"
                : lang === "he"
                  ? "ניקוי שטיחים"
                  : "تنظيف السجاد",
            icon: CarpetIcon,
          },
          {
            id: "carSeats",
            label:
              lang === "en"
                ? "Car interior cleaning"
                : lang === "he"
                  ? "ניקוי פנים הרכב"
                  : "تنظيف فرش السيارات",
            icon: CarIcon,
          },
        ],
      },
      {
        id: "beforeafter",
        label:
          lang === "en" ? "Gallery" : lang === "he" ? "גלריה" : "معرض الصور",
      },
      {
        id: "faq",
        label:
          lang === "en"
            ? "FAQ"
            : lang === "he"
              ? "שאלות נפוצות"
              : "الأسئلة الشائعة",
      },
      {
        id: "contact",
        label:
          lang === "en" ? "Contact" : lang === "he" ? "צור קשר" : "تواصل معنا",
      },
    ],
    [lang],
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0]?.id || "services");
  const [compact, setCompact] = useState(false);

  const headerRef = useRef(null);
  const langRefDesktop = useRef(null);
  const langRefMobile = useRef(null);
  const actionsRefDesktop = useRef(null);
  const actionsRefMobile = useRef(null);

  const contactItems = useMemo(() => {
    return (CONTACTS || []).map((c) => ({
      id: c.id,
      name: lang === "en" ? c.nameEn : lang === "he" ? c.nameHe : c.nameAr,
      phoneDisplay: c.phone,
      phoneRaw: c.tel,
      whatsappRaw: c.whatsapp,
      note: lang === "en" ? c.noteEn : lang === "he" ? c.noteHe : c.noteAr,
    }));
  }, [lang]);

  const scrollToIdLocal = useCallback((id) => {
    if (!id) return false;

    const candidates = [
      id,
      `section-${id}`,
      `sec-${id}`,
      `#${id}`,
      `item-${id}`,
      `svc-${id}`,
    ];

    let el = null;
    for (const c of candidates) {
      const clean = c.startsWith("#") ? c.slice(1) : c;
      el = document.getElementById(clean);
      if (el) break;
    }

    if (!el) el = document.querySelector(`[data-section="${id}"]`);
    if (!el) el = document.querySelector(`[data-id="${id}"]`);
    if (!el) el = document.querySelector(`[data-anchor="${id}"]`);

    if (!el && (id === "carpet" || id === "sofa" || id === "carSeats")) {
      const parent =
        document.getElementById("services") ||
        document.querySelector(`[data-section="services"]`);
      if (parent) {
        const offset = (headerRef.current?.offsetHeight || 72) + 12;
        const top =
          parent.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });

        window.setTimeout(() => {
          const again =
            document.getElementById(id) ||
            document.querySelector(`[data-section="${id}"]`) ||
            document.querySelector(`[data-id="${id}"]`) ||
            document.querySelector(`[data-anchor="${id}"]`);
          if (again) {
            const top2 =
              again.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: top2, behavior: "smooth" });
          }
        }, 320);

        return true;
      }
      return false;
    }

    if (!el) return false;

    const offset = (headerRef.current?.offsetHeight || 72) + 12;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  }, []);

  const handleNavClick = useCallback(
    (id) => {
      setActiveId(id);
      setMenuOpen(false);
      setLangOpen(false);
      setActionsOpen(false);

      let ok = false;
      try {
        if (typeof scrollToSection === "function") {
          scrollToSection(id);
          ok = true;
        }
      } catch {
        ok = false;
      }

      const scrolled = scrollToIdLocal(id);
      if (!ok && !scrolled) {
      }
    },
    [scrollToSection, scrollToIdLocal],
  );

  const handleCTA = () => handleNavClick("contact");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      const inLang =
        langRefDesktop.current?.contains(e.target) ||
        langRefMobile.current?.contains(e.target);

      const inActions =
        actionsRefDesktop.current?.contains(e.target) ||
        actionsRefMobile.current?.contains(e.target);

      if (!inLang) setLangOpen(false);
      if (!inActions) setActionsOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[99999] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-xl focus:shadow"
      >
        {t.skip}
      </a>

      <header
        ref={headerRef}
        className={[
          "sticky top-0 z-[9998] w-full transition-all duration-300",
          compact
            ? "bg-white/92 backdrop-blur border-b border-slate-200 shadow-sm"
            : "bg-white/88 backdrop-blur-sm",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 sm:h-[74px] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className={[
                "flex items-center gap-3 select-none shrink-0",
                isRTL ? "flex-row-reverse" : "",
              ].join(" ")}
              aria-label="Go to home"
            >
              <span className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">
                🧼
              </span>

              <span className="text-start">
                <span className="block font-extrabold text-lg tracking-tight text-blue-600 leading-none">
                  {t.brand}
                </span>
              </span>
            </button>

            <DesktopNav
              navItems={navItems}
              activeId={activeId}
              scrollToSection={handleNavClick}
            />

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <div ref={langRefDesktop} className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="h-11 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-sm font-bold text-slate-800 inline-flex items-center gap-2"
                >
                  <span>{t.langLabel}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langOpen && (
                  <div
                    className={[
                      "absolute top-full mt-2 min-w-[180px] bg-white border border-slate-200 rounded-2xl shadow-lg p-2",
                      isRTL ? "left-0" : "right-0",
                    ].join(" ")}
                  >
                    {[
                      { code: "ar", label: "العربية" },
                      { code: "en", label: "English" },
                      { code: "he", label: "עברית" },
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLang(item.code);
                          setLangOpen(false);
                        }}
                        className={[
                          "w-full h-11 px-3 rounded-xl text-sm font-semibold text-start hover:bg-slate-50 transition",
                          lang === item.code
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700",
                        ].join(" ")}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleCTA}
                className="h-11 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
              >
                {t.cta}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <div ref={langRefMobile} className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="h-10 px-3 rounded-2xl border border-slate-200 bg-white text-sm font-bold text-slate-800 inline-flex items-center gap-1.5"
                >
                  <span>{t.langLabel}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langOpen && (
                  <div
                    className={[
                      "absolute top-full mt-2 min-w-[170px] bg-white border border-slate-200 rounded-2xl shadow-lg p-2 z-[9999]",
                      isRTL ? "left-0" : "right-0",
                    ].join(" ")}
                  >
                    {[
                      { code: "ar", label: "العربية" },
                      { code: "en", label: "English" },
                      { code: "he", label: "עברית" },
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLang(item.code);
                          setLangOpen(false);
                        }}
                        className={[
                          "w-full h-10 px-3 rounded-xl text-sm font-semibold text-start hover:bg-slate-50 transition",
                          lang === item.code
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700",
                        ].join(" ")}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="h-10 w-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-800"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <SidebarMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navItems}
          scrollToSection={handleNavClick}
          activeId={activeId}
          hintText={t.navHint}
          labels={t}
        />
      </header>

      <QuickContactSheet
        open={actionsOpen}
        onClose={() => setActionsOpen(false)}
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
          "fixed z-[9997] bottom-4 sm:bottom-5",
          isRTL ? "left-4 sm:left-5" : "right-4 sm:right-5",
          "h-14 w-14 rounded-full shadow-lg",
          "bg-[#25D366] text-white",
          "flex items-center justify-center",
          "hover:scale-105 active:scale-95 transition-all",
        ].join(" ")}
      >
        <Phone className="w-5 h-5" />
      </a>
    </>
  );
}
