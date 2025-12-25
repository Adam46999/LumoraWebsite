// src/services/managerDaily.js
import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const COLL = "manager_daily_v2";

export function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

export function getEmptyDay(dateKey) {
  return {
    dateKey,
    isClosed: false,
    defaultCarpetRatePerM2: 15,
    entries: [],
    carpetCustomers: [],
    updatedAt: null,
  };
}

// ✅ TEST: confirm Firestore write + read works
export async function pingFirestore() {
  const ref = doc(db, "__debug", "ping");
  await setDoc(ref, { ok: true, at: serverTimestamp() }, { merge: true });
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function fetchDay(dateKey) {
  if (!dateKey) throw new Error("fetchDay: missing dateKey");
  const ref = doc(db, COLL, String(dateKey));
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return getEmptyDay(dateKey);
  }

  const data = snap.data() || {};
  return {
    ...getEmptyDay(dateKey),
    ...data,
    dateKey,
  };
}

export async function upsertDay(dateKey, dayData) {
  if (!dateKey) throw new Error("upsertDay: missing dateKey");
  const ref = doc(db, COLL, String(dateKey));

  await setDoc(
    ref,
    {
      ...dayData,
      dateKey,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  return true;
}
