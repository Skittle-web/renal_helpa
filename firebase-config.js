import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWMg98m48EwS7ZtpOKL5Yn3-aOybQll1k",
  authDomain: "rental-helper-d3b23.firebaseapp.com",
  projectId: "rental-helper-d3b23",
  storageBucket: "rental-helper-d3b23.firebasestorage.app",
  messagingSenderId: "203325013362",
  appId: "1:203325013362:web:3d60c83b674269608cf1eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged };
