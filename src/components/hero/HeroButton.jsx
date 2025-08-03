export default function HeroButton({ t }) {
  return (
    <a
      href="#contact"
      dir="ltr" // نمنع الـ RTL يأثر على ترتيب العناصر
      className="flex items-center bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full pl-2 pr-6 py-2 transition-all duration-200 shadow-lg hover:scale-105"
    >
      {/* السهم داخل دائرة على اليسار */}
      <div className="w-8 h-8 bg-white text-[#3B82F6] flex items-center justify-center rounded-full text-lg font-bold mr-2">
        ≫
      </div>
      {/* النص على اليمين */}
      <span className="text-sm sm:text-base font-semibold tracking-wide">
        {t.heroButton}
      </span>
    </a>
  );
}
