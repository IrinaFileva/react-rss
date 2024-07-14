/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        '**/index.ts',
        '.eslintrc.cjs',
        '**/vite-env.d.ts',
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp,eslintrc}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      ],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
