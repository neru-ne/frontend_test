import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {


  await page.goto('http://localhost:5173/');

  //表示中の画面の全体のスクリーンショットをとる
  await page.screenshot({ path: '__e2etest/screenshot/test-all.png', fullPage: true });

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
