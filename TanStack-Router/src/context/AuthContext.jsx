import { createContext, useContext, useState } from 'react'

/**
 * Authentication için Context oluşturuyoruz
 * null başlangıç değeri ile kullanıcının giriş yapmadığını belirtiyoruz
 */
const AuthContext = createContext(null)

/**
 * Authentication Provider Komponenti
 * Tüm auth state'ini ve metodlarını yönetir
 * LocalStorage ile kalıcı oturum sağlar
 */
export function AuthProvider({ children }) {
  // Sayfa yenilendiğinde localStorage'dan kullanıcı bilgisini alıyoruz
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('userToken')
    const savedUser = localStorage.getItem('user')
    return token && savedUser ? JSON.parse(savedUser) : null
  })

  /**
   * Login işlemi
   * @param {Object} userData - Kullanıcı bilgileri
   * Kullanıcı bilgilerini state'e ve localStorage'a kaydeder
   */
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('userToken', 'dummy-token')
    localStorage.setItem('user', JSON.stringify(userData))
  }

  /**
   * Logout işlemi
   * Kullanıcı bilgilerini state'den ve localStorage'dan temizler
   */
  const logout = () => {
    setUser(null)
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook ile context'e kolay erişim sağlıyoruz
export const useAuth = () => useContext(AuthContext) 