import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeader() {
  const { t } = useLanguage();
  const titleSpan = t.contactTitleSpan || "تواصل";
  const titleMain = t.contactTitle || "معنا";
  const subtitle =
    t.contactSubtitle || "يسعدنا تواصلك معنا في أي وقت، فريقنا جاهز لخدمتك.";

  return (
    <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12">
      {/* كبسولة العنوان */}
      <h2 className="font-black leading-tight tracking-tight">
        <span
          className="
            inline-flex items-center justify-center
            rounded-[20px] sm:rounded-[22px]
            bg-white ring-1 ring-gray-200/90
            shadow-[0_8px_24px_rgba(6,24,44,.06)]
            px-4 sm:px-6 py-2
          "
        >
          {/* تدرّج على كلمة (تواصل) */}
          <span
            className="
            bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400
            bg-clip-text text-transparent
            text-[34px] sm:text-[44px]
          "
          >
            {titleSpan}
          </span>
          <span className="mx-1.5 sm:mx-2" />
          {/* كلمة (معنا) سوداء لثبات القراءة */}
          <span className="text-gray-900 text-[34px] sm:text-[44px]">
            {titleMain}
          </span>
        </span>
      </h2>

      {/* خط سفلي متدرّج */}
      <div className="relative mt-4 flex justify-center">
        <div className="relative h-[3px] w-28 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
          <div className="absolute inset-0 animate-sheen bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>
        {/* هالة خفيفة ناعمة */}
        <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-40 h-10 bg-blue-100/50 rounded-full blur-xl" />
      </div>

      {/* ساب تايتل خفيف */}
      <p className="mt-4 text-gray-600 text-[15px] sm:text-lg leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>

      {/* حركات خفيفة وتوافق تقليل الحركة */}
      <style>
        {`
        @keyframes sheen { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        .animate-sheen{ mix-blend-overlay; animation:sheen 2.2s ease-in-out infinite; opacity:.35 }
        @media (max-width:640px){ .animate-sheen{ animation-duration:3s; opacity:.25 } }
        @media (prefers-reduced-motion: reduce){ .animate-sheen{ animation:none } }
        `}
      </style>
    </div>
  );
}
