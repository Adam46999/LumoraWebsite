import { useLanguage } from "../../context/LanguageContext";

export default function ContactHeader() {
  const { t } = useLanguage();

  return (
    <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in">
      <h2 className="text-5xl sm:text-6xl font-black leading-tight">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
          {t.contactTitleSpan || "تواصل"}
        </span>{" "}
        {t.contactTitle || "معنا"}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="h-[3px] w-24 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-md" />
      </div>
      <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        {t.contactSubtitle ||
          "يسعدنا تواصلك معنا في أي وقت، فريقنا جاهز لخدمتك."}
      </p>

      <style>
        {`
        @keyframes gradient {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }
        `}
      </style>
    </div>
  );
}
