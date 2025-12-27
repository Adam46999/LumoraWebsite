// src/header/SidebarMenu.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Globe2, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function SidebarMenu({
  menuOpen,
  setMenuOpen,
  navItems,
  scrollToSection,
  activeId,
  hintText,
  labels,
}) {
  const { lang, setLang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const [openParentId, setOpenParentId] = useState(null);
  const panelRef = useRef(null);

  const ArrowIcon = useMemo(
    () => (isRTL ? ChevronLeft : ChevronRight),
    [isRTL]
  );

  const close = useCallback(() => {
    setMenuOpen(false);
    setOpenParentId(null);
  }, [setMenuOpen]);

  const handleGo = useCallback(
    (id) => {
      try {
        scrollToSection?.(id);
      } finally {
        close();
      }
    },
    [scrollToSection, close]
  );

  // Reset expanded state when closed
  useEffect(() => {
    if (!menuOpen) setOpenParentId(null);
  }, [menuOpen]);

  // Close on ESC
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  // Lock scroll
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [menuOpen]);

  // Focus panel when opened
  useEffect(() => {
    if (!menuOpen) return;
    const t = setTimeout(() => {
      panelRef.current?.focus?.();
    }, 0);
    return () => clearTimeout(t);
  }, [menuOpen]);

  const handleLang = (next) => setLang(next);

  if (!menuOpen) return null;

  const baseBtn =
    "w-full px-4 py-3 rounded-2xl border transition flex items-center justify-between";
  const activeStyle = "border-blue-200 bg-blue-50 text-blue-800";
  const normalStyle = "border-gray-100 hover:bg-gray-50 active:bg-gray-100";

  const ui = (
    <div
      className="fixed inset-0 z-[99999]"
      role="presentation"
      onMouseDown={(e) => {
        // click outside closes
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <aside
        ref={panelRef}
        tabIndex={-1}
        className={[
          "absolute top-0 h-full w-[360px] max-w-[86%] bg-white shadow-2xl flex flex-col",
          isRTL ? "right-0" : "left-0",
        ].join(" ")}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label="Mobile menu"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleGo("home")}
              className="flex items-center gap-2 select-none"
              aria-label="Go to home"
            >
              <span className="text-blue-600 text-xl">🧼</span>
              <span className="font-extrabold text-lg tracking-tight text-blue-600">
                Lumora
              </span>
            </button>

            <button
              type="button"
              className="p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition"
              onClick={close}
              aria-label={
                lang === "en" ? "Close menu" : lang === "he" ? "סגור" : "إغلاق"
              }
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Hint */}
          <p
            className={[
              "mt-2 text-sm text-gray-500 leading-relaxed",
              isRTL ? "text-right" : "text-left",
            ].join(" ")}
          >
            {hintText ||
              (lang === "en"
                ? "Fast, clear navigation."
                : lang === "he"
                ? "ניווט מהיר וברור."
                : "تنقّل بسرعة، وكل شيء واضح.")}
          </p>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const hasSub =
                Array.isArray(item.subItems) && item.subItems.length > 0;
              const isOpen = openParentId === item.id;
              const isActive = activeId === item.id;

              if (!hasSub) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleGo(item.id)}
                    className={[
                      baseBtn,
                      isActive ? activeStyle : normalStyle,
                      isRTL ? "flex-row-reverse text-right" : "text-left",
                    ].join(" ")}
                  >
                    <span className="font-extrabold">{item.label}</span>
                    <ArrowIcon
                      className={[
                        "w-4 h-4",
                        isActive ? "text-blue-600" : "text-gray-400",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </button>
                );
              }

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenParentId((prev) =>
                        prev === item.id ? null : item.id
                      )
                    }
                    className={[
                      "w-full px-4 py-3 transition flex items-center justify-between",
                      "hover:bg-gray-50 active:bg-gray-100",
                      isRTL ? "flex-row-reverse text-right" : "text-left",
                    ].join(" ")}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span
                      className={[
                        "font-extrabold",
                        isActive ? "text-blue-700" : "text-gray-800",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                      <ArrowIcon
                        className={[
                          "w-4 h-4 text-gray-400 transition-transform",
                          isOpen ? "rotate-90" : "rotate-0",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3">
                      <button
                        type="button"
                        onClick={() => handleGo(item.id)}
                        className={[
                          "w-full px-3 py-2 rounded-xl text-sm font-extrabold text-blue-700",
                          "hover:bg-gray-50 active:bg-gray-100 transition",
                          isRTL ? "text-right" : "text-left",
                        ].join(" ")}
                      >
                        {lang === "en"
                          ? `View ${item.label}`
                          : lang === "he"
                          ? `הצג ${item.label}`
                          : `عرض ${item.label}`}
                      </button>

                      <div className="h-px bg-gray-100 my-2" />

                      <div className="flex flex-col gap-1">
                        {item.subItems.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive = activeId === sub.id;

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleGo(sub.id)}
                              className={[
                                "w-full px-3 py-3 rounded-xl transition flex items-center gap-3",
                                isRTL
                                  ? "flex-row-reverse text-right"
                                  : "text-left",
                                isSubActive
                                  ? "bg-blue-50 text-blue-800"
                                  : "hover:bg-gray-50 active:bg-gray-100",
                              ].join(" ")}
                            >
                              {Icon ? (
                                <Icon
                                  className="w-4 h-4 text-blue-600"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <span className="text-sm font-semibold">
                                {sub.label}
                              </span>

                              {isSubActive ? (
                                <Check
                                  className={[
                                    "w-4 h-4",
                                    isRTL ? "me-auto" : "ms-auto",
                                    "text-blue-600",
                                  ].join(" ")}
                                  aria-hidden="true"
                                />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => handleGo("contact")}
            className="mt-4 w-full px-4 py-3 rounded-2xl bg-blue-600 text-white font-extrabold hover:bg-blue-700 active:bg-blue-800 transition"
          >
            {labels?.ctaShort ||
              (lang === "en" ? "Book" : lang === "he" ? "הזמן" : "احجز")}
          </button>
        </div>

        {/* Language */}
        <div className="p-4 border-t border-gray-100">
          <div
            className={[
              "flex items-center gap-2 mb-3",
              isRTL ? "flex-row-reverse" : "",
            ].join(" ")}
          >
            <Globe2 className="w-4 h-4 text-gray-500" aria-hidden="true" />
            <span className="text-sm font-extrabold text-gray-700">
              {labels?.langLabel ||
                (lang === "en" ? "Language" : lang === "he" ? "שפה" : "اللغة")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleLang("ar")}
              className={[
                "px-3 py-2 rounded-xl border text-sm font-extrabold transition",
                lang === "ar"
                  ? "border-blue-600 text-blue-700 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50",
              ].join(" ")}
            >
              AR
            </button>
            <button
              type="button"
              onClick={() => handleLang("en")}
              className={[
                "px-3 py-2 rounded-xl border text-sm font-extrabold transition",
                lang === "en"
                  ? "border-blue-600 text-blue-700 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50",
              ].join(" ")}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLang("he")}
              className={[
                "px-3 py-2 rounded-xl border text-sm font-extrabold transition",
                lang === "he"
                  ? "border-blue-600 text-blue-700 bg-blue-50"
                  : "border-gray-200 hover:bg-gray-50",
              ].join(" ")}
            >
              HE
            </button>
          </div>
        </div>
      </aside>
    </div>
  );

  return createPortal(ui, document.body);
}
