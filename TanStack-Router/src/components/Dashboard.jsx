import { useAuth } from '../context/AuthContext'

/**
 * Dashboard Component
 * Protected route - Sadece giriş yapmış kullanıcılar görebilir
 * Kullanıcı bilgilerini ve istatistiklerini gösterir
 */
export function DashboardComponent() {
  const { user } = useAuth()

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <h2>Hoş geldiniz, {user?.email}</h2>
        <p>Bu sayfa sadece giriş yapmış kullanıcılar tarafından görüntülenebilir.</p>
        
        {/* Kullanıcı bilgilerini gösteren kart */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Profil Bilgileri</h3>
            <ul>
              <li>Email: {user?.email}</li>
              <li>Son Giriş: {new Date().toLocaleDateString()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 