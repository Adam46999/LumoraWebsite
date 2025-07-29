import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SidebarMenu from "../header/SidebarMenu";
import DesktopNav from "../header/DesktopNav";

export default function Header() {
  const { lang, setLang } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ جديد

  const [activeId, setActiveId] = useState("home");

  const navItems = [
  { id: "home", label: "الرئيسية" },
  { id: "services", label: "الخدمات" },
  { id: "beforeafter", label: "قبل / بعد" },
  { id: "contact", label: "تواصل معنا" }
];


  // ScrollSpy: تحديث الرابط النشط حسب موقع التمرير
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

  // ✅ إضافة استجابة لتغيير الرابط (hash)
  const handleHashChange = () => {
    const idFromUrl = window.location.hash.replace("#", "");
    if (idFromUrl) setActiveId(idFromUrl);
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("hashchange", handleHashChange);

  handleScroll();        // عند فتح الصفحة
  handleHashChange();    // إذا فتحنا رابط فيه هاش

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);


  return (
    
    <header className="bg-[#F3F4F6] shadow-sm fixed top-0 left-0 w-full z-50"> 
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* شعار */}
        <div className="text-[#2563EB] font-bold text-xl tracking-tight">
          Lumora
        </div>

        {/* الروابط - ديسكتوب */}
        <DesktopNav navItems={navItems} activeId={activeId} />


        {/* أيقونات - ديسكتوب */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700">
          <Search className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
          <ShoppingCart className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
          <User className="w-5 h-5 hover:text-[#2563EB] cursor-pointer" />
          {/* زر تغيير اللغة Dropdown */}
          <div className="relative text-sm text-gray-700">
{/* زر اللغة للجوال */}


  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition"
  >
    🌐 {lang.toUpperCase()}
  </button>

  {dropdownOpen && (
    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md z-50">
      <button
        onClick={() => { setLang("ar"); setDropdownOpen(false); }}
        className="w-full px-3 py-2 text-right hover:bg-gray-100"
      >
        AR العربية
      </button>
      <button
        onClick={() => { setLang("en"); setDropdownOpen(false); }}
        className="w-full px-3 py-2 text-right hover:bg-gray-100"
      >
        EN English
      </button>
      <button
        onClick={() => { setLang("he"); setDropdownOpen(false); }}
        className="w-full px-3 py-2 text-right hover:bg-gray-100"
      >
        HE  עברית
      </button>
    </div>
  )}
</div>

        </div>

        {/* زر القائمة - موبايل */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* السايدبار - موبايل */}
<SidebarMenu
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
  navItems={navItems}
  activeId={activeId} // ✅ أضفنا هذا
/>

      
    </header>
  );
}
