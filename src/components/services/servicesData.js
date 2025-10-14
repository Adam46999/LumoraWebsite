import sofaImg from "../../assets/hero1.jpg";
import carImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
import seatsImg from "../../assets/hero5.jpg"; // كان steamImg، استبدلناه

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
    id: "carSeats", // ✅ بدل steam
    titleKey: "carSeatsTitle",
    descriptionKey: "carSeatsDescription",
    detailsKey: "carSeatsDetails",
    icon: "layer-group", // نستخدم نفس الأيقونة الموجودة بالـ ServiceCard
    image: seatsImg,
  },
];
