// src/components/services/ServiceCard.jsx
import { Sofa, Car, Droplets, Layers } from "lucide-react";

const iconMap = {
  sofa: Sofa,
  car: Car,
  droplets: Droplets,
  layers: Layers,
};

export default function ServiceCard({ icon, title, description, onClick }) {
  const IconComponent = iconMap[icon];

  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 focus:outline-none"
    >
      <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
        {IconComponent && <IconComponent className="w-8 h-8 text-blue-600" />}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </button>
  );
}
