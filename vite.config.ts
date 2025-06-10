// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
  ],
  server: {
    hmr: {
      overlay: false, // Disable error overlay if desired
    },
  },
});