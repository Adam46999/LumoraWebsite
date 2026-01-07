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
  const dir = isRTL ? "rtl" : "ltr";

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

  // ✅ RTL-friendly order for grid
  const langButtons = useMemo(() => {
    const arr = [
      { code: "ar", label: "AR" },
      { code: "en", label: "EN" },
      { code: "he", label: "HE" },
    ];
    return isRTL ? [...arr].reverse() : arr;
  }, [isRTL]);

  // Reset expanded state when closed
  useEffect(() => {
    if (!menuOpen) setOpenParentId(null);
  }, [menuOpen]);

  // Close on ESC (only when open)
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  // Lock scroll (only when open)
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

  // ✅ IMPORTANT: return null AFTER hooks (prevents hooks mismatch)
  if (!menuOpen) return null;

  const baseBtn =
    "relative w-full px-4 py-3 rounded-2xl border transition flex items-center justify-between";
  const activeStyle = "border-blue-200 bg-blue-50 text-blue-800";
  const normalStyle = "border-gray-100 hover:bg-gray-50 active:bg-gray-100";

  const activeRail = (isActive) =>
    isActive
      ? [
          "absolute top-2 bottom-2 w-[4px] rounded-full bg-blue-600",
          isRTL ? "right-2" : "left-2",
        ].join(" ")
      : "";

  const ui = (
    <div
      dir={dir}
      style={{ direction: dir }}
      className="fixed inset-0 z-[99999]"
      role="presentation"
      onMouseDown={(e) => {
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
        dir={dir}
        style={{ direction: dir }}
        aria-label="Mobile menu"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <div
            className={[
              "flex items-start justify-between gap-3",
              isRTL ? "flex-row-reverse" : "",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => handleGo("home")}
              className={[
                "flex items-center gap-3 select-none",
                isRTL ? "flex-row-reverse" : "",
              ].join(" ")}
              aria-label="Go to home"
            >
              <span className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">
                🧼
              </span>

              <span className="text-start">
                <span className="block font-extrabold text-lg tracking-tight text-blue-600 leading-none">
                  Lumora
                </span>
                <span className="block mt-1 text-xs font-semibold text-slate-500">
                  {lang === "en"
                    ? "Quick navigation"
                    : lang === "he"
                    ? "ניווט מהיר"
                    : "تنقّل سريع"}
                </span>
              </span>
            </button>

            <button
              type="button"
              className="p-2 rounded-2xl border border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition"
              onClick={close}
              aria-label={
                lang === "en" ? "Close menu" : lang === "he" ? "סגור" : "إغلاق"
              }
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-500 leading-relaxed text-start">
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
                      isRTL ? "flex-row-reverse" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive ? <span className={activeRail(true)} /> : null}
                    <span className="font-extrabold text-start">
                      {item.label}
                    </span>
                    <ArrowIcon
                      className={[
                        "w-4 h-4 shrink-0",
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
                  className={[
                    "rounded-2xl border overflow-hidden",
                    isActive ? "border-blue-200" : "border-gray-100",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenParentId((prev) =>
                        prev === item.id ? null : item.id
                      )
                    }
                    className={[
                      "relative w-full px-4 py-3 transition flex items-center justify-between",
                      "hover:bg-gray-50 active:bg-gray-100",
                      isRTL ? "flex-row-reverse" : "",
                      isActive ? "bg-blue-50 text-blue-800" : "text-gray-800",
                    ].join(" ")}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {isActive ? <span className={activeRail(true)} /> : null}
                    <span className="font-extrabold text-start">
                      {item.label}
                    </span>

                    <span
                      className={[
                        "flex items-center gap-2",
                        isRTL ? "flex-row-reverse" : "",
                      ].join(" ")}
                    >
                      <span className="text-xs text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                      <ArrowIcon
                        className={[
                          "w-4 h-4 transition-transform shrink-0",
                          isOpen ? "rotate-90" : "rotate-0",
                          isActive ? "text-blue-600" : "text-gray-400",
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
                        className="w-full px-3 py-2 rounded-xl text-sm font-extrabold text-blue-700 hover:bg-gray-50 active:bg-gray-100 transition text-start"
                      >
                        {lang === "en"
                          ? `View ${item.label}`
                          : lang === "he"
                          ? `הצג ${item.label}`
                          : `عرض ${item.label}`}
                      </button>

                      <div className="mt-2 rounded-2xl bg-slate-50 border border-slate-200/70 overflow-hidden">
                        {item.subItems.map((sub, idx) => {
                          const Icon = sub.icon;
                          const isSubActive = activeId === sub.id;

                          return (
                            <div key={sub.id}>
                              <button
                                type="button"
                                onClick={() => handleGo(sub.id)}
                                className={[
                                  "w-full px-4 py-3 transition flex items-center gap-3",
                                  isRTL ? "flex-row-reverse" : "",
                                  isSubActive
                                    ? "bg-white text-blue-900"
                                    : "hover:bg-white/70 active:bg-white",
                                ].join(" ")}
                              >
                                {Icon ? (
                                  <Icon
                                    className={[
                                      "w-4 h-4 shrink-0",
                                      isSubActive
                                        ? "text-blue-700"
                                        : "text-blue-600",
                                    ].join(" ")}
                                    aria-hidden="true"
                                  />
                                ) : null}

                                <span className="text-sm font-semibold text-start">
                                  {sub.label}
                                </span>

                                {isSubActive ? (
                                  <Check
                                    className={[
                                      "w-4 h-4 text-blue-600",
                                      isRTL ? "me-auto" : "ms-auto",
                                    ].join(" ")}
                                    aria-hidden="true"
                                  />
                                ) : null}
                              </button>

                              {idx !== item.subItems.length - 1 ? (
                                <div className="h-px bg-slate-200/60" />
                              ) : null}
                            </div>
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
            <span className="text-sm font-extrabold text-gray-700 text-start">
              {labels?.langLabel ||
                (lang === "en" ? "Language" : lang === "he" ? "שפה" : "اللغة")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {langButtons.map((b) => (
              <button
                key={b.code}
                type="button"
                onClick={() => setLang(b.code)}
                className={[
                  "px-3 py-2 rounded-xl border text-sm font-extrabold transition",
                  lang === b.code
                    ? "border-blue-600 text-blue-700 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50",
                ].join(" ")}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );

  return createPortal(ui, document.body);
}
