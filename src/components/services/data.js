// import الصور من assets
import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import steamImg from "../../assets/hero4.jpg";

export const services = [
  {
    title: "تنظيف الكنب",
    description: "تنظيف عميق وإزالة البقع.",
    details: `نقوم بتنظيف الكنب بجميع أنواعه باستخدام أجهزة بخار حديثة...`,
    icon: "sofa",
    image: sofaImg,
  },
  {
    title: "تنظيف السيارات",
    description: "داخلي وخارجي مع تعقيم.",
    details: `يشمل تنظيف كامل للمقاعد، الأرضيات، الزجاج، والكونسول...`,
    icon: "car",
    image: carImg,
  },
  {
    title: "تنظيف السجاد",
    description: "غسيل وتجفيف السجاد.",
    details: `غسيل يدوي وآلي للسجاد والموكيت...`,
    icon: "layers",
    image: carpetImg,
  },
  {
    title: "تعقيم بالبخار",
    description: "تعقيم بالبخار عالي الحرارة.",
    details: `بخار حراري بدرجة 160° لتعقيم الأرضيات...`,
    icon: "droplets",
    image: steamImg,
  },
];
