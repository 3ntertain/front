import { firebase_app } from "./config"
import { signOut, getAuth } from "firebase/auth"

export default async function signout() {
  let result = null,
    error = null

  try {
    result = true
    await signOut(firebase_app)
    navigate("/")
  } catch (e) {
    error = e
  }

  return { result, error }
}
