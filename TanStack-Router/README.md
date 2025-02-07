# TanStack Router ve Authentication Örnek Projesi

Bu proje, TanStack Router'ın temel özelliklerini ve authentication sistemini öğrenmek için oluşturulmuş bir örnek uygulamadır. Modern routing yaklaşımlarını, protected routes yapısını ve authentication yönetimini göstermektedir.

## 🚀 Özellikler

- TanStack Router ile gelişmiş routing yönetimi
- Context API ile authentication sistemi
- Protected routes yapısı
- LocalStorage ile kalıcı oturum yönetimi
- Responsive navbar tasarımı
- Login/Logout işlemleri
- Dashboard sayfası

## 🛠️ Kullanılan Teknolojiler

- React 19
- TanStack Router
- Context API
- LocalStorage
- Vite
- CSS3

## 📦 Kurulum
- npm create vite@latest
- cd vite-project
- npm install
- npm install @tanstack/react-router
- npm run dev

## 📁 Proje Yapısı

src/
├── components/
│   ├── Root.jsx        # Ana layout komponenti
│   ├── Home.jsx        # Ana sayfa komponenti
│   ├── Login.jsx       # Giriş sayfası komponenti
│   └── Dashboard.jsx   # Korumalı dashboard komponenti
├── context/
│   └── AuthContext.jsx # Authentication context
├── App.jsx             # Ana uygulama komponenti
├── router.jsx          # Router yapılandırması
├── App.css             # Ana stil dosyası
└── index.css          # Global stiller

## 🔗 Faydalı Linkler

- [TanStack Router Dokümantasyonu](https://tanstack.com/router/latest)
- [React Dokümantasyonu](https://react.dev)
- [Vite Dokümantasyonu](https://vitejs.dev)