import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase/config"
import { doc, onSnapshot, getDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

export const AuthContext = React.createContext({})
export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          uid: user.uid,
        })

        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUser({
            uid: user.uid,
            email: user.email,
            avatar: user.photoURL
              ? user.photoURL
              : "/images/logo/3ntertain-logo-square.jpg",
            ...docSnap.data(),
          })
        } else {
        }

        onSnapshot(doc(db, "users", user.uid), (doc) => {
          setUser({
            uid: user.uid,
            email: user.email,
            avatar: user.photoURL
              ? user.photoURL
              : "/images/logo/3ntertain-logo-square.jpg",
            ...doc.data(),
          })
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
