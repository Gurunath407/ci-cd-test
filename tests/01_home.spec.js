const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('https://www.aseuro.in');
  await expect(page).toHaveTitle(/Aseuro Technologies/);
});

// ➕ New Test Case: Website opens successfully in browser
test('open website in browser and verify URL', async ({ page }) => {
  await page.goto('https://www.aseuro.in');

  // Check if the page actually navigated to the site
  await expect(page).toHaveURL('https://www.aseuro.in/');

  // Check if page content is visible (any common element)
  await expect(page.locator('body')).toBeVisible();
});
