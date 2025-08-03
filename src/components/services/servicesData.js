import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import steamImg from "../../assets/hero4.jpg";

export const services = [
  {
    id: "sofa",
    titleKey: "sofaTitle",
    descriptionKey: "sofaDescription",
    detailsKey: "sofaDetails",
    icon: "couch",
    image: sofaImg,
    bgColor: "bg-sky-100", // ✅ أزرق فاتح وواضح
  },
  {
    id: "car",
    titleKey: "carTitle",
    descriptionKey: "carDescription",
    detailsKey: "carDetails",
    icon: "car",
    image: carImg,
    bgColor: "bg-slate-100", // ✅ رمادي ناعم وأنيق
  },
  {
    id: "carpet",
    titleKey: "carpetTitle",
    descriptionKey: "carpetDescription",
    detailsKey: "carpetDetails",
    icon: "layer-group",
    image: carpetImg,
    bgColor: "bg-emerald-100", // ✅ أخضر مريح وواضح
  },
  {
    id: "steam",
    titleKey: "steamTitle",
    descriptionKey: "steamDescription",
    detailsKey: "steamDetails",
    icon: "tint",
    image: steamImg,
    bgColor: "bg-cyan-100", // ✅ أزرق مائي جميل
  },
];
