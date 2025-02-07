import { createRouter, createRootRoute, createRoute, redirect } from '@tanstack/react-router'
import { RootComponent } from './components/Root'
import { HomeComponent } from './components/Home'
import { LoginComponent } from './components/Login'
import { DashboardComponent } from './components/Dashboard'

/**
 * Ana root route tanımlaması
 * Bu route, tüm diğer route'ların parent'ı olarak davranır
 * RootComponent içerisinde navbar ve layout yapısını barındırır
 */
const rootRoute = createRootRoute({
  component: RootComponent,
})

/**
 * Ana sayfa route'u
 * Path: /
 * Herhangi bir auth kontrolü gerektirmez
 */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeComponent,
})

/**
 * Login sayfası route'u
 * Path: /login
 * Search parametreleri ile redirect işlemlerini yönetir
 */
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginComponent,
  validateSearch: (search) => ({
    redirect: search.redirect || '/',
  }),
})

/**
 * Dashboard sayfası route'u
 * Path: /dashboard
 * Protected route - Sadece authenticate olmuş kullanıcılar erişebilir
 */
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardComponent,
  beforeLoad: async ({ context }) => {
    const token = localStorage.getItem('userToken')
    if (!token) {
      throw redirect({
        to: '/login',
        search: {
          redirect: '/dashboard',
        },
      })
    }
  },
})

// Tüm route'ları bir araya getirip router'ı oluşturuyoruz
const routeTree = rootRoute.addChildren([indexRoute, loginRoute, dashboardRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent', // Kullanıcı link'in üzerine geldiğinde sayfayı önceden yükler
}) 