import React from 'react'
import { Dashboard } from './pages/Dashboard'
import { LoginPage } from './pages/LoginPage'
import { AuthProvider, useAuth } from './hooks/useAuth'
function AppContent() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Dashboard /> : <LoginPage />
}
export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
