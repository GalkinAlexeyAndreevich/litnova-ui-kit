import { expect, test } from "@playwright/test";

test.describe("litnova-ui-kit", () => {
  test("loads the demo page with core components", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/litnova-ui-kit/i);
    await expect(page.locator("ui-card")).toBeVisible();
    await expect(page.locator("#demo-button")).toBeVisible();
    await expect(page.locator("#demo-input")).toBeVisible();
    await expect(page.locator("#demo-select")).toBeVisible();
  });

  test("button increments counter on click", async ({ page }) => {
    await page.goto("/");

    const button = page.locator("#demo-button");
    await expect(button).toContainText("Count: 0");
    await button.click();
    await expect(button).toContainText("Count: 1");
  });

  test("input accepts text", async ({ page }) => {
    await page.goto("/");

    const input = page.locator("#demo-input").locator("input");
    await input.fill("hello");
    await expect(input).toHaveValue("hello");
  });

  test("select chooses an option", async ({ page }) => {
    await page.goto("/");

    const select = page.locator("#demo-select");
    await select.getByRole("button", { name: "Choose option" }).click();
    await select.getByRole("option", { name: "Option B" }).click();
    await expect(select).toContainText("Option B");
  });
});
