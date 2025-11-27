// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Layers as CarpetIcon,
  Sofa as SofaIcon,
  CarFront as CarIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SidebarMenu from "../header/SidebarMenu";
import DesktopNav from "../header/DesktopNav";

export default function Header({ scrollToSection }) {
  const { lang, setLang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // 🔹 ما في "الرئيسية" زي ما طلبت
  const navItems = [
    {
      id: "services",
      label: "الخدمات",
      subItems: [
        { id: "carpet", label: "تنظيف سجاد", icon: CarpetIcon },
        { id: "sofa", label: "تنظيف كنب", icon: SofaIcon },
        { id: "car", label: "تنظيف سيارات", icon: CarIcon },
      ],
    },
    { id: "beforeafter", label: "معرض الصور" },
    { id: "contact", label: "تواصل معنا" },
  ];

  // 🔹 القسم المفعّل (اللي تحته الخط)
  const [activeId, setActiveId] = useState(navItems[0]?.id || null);

  // دالة موحّدة: تحدّث activeId + تنزل على القسم
  const handleNavClick = (id) => {
    setActiveId(id);
    if (scrollToSection) scrollToSection(id);
  };

  // ScrollSpy (لو المستخدم نزل يدوي بالسكرول)
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top };
        }
        return { id: item.id, top: Infinity };
      });

      const visible = offsets.find(
        (item) => item.top >= 0 && item.top < window.innerHeight / 2
      );
      if (visible) setActiveId(visible.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* زر المنيو - موبايل */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

        {/* اللوجو */}
        <div className="font-extrabold text-xl tracking-tight text-blue-600">
          Lumora
        </div>

        {/* النافبار - ديسكتوب */}
        <div className="hidden md:flex flex-1 justify-center">
          <DesktopNav
            navItems={navItems}
            activeId={activeId}
            scrollToSection={handleNavClick} // ✅ مهم
          />
        </div>

        {/* اختيار اللغة - ديسكتوب */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-full bg-white hover:bg-gray-50"
          >
            🌐 {lang.toUpperCase()}
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md text-sm z-50">
              <button
                onClick={() => {
                  setLang("ar");
                  setLangOpen(false);
                }}
                className="w-full px-3 py-2 text-right hover:bg-gray-100"
              >
                AR العربية
              </button>
              <button
                onClick={() => {
                  setLang("en");
                  setLangOpen(false);
                }}
                className="w-full px-3 py-2 text-right hover:bg-gray-100"
              >
                EN English
              </button>
              <button
                onClick={() => {
                  setLang("he");
                  setLangOpen(false);
                }}
                className="w-full px-3 py-2 text-right hover:bg-gray-100"
              >
                HE עברית
              </button>
            </div>
          )}
        </div>
      </div>

      {/* السايدبار - موبايل */}
      <SidebarMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        scrollToSection={handleNavClick} // ✅ نفس الدالة
      />
    </header>
  );
}
