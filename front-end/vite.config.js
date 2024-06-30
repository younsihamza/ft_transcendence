import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    hmr: {
      // Configure if necessary for your setup
      // clientPort and public might be needed depending on your Docker network setup
    }
  },
})

