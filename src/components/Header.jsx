// src/components/Header.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  Menu,
  Phone,
  MessageCircle,
  ChevronDown,
  User,
  Copy,
  Check,
} from "lucide-react";
import {
  Layers as CarpetIcon,
  Sofa as SofaIcon,
  CarFront as CarIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SidebarMenu from "../header/SidebarMenu";
import DesktopNav from "../header/DesktopNav";

// ✅ رقمك الحقيقي
const PHONE_NUMBER = "0502727724";
// ✅ مشتق تلقائيًا من رقمك (إسرائيل): 0XXXXXXXXX -> 972XXXXXXXXX
const WHATSAPP_NUMBER = "972502727724";
const CONTACT_NAME = "أمير";
const CONTACT_NUMBER_DISPLAY = "050-272-7724";

export default function Header({ scrollToSection }) {
  const { lang, setLang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  // ===== texts (موحّد ويُمرَّر للسايدبار أيضاً) =====
  const t = useMemo(() => {
    if (lang === "he") {
      return {
        brand: "Lumora",
        cta: "הזמן עכשיו — מענה מהיר",
        ctaShort: "הזמן",
        hint: "טיפ: פתח את התפריט ונווט במהירות.",
        navHint: "ניווט מהיר וברור.",
        langLabel: "שפה",
        actions: "פעולות",
        call: "שיחה",
        whatsapp: "וואטסאפ",
        copy: "העתק מספר",
        copied: "הועתק!",
        skip: "דלג לתוכן",
        contactName: CONTACT_NAME,
        contactNumber: CONTACT_NUMBER_DISPLAY,
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
        actions: "Actions",
        call: "Call",
        whatsapp: "WhatsApp",
        copy: "Copy number",
        copied: "Copied!",
        skip: "Skip to content",
        contactName: CONTACT_NAME,
        contactNumber: CONTACT_NUMBER_DISPLAY,
      };
    }
    return {
      brand: "Lumora",
      cta: "احجز الآن — رد سريع",
      ctaShort: "احجز",
      hint: "تلميح: افتح القائمة للتنقّل بسرعة.",
      navHint: "تنقّل بسرعة، وكل شيء واضح.",
      langLabel: "اللغة",
      actions: "إجراءات",
      call: "اتصال",
      whatsapp: "واتساب",
      copy: "نسخ الرقم",
      copied: "تم النسخ!",
      skip: "تجاوز للمحتوى",
      contactName: CONTACT_NAME,
      contactNumber: CONTACT_NUMBER_DISPLAY,
    };
  }, [lang]);

  // ===== NAV ITEMS =====
  const navItems = useMemo(
    () => [
      {
        id: "home",
        label: lang === "en" ? "Home" : lang === "he" ? "בית" : "الرئيسية",
      },
      {
        id: "services",
        label:
          lang === "en" ? "Services" : lang === "he" ? "שירותים" : "خدماتنا",
        subItems: [
          {
            id: "carpet",
            label:
              lang === "en"
                ? "Carpet cleaning"
                : lang === "he"
                ? "ניקוי שטיחים"
                : "تنظيف سجاد",
            icon: CarpetIcon,
          },
          {
            id: "sofa",
            label:
              lang === "en"
                ? "Sofa cleaning"
                : lang === "he"
                ? "ניקוי ספות"
                : "تنظيف كنب",
            icon: SofaIcon,
          },
          {
            id: "car",
            label:
              lang === "en"
                ? "Car cleaning"
                : lang === "he"
                ? "ניקוי רכב"
                : "تنظيف سيارات",
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
        id: "contact",
        label:
          lang === "en" ? "Contact" : lang === "he" ? "צור קשר" : "تواصل معنا",
      },
    ],
    [lang]
  );

  // ===== UI STATE =====
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0]?.id || "home");
  const [compact, setCompact] = useState(false);

  const [copied, setCopied] = useState(false);

  const headerRef = useRef(null);
  const langRef = useRef(null);
  const actionsRef = useRef(null);

  // ===== helper: smooth scroll + robust for sub-items =====
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

    // service sub-items fallback
    if (!el && (id === "carpet" || id === "sofa" || id === "car")) {
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

      // prevent overlaps
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
        // no-op
      }
    },
    [scrollToSection, scrollToIdLocal]
  );

  const handleCTA = () => handleNavClick("contact");

  // ===== Quick actions =====
  const callNow = useCallback(() => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  }, []);

  const whatsappNow = useCallback(() => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const copyNumber = useCallback(async () => {
    const text = CONTACT_NUMBER_DISPLAY;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // إذا فشل النسخ، نعمل fallback بسيط: فتح dialer
      callNow();
    }
  }, [callNow]);

  // ===== Skip to content =====
  const onSkip = (e) => {
    e.preventDefault();
    handleNavClick("services");
  };

  // ===== Tooltip first time (kept) =====
  useEffect(() => {
    try {
      const key = "lumora_nav_hint_seen_v1";
      const seen = localStorage.getItem(key);
      if (!seen) localStorage.setItem(key, "1");
    } catch {}
  }, []);

  // ===== Scroll spy =====
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;

        const headerOffset = (headerRef.current?.offsetHeight || 72) + 20;
        let bestId = activeId;
        let bestDist = Infinity;

        for (const item of navItems) {
          const el =
            document.getElementById(item.id) ||
            document.querySelector(`[data-section="${item.id}"]`);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - headerOffset);

          if (rect.top <= headerOffset + 140 && dist < bestDist) {
            bestDist = dist;
            bestId = item.id;
          }
        }

        if (bestId && bestId !== activeId) setActiveId(bestId);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems, activeId]);

  // close popups (outside click + ESC)
  useEffect(() => {
    const onDocClick = (e) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (
        actionsOpen &&
        actionsRef.current &&
        !actionsRef.current.contains(e.target)
      ) {
        setActionsOpen(false);
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setMenuOpen(false);
        setActionsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen, actionsOpen]);

  // header shadow + compact mode
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      const scrolled = y > 6;
      const isCompact = y > 70;

      if (scrolled) el.classList.add("shadow-sm");
      else el.classList.remove("shadow-sm");

      setCompact(isCompact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // helpers to open one thing only
  const openMenu = () => {
    setLangOpen(false);
    setActionsOpen(false);
    setMenuOpen(true);
  };
  const toggleLang = () => {
    setMenuOpen(false);
    setActionsOpen(false);
    setLangOpen((v) => !v);
  };
  const toggleActions = () => {
    setMenuOpen(false);
    setLangOpen(false);
    setActionsOpen((v) => !v);
  };

  // ===== Menu item renderer (no nested buttons) =====
  const ActionItem = ({ icon: Icon, title, subtitle, onClick }) => (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={[
        "w-full px-4 py-3 text-sm hover:bg-gray-50 transition",
        "flex items-center gap-3",
        isRTL ? "flex-row-reverse text-right" : "text-left",
      ].join(" ")}
    >
      <Icon className="w-4 h-4 text-blue-600 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-gray-800">{title}</span>
        {subtitle ? (
          <span className="text-xs text-gray-500">{subtitle}</span>
        ) : null}
      </div>
    </button>
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 transition-shadow"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Skip link */}
      <a
        href="#services"
        onClick={onSkip}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999999] bg-blue-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg"
      >
        {t.skip}
      </a>

      <div className="sr-only" aria-live="polite">
        {t.hint}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div
          className={[
            "flex items-center gap-3 transition-all duration-200",
            compact ? "min-h-[58px]" : "min-h-[72px]",
          ].join(" ")}
        >
          {/* Mobile menu */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition"
            onClick={openMenu}
            aria-label="Open menu"
            type="button"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>

          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={[
              "font-extrabold tracking-tight text-blue-600 select-none transition-all",
              compact ? "text-lg" : "text-xl",
            ].join(" ")}
            aria-label="Go to home"
          >
            {t.brand}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <DesktopNav
              navItems={navItems}
              activeId={activeId}
              scrollToSection={handleNavClick}
            />
          </div>

          {/* Right actions (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {/* Quick actions dropdown */}
            <div className="relative" ref={actionsRef}>
              <button
                type="button"
                onClick={toggleActions}
                className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition text-sm font-semibold flex items-center gap-2"
                aria-haspopup="menu"
                aria-expanded={actionsOpen}
              >
                <Phone className="w-4 h-4 text-gray-700" />
                <span>{t.actions}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {actionsOpen && (
                <div
                  role="menu"
                  className={[
                    "absolute mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden",
                    isRTL ? "left-0" : "right-0",
                  ].join(" ")}
                >
                  <ActionItem
                    icon={User}
                    title={t.contactName}
                    subtitle={t.contactNumber}
                    onClick={() => {
                      setActionsOpen(false);
                      callNow();
                    }}
                  />
                  <div className="h-px bg-gray-100" />

                  <ActionItem
                    icon={Phone}
                    title={t.call}
                    subtitle={t.contactNumber}
                    onClick={() => {
                      setActionsOpen(false);
                      callNow();
                    }}
                  />
                  <ActionItem
                    icon={MessageCircle}
                    title={t.whatsapp}
                    subtitle={
                      isRTL ? "رد سريع عبر واتساب" : "Fast WhatsApp reply"
                    }
                    onClick={() => {
                      setActionsOpen(false);
                      whatsappNow();
                    }}
                  />

                  <div className="h-px bg-gray-100" />

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      copyNumber();
                      setActionsOpen(false);
                    }}
                    className={[
                      "w-full px-4 py-3 text-sm hover:bg-gray-50 transition",
                      "flex items-center gap-3",
                      isRTL ? "flex-row-reverse text-right" : "text-left",
                    ].join(" ")}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-blue-600 shrink-0" />
                    )}
                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-gray-800">
                        {t.copy}
                      </span>
                      <span className="text-xs text-gray-500">
                        {copied ? t.copied : t.contactNumber}
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleCTA}
              className={[
                "rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition",
                compact ? "px-3 py-2 text-sm" : "px-4 py-2",
              ].join(" ")}
            >
              {t.cta}
            </button>

            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={toggleLang}
                className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition text-sm font-semibold"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                aria-label={t.langLabel}
              >
                {lang.toUpperCase()}
              </button>

              {langOpen && (
                <div
                  role="menu"
                  className={[
                    "absolute mt-2 w-44 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden",
                    isRTL ? "left-0" : "right-0",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLang("ar");
                      setLangOpen(false);
                    }}
                    className="w-full px-3 py-2 text-right hover:bg-gray-100"
                  >
                    AR العربية
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLang("en");
                      setLangOpen(false);
                    }}
                    className="w-full px-3 py-2 text-right hover:bg-gray-100"
                  >
                    EN English
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLang("he");
                      setLangOpen(false);
                    }}
                    className="w-full px-3 py-2 text-right hover:bg-gray-100"
                  >
                    HE עברית
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile right area: أقل زحمة */}
          <div className="md:hidden ms-auto flex items-center gap-2">
            <div className="relative" ref={actionsRef}>
              <button
                type="button"
                onClick={toggleActions}
                className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition"
                aria-label={t.actions}
              >
                <Phone className="w-4 h-4 text-gray-700" />
              </button>

              {actionsOpen && (
                <div
                  role="menu"
                  className={[
                    "absolute mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden",
                    isRTL ? "left-0" : "right-0",
                  ].join(" ")}
                >
                  <ActionItem
                    icon={User}
                    title={t.contactName}
                    subtitle={t.contactNumber}
                    onClick={() => {
                      setActionsOpen(false);
                      callNow();
                    }}
                  />
                  <div className="h-px bg-gray-100" />

                  <ActionItem
                    icon={Phone}
                    title={t.call}
                    subtitle={t.contactNumber}
                    onClick={() => {
                      setActionsOpen(false);
                      callNow();
                    }}
                  />
                  <ActionItem
                    icon={MessageCircle}
                    title={t.whatsapp}
                    subtitle={
                      isRTL ? "رد سريع عبر واتساب" : "Fast WhatsApp reply"
                    }
                    onClick={() => {
                      setActionsOpen(false);
                      whatsappNow();
                    }}
                  />

                  <div className="h-px bg-gray-100" />

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      copyNumber();
                      setActionsOpen(false);
                    }}
                    className={[
                      "w-full px-4 py-3 text-sm hover:bg-gray-50 transition",
                      "flex items-center gap-3",
                      isRTL ? "flex-row-reverse text-right" : "text-left",
                    ].join(" ")}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-blue-600 shrink-0" />
                    )}
                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-gray-800">
                        {t.copy}
                      </span>
                      <span className="text-xs text-gray-500">
                        {copied ? t.copied : t.contactNumber}
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleCTA}
              className="px-3 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:bg-blue-800 transition"
            >
              {t.ctaShort}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <SidebarMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        scrollToSection={handleNavClick}
        activeId={activeId}
        hintText={t.navHint}
        labels={{
          langLabel: t.langLabel,
          ctaShort: t.ctaShort,
        }}
      />
    </header>
  );
}
