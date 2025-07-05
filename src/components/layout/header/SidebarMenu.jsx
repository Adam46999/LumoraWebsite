import { X, Search, ShoppingCart, User } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export default function SidebarMenu({ menuOpen, setMenuOpen, navItems }) {
  const { lang, setLang } = useLanguage();

  if (!menuOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-50"
      onClick={() => setMenuOpen(false)}
    >
      <div
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-gray-600 hover:text-red-500 absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <nav className="mt-10 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-gray-800 font-medium hover:text-[#2563EB]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 pt-10 text-gray-700">
          <Search className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
          <ShoppingCart className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
          <User className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
        </div>

        {/* زر اللغة للجوال */}
        <div className="pt-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">🌐 اختر اللغة</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
          >
            <option value="ar">🇸🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
            <option value="he">🇮🇱 עברית</option>
          </select>
        </div>
      </div>
    </div>
  );
}
