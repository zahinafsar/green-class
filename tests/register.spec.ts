import { test, expect } from "@playwright/test";

test("Check if the ui is visible", async ({ page }) => {
        await page.goto("http://localhost:4200/register");
    });

    test("Check if the UI is visible", async ({ page }) => {
          await page.goto("http://localhost:4200/register");
        const title = page.getByText("Create Account");
        const emailInput = page.getByRole("textbox", { name: "name@example.com" });
        const nameInput = page.getByRole("textbox", { name: "Full Name" });
        const passwordInput = page.getByRole("textbox", { name: "••••••••" });
        const confirmPasswordInput = page.getByRole("textbox", { name: "••••••••" });
        const registerButton = page.getByRole("button", { name: "Register" });

        await expect(title).toBeVisible();
        await expect(emailInput).toBeVisible();
        await expect(nameInput).toBeVisible();
        await expect(passwordInput).toBeVisible();
        await expect(confirmPasswordInput).toBeVisible();
        await expect(registerButton).toBeVisible();
    });

    test("Successful registration", async ({ page }) => {

 await page.getByRole("textbox", { name: "Email" }).fill("zahin@test.com");
  await page.getByRole("textbox", { name: "Full Name" }).fill("Zahin Afsar");
    await page.getByPlaceholder("Password").fill("zahin@123");
    await page.getByPlaceholder("Confirm Password").fill("zahin@123");
        await page.getByRole("textbox", { name: "Full Name" }).fill("Zahin Afsar");
        
        await page.getByRole("button", { name: "Register" }).click();

        const successMsg = page.getByText("Account created successfully");
        await expect(successMsg).toBeVisible({ timeout: 30000 });
    });

    test("Registration with mismatched passwords", async ({ page }) => {
        await page.getByRole("textbox", { name: "Full Name" }).fill("Zahin Afsar");
        await page.getByRole("textbox", { name: "Email" }).fill("zahin@test.com");
        await page.getByPlaceholder("Password").fill("zahin@123");
        await page.getByPlaceholder("Confirm Password").fill("zahin@123");
        await page.getByRole("button", { name: "Register" }).click();

        const errorMsg = page.getByText("Passwords do not match");
        await expect(errorMsg).toBeVisible({ timeout: 30000 });
    });
