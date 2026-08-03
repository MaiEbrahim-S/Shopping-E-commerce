import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext({
  currentUser: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  signup: async () => {},
})

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    await signOut(auth)
    setCurrentUser(null)
  }

  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const register = signup

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: !!currentUser,
      login,
      logout,
      register,
      signup,
    }),
    [currentUser]
  )

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
