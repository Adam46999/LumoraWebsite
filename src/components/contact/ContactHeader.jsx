import React from "react";
import { useLanguage } from "../../context/LanguageContext";

// ألوان العلامة
const accents = {
  blue: {
    from: "from-blue-600",
    to: "to-blue-400",
    ring: "ring-blue-200",
    soft: "bg-blue-50",
    glow: "shadow-[0_8px_30px_rgba(59,130,246,.16)]",
  },
  indigo: {
    from: "from-indigo-600",
    to: "to-indigo-400",
    ring: "ring-indigo-200",
    soft: "bg-indigo-50",
    glow: "shadow-[0_8px_30px_rgba(79,70,229,.16)]",
  },
  emerald: {
    from: "from-emerald-600",
    to: "to-emerald-400",
    ring: "ring-emerald-200",
    soft: "bg-emerald-50",
    glow: "shadow-[0_8px_30px_rgba(16,185,129,.14)]",
  },
};

// variants: 'elevated-card' | 'gradient-border' | 'glass' | 'soft-pill'
export default function ContactHeaderPro({
  variant = "elevated-card",
  accent = "blue",
  align = "center",
  tightMobile = true,
}) {
  const { t } = useLanguage();
  const titleSpan = t.contactTitleSpan || "تواصل";
  const titleMain = t.contactTitle || "معنا";
  const subtitle =
    t.contactSubtitle || "يسعدنا تواصلك معنا في أي وقت، فريقنا جاهز لخدمتك.";

  const ac = accents[accent] || accents.blue;

  const wrap = [
    "relative mx-auto max-w-3xl",
    align === "center" ? "text-center" : "text-start",
    tightMobile ? "mb-8 sm:mb-12" : "mb-12",
  ].join(" ");

  // مستطيل الخلفية بحسب الستايل
  const Card = ({ children }) => {
    if (variant === "gradient-border") {
      return (
        <span className="relative inline-block rounded-3xl p-[2px] bg-gradient-to-r from-black/5 via-gray-200 to-white/40">
          <span
            className={`block rounded-3xl bg-white ring-1 ${ac.ring} ${ac.glow} px-5 sm:px-7 py-2`}
          >
            {children}
          </span>
        </span>
      );
    }
    if (variant === "glass") {
      return (
        <span
          className={`relative inline-block rounded-3xl bg-white/45 ring-1 ring-white/60 backdrop-blur-md ${ac.glow} px-5 sm:px-7 py-2`}
        >
          {children}
        </span>
      );
    }
    if (variant === "soft-pill") {
      return (
        <span
          className={`inline-block rounded-[2rem] ${ac.soft} ring-1 ${ac.ring} shadow-sm px-5 sm:px-7 py-2`}
        >
          {children}
        </span>
      );
    }
    // elevated-card (افتراضي)
    return (
      <span
        className={`inline-block rounded-3xl bg-white ring-1 ring-gray-200 shadow-[0_6px_24px_rgba(6,24,44,.06)] px-5 sm:px-7 py-2`}
      >
        {children}
      </span>
    );
  };

  return (
    <div className={wrap}>
      <h2 className="font-black leading-tight tracking-tight">
        <Card>
          {/* تدرّج على كلمة تواصل */}
          <span
            className={`bg-gradient-to-r ${ac.from} via-${accent}-500 ${ac.to} bg-clip-text text-transparent text-[42px] sm:text-[56px]`}
          >
            {titleSpan}
          </span>{" "}
          {/* كلمة معنا سوداء لثبات القراءة */}
          <span className="text-gray-900 text-[42px] sm:text-[56px]">
            {titleMain}
          </span>
        </Card>
      </h2>

      {/* خط سفلي متدرّج محسّن */}
      <div
        className={[
          "relative mt-4 flex",
          align === "center" ? "justify-center" : "justify-start",
        ].join(" ")}
      >
        <div className="relative h-[3px] w-32 rounded-full overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${ac.from} ${ac.to}`}
          />
          <div className="absolute inset-0 animate-sheen bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>

      <style>{`
        @keyframes sheen { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        .animate-sheen{ mix-blend-overlay; animation:sheen 2.2s ease-in-out infinite; opacity:.35 }
        @media (max-width:640px){ .animate-sheen{ animation-duration:3s; opacity:.25 } }
        @media (prefers-reduced-motion: reduce){ .animate-sheen{ animation:none } }
      `}</style>
    </div>
  );
}
