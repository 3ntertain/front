import React from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import firebase_app from "@/firebase/config"

const auth = getAuth(firebase_app)

export const AuthContext = React.createContext({})

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = {
          uid: user.uid,
          email: user.email,
        }

        // Effectuez la requête POST à l'API en utilisant fetch
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

        // const { completeUser } = {
        //   user,
        //   ...{ data: jsonData },
        // }

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

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
