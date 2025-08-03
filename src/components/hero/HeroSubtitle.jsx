import { useLanguage } from "../../context/LanguageContext";

export default function HeroSubtitle() {
  const { t } = useLanguage();

  return (
    <p
      className="text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl text-center px-2"
      style={{ textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}
    >
      {t.heroSubtitle}
    </p>
  );
}
