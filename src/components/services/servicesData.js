// src/components/services/servicesData.js

import sofaImg from "../../assets/hero1.jpg";
import mattressImg from "../../assets/hero2.jpg";
import carpetImg from "../../assets/hero3.jpg";
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
    id: "mattress",
    titleKey: "mattressTitle",
    descriptionKey: "mattressDescription",
    detailsKey: "mattressDetails",
    icon: "bed",
    image: mattressImg,
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
    id: "glass",
    titleKey: "glassTitle",
    descriptionKey: "glassDescription",
    detailsKey: "glassDetails",
    icon: "sparkles",
    image: glassImg,
    priority: "secondary",
  },
];
