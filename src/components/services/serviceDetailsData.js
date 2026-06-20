import sofaImg from "../../assets/hero1.jpg";
import carpetImg from "../../assets/hero3.jpg";
import seatsImg from "../../assets/hero4.jpg";
import glassImg from "../../assets/glasscleaning.jpg";

export const serviceDetails = {
  sofa: {
    id: "sofa",

    title_ar: "تنظيف الكنب",
    title_en: "Sofa Cleaning",
    title_he: "ניקוי ספות",

    subtitle_ar:
      "تنظيف عميق للكنب داخل بيتك، مع عناية بنوع القماش والبقع الموجودة.",
    subtitle_en:
      "Deep sofa cleaning at your home, with care suited to the fabric and existing stains.",
    subtitle_he: "ניקוי עמוק של הספות בביתכם, בהתאמה לסוג הבד ולכתמים הקיימים.",

    image: sofaImg,

    cards: [
      {
        features_ar: [
          "تنظيف الكنب في بيت الزبون",
          "إزالة الأوساخ والبقع قدر الإمكان",
          "تنظيف مناسب لنوع القماش",
          "تنظيف وتعقيم للمقاعد والمساند",
        ],

        features_en: [
          "Sofa cleaning at the customer’s home",
          "Removal of dirt and stains when possible",
          "Cleaning suited to the fabric type",
          "Cleaning and sanitizing seats and cushions",
        ],

        features_he: [
          "ניקוי הספות בבית הלקוח",
          "הסרת לכלוך וכתמים ככל האפשר",
          "ניקוי המותאם לסוג הבד",
          "ניקוי וחיטוי המושבים והכריות",
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
      "تنظيف عميق للسجاد مع إمكانية التنظيف في البيت أو الاستلام والإرجاع حسب المنطقة.",
    subtitle_en:
      "Deep carpet cleaning at home or through pickup and return, depending on the area.",
    subtitle_he:
      "ניקוי עמוק של שטיחים בבית או באמצעות איסוף והחזרה, בהתאם לאזור.",

    image: carpetImg,

    cards: [
      {
        features_ar: [
          "تنظيف عميق لألياف السجاد",
          "إزالة الأوساخ والبقع والروائح قدر الإمكان",
          "الحفاظ على لون وملمس السجاد",
          "تنظيف في البيت أو استلام وإرجاع حسب المنطقة",
        ],

        features_en: [
          "Deep cleaning of carpet fibers",
          "Removal of dirt, stains, and odors when possible",
          "Care that preserves color and texture",
          "Home cleaning or pickup and return depending on the area",
        ],

        features_he: [
          "ניקוי עמוק של סיבי השטיח",
          "הסרת לכלוך, כתמים וריחות ככל האפשר",
          "שמירה על צבע ומרקם השטיח",
          "ניקוי בבית או איסוף והחזרה בהתאם לאזור",
        ],
      },
    ],
  },

  carSeats: {
    id: "carSeats",

    title_ar: "تنظيف فرش السيارات",
    title_en: "Car Interior Cleaning",
    title_he: "ניקוי ריפודי רכב",

    subtitle_ar:
      "تنظيف مقاعد وفرش السيارة لإزالة الأوساخ والبقع والروائح وإعادة الانتعاش للداخلية.",
    subtitle_en:
      "Cleaning car seats and upholstery to reduce dirt, stains, and odors and refresh the interior.",
    subtitle_he:
      "ניקוי מושבים וריפודי הרכב להסרת לכלוך, כתמים וריחות ולרענון פנים הרכב.",

    image: seatsImg,

    cards: [
      {
        features_ar: [
          "تنظيف مقاعد القماش أو الجلد حسب النوع",
          "تنظيف الفرش والأرضيات الداخلية",
          "إزالة البقع والروائح قدر الإمكان",
          "تنظيف المناطق الداخلية التي يصعب الوصول إليها",
        ],

        features_en: [
          "Cleaning fabric or leather seats according to type",
          "Cleaning interior upholstery and floors",
          "Removal of stains and odors when possible",
          "Cleaning hard-to-reach interior areas",
        ],

        features_he: [
          "ניקוי מושבי בד או עור בהתאם לסוג",
          "ניקוי ריפודים ורצפת הרכב",
          "הסרת כתמים וריחות ככל האפשר",
          "ניקוי אזורים פנימיים שקשה להגיע אליהם",
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
      "تنظيف زجاج المنازل والمكاتب والواجهات الزجاجية مع الاهتمام بالمسارات والزوايا.",
    subtitle_en:
      "Cleaning home and office windows, glass fronts, tracks, and difficult corners.",
    subtitle_he:
      "ניקוי חלונות בבתים ובמשרדים, חזיתות זכוכית, מסילות ופינות קשות.",

    image: glassImg,

    cards: [
      {
        features_ar: [
          "تنظيف شبابيك المنازل والمكاتب",
          "تنظيف الواجهات الزجاجية",
          "تنظيف سكك ومسارات الشبابيك المتحركة",
          "تنظيف داخلي وخارجي حسب إمكانية الوصول",
        ],

        features_en: [
          "Cleaning windows in homes and offices",
          "Cleaning glass fronts and facades",
          "Cleaning sliding-window tracks and rails",
          "Interior and exterior cleaning where safely accessible",
        ],

        features_he: [
          "ניקוי חלונות בבתים ובמשרדים",
          "ניקוי חזיתות זכוכית",
          "ניקוי מסילות של חלונות הזזה",
          "ניקוי פנימי וחיצוני בהתאם לאפשרות הגישה",
        ],
      },
    ],
  },
};
