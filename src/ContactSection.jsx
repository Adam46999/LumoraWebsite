// src/sections/ContactSection.jsx
import ContactForm from "../components/contact/ContactForm";
import { saveContactMessage } from "../services/contactMessages";

export default function ContactSection() {
  // هاي الدالة بتناديها ContactForm لما الفورم ينجح
  const handleSend = async (payload) => {
    // payload = { subject, name, phone, message, channel }
    await saveContactMessage(payload);
    // لو حابب تضيف tracking / toast إضافي، حطه هون
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto">
      {/* أي عنوان / نص فوق الفورم */}
      <ContactForm onSend={handleSend} isRTL={true} />
    </section>
  );
}
