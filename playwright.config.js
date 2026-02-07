// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright configuration for smaQit website validation
 * Implements: COV-FUNCTIONAL, COV-TECHNICAL, COV-JOURNEYS
 * Target: https://ruifrvaz.github.io/smaqit-website
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30000,
  reporter: [
    ['html'],
    ['list'],
    ['json', { outputFile: 'test-results.json' }]
  ],
  use: {
    baseURL: 'https://ruifrvaz.github.io/smaqit-website',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 10000,
  },

  projects: [
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 }
      },
    },
    {
      name: 'chromium-tablet',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 768, height: 1024 }
      },
    },
    {
      name: 'chromium-mobile',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 375, height: 667 }
      },
    },
    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1440, height: 900 }
      },
    },
    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 }
      },
    },
  ],
});
