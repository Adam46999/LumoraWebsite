// src/components/services/servicesData.js

import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import steamImg from "../../assets/hero4.jpg";

// 🟢 كل خدمة تحتوي فقط على المعلومات المهمة
export const services = [
  {
    id: "sofa",
    titleKey: "sofaTitle",
    descriptionKey: "sofaDescription",
    detailsKey: "sofaDetails",
    icon: "couch",
    image: sofaImg,
  },
  {
    id: "car",
    titleKey: "carTitle",
    descriptionKey: "carDescription",
    detailsKey: "carDetails",
    icon: "car",
    image: carImg,
  },
  {
    id: "carpet",
    titleKey: "carpetTitle",
    descriptionKey: "carpetDescription",
    detailsKey: "carpetDetails",
    icon: "layer-group",
    image: carpetImg,
  },
  {
    id: "steam",
    titleKey: "steamTitle",
    descriptionKey: "steamDescription",
    detailsKey: "steamDetails",
    icon: "tint",
    image: steamImg,
  },
];
