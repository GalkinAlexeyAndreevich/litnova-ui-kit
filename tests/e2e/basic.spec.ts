import { expect, test } from '@playwright/test';

test.describe('litnova-ui-kit basic', () => {
  test('loads the home page', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/litnova-ui-kit/i);
    await expect(page.locator('my-element')).toBeVisible();
  });

  test('increments counter on click', async ({ page }) => {
    await page.goto('/');

    const root = page.locator('my-element');
    const counter = root.locator('ui-button');

    await expect(counter).toContainText(/count is 0/i);
    await counter.click();
    await expect(counter).toContainText(/count is 2/i);
  });
});
