// src/header/DesktopNav.jsx
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DesktopNav({ navItems, activeId, scrollToSection }) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const [openId, setOpenId] = useState(null);
  const rootRef = useRef(null);

  // close on outside click + ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!openId) return;
      if (rootRef.current && !rootRef.current.contains(e.target))
        setOpenId(null);
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

  const underlineClass = (isActive) =>
    `absolute ${
      isRTL ? "right-0" : "left-0"
    } -bottom-1 h-[2px] rounded-full bg-blue-500 transition-all ${
      isActive ? "w-full opacity-100" : "w-0 opacity-0"
    }`;

  return (
    <nav
      ref={rootRef}
      className={`hidden md:flex items-center gap-6 ${
        isRTL ? "flex-row-reverse" : ""
      }`}
      aria-label="Primary navigation"
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
              onClick={() => {
                setOpenId(null);
                scrollToSection(item.id);
              }}
              className={`relative text-sm md:text-base font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-600`}
            >
              {item.label}
              <span className={underlineClass(isActive)} />
            </button>
          );
        }

        // Item with dropdown (e.g., Services)
        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpenId(item.id)}
            onMouseLeave={() => setOpenId(null)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenId((prev) => (prev === item.id ? null : item.id))
              }
              className={`relative text-sm md:text-base font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-600`}
            >
              {item.label}
              <span className={underlineClass(isActive)} />
            </button>

            {isOpen && (
              <div
                role="menu"
                className={`absolute mt-3 min-w-[220px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden ${
                  isRTL ? "right-0" : "left-0"
                }`}
              >
                {/* Parent section shortcut */}
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setOpenId(null);
                    scrollToSection(item.id);
                  }}
                  className={`w-full px-4 py-3 text-sm font-semibold hover:bg-gray-50 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {item.label}
                </button>

                <div className="h-px bg-gray-100" />

                {item.subItems.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setOpenId(null);
                        scrollToSection(sub.id);
                      }}
                      className={`w-full px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-3 ${
                        isRTL ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      {Icon ? <Icon className="w-4 h-4 text-blue-600" /> : null}
                      <span className="text-gray-800 font-medium">
                        {sub.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
