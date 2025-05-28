import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDQgKiLN8PD1d28bnoSA0cUlANZ_38VPc",
    authDomain: "pokeapifinal2.firebaseapp.com",
    projectId: "pokeapifinal2",
    storageBucket: "pokeapifinal2.firebasestorage.app",
    messagingSenderId: "1006387546895",
    appId: "1:1006387546895:web:0459c57b91d5f0ab0b0c7a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };