// src/header/SidebarMenu.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { createPortal } from "react-dom";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Sparkles,
  X,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const LANGUAGE_OPTIONS = [
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

export default function SidebarMenu({
  menuOpen,
  setMenuOpen,
  navItems = [],
  scrollToSection,
  activeId,
  hintText,
  labels,
}) {
  const { lang, setLang } = useLanguage();

  const isRTL = lang === "ar" || lang === "he";
  const direction = isRTL ? "rtl" : "ltr";

  const panelRef = useRef(null);
  const [openParentId, setOpenParentId] = useState(null);

  const ArrowIcon = useMemo(
    () => (isRTL ? ChevronLeft : ChevronRight),
    [isRTL],
  );

  const text = useMemo(() => {
    if (lang === "he") {
      return {
        menuTitle: "תפריט ראשי",
        menuSubtitle: "ניווט מהיר באתר",
        languageTitle: "בחירת שפה",
        allServices: "כל השירותים",
        close: "סגירת התפריט",
        active: "פעיל",
        brandSub: "CLEANING",
      };
    }

    if (lang === "en") {
      return {
        menuTitle: "Main menu",
        menuSubtitle: "Quick website navigation",
        languageTitle: "Choose language",
        allServices: "All services",
        close: "Close menu",
        active: "Active",
        brandSub: "CLEANING",
      };
    }

    return {
      menuTitle: "القائمة الرئيسية",
      menuSubtitle: "تنقّل سريع داخل الموقع",
      languageTitle: "اختر اللغة",
      allServices: "كل الخدمات",
      close: "إغلاق القائمة",
      active: "محدد",
      brandSub: "CLEANING",
    };
  }, [lang]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenParentId(null);
  }, [setMenuOpen]);

  const goToSection = useCallback(
    (id) => {
      if (!id) {
        return;
      }

      try {
        scrollToSection?.(id);
      } finally {
        closeMenu();
      }
    },
    [closeMenu, scrollToSection],
  );

  useEffect(() => {
    if (!menuOpen) {
      setOpenParentId(null);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.focus();
    }, 30);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const activeParent = navItems.find((item) =>
      item?.subItems?.some((subItem) => subItem.id === activeId),
    );

    if (activeParent?.id) {
      setOpenParentId(activeParent.id);
    }
  }, [activeId, menuOpen, navItems]);

  if (!menuOpen || typeof document === "undefined") {
    return null;
  }

  const content = (
    <div
      className="fixed inset-0 z-[10000]"
      role="presentation"
      dir={direction}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={text.close}
        onClick={closeMenu}
        className="
          absolute
          inset-0
          h-full
          w-full
          cursor-default
          bg-[rgba(3,7,24,0.76)]
          backdrop-blur-sm
        "
      />

      {/* Sidebar panel */}
      <aside
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={text.menuTitle}
        className={[
          "absolute top-0 h-[100dvh]",
          "w-[min(92vw,390px)]",
          "overflow-hidden",
          "border-white/10",
          "bg-gradient-to-b",
          "from-[var(--lumora-navy-900)]",
          "via-[var(--lumora-navy-950)]",
          "to-[#050817]",
          "text-white",
          "shadow-[0_0_80px_rgba(0,0,0,0.55)]",
          "focus:outline-none",
          isRTL ? "right-0 border-l" : "left-0 border-r",
        ].join(" ")}
      >
        {/* Decorative logo watermark */}
        <img
          src="/lumora-icon.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          className={[
            "pointer-events-none",
            "absolute -top-24",
            "h-72 w-72",
            "select-none object-contain",
            "opacity-[0.055]",
            isRTL ? "-left-24" : "-right-24",
          ].join(" ")}
        />

        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            top-28
            h-56
            w-56
            rounded-full
            bg-[rgba(16,148,192,0.16)]
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-[rgba(174,221,57,0.10)]
            blur-3xl
          "
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <div
            className="
              shrink-0
              border-b
              border-white/[0.08]
              px-4
              pb-4
              pt-[max(16px,env(safe-area-inset-top))]
            "
          >
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => goToSection("home")}
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                  rounded-2xl
                  text-start
                "
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[rgba(174,221,57,0.38)]
                    bg-[var(--lumora-navy-900)]
                    shadow-[0_0_28px_rgba(16,148,192,0.18)]
                  "
                >
                  <img
                    src="/lumora-icon.png"
                    alt="Lumora"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      truncate
                      text-lg
                      font-black
                      leading-none
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    LUMORA
                  </span>

                  <span
                    className="
                      mt-1.5
                      block
                      text-[9px]
                      font-black
                      leading-none
                      tracking-[0.32em]
                      text-[var(--lumora-lime)]
                    "
                  >
                    {text.brandSub}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={closeMenu}
                aria-label={text.close}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white
                  transition
                  hover:border-[rgba(66,204,227,0.28)]
                  hover:bg-white/[0.10]
                  active:scale-95
                "
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[rgba(174,221,57,0.18)]
                  bg-[rgba(174,221,57,0.07)]
                  px-3
                  py-1.5
                "
              >
                <Sparkles
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[var(--lumora-lime)]"
                />

                <span
                  className="
                    text-[11px]
                    font-extrabold
                    text-[var(--lumora-lime-light)]
                  "
                >
                  {text.menuTitle}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-white/55">
                {hintText || text.menuSubtitle}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              px-3
              py-4
            "
          >
            <nav aria-label={text.menuTitle} className="space-y-2">
              {navItems.map((item) => {
                const hasSubItems =
                  Array.isArray(item.subItems) && item.subItems.length > 0;

                const childIsActive = hasSubItems
                  ? item.subItems.some((subItem) => subItem.id === activeId)
                  : false;

                const isActive = activeId === item.id || childIsActive;

                const isExpanded = openParentId === item.id;

                if (!hasSubItems) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goToSection(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "group flex w-full items-center gap-3",
                        "rounded-2xl border px-4 py-3.5",
                        "text-start text-sm font-extrabold",
                        "transition-all duration-200",
                        isActive
                          ? [
                              "border-[rgba(174,221,57,0.28)]",
                              "bg-[rgba(174,221,57,0.10)]",
                              "text-[var(--lumora-lime-light)]",
                              "shadow-[inset_0_0_22px_rgba(174,221,57,0.035)]",
                            ].join(" ")
                          : [
                              "border-white/[0.07]",
                              "bg-white/[0.035]",
                              "text-white/78",
                              "hover:border-[rgba(66,204,227,0.22)]",
                              "hover:bg-white/[0.07]",
                              "hover:text-white",
                            ].join(" "),
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2 w-2 shrink-0 rounded-full",
                          "transition",
                          isActive
                            ? [
                                "bg-[var(--lumora-lime)]",
                                "shadow-[0_0_0_5px_rgba(174,221,57,0.10)]",
                              ].join(" ")
                            : "bg-white/20 group-hover:bg-[var(--lumora-cyan-light)]",
                        ].join(" ")}
                      />

                      <span className="flex-1">{item.label}</span>

                      {isActive ? (
                        <Check
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        />
                      ) : (
                        <ArrowIcon
                          aria-hidden="true"
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-white/28
                            transition
                            group-hover:text-[var(--lumora-cyan-light)]
                          "
                        />
                      )}
                    </button>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className={[
                      "overflow-hidden rounded-[22px] border",
                      isActive
                        ? [
                            "border-[rgba(174,221,57,0.24)]",
                            "bg-[rgba(174,221,57,0.055)]",
                          ].join(" ")
                        : ["border-white/[0.07]", "bg-white/[0.03]"].join(" "),
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setOpenParentId((currentId) =>
                          currentId === item.id ? null : item.id,
                        );
                      }}
                      aria-expanded={isExpanded}
                      className={[
                        "flex w-full items-center gap-3",
                        "px-4 py-3.5",
                        "text-start text-sm font-extrabold",
                        "transition",
                        isActive
                          ? "text-[var(--lumora-lime-light)]"
                          : "text-white/80 hover:bg-white/[0.04] hover:text-white",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2 w-2 shrink-0 rounded-full",
                          isActive
                            ? [
                                "bg-[var(--lumora-lime)]",
                                "shadow-[0_0_0_5px_rgba(174,221,57,0.10)]",
                              ].join(" ")
                            : "bg-white/20",
                        ].join(" ")}
                      />

                      <span className="flex-1">{item.label}</span>

                      <ChevronDown
                        aria-hidden="true"
                        className={[
                          "h-4 w-4 shrink-0 transition-transform duration-200",
                          isExpanded
                            ? "rotate-180 text-[var(--lumora-lime)]"
                            : "text-white/35",
                        ].join(" ")}
                      />
                    </button>

                    {isExpanded && (
                      <div
                        className="
                          border-t
                          border-white/[0.07]
                          px-2
                          pb-2
                          pt-2
                        "
                      >
                        <button
                          type="button"
                          onClick={() => goToSection(item.id)}
                          className={[
                            "mb-1 flex w-full items-center gap-3",
                            "rounded-xl px-3 py-3",
                            "text-start text-sm font-bold",
                            "transition",
                            activeId === item.id
                              ? [
                                  "bg-[rgba(174,221,57,0.10)]",
                                  "text-[var(--lumora-lime-light)]",
                                ].join(" ")
                              : [
                                  "text-white/64",
                                  "hover:bg-white/[0.055]",
                                  "hover:text-white",
                                ].join(" "),
                          ].join(" ")}
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[var(--lumora-cyan)]
                            "
                          />

                          <span className="flex-1">{text.allServices}</span>

                          {activeId === item.id && (
                            <Check aria-hidden="true" className="h-4 w-4" />
                          )}
                        </button>

                        {item.subItems.map((subItem) => {
                          const Icon = subItem.icon;
                          const isSubActive = activeId === subItem.id;

                          return (
                            <button
                              key={subItem.id}
                              type="button"
                              onClick={() => goToSection(subItem.id)}
                              className={[
                                "flex w-full items-center gap-3",
                                "rounded-xl px-3 py-2.5",
                                "text-start text-sm font-bold",
                                "transition",
                                isSubActive
                                  ? [
                                      "bg-[rgba(16,148,192,0.13)]",
                                      "text-[var(--lumora-cyan-light)]",
                                    ].join(" ")
                                  : [
                                      "text-white/68",
                                      "hover:bg-white/[0.055]",
                                      "hover:text-white",
                                    ].join(" "),
                              ].join(" ")}
                            >
                              <span
                                className={[
                                  "flex h-9 w-9 shrink-0",
                                  "items-center justify-center",
                                  "rounded-xl border",
                                  isSubActive
                                    ? [
                                        "border-[rgba(66,204,227,0.28)]",
                                        "bg-[rgba(16,148,192,0.13)]",
                                        "text-[var(--lumora-cyan-light)]",
                                      ].join(" ")
                                    : [
                                        "border-white/[0.07]",
                                        "bg-white/[0.04]",
                                        "text-white/48",
                                      ].join(" "),
                                ].join(" ")}
                              >
                                {Icon ? (
                                  <Icon
                                    aria-hidden="true"
                                    className="h-[18px] w-[18px]"
                                  />
                                ) : (
                                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                )}
                              </span>

                              <span className="flex-1">{subItem.label}</span>

                              {isSubActive ? (
                                <Check aria-hidden="true" className="h-4 w-4" />
                              ) : (
                                <ArrowIcon
                                  aria-hidden="true"
                                  className="h-4 w-4 text-white/22"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Language selector */}
          <div
            className="
              shrink-0
              border-t
              border-white/[0.08]
              bg-black/10
              px-4
              pb-[max(18px,env(safe-area-inset-bottom))]
              pt-4
            "
          >
            <div className="mb-3 flex items-center gap-2">
              <Globe2
                aria-hidden="true"
                className="h-4 w-4 text-[var(--lumora-cyan-light)]"
              />

              <span className="text-xs font-extrabold text-white/65">
                {text.languageTitle}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {LANGUAGE_OPTIONS.map((language) => {
                const isSelected = language.code === lang;

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => setLang(language.code)}
                    aria-pressed={isSelected}
                    className={[
                      "relative flex min-h-12 flex-col",
                      "items-center justify-center",
                      "rounded-2xl border px-2 py-2",
                      "transition-all duration-200",
                      isSelected
                        ? [
                            "border-[rgba(174,221,57,0.32)]",
                            "bg-[rgba(174,221,57,0.10)]",
                            "text-[var(--lumora-lime-light)]",
                          ].join(" ")
                        : [
                            "border-white/[0.08]",
                            "bg-white/[0.035]",
                            "text-white/62",
                            "hover:border-[rgba(66,204,227,0.24)]",
                            "hover:bg-white/[0.065]",
                            "hover:text-white",
                          ].join(" "),
                    ].join(" ")}
                  >
                    <span className="text-xs font-black">{language.short}</span>

                    <span className="mt-0.5 text-[9px] font-bold opacity-70">
                      {language.label}
                    </span>

                    {isSelected && (
                      <span
                        className="
                          absolute
                          right-1.5
                          top-1.5
                          flex
                          h-4
                          w-4
                          items-center
                          justify-center
                          rounded-full
                          bg-[var(--lumora-lime)]
                          text-[var(--lumora-navy-950)]
                        "
                      >
                        <Check aria-hidden="true" className="h-2.5 w-2.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );

  return createPortal(content, document.body);
}
