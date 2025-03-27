// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8I87YBjYFIjHfkmBR1MrlIR3Qq4qO2w",
  authDomain: "acebot-4a195.firebaseapp.com",
  projectId: "acebot-4a195", // Fixed: removed space between "ace" and "bot"
  storageBucket: "acebot-4a195.appspot.com", // Fixed: corrected storageBucket format
  messagingSenderId: "840648363882",
  appId: "1:840648363882:web:8cd8367e68f7e9400f1f13",
  measurementId: "G-ENJ1S9Z5NL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);