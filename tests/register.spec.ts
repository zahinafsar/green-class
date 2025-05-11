import { test, expect } from "@playwright/test";

test("Check if the email is visible", async ({ page }) => {
await page.goto("http://localhost:4200/login");
const emailInput = page.getByRole("textbox", { name: "name@example.com" });
await emailInput.fill("afsarzahin@gmail.com");})