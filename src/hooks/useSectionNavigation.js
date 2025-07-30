import { useState } from "react";

function useSectionNavigation() {
  const [shakeTarget, setShakeTarget] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const headerHeight = 80;

    const elTop = rect.top + window.scrollY;
    const elBottom = rect.bottom + window.scrollY;

    const viewTop = window.scrollY + headerHeight;
    const viewBottom = window.scrollY + window.innerHeight;

    const isFullyVisible = elTop >= viewTop && elBottom <= viewBottom;
    const isPartiallyVisible = elBottom > viewTop && elTop < viewBottom;

    const triggerShake = (targetId) => {
      setShakeTarget(targetId);
      setTimeout(() => setShakeTarget(null), 1000);
    };

    if (isFullyVisible) {
      triggerShake(id);
    } else if (isPartiallyVisible) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => triggerShake(id), 600);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return { scrollToSection, shakeTarget };
}

// 🟢 هذا هو السطر المهم لحل المشكلة:
export default useSectionNavigation;
