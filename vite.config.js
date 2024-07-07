import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  preview: {
    port: 8080,
    strictPort: true,
   },
  server: {
    strictPort: true,
    //host: true,
    host: "0.0.0.0",
    port: 8080,
    origin: "http://0.0.0.0:8080",
  }
})