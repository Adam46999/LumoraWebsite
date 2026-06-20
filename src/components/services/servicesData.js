import sofaImg from "../../assets/hero1.jpg";
import carpetImg from "../../assets/hero3.jpg";
import seatsImg from "../../assets/hero5.jpg";
import glassImg from "../../assets/glasscleaning.jpg";

export const services = [
  {
    id: "sofa",
    titleKey: "sofaTitle",
    descriptionKey: "sofaDescription",
    detailsKey: "sofaDetails",
    icon: "couch",
    image: sofaImg,
    priority: "primary",
  },
  {
    id: "carpet",
    titleKey: "carpetTitle",
    descriptionKey: "carpetDescription",
    detailsKey: "carpetDetails",
    icon: "layer-group",
    image: carpetImg,
    priority: "primary",
  },
  {
    id: "carSeats",
    titleKey: "carSeatsTitle",
    descriptionKey: "carSeatsDescription",
    detailsKey: "carSeatsDetails",
    icon: "car",
    image: seatsImg,
    priority: "secondary",
  },
  {
    id: "glass",
    titleKey: "glassTitle",
    descriptionKey: "glassDescription",
    detailsKey: "glassDetails",
    icon: "sparkles",
    image: glassImg,
    priority: "secondary",
  },
];
