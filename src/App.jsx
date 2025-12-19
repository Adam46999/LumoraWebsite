// src/App.jsx
import { useEffect, useState } from "react";
import useSectionNavigation from "./hooks/useSectionNavigation";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import CleaningShowcase from "./components/BefAfter/CleaningShowcase";
import ContactSection from "./components/contact/ContactSection";

// ✅ لوحة الأدمن الكاملة (بدل AdminMessages)
import AdminPanel from "./components/admin/AdminPanel";

// قبل/بعد (كنب)
import before1 from "./assets/before1.jpg";
import after1 from "./assets/after1.jpg";
import before2 from "./assets/before2.jpg";
import after2 from "./assets/after2.jpg";
import before3 from "./assets/before3.jpg";
import after3 from "./assets/after3.jpg";
import before4 from "./assets/before4.jpg";
import after4 from "./assets/after4.jpg";

// سيارات
import car1 from "./assets/car1.jpg";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.jpg";
import car5 from "./assets/car5.jpg";
import car6 from "./assets/car6.jpg";
import car7 from "./assets/car7.jpg";
import car8 from "./assets/car8.jpg";
import car9 from "./assets/car9.jpg";
import car10 from "./assets/car10.jpg";

function App() {
  const { scrollToSection, shakeTarget } = useSectionNavigation();
  const [adminMode, setAdminMode] = useState(false);

  // احسب ارتفاع الهيدر وخزّنه
  useEffect(() => {
    const setHeaderVar = () => {
      const el = document.getElementById("site-header");
      const h = el?.offsetHeight || 56;
      document.documentElement.style.setProperty("--app-topbar-h", `${h}px`);
    };
    setHeaderVar();
    window.addEventListener("resize", setHeaderVar);
    return () => window.removeEventListener("resize", setHeaderVar);
  }, []);

  // صور الكنب
  const sofaPairs = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
  ];

  // صور السيارات
  const carSrcs = [car6, car3, car4, car5, car1, car7, car8, car9, car10];
  const carsImages = carSrcs.map((src, i) => ({
    src,
    caption: `سيارة ${i + 1}`,
  }));

  const rugsImages = [
    { src: after3, caption: "تنظيف سجاد عميق" },
    { src: before3, caption: "إزالة بقع صعبة" },
  ];

  // ✅ إذا الأدمن مفتوح نعرض لوحة الأدمن فقط
  if (adminMode) {
    return <AdminPanel onExit={() => setAdminMode(false)} />;
  }

  // الموقع الرئيسي
  return (
    <div className="font-sans relative min-h-screen">
      <div id="site-header">
        <Header scrollToSection={scrollToSection} />
      </div>

      <Hero />

      <section
        id="services"
        className={`py-20 px-6 transition-all duration-300 ${
          shakeTarget === "services" ? "animate-shake" : ""
        }`}
      >
        <Services />
      </section>

      <section
        id="beforeafter"
        className={`py-24 px-6 transition-all duration-300 ${
          shakeTarget === "beforeafter" ? "animate-shake" : ""
        }`}
      >
        <CleaningShowcase
          defaultTab="sofa"
          carsImages={carsImages}
          rugsImages={rugsImages}
          sofaPairs={sofaPairs}
        />
      </section>

      <section
        id="contact"
        className={`py-20 px-6 transition-all duration-300 ${
          shakeTarget === "contact" ? "animate-shake" : ""
        }`}
      >
        <ContactSection />
      </section>

      {/* 🌙 زر أدمن مخفي */}
      <button
        type="button"
        onClick={() => setAdminMode(true)}
        aria-label="لوحة الأدمن"
        className="
          fixed bottom-3 right-3 z-[9999]
          opacity-0 hover:opacity-40 
          transition-opacity duration-500 
          text-[15px] tracking-wide font-semibold
          text-white select-none
        "
        style={{
          fontFamily: "'Cinzel', serif",
          textShadow: "0 0 6px rgba(0,0,0,0.6)",
        }}
      >
        Lumora ✦
      </button>
    </div>
  );
}

export default App;
