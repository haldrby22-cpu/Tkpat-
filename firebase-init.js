// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApjsbc63GjzB7FYEZPBcJLKYc_delSe2Q",
  authDomain: "tlpat-65977.firebaseapp.com",
  projectId: "tlpat-65977",
  storageBucket: "tlpat-65977.firebasestorage.app",
  messagingSenderId: "831053645639",
  appId: "1:831053645639:web:ce0595983df188e9e62e62"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
