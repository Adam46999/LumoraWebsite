// ContactSection.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [flash, setFlash] = useState(false);

  // ⚡ محاكاة إرسال الرسالة
  const handleSend = async () => {
    setSending(true);
    setShowError(false);
    setFlash(false);

    // حركة "تنفس" أسرع أثناء الإرسال
    document.body.classList.add("contact-breathing");

    await new Promise((res) => setTimeout(res, 2500));
    const success = Math.random() > 0.1; // نسبة نجاح تجريبية

    setSending(false);
    document.body.classList.remove("contact-breathing");

    if (success) {
      setShowSuccess(true);
      setFlash(true);
      setTimeout(() => setShowSuccess(false), 4000);
      setTimeout(() => setFlash(false), 1200);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    }
  };

  // 🔦 تأثير وميض الضوء بعد الإرسال الناجح
  useEffect(() => {
    if (flash) {
      const timeout = setTimeout(() => setFlash(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [flash]);

  return (
    <section
      id="contact"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`
        relative overflow-hidden
        py-20 sm:py-24 px-4 sm:px-6
        bg-gradient-to-b from-[#f8fbff] via-[#eaf2ff] to-[#d9e6ff]
        text-gray-800
        transition-all duration-500
      `}
    >
      {/* ✨ لمعة خفيفة علوية */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/70 to-transparent -z-0" />

      {/* 🌬️ خلفية متحركة دافئة */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-400/30 rounded-full blur-3xl top-[-180px] left-[-200px] animate-float-slow" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-300/25 rounded-full blur-2xl bottom-[-150px] right-[-120px] animate-float-slower" />
        <div className="absolute w-[250px] h-[250px] bg-blue-200/40 rounded-full blur-xl top-[40%] left-[60%] animate-float-tiny" />

        {/* 💡 ضوء ناعم في المنتصف */}
        <div className="absolute w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[160px] top-[30%] left-[30%]" />
      </div>

      {/* ⚡ تأثير وميض عند النجاح */}
      {flash && (
        <div className="absolute inset-0 bg-white/60 animate-flash pointer-events-none -z-0"></div>
      )}

      {/* 🧊 البطاقة الرئيسية */}
      <div
        className="
          max-w-4xl mx-auto
          bg-white/85 backdrop-blur-xl
          border border-white/60
          rounded-3xl p-8 sm:p-10
          shadow-[0_8px_35px_rgba(59,130,246,0.12)]
          hover:shadow-[0_12px_45px_rgba(59,130,246,0.2)]
          transition-all duration-500
          hover:-translate-y-1.5
          text-center
          animate-fade-in-up
        "
      >
        {/* 📨 أيقونة وعنوان */}
        <div className="flex items-center justify-center gap-2 animate-fade-in">
          <span className="text-blue-500 text-3xl">📩</span>
          <ContactHeader />
        </div>

        {/* 📬 النموذج */}
        <div className="mt-12 animate-fade-in delay-200">
          <ContactForm onSend={handleSend} />
        </div>

        {/* 🔵 حالة الإرسال */}
        {sending && (
          <div className="mt-6 text-blue-600 text-sm flex justify-center items-center gap-2 animate-pulse">
            <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
            {lang === "ar" ? "جارٍ الإرسال..." : "Sending..."}
          </div>
        )}

        {/* ✅ رسالة النجاح */}
        {showSuccess && (
          <div
            className="
              mt-6 bg-green-50 border border-green-200 text-green-700
              rounded-xl py-3 px-5 text-sm sm:text-base
              animate-toast-in
            "
          >
            {lang === "ar"
              ? "✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا."
              : "✅ Message sent successfully! We’ll reach out soon."}
          </div>
        )}

        {/* ⚠️ رسالة الخطأ */}
        {showError && (
          <div
            className="
              mt-6 bg-red-50 border border-red-200 text-red-700
              rounded-xl py-3 px-5 text-sm sm:text-base
              animate-toast-in
            "
          >
            {lang === "ar"
              ? "⚠️ حدث خطأ مؤقت أثناء الإرسال. حاول مجددًا لاحقًا."
              : "⚠️ Something went wrong. Please try again later."}
          </div>
        )}

        {/* 🔗 روابط الاتصال */}
        <div className="mt-14 grid sm:flex justify-center gap-4 animate-fade-in delay-500">
          <ContactLinks />
        </div>
      </div>

      {/* 🎞️ الأنيميشنات */}
      <style>
        {`
        /* حركات الفقاعات */
        @keyframes float-slow {
          0%,100%{transform:translateY(0)translateX(0);}
          50%{transform:translateY(30px)translateX(25px);}
        }
        .animate-float-slow{animation:float-slow 12s ease-in-out infinite;}

        @keyframes float-slower {
          0%,100%{transform:translateY(0)translateX(0);}
          50%{transform:translateY(-35px)translateX(-25px);}
        }
        .animate-float-slower{animation:float-slower 16s ease-in-out infinite;}

        @keyframes float-tiny {
          0%,100%{transform:translateY(0);opacity:0.25;}
          50%{transform:translateY(-20px);opacity:0.45;}
        }
        .animate-float-tiny{animation:float-tiny 10s ease-in-out infinite;}

        /* حركة دخول */
        @keyframes fade-in-up {
          0%{opacity:0;transform:translateY(30px) scale(0.98);}
          100%{opacity:1;transform:translateY(0) scale(1);}
        }
        .animate-fade-in-up{animation:fade-in-up 0.9s ease-out;}

        /* Toast */
        @keyframes toast-in {
          0%{opacity:0;transform:translateY(10px);}
          100%{opacity:1;transform:translateY(0);}
        }
        .animate-toast-in{animation:toast-in 0.5s ease-out;}

        /* وميض الضوء */
        @keyframes flash {
          0%{opacity:0;}
          50%{opacity:1;}
          100%{opacity:0;}
        }
        .animate-flash{animation:flash 0.8s ease-out;}

        /* تأثير تنفس القسم أثناء الإرسال */
        @keyframes breathe {
          0%,100%{filter:brightness(1);}
          50%{filter:brightness(1.07);}
        }
        body.contact-breathing section#contact{
          animation:breathe 2.5s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
}
