import { useLanguage } from "../../context/LanguageContext";

export default function HeroTitle() {
  const { t } = useLanguage();

  return (
    <h1
      className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center"
      style={{ textShadow: "0 3px 6px rgba(0,0,0,0.7)" }}
    >
      <span className="text-black">{t.heroHighlight1}</span>{" "}
      <span className="text-blue-500">{t.heroHighlight2}</span>
    </h1>
  );
}
