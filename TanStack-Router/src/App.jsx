import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from './context/AuthContext'
import { router } from './router'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
