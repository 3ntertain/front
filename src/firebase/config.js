// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore()

// if (window.location.hostname === "localhost") {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099")
//   connectFirestoreEmulator(db, "127.0.0.1", 5002)
// }

// if development, use emulator
// if (process.env.NODE_ENV === "development") {
//   connectAuthEmulator(auth, "http://localhost:9099")
//   connectFirestoreEmulator(db, "localhost", 5002)
// }

export { app, auth, db }
