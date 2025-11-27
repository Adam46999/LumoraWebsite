// src/services/contactMessages.js
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "contactMessages";

// يُستعمل من الفورم لحفظ الرسالة
export async function saveContactMessage({
  subject,
  name,
  phone,
  message,
  channel,
}) {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    subject,
    name,
    phone,
    message,
    channel,
    status: "new",
    createdAt: new Date(),
    source: "website",
  });

  return docRef.id;
}

// يُستعمل بلوحة الأدمن لقراءة الرسائل
export async function fetchMessages() {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function updateMessageStatus(id, status) {
  const ref = doc(db, COLLECTION_NAME, id);
  await updateDoc(ref, { status });
}

export async function deleteMessage(id) {
  const ref = doc(db, COLLECTION_NAME, id);
  await deleteDoc(ref);
}
