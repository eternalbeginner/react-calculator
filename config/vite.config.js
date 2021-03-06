import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ include: './src' })],
  resolve: {
    alias: {
      '@components': resolve(__dirname, '../src/components'),
      '@constants': resolve(__dirname, '../src/constants'),
      '@contexts': resolve(__dirname, '../src/contexts'),
      '@reducers': resolve(__dirname, '../src/reducers'),
      '@sources': resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx'],
  },
});
