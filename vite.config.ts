/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    !process.env.VITEST &&
      remix({
        appDirectory: 'src/app',
      }),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
