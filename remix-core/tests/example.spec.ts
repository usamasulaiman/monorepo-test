import { test, expect } from '@playwright/test';

// console.log('port is', process.env.PORT);
// const baseUrl = `http://localhost:${process.env.PORT}`;

test('take screenshot of the page', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveScreenshot();
});
