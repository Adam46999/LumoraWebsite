// header/SidebarMenu.jsx
import { X, ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function SidebarMenu({
  menuOpen,
  setMenuOpen,
  navItems,
  scrollToSection,
}) {
  const { lang, setLang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  if (!menuOpen) return null;

  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    >
      <div
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } h-full w-80 max-w-[82%] bg-white shadow-2xl flex flex-col p-5`}
        dir={isRTL ? "rtl" : "ltr"}
        onClick={(e) => e.stopPropagation()}
      >
        {/* الهيدر فوق */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`flex flex-col ${isRTL ? "items-end" : "items-start"}`}
          >
            {/* اللوجو / الأيقونة */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-600 text-xl">🧼</span>
              <span className="font-extrabold text-gray-900 text-lg tracking-tight">
                Lumora
              </span>
            </div>

            {/* عنوان المنيو */}
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full shadow-sm">
              القائمة الرئيسية
            </span>
          </div>

          <button
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* الأقسام – بشكل كروت مرتّبة */}
        <nav
          className={`flex-1 space-y-3 ${
            isRTL ? "text-right" : "text-left"
          } overflow-y-auto pb-4`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMenuOpen(false);
              }}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/80 text-gray-900 font-medium shadow-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
            >
              <span
                className={`flex items-center gap-3 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm">{item.label}</span>
              </span>

              <ArrowIcon className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </nav>

        {/* اختيار اللغة – شكل ألطف */}
        <div
          className={`mt-2 pt-4 border-t border-gray-200 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              اختر اللغة
            </span>
            <Globe2 className="w-4 h-4 text-gray-500" />
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
            <option value="he">עברית</option>
          </select>
        </div>
      </div>
    </div>
  );
}
