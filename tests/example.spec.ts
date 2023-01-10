import { test, expect } from "@playwright/test";
import { getTestCases, TestCase } from "./utils";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe("Run Test Cases", async () => {
  const testCases: TestCase[] = await getTestCases();
  testCases.forEach((testCase) => {
    test(`Test Case ${testCase.testCase}`, async ({ page }) => {
      await page.goto("https://playwright.dev/");

      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
  });
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
