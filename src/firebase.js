import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2gGwx4EVDkm_KVr1EGbU14zGXF5d2i9w",
  authDomain: "imssolar-f01d3.firebaseapp.com",
  projectId: "imssolar-f01d3",
  storageBucket: "imssolar-f01d3.firebasestorage.app",
  messagingSenderId: "148177889076",
  appId: "1:148177889076:web:7901be7afafbdb64576761",
  measurementId: "G-4TX1LGZYY7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
