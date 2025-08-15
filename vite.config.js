import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production環境用のVite configuration
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
    assetsDir: 'assets',
    minify: true, // 本番環境では最小化を有効化
    sourcemap: false // 本番環境ではソースマップを無効化
  },
  define: {
    __DEV__: false,
    __PROD__: true
  }
})