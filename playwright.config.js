// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout:40*1000,
    expect:{
      timeout:40*1000,
    },
    reporter:'html',
  use:{
    baseURL:'https://eventhub.rahulshettyacademy.com',
    actionTimeout:10*1000,
    navigationTimeout:30*1000,
    //browserName:'chromium',
    headless:true,
    screenshot:'on',
    trace:'on'

  },
  retries: 1,
  projects: [
  { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
]

});
module.exports=config
