import { defineConfig } from 'vitest/config';

// GitHub Pages sert le dépôt à https://jodm007.github.io/Space-Heros/
// Le base path doit correspondre au nom du dépôt GitHub
// Le workflow pose BASE_PATH pour definir le chemin de base
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  root: '.',
  server: {
    host: true
  },
  test: {
    environment: 'node',
    setupFiles: ['./src/test/setup.js'],
    passWithNoTests: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three']
        }
      }
    }
  }
});
