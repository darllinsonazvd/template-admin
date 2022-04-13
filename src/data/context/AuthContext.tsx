import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import UserModel from '../../models/User'
import Cookies from 'js-cookie'
import app from '../../firebase/config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User
} from 'firebase/auth'

interface AuthContextProps {
  user?: UserModel
  loading?: boolean
  googleLogin?: () => Promise<void>
  register?: (email: string, password: string) => Promise<void>
  login?: (email: string, password: string) => Promise<void>
  logout?: () => Promise<void>
}

const auth = getAuth(app)
auth.languageCode = 'it' // To apply the default browser preference instead of explicitly setting it.

const AuthContext = createContext<AuthContextProps>({})

async function setUserFirebase(userFirebase: User): Promise<UserModel> {
  const token = await userFirebase.getIdToken()
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    photoURL: userFirebase.photoURL
  }
}

function manageCookie(isLoggedIn: boolean) {
  if (isLoggedIn) {
    Cookies.set('template-admin-auth', isLoggedIn, {
      expires: 7
    })
  } else {
    Cookies.remove('template-admin-auth')
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<UserModel>(null)

  async function setSection(userFirebase: User) {
    if (userFirebase?.email) {
      const user = await setUserFirebase(userFirebase)
      setUser(user)
      manageCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      manageCookie(false)
      setLoading(false)
      return false
    }
  }

  async function register(email, password) {
    try {
      setLoading(true)
      const resp = await createUserWithEmailAndPassword(auth, email, password)

      await setSection(resp.user)
      Router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function login(email, password) {
    try {
      setLoading(true)
      const resp = await signInWithEmailAndPassword(auth, email, password)

      await setSection(resp.user)
      Router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function googleLogin() {
    try {
      setLoading(true)
      const resp = await signInWithPopup(auth, new GoogleAuthProvider())

      await setSection(resp.user)
      Router.push('/')
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    try {
      setLoading(true)
      await auth.signOut()
      await setSection(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('template-admin-auth')) {
      const cancel = auth.onIdTokenChanged(setSection)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        googleLogin,
        register,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext
