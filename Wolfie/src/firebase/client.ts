import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5eLT-YSRNk5fW85S7t5nJk7jxzjKkiHc",
  authDomain: "learnbetter-ca2ad.firebaseapp.com",
  projectId: "learnbetter-ca2ad",
  storageBucket: "learnbetter-ca2ad.appspot.com", 
  messagingSenderId: "1093357734503",
  appId: "1:1093357734503:web:b30d414ac64fd2a4d2a2c2",
  measurementId: "G-DYDPFJ70D8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);;