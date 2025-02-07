import { useNavigate, useSearch } from '@tanstack/react-router'
import { useAuth } from '../context/AuthContext'

/**
 * Login Component
 * Kullanıcı giriş formunu ve giriş işlemlerini yönetir
 * Başarılı girişte kullanıcıyı dashboard'a yönlendirir
 */
export function LoginComponent() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const search = useSearch({ from: '/login' })

  /**
   * Form submit handler
   * @param {Event} e - Form submit eventi
   * Kullanıcı bilgilerini alır ve login işlemini gerçekleştirir
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      // Gerçek uygulamada burada API çağrısı yapılır
      await login({ email })
      navigate({ to: '/dashboard' })
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            placeholder="Şifre" 
            required 
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          Giriş Yap
        </button>
      </form>
    </div>
  )
} 