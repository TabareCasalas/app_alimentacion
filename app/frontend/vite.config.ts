import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Con HashRouter, podemos usar '/' como base path
// Los assets se cargarán desde la raíz del sitio
const basePath = process.env.VITE_BASE_PATH || '/'

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
