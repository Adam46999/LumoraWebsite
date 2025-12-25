// src/services/contactMessages.js
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

const COL = "contact_messages";

/**
 * =========================
 *  Public (Website)
 * =========================
 */

// حفظ رسالة جديدة من الفورم
export async function saveContactMessage(payload) {
  if (!payload) return;
  await addDoc(collection(db, COL), {
    ...payload,
    status: "new",
    createdAt: serverTimestamp(),
  });
}

/**
 * =========================
 *  Admin
 * =========================
 */

// جلب كل الرسائل (مرة واحدة)
export async function fetchMessages() {
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

// اشتراك realtime (Admin)
export function subscribeMessages(onChange, onError) {
  const q = query(collection(db, COL), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      onChange?.(list);
    },
    (err) => onError?.(err)
  );
}

// تحديث حالة رسالة (new / done)
export async function updateMessageStatus(id, status) {
  if (!id) return;
  await updateDoc(doc(db, COL, id), {
    status,
    updatedAt: serverTimestamp(),
  });
}

// حذف رسالة
export async function deleteMessage(id) {
  if (!id) return;
  await deleteDoc(doc(db, COL, id));
}
