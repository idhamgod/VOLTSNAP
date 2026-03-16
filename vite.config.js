import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/main/',
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Intercept browser navigation requests, including exact /main without a trailing slash
          if (
            req.url.startsWith('/main') &&
            !req.url.includes('.') &&
            !req.url.includes('__vite') &&
            !req.url.includes('@') &&
            req.headers.accept?.includes('text/html')
          ) {
            // Rewrite to base path — Vite serves index.html, React Router handles the route
            req.url = '/main/';
          }
          next();
        });
      },
    },
  ],
})
