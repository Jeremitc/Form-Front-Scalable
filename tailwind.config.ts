// tailwind.config.ts
import type { Config } from 'tailwindcss';
import path from 'path'; // Importa el módulo 'path' de Node.js
import { fileURLToPath } from 'url'; // Importa 'fileURLToPath'

// Obtén la ruta del directorio actual de forma segura en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Config = {
  content: [
    // Usa path.resolve para crear rutas absolutas
    path.resolve(__dirname, 'index.html'),
    path.resolve(__dirname, 'src/**/*.{vue,js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;