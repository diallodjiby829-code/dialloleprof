import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dialloleprof/', // Important pour GitHub Pages (site projet)
  plugins: [react()],
})
