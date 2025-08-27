// src/components/hero/HeroBackground.jsx
import { useEffect, useState } from "react";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  // غيّر الصورة كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {heroImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* طبقة ظل فوق الصور عشان النص يبين */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
    </div>
  );
}
