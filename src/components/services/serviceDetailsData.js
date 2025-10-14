// src/components/services/serviceDetailsData.js
import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import seatsImg from "../../assets/hero4.jpg";

export const serviceDetails = {
  // 🛋️ تنظيف الكنب — نوع واحد (بدون بخار)
  sofa: {
    id: "sofa",
    title_ar: "تنظيف الكنب",
    title_en: "Sofa Cleaning",
    subtitle_ar: "تنظيف عميق وتعقيم احترافي وتجفيف سريع لمظهر منتعش.",
    subtitle_en: "Deep clean, professional sanitization, and quick dry.",
    image: sofaImg,
    color: "blue",
    cards: [
      {
        name_ar: "تنظيف شامل للكنب",
        name_en: "Full Sofa Cleaning",
        duration: "45 دقيقة",
        price: "150 ₪",
        features_ar: [
          "إزالة البقع والأوساخ العميقة",
          "تعقيم احترافي بدون بخار",
          "تجفيف سريع ولمسة نهائية منعشة",
        ],
        features_en: [
          "Deep stain & dirt removal",
          "Professional sanitization (no steam)",
          "Quick dry & fresh finish",
        ],
      },
    ],
  },

  // 🧺 تنظيف السجاد — نوع واحد (سعر بالمتر، بدون بخار)
  carpet: {
    id: "carpet",
    title_ar: "تنظيف السجاد",
    title_en: "Carpet Cleaning",
    subtitle_ar: "تنظيف ألياف عميق يحافظ على اللون والملمس، بدون استخدام بخار.",
    subtitle_en:
      "Deep fiber cleaning that preserves color & texture (no steam).",
    image: carpetImg,
    color: "emerald",
    cards: [
      {
        name_ar: "تنظيف السجاد بالمتر",
        name_en: "Per-Meter Carpet Cleaning",
        duration: "حسب المساحة",
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
      },
    ],
  },

  // 🚘 تنظيف فرش السيارات — 4 خيارات (حسب طلبك)
  carSeats: {
    id: "carSeats",
    title_ar: "تنظيف فرش السيارات",
    title_en: "Car Interior Cleaning",
    subtitle_ar:
      "نظافة داخلية متكاملة: المقاعد، الأرضية، أو الاثنين معًا — مع خيار باقة مع غسيل خارجي.",
    subtitle_en:
      "Complete interior cleaning: seats, floor, or both — with an optional exterior wash bundle.",
    image: seatsImg,
    color: "teal",
    cards: [
      {
        name_ar: "تنظيف المقاعد فقط",
        name_en: "Seats Only",
        duration: "2 ساعه و20 دقيقه",
        price: "400 ₪",
        features_ar: ["تنظيف عميق للمقاعد (قماش/جلد)", "إزالة البقع والروائح"],
        features_en: [
          "Deep seat cleaning (fabric/leather)",
          "Stain & odor removal",
        ],
      },
      {
        name_ar: "تنظيف الأرضيات فقط",
        name_en: "Floor Only",
        duration: "40 دقيقه",
        price: "150 ₪",
        features_ar: ["تنظيف الأرضيات والفرش السفلي", "إزالة الغبار والرواسب"],
        features_en: ["Floor & mat cleaning", "Dust & residue removal"],
      },
      {
        name_ar: "تنظيف داخلي شامل (مقاعد + أرضية)",
        name_en: "Full Interior (Seats + Floor)",
        duration: "3 ساعات ونصف",
        price: "500 ₪",
        features_ar: [
          "تنظيف المقاعد والأرضية بشكل كامل",
          "تعطير ولمسة نهائية منعشة",
        ],
        features_en: [
          "Complete seats & floor cleaning",
          "Fresh finish & deodorizing",
        ],
      },
      {
        name_ar: "داخلي شامل + غسيل سيارة خارجي",
        name_en: "Full Interior + Exterior Wash",
        duration: "4 ساعات",
        price: "550 ₪",
        features_ar: [
          "تنظيف المقاعد + الأرضية بالكامل",
          "غسيل خارجي شامل وتجفيف يدوي",
        ],
        features_en: [
          "Full interior (seats + floor)",
          "Exterior wash & hand dry",
        ],
      },
    ],
  },

  // 🚗 غسيل السيارات — 2 خيارات (بدون بخار)
  car: {
    id: "car",
    title_ar: "غسيل السيارات",
    title_en: "Car Wash",
    subtitle_ar: "اختر بين غسيل سريع يومي أو عناية فاخرة متكاملة.",
    subtitle_en: "Choose a quick daily wash or premium full care.",
    image: carImg,
    color: "amber",
    cards: [
      {
        name_ar: "غسيل لومورا",
        name_en: "LUMORA Wash",
        duration: "30 دقيقة",
        price: "80 ₪",
        features_ar: [
          "تنظيف خارجي شامل وتجفيف يدوي",
          "معطّر مجاني ومنعّم للسطح",
          "مثالي للاستخدام اليومي",
        ],
        features_en: [
          "Full exterior wash & hand dry",
          "Free fragrance & surface finisher",
          "Perfect for daily care",
        ],
      },
      {
        name_ar: "غسيل VIP",
        name_en: "VIP Wash",
        duration: "45 دقيقة",
        price: "130 ₪",
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
      },
    ],
  },
};
