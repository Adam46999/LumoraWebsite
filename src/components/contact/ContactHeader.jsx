import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useState } from "react";

export default function ContactHeader() {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.75) setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`relative text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* 🌬️ عناصر زخرفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-48 h-48 bg-blue-200/30 blur-3xl rounded-full top-[-60px] left-[-80px] animate-pulse-slow" />
        <div className="absolute w-64 h-64 bg-blue-100/25 blur-3xl rounded-full bottom-[-80px] right-[-100px] animate-pulse-slower" />
      </div>

      {/* ✨ العنوان */}
      <h2 className="relative text-5xl sm:text-6xl font-black text-gray-900 leading-tight tracking-tight">
        <span className="relative inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent shine-text">
          {t.contactTitleSpan || "تواصل"}
        </span>{" "}
        {t.contactTitle || "معنا"}
      </h2>

      {/* 🌈 فاصل زخرفي */}
      <div className="mt-4 flex justify-center">
        <div className="h-[3px] w-28 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full" />
      </div>

      {/* ✉️ الوصف العام */}
      <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        {t.contactSubtitle ||
          "املأ النموذج أدناه أو تواصل معنا مباشرة عبر الوسائل المتاحة."}
      </p>

      {/* ✨ الأنيميشنات والتأثيرات */}
      <style>
        {`
        /* 💡 تأثير الضوء على النص */
        .shine-text {
          background-size: 200% auto;
          animation: shine 6s linear infinite;
        }
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* 💨 حركات الزخارف */
        @keyframes pulse-slow {
          0%,100%{opacity:0.4;transform:scale(1);}
          50%{opacity:0.7;transform:scale(1.1);}
        }
        .animate-pulse-slow{animation:pulse-slow 8s ease-in-out infinite;}

        @keyframes pulse-slower {
          0%,100%{opacity:0.3;transform:scale(1);}
          50%{opacity:0.6;transform:scale(1.15);}
        }
        .animate-pulse-slower{animation:pulse-slower 12s ease-in-out infinite;}
        `}
      </style>
    </div>
  );
}
