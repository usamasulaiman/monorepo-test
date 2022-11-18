import { test, expect } from '@playwright/test';

// console.log('port is', process.env.PORT);
// const baseUrl = `http://localhost:${process.env.PORT}`;

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://github.com/remix-run/indie-stack');
  await expect(page).toHaveScreenshot();
  // example.spec.ts
});
