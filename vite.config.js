import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-all-to-main',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (
            req.url &&
            !req.url.startsWith('/main/') &&
            !req.url.startsWith('/@') &&
            req.headers.accept?.includes('text/html')
          ) {
            // Redirect root to /main/, mapping anything else to /main/...
            const dest = req.url === '/' ? '/main/' : `/main${req.url}`;
            res.writeHead(302, { Location: dest });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
  base: '/main/', // This tells Vite: "My files live at /main/"
})
