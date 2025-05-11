import { test, expect } from "@playwright/test";

test("Check if the ui is visible", async ({ page }) => {
  await page.goto("http://localhost:4200/login");

  const wb = page.getByText("Welcome Back");
  const eyc = page.getByText("Enter your credentials to");
  const emailInput = page.getByRole("textbox", { name: "name@example.com" });
  const passwordInput = page.getByRole("textbox", { name: "••••••••" });
  const signinButton = page.getByRole("button", { name: "Sign in" });

  await expect(wb).toBeVisible();
  await expect(eyc).toBeVisible();
  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(signinButton).toBeVisible();
});

test("Login", async ({ page }) => {
  await page.goto("http://localhost:4200/login");
  const emailInput = page.getByRole("textbox", { name: "name@example.com" });
  const passwordInput = page.getByRole("textbox", { name: "••••••••" });
  const signinButton = page.getByRole("button", { name: "Sign in" });

  await emailInput.fill("afsarzahin@gmail.com");
  await passwordInput.fill("zahin@123");
  await signinButton.click();

  const chatText = page.getByText("Chats");

  await expect(chatText).toBeVisible({ timeout: 10000 });
});

test("Wrong password", async ({ page }) => {
  await page.goto("http://localhost:4200/login");

  const emailInput = page.getByRole("textbox", { name: "name@example.com" });
  const passwordInput = page.getByRole("textbox", { name: "••••••••" });
  const signinButton = page.getByRole("button", { name: "Sign in" });

  await emailInput.fill("afsarzahin@gmail.com");
  await passwordInput.fill("zahin@1234");
  await signinButton.click();

  const errorText = page.getByText("Invalid credentials");

  await expect(errorText).toBeVisible({ timeout: 30000 });
});
