// src/components/contact/ContactHeader.jsx
import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeader() {
  const { t } = useLanguage();
  const titleSpan = t.contactTitleSpan || "تواصل";
  const titleMain = t.contactTitle || "معنا";
  const subtitle =
    t.contactSubtitle || "يسعدنا تواصلك معنا في أي وقت، فريقنا جاهز لخدمتك.";

  return (
    <div className="relative text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
          {titleSpan}
        </span>{" "}
        <span className="text-gray-900">{titleMain}</span>
      </h2>

      {/* خط سفلي متدرّج مع لمعة + هالة أنعم */}
      <div className="relative mt-4 flex justify-center">
        <div className="relative h-[4px] w-32 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
          <div className="absolute inset-0 animate-sheen bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>
        <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-40 h-10 bg-blue-100/50 rounded-full blur-xl" />
      </div>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>

      <style>
        {`
        @keyframes gradient { 0%{background-position:200% center}100%{background-position:-200% center} }
        .animate-gradient{ background-size:200% auto; animation:gradient 6s linear infinite; }

        @keyframes sheen { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        .animate-sheen{ mix-blend-overlay; animation:sheen 2.2s ease-in-out infinite; opacity:.35 }

        /* تقليل الحركة على الشاشات الصغيرة */
        @media (max-width:640px){
          .animate-gradient{ animation-duration:8s; }
          .animate-sheen{ animation-duration:3s; opacity:.25 }
        }
        @media (prefers-reduced-motion: reduce){
          .animate-gradient, .animate-sheen{ animation:none }
        }
        `}
      </style>
    </div>
  );
}
