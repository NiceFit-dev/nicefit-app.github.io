import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    host: '0.0.0.0',  // Permite conexiones externas
    port: 4173,        // El puerto de Vite
  },
};
