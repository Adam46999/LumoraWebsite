import Header from "./components/Header"
import Hero from "./components/hero/Hero";
import ContactSection from "./components/contact/ContactSection";
import { useState } from "react";
import ServiceModal from "./components/hero/ServiceModal";
import BeforeAfter from "./components/BefAfter/BeforeAfter";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <BeforeAfter />
      <ContactSection onOpenModal={() => setIsModalOpen(true)} />
      <ServiceModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}



export default App
