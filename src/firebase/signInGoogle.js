import firebase_app from "./config"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const auth = getAuth(firebase_app)

export default async function signInGoogle(email, password) {
  let result = null,
    error = null
  try {
    result = await signInWithPopup(auth, new GoogleAuthProvider())
  } catch (e) {
    error = e
  }

  return { result, error }
}
