import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

// Publishes chosen files from the repo root at the site root, so they get a
// fixed web address (for example /ombre-share.jpg, used by link previews).
// An entry is either a file name, or ['file in repo root', 'address'] to
// publish it under a different, cleaner name.
// If a file is ever moved into a public/ folder, remove it from this list.
function rootFiles(files) {
  const entries = files.map((f) => (Array.isArray(f) ? f : [f, f]))

  return {
    name: 'root-files',
    // While developing, serve the renamed address from the original file.
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = (req.url || '').split('?')[0]
        for (const [from, to] of entries) {
          if (url === `/${to}`) {
            req.url = `/${encodeURIComponent(from)}`
            break
          }
        }
        next()
      })
    },
    generateBundle() {
      for (const [from, to] of entries) {
        this.emitFile({
          type: 'asset',
          fileName: to,
          source: readFileSync(from),
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    rootFiles(['ombre-share.jpg', ['Custom 404.mp4', 'ombre-404.mp4']]),
  ],
  build: {
    rollupOptions: {
      // Two pages: the landing page, and 404.html. Vercel serves 404.html with
      // a real 404 status for any address that does not exist.
      input: {
        main: 'index.html',
        notFound: '404.html',
      },
    },
  },
})
