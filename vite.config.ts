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
      exclude: [
        '**/**.test.tsx',
        '**/**.test.ts',
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
