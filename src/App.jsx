// src/App.jsx
import { useCallback, useEffect, useMemo, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import CleaningShowcase from "./components/BefAfter/CleaningShowcase";
import FAQSection from "./components/faq/FAQSection";
import ContactSection from "./components/contact/ContactSection";
import AdminPanel from "./components/admin/AdminPanel";

import { useLanguage } from "./context/LanguageContext";

// صور قبل / بعد للكنب
import before1 from "./assets/before1.jpg";
import after1 from "./assets/after1.jpg";
import before2 from "./assets/before2.jpg";
import after2 from "./assets/after2.jpg";
import before3 from "./assets/before3.jpg";
import after3 from "./assets/after3.jpg";
import before4 from "./assets/before4.jpg";
import after4 from "./assets/after4.jpg";
import before5 from "./assets/before5.jpg";
import after5 from "./assets/after5.jpg";
import before6 from "./assets/before6.jpg";
import after6 from "./assets/after6.jpg";
import before7 from "./assets/before7.jpg";
import after7 from "./assets/after7.jpg";
import before8 from "./assets/before8.jpg";
import after8 from "./assets/after8.jpg";
import before9 from "./assets/before9.jpg";
import after9 from "./assets/after9.jpg";
import before10 from "./assets/before10.jpg";
import after10 from "./assets/after10.jpg";

const SERVICE_IDS = new Set(["sofa", "carpet", "carSeats", "glass"]);

function App() {
  const { lang, isRTL } = useLanguage();

  const [adminMode, setAdminMode] = useState(false);

  const sofaPairs = useMemo(
    () => [
      { before: before1, after: after1 },
      { before: before2, after: after2 },
      { before: before3, after: after3 },
      { before: before4, after: after4 },
      { before: before5, after: after5 },
      { before: before6, after: after6 },
      { before: before7, after: after7 },
      { before: before8, after: after8 },
      { before: before9, after: after9 },
      { before: before10, after: after10 },
    ],
    [],
  );

  /**
   * البحث عن القسم أو الخدمة المطلوبة.
   *
   * يدعم:
   * - home
   * - services
   * - beforeafter
   * - faq
   * - contact
   * - sofa
   * - carpet
   * - carSeats
   * - glass
   */
  const findNavigationTarget = useCallback((id) => {
    if (!id) return null;

    if (id === "home") {
      return document.getElementById("home");
    }

    if (id === "beforeafter") {
      return (
        document.getElementById("beforeafter") ||
        document.getElementById("cleaning-showcase")
      );
    }

    if (SERVICE_IDS.has(id)) {
      return (
        document.querySelector(`[data-service-id="${id}"]`) ||
        document.getElementById(`service-${id}`) ||
        document.getElementById(id) ||
        document.getElementById("services")
      );
    }

    return document.getElementById(id);
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      const target = findNavigationTarget(id);

      if (!target) {
        console.warn(`Navigation target was not found: ${id}`);
        return;
      }

      const header = document.getElementById("site-header");
      const headerHeight = header?.offsetHeight || 64;

      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });

      // نحدّث الرابط بدون إعادة تحميل الصفحة.
      if (window.history?.replaceState) {
        const nextHash = id === "home" ? "" : `#${id}`;
        const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;

        window.history.replaceState(null, "", nextUrl);
      }
    },
    [findNavigationTarget],
  );

  /**
   * حفظ ارتفاع الهيدر في CSS حتى تستعمله الأقسام عند التنقل.
   */
  useEffect(() => {
    const header = document.getElementById("site-header");

    if (!header) return undefined;

    const updateHeaderHeight = () => {
      const height = header.offsetHeight || 64;

      document.documentElement.style.setProperty(
        "--app-topbar-h",
        `${height}px`,
      );
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateHeaderHeight)
        : null;

    resizeObserver?.observe(header);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      resizeObserver?.disconnect();
    };
  }, []);

  /**
   * تحديث لغة واتجاه الصفحة كاملة.
   * مهم للعربية والعبرية وقارئات الشاشة.
   */
  useEffect(() => {
    const direction = isRTL ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [lang, isRTL]);

  /**
   * عند فتح رابط يحتوي على hash ننقله للقسم بعد اكتمال تحميل الصفحة.
   */
  useEffect(() => {
    if (adminMode) return undefined;

    const hash = window.location.hash.replace("#", "").trim();

    if (!hash) return undefined;

    const timer = window.setTimeout(() => {
      scrollToSection(hash);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [adminMode, scrollToSection]);

  if (adminMode) {
    return <AdminPanel onExit={() => setAdminMode(false)} />;
  }

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-white font-sans text-slate-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <header
        id="site-header"
        className="relative z-50"
        aria-label={
          lang === "ar"
            ? "رأس الموقع"
            : lang === "he"
              ? "כותרת האתר"
              : "Site header"
        }
      >
        <Header scrollToSection={scrollToSection} />
      </header>

      <main>
        {/* الصفحة الرئيسية / الهيرو */}
        <section
          id="home"
          className="scroll-mt-[calc(var(--app-topbar-h,64px)+12px)]"
          aria-label={
            lang === "ar" ? "الرئيسية" : lang === "he" ? "ראשי" : "Home"
          }
        >
          <Hero scrollToSection={scrollToSection} />
        </section>

        {/*
          Services يحتوي أصلًا على القسم والمسافات الداخلية الخاصة فيه،
          لذلك لا نضع حوله section إضافي يضاعف المسافات أو الـ id.
        */}
        <Services />

        {/* معرض النتائج */}
        <div
          id="beforeafter"
          className="scroll-mt-[calc(var(--app-topbar-h,64px)+12px)] bg-slate-50/50"
        >
          <CleaningShowcase sofaPairs={sofaPairs} />
        </div>

        {/*
          FAQSection يحتوي أصلًا على:
          id="faq"
          والمسافات الداخلية.
        */}
        <div className="bg-white">
          <FAQSection />
        </div>

        {/*
          قسم التواصل أصبح موجودًا فعليًا في الصفحة.
          كل رابط إلى #contact صار له هدف حقيقي.
        */}
        <ContactSection />
      </main>

      {/*
        مدخل لوحة الإدارة الحالي.
        أبقيناه مؤقتًا حتى لا نخسر طريقة الدخول الحالية،
        وسنعالجه لاحقًا مع تحسين نظام لوحة الإدارة.
      */}
      <button
        type="button"
        onClick={() => setAdminMode(true)}
        aria-label={
          lang === "ar"
            ? "فتح لوحة الإدارة"
            : lang === "he"
              ? "פתיחת לוח הניהול"
              : "Open admin panel"
        }
        className="
          fixed bottom-3 right-3 z-[40]
          select-none text-[15px] font-semibold tracking-wide text-white
          opacity-0 transition-opacity duration-500
          hover:opacity-40 focus-visible:opacity-70
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-white/80
        "
        style={{
          fontFamily: "'Cinzel', serif",
          textShadow: "0 0 6px rgba(0,0,0,0.6)",
        }}
      >
        Lumora ✦
      </button>
    </div>
  );
}

export default App;
