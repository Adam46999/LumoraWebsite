// src/App.jsx
import { useEffect } from "react";
import useSectionNavigation from "./hooks/useSectionNavigation";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import CleaningShowcase from "./components/BefAfter/CleaningShowcase";
import ContactSection from "./components/contact/ContactSection";

import before1 from "./assets/before1.jpg";
import after1 from "./assets/after1.jpg";
import before2 from "./assets/before2.jpg";
import after2 from "./assets/after2.jpg";
import before3 from "./assets/before3.jpg";
import after3 from "./assets/after3.jpg";

function App() {
  const { scrollToSection, shakeTarget } = useSectionNavigation();

  // احسب ارتفاع الهيدر وخزّنه بمتغيّر CSS عالمي
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

  // بيانات التجريب
  const sofaPairs = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
  ];

  const carsImages = [
    { src: after1, caption: "غسيل سيارات VIP" },
    { src: after2, caption: "تلميع خارجي" },
  ];

  const rugsImages = [
    { src: after3, caption: "تنظيف سجاد عميق" },
    { src: before3, caption: "إزالة بقع صعبة" },
  ];

  return (
    <div className="font-sans">
      {/* لفّ الهيدر لتحديد ارتفاعه */}
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
    </div>
  );
}

export default App;
