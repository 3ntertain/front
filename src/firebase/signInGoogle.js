import { firebase_app } from "./config"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default async function signInGoogle(email, password) {
  let result = null,
    error = null
  try {
    result = await signInWithPopup(firebase_app, new GoogleAuthProvider())
  } catch (e) {
    error = e
  }

  return { result, error }
}
