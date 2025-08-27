import { useLanguage } from "../../context/LanguageContext";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButton from "./HeroButton";
import ScrollHint from "./ScrollHint";
import HeroBackground from "./HeroBackground"; // ✅ جديد

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="hero"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* الخلفية */}
      <HeroBackground />

      {/* المحتوى */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <HeroTitle />
        <HeroSubtitle />
        <HeroButton t={t} />
        <ScrollHint />
      </div>
    </section>
  );
}
