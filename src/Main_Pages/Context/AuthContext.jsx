import { createContext, useState } from "react"
import { users } from "../data"

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [wrongUser, setWrongUser] = useState(false)

  function signIn (us, cb){
    if (users[us.email]===us.password.toString()){
      setWrongUser(false)
      setUser(us)
      cb()
    } else {
      setWrongUser(true)
    }
  }

  function signOut (){
    setUser(null)
 }

 const value = {user, wrongUser, signIn, signOut}


  return (
    <AuthContext.Provider value={value}>
     {children}
    </AuthContext.Provider>
)
}
