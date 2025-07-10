export default function HeroImage() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <img
        src="/hero-cleaning.png" // ✨ غيّر هذا حسب اسم الصورة الفعلي بمشروعك
        alt="خدمة تنظيف"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  );
}
