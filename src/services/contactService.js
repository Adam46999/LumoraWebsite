// src/services/contactService.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // هذا هو db من ملف firebase.js تبع lumorabase

// دالة عامة لتخزين رسالة "تواصل معنا"
export async function saveContactMessage({
  topic,
  name,
  phone,
  message,
  channel,
  extraOptions,
}) {
  const docRef = await addDoc(collection(db, "contactMessages"), {
    topic, // موضوع الرسالة
    name, // الاسم الكامل
    phone, // رقم الهاتف
    message, // نص الرسالة
    channel: channel || null, // مثلاً "whatsapp" أو "phone" (لو عندك خيار)
    extraOptions: extraOptions || null, // أي خيارات إضافية من الدروب داون
    status: "new", // كل رسالة جديدة تبدأ كـ "new"
    createdAt: serverTimestamp(), // وقت الإنشاء من السيرفر
  });

  return docRef.id; // نرجّع ID لو حابب تستعمله
}
