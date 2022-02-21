import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

import eslintrc from '../.eslintrc';

const {
  alias: { map: alias = [], extensions = [] },
} = eslintrc.settings['import/resolver'];

export default defineConfig({
  build: {
    outDir: 'build',
    manifest: true,
  },
  plugins: [
    createHtmlPlugin({
      entry: './src/index.jsx',
      minify: true,
      template: './public/index.html',
    }),
    react(),
  ],
  preview: {
    port: 5000,
  },
  resolve: {
    alias: Object.fromEntries(
      alias.map(([name, path]) => [name, resolve(path)]),
    ),
    extensions,
  },
  server: {
    port: 3000,
  },
});
