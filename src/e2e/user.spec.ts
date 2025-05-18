import { test, expect } from '@playwright/test';

test.describe('User', () => {
  test('Редактирование', async ({ page }) => {
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

    const profileLogo = page.getByAltText('Profile');
    await expect(profileLogo).toBeVisible();
    await profileLogo.click();

    const editProfileButton = page.getByTestId('edit-profile-button');
    await expect(editProfileButton).toBeVisible();
    await editProfileButton.click();

    const loginInput = page.locator('[data-testid="Login"] input');
    await expect(loginInput).toBeVisible();
    await loginInput.fill('Vavilkin123');

    const saveChangesButton = page.getByTestId('save-changes-button');
    await expect(saveChangesButton).toBeVisible();
    await saveChangesButton.click();

    const newLoginOnPage = page.getByText('Vavilkin123');
    await expect(newLoginOnPage).toBeVisible();
  });
});
