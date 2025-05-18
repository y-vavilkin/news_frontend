import { test, expect } from '@playwright/test';

test.describe('Авторизация', () => {
  test('Registration', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const signUpButton = page.getByRole('button', { name: /SIGN UP/i });
    await expect(signUpButton).toBeVisible();
    await signUpButton.click();

    await page.getByPlaceholder('Login').fill('Admin12');
    await page.getByPlaceholder('Email').fill('user@mail12.com');
    await page.getByPlaceholder('Password').fill('admin-user');

    const continueButton = page.getByRole('button', { name: /CONTINUE/i });
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    await page.waitForURL('http://localhost:5173', { timeout: 5000 });

    const logoutButton = page.getByTestId('logout-button');
    await expect(logoutButton).toBeVisible({ timeout: 5000 });
  });

  test('Login', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const signInButton = page.getByRole('button', { name: /SIGN IN/i });
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    await page.getByPlaceholder('Email').fill('user@mail1.com');
    await page.getByPlaceholder('Password').fill('admin-user');

    const continueButton = page.getByRole('button', { name: /CONTINUE/i });
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    await page.waitForURL('http://localhost:5173');

    const logoutButton = page.getByTestId('logout-button');
    await expect(logoutButton).toBeVisible();
  });

  test('Logout', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const signUpButton = page.getByRole('button', { name: /SIGN UP/i });
    const signInButton = page.getByRole('button', { name: /SIGN IN/i });

    await expect(signUpButton).toBeVisible();
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    await page.getByPlaceholder('Email').fill('user@mail1.com');
    await page.getByPlaceholder('Password').fill('admin-user');

    const continueButton = page.getByRole('button', { name: /CONTINUE/i });
    await expect(continueButton).toBeVisible();
    await continueButton.click();

    await page.waitForURL('http://localhost:5173');

    const logoutButton = page.getByTestId('logout-button');
    await expect(logoutButton).toBeVisible();

    await expect(logoutButton).toBeVisible();
    await logoutButton.click();

    await expect(signUpButton).toBeVisible();
    await expect(signInButton).toBeVisible();
  });
});
