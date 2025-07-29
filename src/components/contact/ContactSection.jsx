import { useState, useRef } from "react";
import { Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const successRef = useRef(null);

  // ✅ التحقق من الاسم
  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[^\d!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`0-9]*$/;
    if (nameRegex.test(value)) {
      setName(value);
    }
  };

  // ✅ تنسيق رقم الهاتف
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length === 1 && value !== "0") return;
    if (value.length === 2 && value !== "05") return;
    if (value.length > 10) value = value.slice(0, 10);
    if (value.length > 3) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    }

    setPhone(value);
  };

  // ✅ الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "" || message.trim() === "") {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }

    const phonePattern = /^05\d{1}-\d{7}$/;
    if (!phonePattern.test(phone)) {
      alert("رقم الهاتف غير صالح. تأكد من أنه يبدأ بـ 05 ويتكون من 10 أرقام.");
      return;
    }

    // ✅ تم الإرسال
    setSuccessMessage(true);
    setName("");
    setPhone("");
    setMessage("");

    // تمركز على الرسالة
    setTimeout(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);

    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
<section
id="contact"
  className="relative py-16 px-4 bg-[#f4fafe] bg-gradient-to-br from-[#f4fafe] to-[#dbefff] shadow-inner"
  dir="rtl"
>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
  <span className="text-blue-500">تواصل</span> معنا
</h2>

        <p className="text-gray-600">
          عندك استفسار أو ملاحظة؟ فقط أرسل لنا رسالة وسنرد عليك!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6 text-right">

        {/* ✅ رسالة النجاح */}
        {successMessage && (
          <div
            ref={successRef}
            className="sm:col-span-2 bg-green-100 text-green-700 text-center py-3 px-5 rounded-xl shadow-md transition-all duration-500 animate-fade-in"
          >
            ✅ تم إرسال الرسالة بنجاح!
          </div>
        )}

        {/* الاسم */}
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

        {/* رقم الهاتف */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">رقم الهاتف</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="ادخل  رقم الهاتف"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* الرسالة */}
        <div className="sm:col-span-2 flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">رسالتك</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="اكتب رسالتك هنا..."
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* الزر */}
       <div className="sm:col-span-2 flex justify-center">
  <button
    type="submit"
    className="relative flex items-center justify-center w-64 h-14 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white font-semibold rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
  >
    <span className="z-10 text-sm tracking-wide">إرسال</span>

    {/* الدائرة الجانبية مع السهم */}
    <div className="absolute right-0 top-0 h-full w-14 bg-[#38bdf8] flex items-center justify-center rounded-full shadow-inner">
      <span className="text-lg font-bold text-white transform -translate-x-[2px]">‹</span>
    </div>
  </button>
</div>

      </form>

      {/* روابط أسفل النموذج */}
     {/* روابط أسفل النموذج بتصميم أنيق وصغير */}  
<div className="max-w-3xl mx-auto mt-24 flex flex-col sm:flex-row items-center justify-center gap-8">
  {/* زر الاتصال */}
  <a
    href="tel:+972543075619"
    className="relative group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300"
  >
    <span className="text-gray-800 font-semibold text-base tracking-wide">
      اتصل بنا الآن
    </span>

    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-pink-600">
      <Phone className="w-5 h-5" />
    </div>
  </a>

  {/* زر الموقع */}
  <a
    href="https://waze.com/ul?ll=32.9535,35.3072"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group w-72 sm:w-80 h-16 flex items-center justify-between px-6 rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-lg hover:scale-105 transition duration-300"
  >
    <span className="text-gray-800 font-semibold text-base tracking-wide">
      موقعنا على الخريطة
    </span>

    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-pink-600">
      <MapPin className="w-5 h-5" />
    </div>
  </a>
</div>




    </section>
  );
}
