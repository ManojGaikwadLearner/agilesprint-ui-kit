import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['projects/ui-kit/src/test/setup.ts'],
    include: ['projects/ui-kit/src/**/*.spec.ts']
  }
});