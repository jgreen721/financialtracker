import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRSh3n4cAPKVhq4hJ0ZALrCWd5naxD5M",
  authDomain: "financial-tracker-c7355.firebaseapp.com",
  projectId: "financial-tracker-c7355",
  storageBucket: "financial-tracker-c7355.firebasestorage.app",
  messagingSenderId: "759791630450",
  appId: "1:759791630450:web:53aec1098bfc423467aaeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
