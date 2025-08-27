// src/components/hero/HeroButton.jsx
export default function HeroButton({ t }) {
  return (
    <>
      {/* الزر الأساسي داخل الهيرو (يظهر على الشاشات المتوسطة فما فوق) */}
      <a
        href="#contact"
        dir="ltr"
        className="hidden sm:flex relative items-center bg-[#3B82F6] hover:bg-[#2563EB] 
                   text-white rounded-full pl-2 pr-6 py-2 shadow-lg 
                   transition-all duration-200 hover:scale-105 animate-glow"
      >
        {/* الأيقونة داخل دائرة */}
        <div
          className="w-8 h-8 flex items-center justify-center bg-white text-[#3B82F6] 
                     rounded-full text-lg font-bold mr-2"
        >
          ≫
        </div>

        {/* النص */}
        <span className="text-sm sm:text-base font-semibold tracking-wide">
          {t.heroButton || "احجز الآن"}
        </span>
      </a>

      {/* زر عائم مخصص للموبايل (يظهر على الشاشات الصغيرة فقط) */}
      <a
        href="#contact"
        className="sm:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center 
                   w-14 h-14 rounded-full bg-[#3B82F6] text-white text-2xl shadow-xl animate-glow"
      >
        📩
      </a>
    </>
  );
}
