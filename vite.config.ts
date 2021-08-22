import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@atoms': resolve(__dirname, './src/components/atoms'),
      '@molecules': resolve(__dirname, './molecules/components/container'),
      '@organisms': resolve(__dirname, './src/components/organisms'),
      '@container': resolve(__dirname, './src/container'),
      '@assets': resolve(__dirname, './src/assets'),
      '@styles': resolve(__dirname, './src/styles'),
      '@helper': resolve(__dirname, './src/helper'),
      '@screen': resolve(__dirname, './src/Screen'),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['./src', './src/**'],
    },
  },
});
