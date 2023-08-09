import React from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { firebase_app } from "@/firebase/config"

export const AuthContext = React.createContext({})

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_app, async (user) => {
      if (user) {
        const data = {
          uid: user.uid,
          email: user.email,
        }

        const response = await fetch(
          process.env.NEXT_PUBLIC_apiUrl + "call-user/createOrConnect",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Vous pouvez également ajouter des en-têtes d'authentification si nécessaire
            },
            body: JSON.stringify(data),
          }
        )

        // Vérifiez si la réponse est ok (statut 200-299)
        if (!response.ok) {
          throw new Error("La requête a échoué")
        }

        const jsonData = await response.json()

        // TODO: Créer correctement le profil utilisateur
        const newUser = {
          photoURL: user.photoURL,
          displayName: user.displayName,
          ...jsonData,
        }

        setUser(newUser)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const setUserWallet = async (walletAddress) => {
    user.walletAddress = walletAddress
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user, setUserWallet }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
