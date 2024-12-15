import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Soc_project/', // замените на имя вашего репозитория
  plugins: [react()]
});
