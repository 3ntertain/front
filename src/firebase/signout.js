import { auth } from "./config"
import { signOut } from "firebase/auth"

export default async function signout() {
  let result = null,
    error = null

  try {
    result = true
    await signOut(auth)
    navigate("/")
  } catch (e) {
    error = e
  }

  return { result, error }
}
