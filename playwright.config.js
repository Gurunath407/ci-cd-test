
// basic playwright config
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
  },
  reporter: [['html']]
});
