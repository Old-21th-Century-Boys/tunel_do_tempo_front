import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './tunel_do_tempo_front/src'),
      '@Components': path.resolve(__dirname, './tunel_do_tempo_front/src/components'),
      '@Contexts': path.resolve(__dirname, './tunel_do_tempo_front/src/contexts'),
      '@Pages': path.resolve(__dirname, './tunel_do_tempo_front/src/pages'),
      '@Routes': path.resolve(__dirname, './tunel_do_tempo_front/src/routes'),
      '@Services': path.resolve(__dirname, './tunel_do_tempo_front/src/services'),
      '@Types': path.resolve(__dirname, './tunel_do_tempo_front/src/types'),
      '@Utils': path.resolve(__dirname, './tunel_do_tempo_front/src/utils'),
    },
  },
});