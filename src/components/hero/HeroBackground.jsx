// src/components/hero/HeroBackground.jsx
import { useEffect, useMemo, useState } from "react";

import sofaImage from "../../assets/hero1.jpg";
import carpetImage from "../../assets/hero3.jpg";

const HERO_IMAGES = [
  {
    id: "sofa",
    src: sofaImage,
    position: "center",
  },
  {
    id: "carpet",
    src: carpetImage,
    position: "center",
  },
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || HERO_IMAGES.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex(
        (previousIndex) => (previousIndex + 1) % HERO_IMAGES.length,
      );
    }, 6000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        bg-[var(--lumora-navy-950)]
      "
    >
      {HERO_IMAGES.map((image, index) => {
        const isActive = index === currentIndex;

        return (
          <img
            key={image.id}
            src={image.src}
            alt=""
            draggable={false}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            className={[
              "absolute inset-0 h-full w-full object-cover",
              "transition-opacity duration-[1200ms] ease-in-out",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              objectPosition: image.position,
              transform: "translateZ(0)",
            }}
          />
        );
      })}
    </div>
  );
}
