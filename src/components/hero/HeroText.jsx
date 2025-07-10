import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import ServiceModal from "./ServiceModal"; // رح نعمله خطوة بخطوة

export default function HeroText() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto px-4"
        dir="rtl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          نظافة مبتكرة…{" "}
          <span className="text-[#3B82F6]">لمكان أنيق</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          نقدّم لك تجربة تنظيف ذكية للكنب، السجاد، والسيارات – نتائج فورية بدون فوضى.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium px-6 py-3 rounded-xl shadow-md transition flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            احجز الآن
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-[#3B82F6] text-[#3B82F6] font-medium px-6 py-3 rounded-xl hover:bg-[#E0ECFF] transition"
          >
            تعرّف على الخدمة
          </button>
        </div>
      </motion.div>

      {/* المودال */}
      <ServiceModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
