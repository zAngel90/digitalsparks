import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Necesario para Ngrok
    allowedHosts: [
      'localhost',
      '*.ngrok-free.app', // Permite todos los subdominios de ngrok-free.app
      'f5b3-2800-e2-c080-95b-28b9-7a7e-bdbe-2567.ngrok-free.app' // Tu dominio específico de ngrok
    ]
  }
})
