// Firebase SDK Import

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNJflSRd5qvJENLL19nGbbM9dxZldiy_A",
  authDomain: "chennaiah-painter.firebaseapp.com",
  projectId: "chennaiah-painter",
  storageBucket: "chennaiah-painter.firebasestorage.app",
  messagingSenderId: "451186631674",
  appId: "1:451186631674:web:6c34a9f5e6e62c2a0fba43",
  measurementId: "G-PSRT1K7YMR"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

console.log("Firebase Connected Successfully");
