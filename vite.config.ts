import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Contexts': path.resolve(__dirname, './src/contexts'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Routes': path.resolve(__dirname, './src/routes'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Types': path.resolve(__dirname, './src/types'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
