import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles";',
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
