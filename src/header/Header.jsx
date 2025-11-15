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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      const s = window.scrollY > 2;
      el?.classList.toggle("shadow-lg", s);
      el?.classList.toggle("border-b", s);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = {
    home: { ar: "الرئيسية", en: "Home", he: "ראשי" }[lang] || "Home",
    store: { ar: "المتجر", en: "Store", he: "חנות" }[lang] || "Store",
  };

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow border-gray-200"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center gap-3 min-h-[64px]">
          {/* زر منيو للموبايل */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* الشعار */}
          <a
            href="/"
            className="flex items-center gap-2 font-extrabold text-gray-900"
          >
            <img src="/logo.svg" alt="Logo" className="w-8 h-8 rounded-xl" />
            <span className="hidden sm:block">BrandName</span>
          </a>

          {/* روابط أساسية */}
          <nav className="hidden md:flex items-center ms-2">
            <a
              href="/"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {t.home}
            </a>
            <a
              href="/store"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {t.store}
            </a>
          </nav>

          {/* ناڤ الأقسام (للصفحة الرئيسية) */}
          {!!navItems.length && (
            <div className="hidden md:block ms-4">
              <DesktopNav
                navItems={navItems}
                activeId={activeId}
                scrollToSection={scrollToSection}
              />
            </div>
          )}

          {/* Spacer علشان العناصر تكون مرتبة */}
          <div className="ms-auto" />
        </div>
      </div>

      {/* سايدبار موبايل */}
      <SidebarMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
    </header>
  );
}
