// src/header/DesktopNav.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function DesktopNav({ navItems, activeId, scrollToSection }) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const [openId, setOpenId] = useState(null);
  const rootRef = useRef(null);

  const hasOpen = Boolean(openId);

  const underlineClass = useCallback(
    (isActive) =>
      [
        "absolute",
        isRTL ? "right-0" : "left-0",
        "-bottom-1",
        "h-[2px] rounded-full bg-blue-600 transition-all",
        isActive ? "w-full opacity-100" : "w-0 opacity-0",
      ].join(" "),
    [isRTL]
  );

  // Close on outside click + ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!openId) return;
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpenId(null);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") setOpenId(null);
    };

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  // Helper for submenu item click
  const go = useCallback(
    (id) => {
      setOpenId(null);
      scrollToSection?.(id);
    },
    [scrollToSection]
  );

  const navClass = useMemo(
    () =>
      [
        "hidden md:flex items-center gap-7",
        isRTL ? "flex-row-reverse" : "",
      ].join(" "),
    [isRTL]
  );

  const baseBtn = useMemo(
    () =>
      [
        "relative text-sm md:text-[15px] font-semibold tracking-tight",
        "text-gray-800 hover:text-blue-600 transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:rounded-lg",
      ].join(" "),
    []
  );

  const activeBtn = useMemo(() => "text-blue-600", []);

  return (
    <nav
      ref={rootRef}
      className={navClass}
      aria-label="Primary navigation"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        const hasSub = Array.isArray(item.subItems) && item.subItems.length > 0;
        const isOpen = openId === item.id;

        if (!hasSub) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={[baseBtn, isActive ? activeBtn : ""].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
              <span className={underlineClass(isActive)} />
            </button>
          );
        }

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpenId(item.id)}
            onMouseLeave={() => setOpenId(null)}
          >
            <button
              type="button"
              className={[
                baseBtn,
                "inline-flex items-center gap-2",
                isActive ? activeBtn : "",
              ].join(" ")}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenId((prev) => (prev === item.id ? null : item.id))
              }
            >
              <span>{item.label}</span>
              <ChevronDown
                className={[
                  "w-4 h-4 text-gray-400 transition-transform",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
                aria-hidden="true"
              />
              <span className={underlineClass(isActive)} />
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div
                role="menu"
                className={[
                  "absolute mt-3 min-w-[240px] overflow-hidden",
                  "bg-white border border-gray-200 rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
                  "backdrop-blur-sm",
                  isRTL ? "right-0" : "left-0",
                ].join(" ")}
              >
                {/* Parent shortcut */}
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => go(item.id)}
                  className={[
                    "w-full px-4 py-3 text-sm font-extrabold",
                    "hover:bg-gray-50 active:bg-gray-100 transition",
                    isRTL ? "text-right" : "text-left",
                  ].join(" ")}
                >
                  {item.label}
                </button>

                <div className="h-px bg-gray-100" />

                <div className="py-1">
                  {item.subItems.map((sub) => {
                    const Icon = sub.icon;
                    const isSubActive = activeId === sub.id;

                    return (
                      <button
                        key={sub.id}
                        type="button"
                        role="menuitem"
                        onClick={() => go(sub.id)}
                        className={[
                          "w-full px-4 py-3 text-sm transition flex items-center gap-3",
                          "hover:bg-gray-50 active:bg-gray-100",
                          isRTL ? "flex-row-reverse text-right" : "text-left",
                          isSubActive
                            ? "bg-blue-50 text-blue-800"
                            : "text-gray-800",
                        ].join(" ")}
                      >
                        {Icon ? (
                          <Icon
                            className={[
                              "w-4 h-4 shrink-0",
                              isSubActive ? "text-blue-700" : "text-blue-600",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                        ) : null}
                        <span className="font-semibold">{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
