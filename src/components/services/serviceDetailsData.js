import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import seatsImg from "../../assets/hero4.jpg";

export const serviceDetails = {
  sofa: {
    id: "sofa",
    title_ar: "تنظيف الكنب",
    title_en: "Sofa Cleaning",
    title_he: "ניקוי ספות",
    subtitle_ar: "تنظيف عميق وتعقيم احترافي وتجفيف سريع لمظهر منتعش.",
    subtitle_en: "Deep clean, professional sanitization, and quick dry.",
    subtitle_he: "ניקוי עמוק, חיטוי מקצועי וייבוש מהיר למראה רענן.",
    image: sofaImg,
    color: "blue",
    cards: [
      {
        name_ar: "تنظيف شامل للكنب",
        name_en: "Full Sofa Cleaning",
        name_he: "ניקוי ספות מלא",

        // ✅ per-language duration
        duration_ar: "45 دقيقة",
        duration_en: "45 min",
        duration_he: "45 דקות",
        // ✅ keep old fallback
        duration: "45 دقيقة",

        // ✅ per-language price
        price_ar: "150 ₪",
        price_en: "₪150",
        price_he: "150 ₪",
        // ✅ keep old fallback
        price: "150 ₪",

        features_ar: [
          "إزالة البقع والأوساخ العميقة",
          "تعقيم احترافي",
          "تجفيف سريع ولمسة نهائية منعشة",
        ],
        features_en: [
          "Deep stain & dirt removal",
          "Professional sanitization (no steam)",
          "Quick dry & fresh finish",
        ],
        features_he: [
          "הסרת כתמים ולכלוך עמוק",
          "חיטוי מקצועי (ללא קיטור)",
          "ייבוש מהיר וגימור רענן",
        ],
      },
    ],
  },

  carpet: {
    id: "carpet",
    title_ar: "تنظيف السجاد",
    title_en: "Carpet Cleaning",
    title_he: "ניקוי שטיחים",
    subtitle_ar: "تنظيف ألياف عميق يحافظ على اللون والملمس، بدون استخدام بخار.",
    subtitle_en:
      "Deep fiber cleaning that preserves color & texture (no steam).",
    subtitle_he: "ניקוי סיבים עמוק ששומר על צבע ומרקם (ללא קיטור).",
    image: carpetImg,
    color: "emerald",
    cards: [
      {
        name_ar: "تنظيف السجاد بالمتر",
        name_en: "Per-Meter Carpet Cleaning",
        name_he: "ניקוי שטיח לפי מטר",

        duration_ar: "حسب المساحة",
        duration_en: "Depends on area",
        duration_he: "לפי שטח",
        duration: "حسب المساحة",

        price_ar: "15 ₪ / متر",
        price_en: "₪15 / meter",
        price_he: "15 ₪ / מטר",
        price: "15 ₪ / متر",

        features_ar: [
          "تنظيف رغوي عميق مع تجفيف كامل",
          "إزالة البقع والروائح العالقة",
          "آمن على الألوان والأقمشة الحساسة",
        ],
        features_en: [
          "Foam deep-clean with full drying",
          "Stain & odor removal",
          "Color & fabric-safe process",
        ],
        features_he: [
          "ניקוי קצף עמוק עם ייבוש מלא",
          "הסרת כתמים וריחות",
          "תהליך בטוח לצבעים ולבדים עדינים",
        ],
      },
    ],
  },

  carSeats: {
    id: "carSeats",
    title_ar: "تنظيف فرش السيارات",
    title_en: "Car Interior Cleaning",
    title_he: "ניקוי פנים רכב",
    subtitle_ar:
      "نظافة داخلية متكاملة: المقاعد، الأرضية، أو الاثنين معًا — مع خيار باقة مع غسيل خارجي.",
    subtitle_en:
      "Complete interior cleaning: seats, floor, or both — with an optional exterior wash bundle.",
    subtitle_he:
      "ניקוי פנים מלא: מושבים, רצפה או שניהם — עם אפשרות לחבילה הכוללת שטיפה חיצונית.",
    image: seatsImg,
    color: "teal",
    cards: [
      {
        name_ar: "تنظيف المقاعد فقط",
        name_en: "Seats Only",
        name_he: "מושבים בלבד",

        duration_ar: "2 ساعة و20 دقيقة",
        duration_en: "2h 20m",
        duration_he: "שעתיים ו־20 דק׳",
        duration: "2 ساعه و20 دقيقه",

        price_ar: "ابتداءً من 400 ₪",
        price_en: "From ₪400",
        price_he: "החל מ־400 ₪",
        price: "ابتداء من 400 ₪",

        features_ar: ["تنظيف عميق للمقاعد (قماش/جلد)", "إزالة البقع والروائح"],
        features_en: [
          "Deep seat cleaning (fabric/leather)",
          "Stain & odor removal",
        ],
        features_he: ["ניקוי מושבים עמוק (בד/עור)", "הסרת כתמים וריחות"],
      },
      {
        name_ar: "تنظيف أرضيات السيارة",
        name_en: "Floor Only",
        name_he: "רצפה בלבד",

        duration_ar: "40 دقيقة",
        duration_en: "40 min",
        duration_he: "40 דק׳",
        duration: "40 دقيقه",

        price_ar: "ابتداءً من 150 ₪",
        price_en: "From ₪150",
        price_he: "החל מ־150 ₪",
        price: "ابتداء من 150 ₪",

        features_ar: ["تنظيف الأرضيات والفرش السفلي", "إزالة الغبار والرواسب"],
        features_en: ["Floor & mat cleaning", "Dust & residue removal"],
        features_he: ["ניקוי רצפה ושטיחונים", "הסרת אבק ושאריות"],
      },
      {
        name_ar: "تنظيف داخلي شامل (مقاعد + أرضية)",
        name_en: "Full Interior (Seats + Floor)",
        name_he: "ניקוי פנים מלא (מושבים + רצפה)",

        duration_ar: "3 ساعات ونصف",
        duration_en: "3.5 hours",
        duration_he: "3.5 שעות",
        duration: "3 ساعات ونصف",

        price_ar: "500 ₪",
        price_en: "₪500",
        price_he: "500 ₪",
        price: "500 ₪",

        features_ar: [
          "تنظيف المقاعد والأرضية بشكل كامل",
          "تعطير ولمسة نهائية منعشة",
        ],
        features_en: [
          "Complete seats & floor cleaning",
          "Fresh finish & deodorizing",
        ],
        features_he: ["ניקוי מלא למושבים ולרצפה", "גימור רענן והסרת ריחות"],
      },
      {
        name_ar: "داخلي شامل + غسيل سيارة خارجي",
        name_en: "Full Interior + Exterior Wash",
        name_he: "פנים מלא + שטיפה חיצונית",

        duration_ar: "4 ساعات",
        duration_en: "4 hours",
        duration_he: "4 שעות",
        duration: "4 ساعات",

        price_ar: "550 ₪",
        price_en: "₪550",
        price_he: "550 ₪",
        price: "550 ₪",

        features_ar: [
          "تنظيف المقاعد + الأرضية بالكامل",
          "غسيل خارجي شامل وتجفيف يدوي",
        ],
        features_en: [
          "Full interior (seats + floor)",
          "Exterior wash & hand dry",
        ],
        features_he: [
          "ניקוי פנים מלא (מושבים + רצפה)",
          "שטיפה חיצונית וייבוש ידני",
        ],
      },
    ],
  },

  car: {
    id: "car",
    title_ar: "غسيل السيارات",
    title_en: "Car Wash",
    title_he: "שטיפת רכב",
    subtitle_ar: "اختر بين غسيل سريع يومي أو عناية فاخرة متكاملة.",
    subtitle_en: "Choose a quick daily wash or premium full care.",
    subtitle_he: "בחר בין שטיפה יומית מהירה לבין טיפול פרימיום מלא.",
    image: carImg,
    color: "amber",
    cards: [
      {
        name_ar: "غسيل لومورا",
        name_en: "LUMORA Wash",
        name_he: "שטיפת Lumora",

        // (لو ما في مدة خلّيها varies بالـ UI)
        // duration_ar: "...",
        // duration_en: "...",
        // duration_he: "...",

        price_ar: "80 سيارة / 100 جيب ₪",
        price_en: "₪80 car / ₪100 SUV",
        price_he: "80 ₪ רכב / 100 ₪ ג׳יפ",
        price: "80 سياره / 100 جيب ₪",

        features_ar: [
          "تنظيف خارجي شامل وتجفيف يدوي",
          "معطّر مجاني",
          "مثالي للاستخدام اليومي",
        ],
        features_en: [
          "Full exterior wash & hand dry",
          "Free fragrance & surface finisher",
          "Perfect for daily care",
        ],
        features_he: [
          "שטיפה חיצונית מלאה וייבוש ידני",
          "ריחון מתנה",
          "מושלם לשימוש יומיומי",
        ],
      },
      {
        name_ar: "غسيل VIP",
        name_en: "VIP Wash",
        name_he: "שטיפת VIP",

        price_ar: "130 سيارة / 150 جيب ₪",
        price_en: "₪130 car / ₪150 SUV",
        price_he: "130 ₪ רכב / 150 ₪ ג׳יפ",
        price: "130 سياره / 150 جيب ₪",

        features_ar: [
          "تنظيف داخلي وخارجي عميق (بدون بخار)",
          "معطّر فاخر ولمعة نهائية",
          "عناية بالطلاء والتفاصيل الدقيقة",
        ],
        features_en: [
          "Deep interior & exterior cleaning (no steam)",
          "Luxury scent & final shine",
          "Paint & detailing care",
        ],
        features_he: [
          "ניקוי פנים וחוץ עמוק (ללא קיטור)",
          "ריח יוקרתי וברק סופי",
          "טיפול בצבע ובפרטים",
        ],
      },
    ],
  },
};
