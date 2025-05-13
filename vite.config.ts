import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: true, // Habilitar Hot Module Replacement para una recarga más rápida
    watch: {
      usePolling: true, // Forzar a Vite a usar polling para detectar cambios
    },
    headers: {
      'Cache-Control': 'no-cache', // Deshabilitar caché del navegador
    },
  },
});
