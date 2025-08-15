import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages用の設定を含むVite configuration
export default defineConfig({
  plugins: [react()],
  base: '/marine-blue/', // GitHub Pagesのリポジトリ名に合わせて設定
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: false,
    allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})