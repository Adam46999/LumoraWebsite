// src/components/hero/ScrollHint.jsx
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
      {/* أيقونة الماوس */}
      <div className="w-8 h-12 border-2 border-white/70 rounded-full flex items-start justify-center p-2 relative">
        <div className="w-1 h-2 bg-white/80 rounded-full animate-scroll-dot"></div>
      </div>

      {/* الخط المتدرج */}
      <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent mt-2 animate-scroll-line"></div>

      {/* النص */}
      <p className="mt-3 text-xs tracking-widest uppercase text-white/70 animate-fade-in">
        استكشف
      </p>
    </div>
  );
}
