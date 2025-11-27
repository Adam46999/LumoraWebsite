// header/DesktopNav.jsx
import { useLanguage } from "../context/LanguageContext";

export default function DesktopNav({ navItems, activeId, scrollToSection }) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  return (
    <nav
      className={`hidden md:flex items-center gap-6 ${
        isRTL ? "flex-row-reverse" : ""
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`relative text-sm md:text-base font-medium transition-colors ${
              isActive ? "text-blue-600" : "text-gray-800"
            } hover:text-blue-600`}
          >
            {item.label}
            {/* خط سفلي أنيق للقسم الفعّال */}
            <span
              className={`absolute ${
                isRTL ? "right-0" : "left-0"
              } -bottom-1 h-[2px] rounded-full bg-blue-500 transition-all ${
                isActive ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
