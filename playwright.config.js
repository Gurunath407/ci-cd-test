
// basic playwright config
const { defineConfig } = require('@playwright/test');

// playwright.config.js
module.exports = {
  use: {
    headless: false,   // 👈 Turn OFF headless mode
    viewport: null,
    ignoreHTTPSErrors: true,
  },
};

