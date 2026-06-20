// src/firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWv-Lv7ZYWCuHSN_xYQV71y4k6TF7Ol_0",
  authDomain: "lumorabase.firebaseapp.com",
  projectId: "lumorabase",
  storageBucket: "lumorabase.appspot.com",
  messagingSenderId: "487602333259",
  appId: "1:487602333259:web:0069e6532efd3e7bd79ae",
  measurementId: "G-0TXG6KPPN5",
};

/*
  يمنع تهيئة Firebase أكثر من مرة أثناء التطوير
  أو عند استخدام Hot Module Reload في Vite.
*/
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

/*
  قاعدة بيانات Firestore الحالية.
  كل الملفات القديمة التي تستورد db ستستمر بالعمل.
*/
export const db = getFirestore(app);

/*
  Firebase Authentication.
  سنستخدمه بدل PIN المكتوب داخل كود الموقع.
*/
export const auth = getAuth(app);

export default app;
