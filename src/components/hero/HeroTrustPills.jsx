import { useLanguage } from "../../context/LanguageContext";

export default function HeroTrustPills() {
  const { t } = useLanguage();

  const items = [
    { icon: "⏱️", text: t.heroPill1 || "التزام بالمواعيد" },
    { icon: "✨", text: t.heroPill2 || "تفاصيل دقيقة ونتائج واضحة" },
    { icon: "🧼", text: t.heroPill3 || "مواد آمنة وخيارات صديقة للبيئة" },
  ];

  return (
    <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in">
      {items.map((it, idx) => (
        <div
          key={idx}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/25 border border-white/15 text-white/90 text-xs sm:text-sm backdrop-blur-[2px]"
        >
          <span className="text-base">{it.icon}</span>
          <span className="font-semibold tracking-wide">{it.text}</span>
        </div>
      ))}
    </div>
  );
}
