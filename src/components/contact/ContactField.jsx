// src/components/contact/ContactField.jsx
import React, { useState, useEffect } from "react";
import { User, Phone, MessageSquare } from "lucide-react";

export default function ContactField({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  isTextArea = false,
  shake = false,
  isValid = false,
}) {
  const [hint, setHint] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const inputBase =
    "w-full p-3 pl-12 rounded-2xl border transition-all duration-300 focus:outline-none bg-white/60 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] text-gray-800 placeholder-gray-400 focus:shadow-[0_0_12px_rgba(59,130,246,0.15)]";

  const borderColor = error
    ? "border-red-300"
    : isValid
    ? "border-green-300"
    : "border-gray-200";

  const focusRing = error
    ? "focus:border-red-400 focus:ring-1 focus:ring-red-300"
    : "focus:border-blue-400 focus:ring-1 focus:ring-blue-200";

  const shakeAnim = shake ? "animate-shake" : "";

  const inputClass = `${inputBase} ${borderColor} ${focusRing} ${shakeAnim}`;

  // 🔢 عدّاد الأحرف (للرسالة فقط)
  useEffect(() => {
    if (id === "message") setCharCount(value.length);
  }, [value, id]);

  // 💡 التلميحات الذكية
  useEffect(() => {
    if (value.trim() === "") {
      setHint("");
      return;
    }
    if (id === "name") setHint("تأكد من كتابة اسمك الكامل.");
    if (id === "phone") setHint("يرجى كتابة رقم هاتف صحيح.");
    if (id === "message") setHint("احكِ لنا تفاصيل استفسارك أو ملاحظتك.");
  }, [value, id]);

  // 🧩 اختيار الأيقونة حسب الحقل
  const renderIcon = () => {
    const iconClass =
      "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 bg-white/70 backdrop-blur-md p-2 rounded-xl shadow-sm";
    switch (id) {
      case "name":
        return <User className={iconClass} />;
      case "phone":
        return <Phone className={iconClass} />;
      case "message":
        return <MessageSquare className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${
        id === "message" ? "col-span-full" : ""
      } flex flex-col gap-1 animate-fade-slide-up`}
    >
      {/* 🏷️ العنوان */}
      <label
        htmlFor={id}
        className="mb-1 text-sm text-gray-700 font-semibold tracking-wide"
      >
        {label}
      </label>

      {/* 🧊 الحقل مع الأيقونة */}
      <div className="relative group">
        {renderIcon()}

        {isTextArea ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows="4"
            maxLength={maxChars}
            className={inputClass}
          />
        ) : (
          <input
            id={id}
            type={id === "phone" ? "tel" : "text"}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={inputClass}
          />
        )}
      </div>

      {/* 🧠 رسالة الخطأ أو التلميح */}
      {error ? (
        <span className="text-red-500 text-xs mt-1 font-medium">{error}</span>
      ) : hint ? (
        <span className="text-gray-500 text-xs mt-1 italic">{hint}</span>
      ) : null}

      {/* 🔢 عدّاد الأحرف للرسالة */}
      {id === "message" && (
        <span
          className={`text-xs mt-1 text-right ${
            charCount > maxChars * 0.9 ? "text-red-400" : "text-gray-400"
          }`}
        >
          {charCount} / {maxChars}
        </span>
      )}

      {/* ✨ الأنيميشن */}
      <style>
        {`
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.6s ease-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        `}
      </style>
    </div>
  );
}
