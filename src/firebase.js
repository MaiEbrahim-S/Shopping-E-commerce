// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // إذا كنتِ تريدين تفعيل المصادقة وتسجيل الدخول
import { getFirestore } from "firebase/firestore"; // إذا كنتِ تريدين استخدام قاعدة البيانات الفورية
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9Hyz2eGNuqfsne7Gd9tXz0vXHLa66Zc",
  authDomain: "smart-shop-caa18.firebaseapp.com",
  projectId: "smart-shop-caa18",
  storageBucket: "smart-shop-caa18.firebasestorage.app",
  messagingSenderId: "165126134606",
  appId: "1:165126134606:web:72d003c048ead3cb6a5c1f",
  measurementId: "G-85WYB2WHFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


