// Importar Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBuUHOPcSjO71G0fftwhvqQV3UMqjpJJZU",
    authDomain: "escritora-yael.firebaseapp.com",
    projectId: "escritora-yael",
    storageBucket: "escritora-yael.firebasestorage.app",
    messagingSenderId: "403131540905",
    appId: "1:403131540905:web:687084531c4e1ad74590b8",
    measurementId: "G-2QYFEYN0BG"
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Exponer a nivel global (solo para desarrollo)
  window.firebaseAuth = auth;