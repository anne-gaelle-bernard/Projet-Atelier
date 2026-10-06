import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // chemins relatifs : le site marche aussi sur GitHub Pages (…github.io/Projet-Atelier/)
  base: './',
})
