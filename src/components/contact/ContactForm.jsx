// src/components/contact/ContactForm.jsx
import { useState } from "react";
import { User, Phone, ChatText } from "phosphor-react";
import MagicSendButton from "./MagicSendButton";

export default function ContactForm({ onSend }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSending(true);
    await onSend(form);
    setSending(false);
    setForm({ name: "", phone: "", message: "" });
  };

  const inputBase =
    "w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200/60 bg-white/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-gray-800 placeholder-gray-400 transition-all duration-500 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] focus:shadow-[0_0_12px_rgba(59,130,246,0.15)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 sm:p-10 animate-fade-up"
    >
      <div className="relative group animate-fade-slide">
        <User
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/70"
        />
        <input
          id="name"
          type="text"
          placeholder="الاسم الكامل"
          value={form.name}
          onChange={handleChange}
          className={inputBase}
          required
        />
      </div>

      <div className="relative group animate-fade-slide delay-[100ms]">
        <Phone
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/70"
        />
        <input
          id="phone"
          type="tel"
          placeholder="رقم الهاتف"
          value={form.phone}
          onChange={handleChange}
          className={inputBase}
          required
        />
      </div>

      <div className="relative sm:col-span-2 group animate-fade-slide delay-[200ms]">
        <ChatText
          size={22}
          className="absolute left-4 top-4 text-blue-500/70"
        />
        <textarea
          id="message"
          placeholder="اكتب رسالتك هنا..."
          value={form.message}
          onChange={handleChange}
          rows="4"
          maxLength="500"
          className={`${inputBase} resize-none`}
          required
        />
        <p className="text-right text-gray-400 text-xs mt-1">
          {form.message.length} / 500
        </p>
      </div>

      <div className="sm:col-span-2 flex justify-center mt-4">
        <MagicSendButton disabled={sending} />
      </div>

      <style>
        {`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s ease-out both; }
        `}
      </style>
    </form>
  );
}
