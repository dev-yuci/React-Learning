import { Link, Outlet } from '@tanstack/react-router'
import { useAuth } from '../context/AuthContext'

/**
 * Root Component
 * Ana layout yapısını ve navigasyon barını içerir
 * Auth durumuna göre farklı menü öğeleri gösterir
 */
export function RootComponent() {
  const { user, logout } = useAuth()

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/">Ana Sayfa</Link></li>
            {/* Kullanıcı giriş yapmışsa Dashboard ve Çıkış linklerini göster */}
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={logout}>Çıkış Yap</button></li>
              </>
            ) : (
              // Kullanıcı giriş yapmamışsa Login linkini göster
              <li><Link to="/login">Giriş Yap</Link></li>
            )}
          </ul>
        </nav>
      </header>
      
      {/* Alt route'ların render edileceği alan */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
} 