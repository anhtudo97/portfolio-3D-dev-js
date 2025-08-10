import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
})
