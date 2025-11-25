import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Obtener base path desde variable de entorno
// En GitHub Actions, esto se pasa como VITE_BASE_PATH=/app_alimentacion/
const basePath = process.env.VITE_BASE_PATH || '/'

console.log('Vite config - Base path:', basePath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  base: basePath,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
