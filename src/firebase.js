// src/firebase.js
import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
