import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-tr from-blue-50 to-white"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* العنوان */}
      <ContactHeader />

      {/* النموذج */}
      <ContactForm />

      {/* روابط الاتصال */}
      <ContactLinks />
    </section>
  );
}
