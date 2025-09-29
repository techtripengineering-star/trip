import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),       // 👈 this is required for React
    tailwindcss(), // 👈 this keeps Tailwind working
  ],
})
