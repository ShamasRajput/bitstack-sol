import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/browser',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3100',
    reducedMotion: 'reduce',
    launchOptions: { channel: 'chrome' }
  },
  webServer: {
    command: 'npm run start -- --port 3100',
    url: 'http://127.0.0.1:3100',
    env: { DATA_DIR: '.data/browser-tests' },
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
