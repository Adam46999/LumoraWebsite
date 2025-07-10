import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion"; // تأكد أنك مثبت framer-motion
import { CalendarDays } from "lucide-react"; // أيقونة للزر

export default function HeroText() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "نظافة مبتكرة… لمكان أنيق",
      subtitle: "نقدّم لك تجربة تنظيف ذكية للكنب، السجاد، والسيارات – نتائج فورية بدون فوضى.",
      button: "احجز الآن",
    },
    en: {
      title: "Smart Cleaning for a Fresh Space",
      subtitle: "We deliver a fast, spotless cleaning experience for sofas, carpets, and cars.",
      button: "Book Now",
    },
    he: {
      title: "ניקוי חכם… לתוצאה מושלמת",
      subtitle: "ניקוי ספות, שטיחים ורכבים – ללא לכלוך וללא זמן מבוזבז.",
      button: "הזמן עכשיו",
    },
  };

  const { title, subtitle, button } = content[lang] || content["ar"];
  const isRTL = lang === "ar" || lang === "he";

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-${isRTL ? "right" : "left"} flex-1`}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        {title}
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        {subtitle}
      </p>

      <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition flex items-center gap-2">
        <CalendarDays className="w-5 h-5" />
        {button}
      </button>
    </motion.div>
  );
}
