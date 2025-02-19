import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwedJvnnE3wx8q_EuB8WvJIeTLCYb7dHs",
  authDomain: "auadstri.firebaseapp.com",
  projectId: "auadstri",
  storageBucket: "auadstri.firebasestorage.app",
  messagingSenderId: "973171137986",
  appId: "1:973171137986:web:3c8fbc44cdcc420f4f0a5b",
  measurementId: "G-BWH0YNQ3NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Firebase Auth
const db = getFirestore(app);  // Firestore Database

export { auth, db };
