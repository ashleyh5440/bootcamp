import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // vite's hot react server
    port: 3000,
    open: true,
    proxy: {
      // proxy path begins with /graphql
      '/graphql': {
        // proxy requests to our express port 3001
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
