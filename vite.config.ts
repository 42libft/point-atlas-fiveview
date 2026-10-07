import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  publicDir: 'public',
  cacheDir: '.cache/vite',
  build: {
    outDir: 'dist',
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      input: {
        atlas: resolve(projectRoot, 'atlas.html'),
        ar: resolve(projectRoot, 'atlas-ar.html'),
      },
    },
  },
});
