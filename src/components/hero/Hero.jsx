import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

// استورد الصور
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage(); // ✅ دعم الترجمة

  // تغيير الصورة كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">
      {/* خلفية متغيرة */}
      <img
        src={heroImages[currentImage]}
        alt={t.heroAlt || "خدمة تنظيف"}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* طبقة ظل */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* النص */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-tight">
          <span className="text-black">{t.heroHighlight1}</span>{" "}
          <span className="text-blue-500">{t.heroHighlight2}</span>
        </h1>

        <p className="text-base sm:text-lg mb-8 max-w-2xl">{t.heroSubtitle}</p>

        <a
          href="#contact"
          className="flex items-center bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-r-full rounded-l-[9999px] pr-6 pl-2 py-2 transition-all shadow-lg"
        >
          <div className="w-8 h-8 bg-white text-[#3B82F6] flex items-center justify-center rounded-full mr-2 text-lg font-bold">
            ≫
          </div>
          <span className="font-semibold text-sm">{t.heroButton}</span>
        </a>
      </div>
    </section>
  );
}
