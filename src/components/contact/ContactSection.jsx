import { useState } from "react";
import ServiceModal from "../hero/ServiceModal";

export default function ContactSection() {
  const [successMessage, setSuccessMessage] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // ✅ دالة التحقق من الاسم
  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[^\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`0-9]*$/;

    if (nameRegex.test(value)) {
      setName(value);
    }
  };

  // ✅ دالة تنسيق رقم الهاتف
 const handlePhoneChange = (e) => {
  let value = e.target.value.replace(/\D/g, ""); // نسمح فقط بالأرقام

  // لا تكتب شيء إذا أول رقم مش 0
  if (value.length === 1 && value !== "0") return;

  // لا تكتب شيء إذا ثاني رقم مش 5
  if (value.length === 2 && value !== "05") return;

  // نسمح بـ 10 أرقام كحد أقصى
  if (value.length > 10) value = value.slice(0, 10);

  // نضيف "-" بعد أول 3 أرقام
  if (value.length > 3) {
    value = value.slice(0, 3) + "-" + value.slice(3);
  }

  setPhone(value);
};


  // ✅ دالة التحقق قبل الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("الرجاء كتابة الاسم الكامل.");
      return;
    }

    const phonePattern = /^05\d{1}-\d{7}$/;
    if (!phonePattern.test(phone)) {
      alert("رقم الهاتف غير صالح. تأكد من أنه يبدأ بـ 05 ويتكون من 10 أرقام.");
      return;
    }

    alert("✅ تم إرسال الرسالة بنجاح!");
    setSuccessMessage(true);     // عرض الرسالة
setName("");                 // تنظيف الاسم
setPhone("");                // تنظيف الهاتف

// إخفاء الرسالة بعد 3 ثواني
setTimeout(() => {
  setSuccessMessage(false);
}, 3000);

  };

  return (
    <section className="bg-gradient-to-r from-white to-[#EAF2FF] py-16 px-4" dir="rtl">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          تواصل معنا
        </h2>
        <p className="text-gray-600">
          عندك استفسار أو ملاحظة؟ فقط أرسل لنا رسالة وسنرد عليك!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6 text-right">
      {successMessage && (
  <div className="max-w-md mx-auto bg-green-100 text-green-700 text-center py-3 px-5 rounded-xl shadow-md transition-all duration-500 animate-fade-in">
    ✅ تم إرسال الرسالة بنجاح!
  </div>
)}

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">الاسم الكامل</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="اكتب اسمك"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">رقم الهاتف</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="مثال: 059-1234567"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="sm:col-span-2 flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">رسالتك</label>
          <textarea
            id="message"
            rows="4"
            placeholder="اكتب رسالتك هنا..."
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#3B82F6] text-white font-semibold py-3 rounded-xl hover:bg-blue-600 transition"
          >
            إرسال
          </button>
        </div>
      </form>

      {/* المعلومات أسفل النموذج */}
      <div className="max-w-5xl mx-auto mt-16 grid gap-8 sm:grid-cols-3 text-center text-gray-700">
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center cursor-pointer hover:opacity-90 transition"
        >
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl mb-4">
            🧽
          </div>
          <h4 className="font-semibold mb-1">خدماتنا</h4>
          <p className="text-sm">تنظيف سيارات، سجاد، كنب والمزيد.</p>
        </div>

        <a
          href="tel:+972543075619"
          className="flex flex-col items-center hover:text-blue-600 transition"
        >
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl mb-4">
            📞
          </div>
          <h4 className="font-semibold mb-1">رقم الهاتف</h4>
          <p className="text-sm">+972 54-3075619</p>
        </a>

        <a
          href="https://waze.com/ul?ll=32.9535,35.3072"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-blue-600 transition"
        >
          <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl mb-4">
            📍
          </div>
          <h4 className="font-semibold mb-1">موقعنا</h4>
          <p className="text-sm">البعنة 7</p>
        </a>
      </div>

      <ServiceModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
