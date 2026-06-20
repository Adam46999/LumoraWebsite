// src/header/SidebarMenu.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Home, Sparkles, X } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

function getCopy(lang) {
  if (lang === "he") {
    return {
      title: "תפריט",
      close: "סגירת התפריט",
      home: "ראשי",
      allServices: "כל השירותים",
      request: "הזמנת שירות",
      current: "החלק הנוכחי",
      navigation: "ניווט באתר",
      defaultHint: "בחרו את החלק הרצוי או עברו ישירות לשירות מסוים.",
    };
  }

  if (lang === "en") {
    return {
      title: "Menu",
      close: "Close menu",
      home: "Home",
      allServices: "All services",
      request: "Request service",
      current: "Current section",
      navigation: "Site navigation",
      defaultHint: "Choose a section or go directly to a specific service.",
    };
  }

  return {
    title: "القائمة",
    close: "إغلاق القائمة",
    home: "الرئيسية",
    allServices: "كل الخدمات",
    request: "اطلب خدمة",
    current: "القسم الحالي",
    navigation: "التنقل في الموقع",
    defaultHint: "اختار القسم المطلوب أو انتقل مباشرة لخدمة محددة.",
  };
}

export default function SidebarMenu({
  menuOpen,
  setMenuOpen,
  navItems = [],
  scrollToSection,
  activeId = "home",
  hintText,
  labels = {},
}) {
  const { lang, isRTL } = useLanguage();

  const copy = useMemo(() => getCopy(lang), [lang]);

  const [mounted, setMounted] = useState(menuOpen);
  const [visible, setVisible] = useState(false);
  const [openParentId, setOpenParentId] = useState(null);

  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const close = useCallback(() => {
    setMenuOpen?.(false);
  }, [setMenuOpen]);

  const navigate = useCallback(
    (id) => {
      if (!id) return;

      scrollToSection?.(id);
      close();
    },
    [close, scrollToSection],
  );

  /*
    فتح وإغلاق القائمة بحركة ناعمة.
  */
  useEffect(() => {
    let frame;
    let timer;

    if (menuOpen) {
      setMounted(true);

      frame = window.requestAnimationFrame(() => {
        setVisible(true);
      });
    } else {
      setVisible(false);

      timer = window.setTimeout(() => {
        setMounted(false);
        setOpenParentId(null);
      }, 220);
    }

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [menuOpen]);

  /*
    إذا كان المستخدم داخل خدمة محددة،
    نفتح مجموعة الخدمات تلقائيًا عند فتح القائمة.
  */
  useEffect(() => {
    if (!menuOpen) return;

    const activeParent = navItems.find((item) =>
      item?.subItems?.some((subItem) => subItem.id === activeId),
    );

    if (activeParent) {
      setOpenParentId(activeParent.id);
    }
  }, [activeId, menuOpen, navItems]);

  /*
    منع تحريك الصفحة الخلفية، دعم Escape،
    وحصر تنقل الكيبورد داخل القائمة.
  */
  useEffect(() => {
    if (!menuOpen) return undefined;

    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableElements = panelRef.current.querySelectorAll(
        [
          "button:not([disabled])",
          "a[href]",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          '[tabindex]:not([tabindex="-1"])',
        ].join(","),
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      if (
        previousFocusRef.current &&
        typeof previousFocusRef.current.focus === "function"
      ) {
        previousFocusRef.current.focus();
      }
    };
  }, [close, menuOpen]);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  const homeIsActive = activeId === "home";

  return createPortal(
    <div
      className={[
        "fixed inset-0 z-[10040] md:hidden",
        "transition-opacity duration-200",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      dir={isRTL ? "rtl" : "ltr"}
      role="presentation"
    >
      {/* الخلفية */}
      <button
        type="button"
        className="
          absolute inset-0 h-full w-full
          cursor-default bg-slate-950/45
          backdrop-blur-[2px]
        "
        onClick={close}
        aria-label={copy.close}
        tabIndex={-1}
      />

      {/* القائمة */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={copy.navigation}
        className={[
          "absolute inset-y-0 flex w-[min(88vw,360px)]",
          "flex-col bg-white",
          "shadow-[0_0_60px_rgba(15,23,42,0.24)]",
          "transition-transform duration-200 ease-out",
          isRTL
            ? "right-0 border-l border-slate-200"
            : "left-0 border-r border-slate-200",
          visible
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full",
        ].join(" ")}
      >
        {/* رأس القائمة */}
        <header
          className="
            flex shrink-0 items-center justify-between
            border-b border-slate-200
            px-4 py-4
          "
        >
          <button
            type="button"
            onClick={() => navigate("home")}
            className="
              flex min-w-0 items-center gap-3
              rounded-xl text-start
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-300
            "
          >
            <span
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-2xl bg-blue-50
                text-lg
              "
              aria-hidden="true"
            >
              🧼
            </span>

            <span className="min-w-0">
              <span
                className="
                  block truncate text-lg font-black
                  tracking-tight text-blue-600
                "
              >
                Lumora
              </span>

              <span className="block text-[11px] font-bold text-slate-500">
                {copy.title}
              </span>
            </span>
          </button>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl border border-slate-200
              bg-white text-slate-700
              transition
              hover:bg-slate-50
              active:scale-95
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-300
            "
            aria-label={copy.close}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        {/* تلميح بسيط */}
        <div className="shrink-0 px-4 pt-4">
          <p
            className="
              rounded-2xl border border-blue-100
              bg-blue-50/70 px-3.5 py-3
              text-xs font-semibold leading-5
              text-blue-800
            "
          >
            {hintText || copy.defaultHint}
          </p>
        </div>

        {/* روابط القائمة */}
        <nav
          aria-label={copy.navigation}
          className="
            min-h-0 flex-1 overflow-y-auto
            overscroll-contain px-4 py-4
          "
        >
          <div className="space-y-2">
            {/* الرئيسية */}
            <button
              type="button"
              onClick={() => navigate("home")}
              aria-current={homeIsActive ? "page" : undefined}
              className={[
                "flex min-h-12 w-full items-center gap-3",
                "rounded-2xl border px-4 py-3",
                "text-start text-sm font-extrabold",
                "transition",
                homeIsActive
                  ? "border-blue-200 bg-blue-50 text-blue-800"
                  : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50",
              ].join(" ")}
            >
              <Home
                className={[
                  "h-5 w-5 shrink-0",
                  homeIsActive ? "text-blue-600" : "text-slate-500",
                ].join(" ")}
                aria-hidden="true"
              />

              <span className="flex-1">{labels.home || copy.home}</span>

              {homeIsActive ? (
                <span
                  className="h-2 w-2 rounded-full bg-blue-600"
                  aria-label={copy.current}
                />
              ) : null}
            </button>

            {navItems.map((item) => {
              const hasSubItems =
                Array.isArray(item?.subItems) && item.subItems.length > 0;

              const subItemIsActive = item?.subItems?.some(
                (subItem) => subItem.id === activeId,
              );

              const itemIsActive = activeId === item.id || subItemIsActive;

              const isExpanded = openParentId === item.id;

              if (!hasSubItems) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(item.id)}
                    aria-current={itemIsActive ? "page" : undefined}
                    className={[
                      "flex min-h-12 w-full items-center",
                      "gap-3 rounded-2xl border",
                      "px-4 py-3 text-start",
                      "text-sm font-extrabold transition",
                      itemIsActive
                        ? "border-blue-200 bg-blue-50 text-blue-800"
                        : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <span className="flex-1">{item.label}</span>

                    {itemIsActive ? (
                      <span
                        className="h-2 w-2 rounded-full bg-blue-600"
                        aria-label={copy.current}
                      />
                    ) : null}
                  </button>
                );
              }

              return (
                <div
                  key={item.id}
                  className={[
                    "overflow-hidden rounded-2xl border",
                    itemIsActive
                      ? "border-blue-200 bg-blue-50/50"
                      : "border-slate-200 bg-white",
                  ].join(" ")}
                >
                  {/* رأس مجموعة الخدمات */}
                  <button
                    type="button"
                    onClick={() => {
                      setOpenParentId((currentId) =>
                        currentId === item.id ? null : item.id,
                      );
                    }}
                    aria-expanded={isExpanded}
                    aria-controls={`mobile-submenu-${item.id}`}
                    className={[
                      "flex min-h-12 w-full items-center",
                      "gap-3 px-4 py-3 text-start",
                      "text-sm font-extrabold transition",
                      itemIsActive
                        ? "text-blue-800"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <Sparkles
                      className={[
                        "h-5 w-5 shrink-0",
                        itemIsActive ? "text-blue-600" : "text-slate-500",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    <span className="flex-1">{item.label}</span>

                    <ChevronDown
                      className={[
                        "h-4 w-4 shrink-0",
                        "transition-transform duration-200",
                        isExpanded ? "rotate-180" : "",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>

                  {/* الخدمات الفرعية */}
                  <div
                    id={`mobile-submenu-${item.id}`}
                    className={[
                      "grid transition-[grid-template-rows,opacity]",
                      "duration-200 ease-out",
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          border-t border-slate-200
                          bg-white p-2
                        "
                      >
                        <button
                          type="button"
                          onClick={() => navigate(item.id)}
                          className={[
                            "flex min-h-11 w-full items-center",
                            "rounded-xl px-3 py-2.5",
                            "text-start text-sm font-bold",
                            "transition",
                            activeId === item.id
                              ? "bg-blue-50 text-blue-800"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                          ].join(" ")}
                        >
                          <span className="flex-1">{copy.allServices}</span>

                          {activeId === item.id ? (
                            <span
                              className="h-2 w-2 rounded-full bg-blue-600"
                              aria-hidden="true"
                            />
                          ) : null}
                        </button>

                        {item.subItems.map((subItem) => {
                          const Icon = subItem.icon;
                          const isSubActive = activeId === subItem.id;

                          return (
                            <button
                              key={subItem.id}
                              type="button"
                              onClick={() => navigate(subItem.id)}
                              aria-current={isSubActive ? "page" : undefined}
                              className={[
                                "mt-1 flex min-h-11 w-full",
                                "items-center gap-3 rounded-xl",
                                "px-3 py-2.5 text-start",
                                "text-sm font-bold transition",
                                isSubActive
                                  ? "bg-blue-50 text-blue-800"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                              ].join(" ")}
                            >
                              {Icon ? (
                                <Icon
                                  className={[
                                    "h-4 w-4 shrink-0",
                                    isSubActive
                                      ? "text-blue-600"
                                      : "text-slate-400",
                                  ].join(" ")}
                                  aria-hidden="true"
                                />
                              ) : null}

                              <span className="flex-1">{subItem.label}</span>

                              {isSubActive ? (
                                <span
                                  className="h-2 w-2 rounded-full bg-blue-600"
                                  aria-hidden="true"
                                />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* الإجراء الأساسي */}
        <footer
          className="
            shrink-0 border-t border-slate-200
            bg-white px-4
            pb-[max(16px,env(safe-area-inset-bottom))]
            pt-4
          "
        >
          <button
            type="button"
            onClick={() => navigate("services")}
            className="
              inline-flex min-h-12 w-full
              items-center justify-center gap-2
              rounded-2xl bg-blue-600
              px-5 text-sm font-extrabold
              text-white
              shadow-[0_10px_28px_rgba(37,99,235,0.24)]
              transition
              hover:bg-blue-700
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-blue-200
            "
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />

            <span>{labels.cta || copy.request}</span>
          </button>
        </footer>
      </aside>
    </div>,
    document.body,
  );
}
