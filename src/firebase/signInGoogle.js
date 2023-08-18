import { auth } from "./config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

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
