// src/components/layout/header/DesktopNav.jsx

import { useLanguage } from "../context/LanguageContext";

export default function DesktopNav({ navItems, activeId }) {
  const { lang } = useLanguage();

  return (
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div key={item.id} className="relative group">
  {item.subItems ? (
    <>
      <span className={`font-medium cursor-pointer ${isActive ? "text-blue-600" : "text-gray-800"}`}>
        {item.label}
      </span>

      {/* القائمة المنسدلة */}
      <div className="absolute top-full right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity z-40">
        {item.subItems.map((sub) => (
          <a
            key={sub.id}
            href={`#${sub.id}`}
            className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition text-gray-700"
          >
            <sub.icon className="w-5 h-5 text-blue-500" />
            <span>{sub.label}</span>
          </a>
        ))}
      </div>
    </>
  ) : (
    <a
      href={`#${item.id}`}
      className={`font-medium ${isActive ? "text-blue-600" : "text-gray-800"} hover:text-blue-600`}
    >
      {item.label}
    </a>
  )}
</div>

        );
      })}
    </nav>
  );
}
