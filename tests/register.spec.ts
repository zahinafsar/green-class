import { test, expect } from '@playwright/test';


const randomEmail = Math.random().toString(36).substring(2, 15) + '@example.com';
const randomStudentId = Math.floor(Math.random() * 100000000);

test('Check registration', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.getByPlaceholder('name@example.com').fill(randomEmail);
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByRole('combobox').selectOption('Student');
    await page.getByPlaceholder('Student ID').fill(randomStudentId.toString());
    await page.locator('input[type="password"]').nth(0).fill('SecurePass123');
    await page.locator('input[type="password"]').nth(1).fill('SecurePass123');
    await page.getByRole('button', { name: 'Create account' }).click();

    await expect(page.locator('text=Welcome')).toBeVisible({ timeout: 30000 });
});

test('Check if show error when passwords do not match', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.getByPlaceholder('name@example.com').fill(randomEmail);
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByRole('combobox').selectOption('Student');
    await page.getByPlaceholder('Student ID').fill(randomStudentId.toString());
    await page.locator('input[type="password"]').nth(0).fill('SecurePass123');
    await page.locator('input[type="password"]').nth(1).fill('SecurePass1234');
    await page.getByRole('button', { name: 'Create account' }).click();

    const errorText = page.getByText("Passwords do not match");
    await expect(errorText).toBeVisible({ timeout: 30000 });
});

test('Check if show error when student id already exists', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.getByPlaceholder('name@example.com').fill(randomEmail);
    await page.getByPlaceholder('Full Name').fill('Test User');
    await page.getByRole('combobox').selectOption('Student');
    await page.getByPlaceholder('Student ID').fill('12345678');
    await page.locator('input[type="password"]').nth(0).fill('SecurePass123');
    await page.locator('input[type="password"]').nth(1).fill('SecurePass123');
    await page.getByRole('button', { name: 'Create account' }).click();

    const errorText = page.getByText("Student ID already exists");
    await expect(errorText).toBeVisible({ timeout: 30000 });
});

test('Check if show error when email already exists', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.getByPlaceholder('name@example.com').fill('testuser@example.com');
    await page.getByPlaceholder('Full Name').fill('Existing User');
    await page.getByRole('combobox').selectOption('Student');
    await page.getByPlaceholder('Student ID').fill(randomStudentId.toString());
    await page.locator('input[type="password"]').nth(0).fill('Password123');
    await page.locator('input[type="password"]').nth(1).fill('Password123');
    await page.getByRole('button', { name: 'Create account' }).click();

    const errorText = page.getByText("User already exists");
    await expect(errorText).toBeVisible({ timeout: 30000 });
});
