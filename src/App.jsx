// src/App.jsx
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import CleaningShowcase from "./components/BefAfter/CleaningShowcase";
import ContactSection from "./components/contact/ContactSection";
import FAQSection from "./components/faq/FAQSection";

// ✅ لوحة الأدمن الكاملة
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
import before5 from "./assets/before5.jpg";
import before6 from "./assets/before6.jpg";
import after5 from "./assets/after5.jpg";
import after6 from "./assets/after6.jpg";
import before7 from "./assets/before7.jpg";
import before8 from "./assets/before8.jpg";
import before9 from "./assets/before9.jpg";
import before10 from "./assets/before10.jpg";
import after7 from "./assets/after7.jpg";
import after8 from "./assets/after8.jpg";
import after9 from "./assets/after9.jpg";
import after10 from "./assets/after10.jpg";

function App() {
  const [adminMode, setAdminMode] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  const sofaPairs = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
    { before: before4, after: after4 },
    { before: before5, after: after5 },
    { before: before6, after: after6 },
    { before: before7, after: after7 },
    { before: before8, after: after8 },
    { before: before9, after: after9 },
    { before: before10, after: after10 },
  ];

  if (adminMode) {
    return <AdminPanel onExit={() => setAdminMode(false)} />;
  }

  return (
    <div className="font-sans relative min-h-screen">
      <div id="site-header">
        <Header scrollToSection={scrollToSection} />
      </div>

      <Hero />

      <section id="services" className="py-20 px-6">
        <Services />
      </section>

      <section id="beforeafter" className="py-24 px-6">
        <CleaningShowcase sofaPairs={sofaPairs} />
      </section>

      <section id="faq" className="py-14 sm:py-16 px-4 sm:px-6 bg-slate-50/60">
        <FAQSection />
      </section>

      <section id="contact" className="py-20 px-6">
        <ContactSection />
      </section>

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
