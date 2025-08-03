import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

// استيراد الصور
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

// استيراد المكونات الفرعية
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButton from "./HeroButton";
import ScrollHint from "./ScrollHint";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  // تغيير الصورة تلقائيًا كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* خلفية متغيرة */}
      <img
        src={heroImages[currentImage]}
        alt={t.heroAlt || "خدمة تنظيف"}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* طبقة ظل داكنة شفافة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />

      {/* المحتوى */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <HeroTitle t={t} />
        <HeroSubtitle t={t} />
        <HeroButton t={t} />
        <ScrollHint />
      </div>
    </section>
  );
}
