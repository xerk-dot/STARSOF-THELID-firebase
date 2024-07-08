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
    port: 3000,
    strictPort: true,
   },
  server: {
    strictPort: true,
    //host: true,
    host: "0.0.0.0",
    port: 3000,
    origin: "http://0.0.0.0:3000",
  }
})