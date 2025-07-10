import ServiceList from "./ServiceList";




export default function ServiceModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* زر إغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        {/* العنوان */}
        <h2 className="text-2xl font-bold mb-4 text-center text-[#3B82F6]">
          خدماتنا
        </h2>

        {/* رح نضيف هنا ServiceList.jsx لاحقًا */}
        <p className="max-h-[80vh] overflow-y-auto px-2">
          <ServiceList />
        </p>
      </div>
    </div>
  );
}
