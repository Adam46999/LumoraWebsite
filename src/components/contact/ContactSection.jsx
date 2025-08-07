// ContactSection.jsx
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative py-28 px-4 bg-gradient-to-br from-blue-100 via-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* العنوان */}
        <div className="animate-fade-in">
          <ContactHeader />
        </div>

        {/* النموذج */}
        <div className="mt-16 animate-fade-in delay-200">
          <ContactForm />
        </div>

        {/* روابط الاتصال */}
        <div className="mt-24 animate-fade-in delay-500">
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
