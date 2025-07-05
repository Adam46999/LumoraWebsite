// src/components/layout/header/DesktopNav.jsx

import { useLanguage } from "../../context/LanguageContext";

export default function DesktopNav({ navItems, activeId }) {
  const { lang } = useLanguage();

  return (
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div key={item.id} className="relative text-center">
            <a
              href={`#${item.id}`}
              className={`
                font-medium transition
                ${isActive
                  ? "text-[#2563EB] font-semibold"
                  : "text-gray-800 hover:text-[#2563EB]"}
              `}
            >
              {item.label}
            </a>
            {isActive && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#2563EB] rounded-b-md"></span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
