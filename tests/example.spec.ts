import { test, expect } from "@playwright/test";
import { getTestCases1, getTestCases2, getTestCases3, TestCase } from "./utils";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test.describe("Run Test Cases1", async () => {
  const testCases: TestCase[] = await getTestCases1();
  testCases.forEach((testCase) => {
    test(`Test Case 1 ${testCase.testCase}`, async ({ page }) => {
      await page.goto("https://playwright.dev/");
    });
  });
});

// THIS EXAMPLE WORKS - SOMETHING RELATED TO
test.describe("Run Test Cases2", async () => {
  const testCases = getTestCases2();
  testCases.forEach((testCase) => {
    test(`Test Case 2 ${testCase.testCase}`, async ({ page }) => {
      await page.goto("https://playwright.dev/");
    });
  });
});

test.describe("Run Test Cases3", async () => {
  const testCases = await getTestCases3();
  testCases.forEach((testCase) => {
    test(`Test Case 2 ${testCase.testCase}`, async ({ page }) => {
      await page.goto("https://playwright.dev/");
    });
  });
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
});
