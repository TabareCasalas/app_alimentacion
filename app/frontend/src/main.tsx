import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Obtener base path desde variable de entorno
// Vite reemplaza import.meta.env.VITE_BASE_PATH durante el build
// Si no está definido, usar '/' para desarrollo local
const basePath = import.meta.env.VITE_BASE_PATH || '/'

// Normalizar: asegurar que termine con '/' si no es la raíz
const normalizedBasePath = basePath === '/' ? '/' : basePath.endsWith('/') ? basePath : `${basePath}/`

// Debug: verificar el base path (solo en desarrollo)
if (import.meta.env.DEV) {
  console.log('Base path:', normalizedBasePath)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={normalizedBasePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

