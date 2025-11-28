
const { test, expect } = require('@playwright/test');

test('navigation works', async ({ page }) => {
  await page.goto('https://example.com');
  const href = await page.locator('a').first().getAttribute('href');
  expect(href).toBeTruthy();
});
