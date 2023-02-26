import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'vite-plugin-fs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    outDir: './dist',
  },
  plugins: [react(), fs()],
  server: {
    host: true,
  },
});
