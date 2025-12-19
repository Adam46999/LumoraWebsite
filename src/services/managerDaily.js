// src/services/managerDaily.js
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const COL = "manager_daily_v2";

export function todayKey(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function getEmptyDay(dateKey) {
  return {
    dateKey,

    // بنود اليوم
    entries: [],

    // سجاد
    carpetCustomers: [],
    defaultCarpetRatePerM2: 15,

    // ملاحظات
    notes: "",

    // ✅ NEW: إغلاق اليوم (قراءة فقط)
    isClosed: false,

    // meta
    createdAt: null,
    updatedAt: null,
  };
}

export async function fetchDay(dateKey) {
  const ref = doc(collection(db, COL), dateKey);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return getEmptyDay(dateKey);
  }

  const data = snap.data();

  // ⚠️ دمج آمن بدون سحق الداتا
  return {
    ...getEmptyDay(dateKey),
    ...data,
    entries: data.entries || [],
    carpetCustomers: data.carpetCustomers || [],
    isClosed: !!data.isClosed,
  };
}

export async function upsertDay(dateKey, payload) {
  const ref = doc(collection(db, COL), dateKey);

  // تنظيف undefined (Firestore يكرهها)
  const clean = JSON.parse(
    JSON.stringify(payload, (_, v) => (v === undefined ? null : v))
  );

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      ...getEmptyDay(dateKey),
      ...clean,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } else {
    await updateDoc(ref, {
      ...clean,
      updatedAt: serverTimestamp(),
    });
  }
}
