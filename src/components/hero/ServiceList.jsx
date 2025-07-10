export default function ServiceList() {
  const services = [
    {
      icon: "🚗",
      title: "غسيل سيارات عادي",
      description: "تنظيف خارجي وداخلي شامل مع تجفيف يدوي.",
    },
    {
      icon: "🚙",
      title: "غسيل سيارات VIP",
      description: "خدمة فاخرة تشمل تعقيم، تلميع داخلي وخارجي، وعناية فائقة.",
    },
    {
      icon: "🧽",
      title: "تنظيف سجاد",
      description: "تنظيف جاف أو بالبخار حسب الحاجة – مثالي للمنازل والسيارات.",
    },
    {
  icon: "🫧",
  title: "تنظيف جاف للسيارة أو الأرائك",
  description: "تنظيف عميق للرُفد أو الأرائك داخل السيارة أو المنزل – بدون رائحة وبدون رطوبة.",
},

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-3xl mb-4 group-hover:bg-blue-100 transition">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
