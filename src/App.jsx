import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import ContactSection from "./components/contact/ContactSection";
import { useState } from "react";
import BeforeAfterCarousel from "./components/BefAfter/BeforeAfterCarousel";
import Services from "./components/services/Services";

// ✅ استيراد الصور من src/assets
import before1 from "./assets/before1.jpg";
import after1 from "./assets/after1.jpg";
import before2 from "./assets/before2.jpg";
import after2 from "./assets/after2.jpg";
import before3 from "./assets/before3.jpg";
import after3 from "./assets/after3.jpg";

function App() {

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />

       {/* ✅ قسم قبل/بعد مع ID مناسب و padding علوي */}
      <section id="beforeafter" className="py-24 bg-white">
        <BeforeAfterCarousel
          items={[
            { before: before1, after: after1 },
            { before: before2, after: after2 },
            { before: before3, after: after3 },
          ]}
        />
      </section>

      <ContactSection/>
    </div>
  );
}

export default App;
