// src/App.jsx
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import CleaningShowcase from "./components/BefAfter/CleaningShowcase";
import FAQSection from "./components/faq/FAQSection";
import AdminPanel from "./components/admin/AdminPanel";

// Sofa before / after images
import before1 from "./assets/before1.jpg";
import after1 from "./assets/after1.jpg";

import before2 from "./assets/before2.jpg";
import after2 from "./assets/after2.jpg";

import before3 from "./assets/before3.jpg";
import after3 from "./assets/after3.jpg";

import before4 from "./assets/before4.jpg";
import after4 from "./assets/after4.jpg";

import before5 from "./assets/before5.jpg";
import after5 from "./assets/after5.jpg";

import before6 from "./assets/before6.jpg";
import after6 from "./assets/after6.jpg";

import before7 from "./assets/before7.jpg";
import after7 from "./assets/after7.jpg";

import before8 from "./assets/before8.jpg";
import after8 from "./assets/after8.jpg";

import before9 from "./assets/before9.jpg";
import after9 from "./assets/after9.jpg";

import before10 from "./assets/before10.jpg";
import after10 from "./assets/after10.jpg";

function App() {
  const [adminMode, setAdminMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementById("site-header");
      const headerHeight = headerElement?.offsetHeight || 64;

      document.documentElement.style.setProperty(
        "--app-topbar-h",
        `${headerHeight}px`,
      );
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f9f5] font-sans">
      {/* Header */}
      <div id="site-header" className="relative z-50">
        <Header scrollToSection={scrollToSection} />
      </div>

      <main>
        {/* Dark branded opening */}
        <Hero />

        {/* Before / After Results */}
        <section
          id="beforeafter"
          className="
            relative
            scroll-mt-20
            overflow-hidden
            border-b
            border-slate-200/70
            bg-[#fbfcf9]
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[rgba(16,148,192,0.28)]
              to-transparent
            "
          />

          <div className="relative z-10">
            <CleaningShowcase sofaPairs={sofaPairs} />
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="
            relative
            scroll-mt-20
            bg-white
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:py-20
          "
        >
          <div className="mx-auto max-w-7xl">
            <Services />
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="
            relative
            scroll-mt-20
            border-t
            border-slate-200/70
            bg-[#f5f7f2]
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:py-20
          "
        >
          <div className="mx-auto max-w-6xl">
            <FAQSection />
          </div>
        </section>
      </main>

      {/* Hidden admin entrance */}
      <button
        type="button"
        onClick={() => setAdminMode(true)}
        aria-label="لوحة الأدمن"
        className="
          fixed
          bottom-3
          right-3
          z-[9999]
          select-none
          text-[15px]
          font-semibold
          tracking-wide
          text-slate-500
          opacity-0
          transition-opacity
          duration-500
          hover:opacity-30
        "
        style={{
          fontFamily: "'Cinzel', serif",
          textShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
        }}
      >
        Lumora ✦
      </button>
    </div>
  );
}

export default App;
