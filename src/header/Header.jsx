// header/Header.jsx
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import DesktopNav from "./DesktopNav";
import SidebarMenu from "./SidebarMenu";
import { useLanguage } from "../context/LanguageContext";

export default function Header({
  navItems = [],
  activeId = null,
  scrollToSection = () => {},
}) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar" || lang === "he";
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  // منع السكرول لما السايدبار مفتوحة
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // ظلّ بسيط عند السكورل
  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      const scrolled = window.scrollY > 2;
      el?.classList.toggle("shadow-md", scrolled);
      el?.classList.toggle("border-b", scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      dir={isRTL ? "rtl" : "ltr"}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-transparent transition-shadow"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 min-h-[64px]">
          {/* زر المنيو - موبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>

          {/* الشعار */}
          <div className="flex items-center gap-2 font-extrabold text-gray-900">
            {/* لو عندك لوجو حقيقي حط مساره هون */}
            {/* <img src="/logo.svg" alt="Logo" className="w-9 h-9 rounded-xl" /> */}
            <span className="text-lg sm:text-xl tracking-tight text-blue-600">
              Lumora
            </span>
          </div>

          {/* ناڤ الأقسام - ديسكتوب */}
          {!!navItems.length && (
            <div className="hidden md:flex ms-8">
              <DesktopNav
                navItems={navItems}
                activeId={activeId}
                scrollToSection={scrollToSection}
              />
            </div>
          )}

          {/* فاصل يدز العناصر لليمين/اليسار */}
          <div className="ms-auto" />
        </div>
      </div>

      {/* سايدبار الموبايل */}
      <SidebarMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
    </header>
  );
}
