import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import fs from "vite-plugin-fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fs()],
  server: {
    host: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
