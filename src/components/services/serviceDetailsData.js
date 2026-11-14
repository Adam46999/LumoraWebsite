// src/components/services/serviceDetailsData.js

import sofaImg from "../../assets/hero1.jpg";
import mattressImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import glassImg from "../../assets/glasscleaning.jpg";

export const serviceDetails = {
  sofa: {
    id: "sofa",

    title_ar: "تنظيف الكنب",
    title_en: "Sofa Cleaning",
    title_he: "ניקוי ספות",

    subtitle_ar:
      "تنظيف عميق للكنب داخل بيتك، مع حساب الطلب حسب عدد المقاعد التي تريد تنظيفها.",

    subtitle_en:
      "Deep sofa cleaning at your home, with the order calculated according to the number of seats you want cleaned.",

    subtitle_he:
      "ניקוי עמוק של ספות בביתכם, כאשר ההזמנה מחושבת לפי מספר המושבים שתרצו לנקות.",

    image: sofaImg,

    cards: [
      {
        features_ar: [
          "تنظيف الكنب داخل بيت الزبون",
          "الحساب حسب عدد المقاعد وليس عدد قطع الكنب",
          "تنظيف المقاعد والمساند والزوايا",
          "إزالة الأوساخ والبقع قدر الإمكان",
          "استخدام طريقة مناسبة لنوع القماش",
        ],

        features_en: [
          "Sofa cleaning at the customer’s home",
          "Calculated by the number of seats, not sofa pieces",
          "Cleaning seats, cushions, and difficult corners",
          "Removing dirt and stains when possible",
          "Using a method suited to the fabric type",
        ],

        features_he: [
          "ניקוי ספות בבית הלקוח",
          "החישוב לפי מספר המושבים ולא לפי מספר חלקי הספה",
          "ניקוי מושבים, כריות ופינות",
          "הסרת לכלוך וכתמים ככל האפשר",
          "שימוש בשיטה המתאימה לסוג הבד",
        ],
      },
    ],
  },

  mattress: {
    id: "mattress",

    title_ar: "تنظيف فرشات النوم",
    title_en: "Mattress Cleaning",
    title_he: "ניקוי מזרנים",

    subtitle_ar:
      "تنظيف فرشات النوم حسب عدد الفرشات، حجم كل فرشة، وتنظيف وجه واحد أو وجهين.",

    subtitle_en:
      "Mattress cleaning based on the number of mattresses, the size of each mattress, and whether one or both sides are cleaned.",

    subtitle_he:
      "ניקוי מזרנים לפי מספר המזרנים, הגודל של כל מזרן וניקוי צד אחד או שני צדדים.",

    image: mattressImg,

    cards: [
      {
        features_ar: [
          "إضافة أكثر من فرشة في نفس الطلب",
          "اختيار مفرد أو مفرد ونص أو مزدوج",
          "اختيار تنظيف وجه واحد أو وجهين",
          "إضافة تركيبات مختلفة للفرشات",
          "إزالة الأوساخ والبقع قدر الإمكان",
        ],

        features_en: [
          "Add several mattresses to the same order",
          "Choose single, single-and-a-half, or double",
          "Choose cleaning for one side or both sides",
          "Add different mattress combinations",
          "Remove dirt and stains when possible",
        ],

        features_he: [
          "הוספת מספר מזרנים לאותה הזמנה",
          "בחירת יחיד, מיטה וחצי או זוגי",
          "בחירת ניקוי צד אחד או שני צדדים",
          "הוספת שילובים שונים של מזרנים",
          "הסרת לכלוך וכתמים ככל האפשר",
        ],
      },
    ],
  },

  carpet: {
    id: "carpet",

    title_ar: "تنظيف السجاد",
    title_en: "Carpet Cleaning",
    title_he: "ניקוי שטיחים",

    subtitle_ar:
      "تنظيف السجاد في بيت الزبون، مع إضافة كل سجادة وقياساتها بشكل مستقل.",

    subtitle_en:
      "Carpet cleaning at the customer’s home, with every carpet and its measurements added separately.",

    subtitle_he:
      "ניקוי שטיחים בבית הלקוח, כאשר כל שטיח והמידות שלו מתווספים בנפרד.",

    image: carpetImg,

    cards: [
      {
        features_ar: [
          "إضافة أكثر من سجادة في نفس الطلب",
          "كتابة طول وعرض كل سجادة بالمتر",
          "إمكانية اختيار أن القياسات غير معروفة",
          "تنظيف السجاد داخل بيت الزبون",
          "إزالة الأوساخ والبقع قدر الإمكان",
        ],

        features_en: [
          "Add several carpets to the same order",
          "Enter the length and width of each carpet in meters",
          "Mark measurements as unknown when needed",
          "Carpet cleaning at the customer’s home",
          "Remove dirt and stains when possible",
        ],

        features_he: [
          "הוספת מספר שטיחים לאותה הזמנה",
          "הזנת האורך והרוחב של כל שטיח במטרים",
          "אפשרות לסמן שהמידות אינן ידועות",
          "ניקוי השטיח בבית הלקוח",
          "הסרת לכלוך וכתמים ככל האפשר",
        ],
      },
    ],
  },

  glass: {
    id: "glass",

    title_ar: "تنظيف الزجاج",
    title_en: "Glass Cleaning",
    title_he: "ניקוי זכוכית",

    subtitle_ar:
      "تنظيف الشبابيك والواجهات الزجاجية للمنازل والمكاتب. الخدمة غير متاحة للحجز حاليًا.",

    subtitle_en:
      "Cleaning windows and glass fronts for homes and offices. This service is currently unavailable for booking.",

    subtitle_he:
      "ניקוי חלונות וחזיתות זכוכית בבתים ובמשרדים. השירות אינו זמין כרגע להזמנה.",

    image: glassImg,

    cards: [
      {
        features_ar: [
          "تنظيف الزجاج حسب إمكانية الوصول",
          "تنظيف إطارات ومسارات الشبابيك",
          "إزالة الغبار والعلامات السطحية",
          "الاهتمام بالزوايا والأطراف",
          "الخدمة غير متاحة للحجز حاليًا",
        ],

        features_en: [
          "Glass cleaning according to accessibility",
          "Cleaning window frames and tracks",
          "Removing dust and surface marks",
          "Attention to corners and edges",
          "This service is currently unavailable for booking",
        ],

        features_he: [
          "ניקוי זכוכית בהתאם לנגישות",
          "ניקוי מסגרות ומסילות החלונות",
          "הסרת אבק וסימנים שטחיים",
          "טיפול בפינות ובקצוות",
          "השירות אינו זמין כרגע להזמנה",
        ],
      },
    ],
  },
};
