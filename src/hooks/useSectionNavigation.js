// src/hooks/useSectionNavigation.js
import { useState } from "react";

export default function useSectionNavigation() {
  const [shakeTarget, setShakeTarget] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isFullyVisible) {
      // إذا القسم ظاهر كامل – فقط نفعل الاهتزاز
      setShakeTarget(id);
      setTimeout(() => setShakeTarget(null), 1000);
    } else if (isPartiallyVisible) {
      // إذا ظاهر جزئيًا – مرر للقسم وفعّل الاهتزاز بعد التمرير
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        setShakeTarget(id);
        setTimeout(() => setShakeTarget(null), 1000);
      }, 600);
    } else {
      // إذا مش ظاهر نهائيًا – مرر للقسم فقط، بدون اهتزاز
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return { scrollToSection, shakeTarget };
}
