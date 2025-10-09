// src/components/contact/MessageSuggestions.jsx
export default function MessageSuggestions({
  subject = "inquiry",
  onPick, // (text) => void
  isRTL = true,
}) {
  const base =
    "px-3 h-8 rounded-xl border text-xs transition bg-white/70 hover:bg-white border-gray-200 text-gray-700";

  const data = {
    inquiry: [
      "أودّ معرفة تفاصيل الخدمة.",
      "هل لديكم مواعيد متاحة هذا الأسبوع؟",
      "كم المدة/التكلفة التقريبية؟",
    ],
    booking: [
      "أرغب بحجز موعد يوم ____ الساعة ____.",
      "الخدمة المطلوبة: ____، العدد: ____.",
      "هل متاح أقرب موعد يوم ____؟",
    ],
    complaint: [
      "واجهت المشكلة التالية: ____.",
      "رقم الطلب/التاريخ: ____.",
      "أرجو المساعدة بحل سريع، شكرًا.",
    ],
    other: [
      "لدي ملاحظة/اقتراح بخصوص ____.",
      "تواصلوا معي على الرقم بخصوص ____.",
    ],
  };

  const list = data[subject] ?? data.inquiry;

  return (
    <div
      className={`flex flex-wrap gap-2 ${
        isRTL ? "justify-start" : "justify-start"
      }`}
      aria-label="اقتراحات سريعة للرسالة"
    >
      {list.map((txt, i) => (
        <button
          key={i}
          type="button"
          className={base}
          onClick={() => onPick(txt)}
        >
          {txt}
        </button>
      ))}
    </div>
  );
}
