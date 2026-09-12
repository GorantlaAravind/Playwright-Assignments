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
    actionTimeot:10*1000,
    navigationTimeout:30*1000,
    browserName:'chromium',
    headless:false,
    screenshot:'on',
    trace:'on'

  }
});
module.exports=config
