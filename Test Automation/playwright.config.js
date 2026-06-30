import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      },

    },
  ],
  
      reporter: [
    ['html', { open: 'always' }]   // 👈 HTML report enabled

  ],

  use: {
    screenshot: 'only-on-failure',   // 👈 FAIL only
    video: 'retain-on-failure',      // optional
    trace: 'on-first-retry'          // optional
  }
   
});