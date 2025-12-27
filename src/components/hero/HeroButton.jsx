// src/components/hero/HeroButton.jsx
export default function HeroButton({ t }) {
  // ✅ روابط قابلة للتعديل من الترجمة (اختياري)
  // لو ما حطيتهم بالترجمة رح يشتغلوا كـ fallback محترم
  const whatsappLink = t.whatsappLink || "https://wa.me/0000000000"; // غيّر الرقم أو حط key بالترجمة
  const callLink = t.callLink || "tel:+0000000000"; // اختياري
  const primaryText = t.heroButtonPrimary || "واتساب الآن";
  const secondaryText = t.heroButtonSecondary || "اطلب عرض سعر";

  return (
    <>
      {/* ✅ أزرار الهيرو (يظهر على الشاشات المتوسطة فما فوق) */}
      <div className="hidden sm:flex items-center gap-3 animate-slide-up">
        {/* Primary: WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          dir="ltr"
          className="
            btn-primary shadow-lg hover:scale-105 animate-glow
            px-6 py-3
          "
          aria-label="WhatsApp"
        >
          <span className="mr-2 text-lg">💬</span>
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            {primaryText}
          </span>
        </a>

        {/* Secondary: Quote -> Contact */}
        <a
          href="#contact"
          className="
            inline-flex items-center justify-center
            rounded-full px-6 py-3
            bg-white/10 hover:bg-white/15
            border border-white/25
            text-white shadow-lg
            transition-all duration-200 hover:scale-105
          "
        >
          <span className="mr-2 text-lg">🧾</span>
          <span className="text-sm sm:text-base font-semibold tracking-wide">
            {secondaryText}
          </span>
        </a>

        {/* Optional: Call (لو بدك) */}
        {t.showCallButton ? (
          <a
            href={callLink}
            dir="ltr"
            className="
              inline-flex items-center justify-center
              rounded-full px-5 py-3
              bg-white/10 hover:bg-white/15
              border border-white/25
              text-white shadow-lg
              transition-all duration-200 hover:scale-105
            "
          >
            <span className="mr-2 text-lg">📞</span>
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              {t.callNow || "اتصال"}
            </span>
          </a>
        ) : null}
      </div>

      {/* ✅ زر عائم للموبايل (WhatsApp) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="
          sm:hidden fixed bottom-6 right-6 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[var(--primary)] hover:bg-[var(--primary-600)]
          text-white text-2xl shadow-xl
          transition-all duration-200 active:translate-y-[1px]
          animate-glow
        "
      >
        💬
      </a>
    </>
  );
}
