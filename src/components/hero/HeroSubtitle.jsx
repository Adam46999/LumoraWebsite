// src/components/hero/HeroSubtitle.jsx
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSubtitle() {
  const { t } = useLanguage();

  return (
    <p
      className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 max-w-2xl text-center px-2 text-white animate-slide-up"
      style={{ textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}
    >
      {t.heroSubtitle ||
        "نتائج نظافة بتبين من أول مرة — حجز سريع، التزام بالمواعيد، واهتمام بالتفاصيل حتى آخر زاوية."}
    </p>
  );
}
