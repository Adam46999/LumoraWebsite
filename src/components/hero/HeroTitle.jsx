// src/components/hero/HeroTitle.jsx
import { useLanguage } from "../../context/LanguageContext";
import { useState, useEffect } from "react";

export default function HeroTitle() {
  const { t } = useLanguage();

  // الكلمات المتبدلة (نقدر نجيبها من الترجمة t)
  const words = [
    t.heroHighlight1 || "الكنب",
    t.heroHighlight2 || "السيارات",
    t.heroHighlight3 || "السجاد",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // سرعة الكتابة والمسح
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < words[currentWordIndex].length) {
      // اكتب حرف حرف
      timeout = setTimeout(() => {
        setDisplayText(
          words[currentWordIndex].slice(0, displayText.length + 1)
        );
      }, typingSpeed);
    } else if (
      !isDeleting &&
      displayText.length === words[currentWordIndex].length
    ) {
      // استنى شوي قبل المسح
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayText.length > 0) {
      // امسح حرف حرف
      timeout = setTimeout(() => {
        setDisplayText(
          words[currentWordIndex].slice(0, displayText.length - 1)
        );
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // انتقل للكلمة التالية
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <h1
      className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center
                 animate-slide-up
"
      style={{ textShadow: "0 3px 6px rgba(0,0,0,0.7)" }}
    >
      <span className="text-white">
        {t.heroStatic || "تنظيف عميق ومرتب لـ"}
      </span>{" "}
      <span className="text-blue-500">{displayText}|</span>
    </h1>
  );
}
