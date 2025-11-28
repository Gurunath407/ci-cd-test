
const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('https://www.aseuro.in');
  await expect(page).toHaveTitle(/Aseuro Technologies/);
});
