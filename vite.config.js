import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

// Publishes chosen files from the repo root at the site root, so they get a
// fixed web address (for example /ombre-share.jpg, used by link previews).
// If the file is ever moved into a public/ folder, remove it from this list.
function rootFiles(files) {
  return {
    name: 'root-files',
    generateBundle() {
      for (const file of files) {
        this.emitFile({
          type: 'asset',
          fileName: file,
          source: readFileSync(file),
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), rootFiles(['ombre-share.jpg'])],
})
