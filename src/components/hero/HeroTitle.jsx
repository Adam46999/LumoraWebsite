// src/components/hero/HeroTitle.jsx
import { useLanguage } from "../../context/LanguageContext";
import { useState, useEffect } from "react";

export default function HeroTitle() {
  const { t } = useLanguage();

  const words = [
    t.heroHighlight1 || "الكنب",
    t.heroHighlight2 || "السيارات",
    t.heroHighlight3 || "السجاد",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 120;
  const deletingSpeed = 80;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <h1
      className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 text-center animate-slide-up"
      style={{ textShadow: "0 3px 6px rgba(0,0,0,0.7)" }}
    >
      <span className="text-white">
        {t.heroStatic || "تنظيف عميق ومرتب لـ"}
      </span>{" "}
      <span className="text-blue-500">{displayText}|</span>
    </h1>
  );
}
