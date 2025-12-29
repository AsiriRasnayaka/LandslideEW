import React, { useEffect, useState, createContext, useContext } from 'react'
interface User {
  email: string
  name: string
}
interface AuthContextType {
  user: User | null
  login: (email: string) => void
  logout: () => void
  isAuthenticated: boolean
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem('landslide_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  const login = (email: string) => {
    // Mock login - accept any email
    const newUser = {
      email,
      name: email.split('@')[0] || 'User',
    }
    setUser(newUser)
    localStorage.setItem('landslide_user', JSON.stringify(newUser))
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem('landslide_user')
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
