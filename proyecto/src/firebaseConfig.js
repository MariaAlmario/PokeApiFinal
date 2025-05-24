import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIPVUYB2ATrg5t4XoBWJ_KKzdnYfBhdTg",
    authDomain: "pokeapifinal.firebaseapp.com",
    projectId: "pokeapifinal",
    storageBucket: "pokeapifinal.firebasestorage.app",
    messagingSenderId: "1040032368063",
    appId: "1:1040032368063:web:c00e6181157ad8d18b0d0a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };