// src/app/firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';

// Inicializa la aplicación Firebase con la configuración del entorno
const app = initializeApp(environment.firebaseConfig);

// Inicializa los servicios de Firebase
const auth = getAuth(app);        // Servicio de autenticación
const firestore = getFirestore(app);  // Servicio Firestore

export { auth, firestore, createUserWithEmailAndPassword, signInWithEmailAndPassword };
