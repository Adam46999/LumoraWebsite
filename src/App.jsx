// src/App.jsx
import useSectionNavigation from "./hooks/useSectionNavigation";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
// ❌ كان: import BeforeAfterCarousel from "./components/BefAfter/BeforeAfterCarousel";
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

  // بيانات جاهزة للتمرير:
  const sofaPairs = [
    { before: before1, after: after1 },
    { before: before2, after: after2 },
    { before: before3, after: after3 },
  ];

  // مؤقتًا استعمل نفس الصور لأي سلايدر لحد ما تحط صور سيارات/سجاد
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
      <Header scrollToSection={scrollToSection} />

      <Hero />

      <section
        id="services"
        className={`py-20 px-6 transition-all duration-300 ${
          shakeTarget === "services" ? "animate-shake" : ""
        }`}
      >
        <Services />
      </section>

      {/* ✅ هنا التبويبات الجديدة بدل BeforeAfterCarousel */}
      <section
        id="beforeafter"
        className={`py-24 px-6 transition-all duration-300 ${
          shakeTarget === "beforeafter" ? "animate-shake" : ""
        }`}
      >
        <CleaningShowcase
          defaultTab="sofa" // "cars" | "sofa" | "rugs"
          carsImages={carsImages} // سلايدر
          rugsImages={rugsImages} // سلايدر
          sofaPairs={sofaPairs} // Before/After
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
