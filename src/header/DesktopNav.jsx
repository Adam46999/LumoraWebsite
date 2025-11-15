// header/DesktopNav.jsx
import { useLanguage } from "../context/LanguageContext";

export default function DesktopNav({ navItems, activeId, scrollToSection }) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  return (
    <nav
      className={`hidden md:flex ${
        isRTL ? "space-x-reverse space-x-6" : "space-x-6"
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div key={item.id} className="relative group">
            {item.subItems ? (
              <>
                {/* زر رئيسي ينقلك للقسم الخاص به */}
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium cursor-pointer ${
                    isActive ? "text-blue-600" : "text-gray-800"
                  } hover:text-blue-600`}
                >
                  {item.label}
                </button>

                {/* القائمة المنسدلة للعناصر الفرعية */}
                <div
                  className={`absolute top-full ${
                    isRTL ? "right-0" : "left-0"
                  } mt-2 w-60 bg-white shadow-lg rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity z-40`}
                >
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => scrollToSection(sub.id)}
                      className={`flex items-center gap-3 p-2 w-full rounded hover:bg-blue-50 transition text-gray-700 ${
                        isRTL ? "flex-row-reverse text-right" : "text-left"
                      }`}
                    >
                      {sub.icon && (
                        <sub.icon className="w-5 h-5 text-blue-500" />
                      )}
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`font-medium ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600`}
              >
                {item.label}
              </button>
            )}
          </div>
        );
      })}
    </nav>
  );
}
