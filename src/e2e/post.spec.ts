import { test, expect } from '@playwright/test';

test.describe('Posts', () => {
  test('Создание', async ({ page }) => {
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

    const profileLogo = page.getByAltText('Profile');
    await expect(profileLogo).toBeVisible();
    await profileLogo.click();

    const emptyContent = page.getByText('There are no posts');
    await expect(emptyContent).toBeVisible();

    const addPostButton = page.getByTestId('add-post-button');
    await expect(addPostButton).toBeVisible();
    await addPostButton.click();

    const postTitleInput = page.locator('[data-testid="Title"] input');
    const postContentInput = page.locator('[data-testid="Content"] textarea').first();
    const postTagsInput = page.locator('[data-testid="Tags"] input');

    await expect(postTitleInput).toBeVisible();
    await expect(postContentInput).toBeVisible();
    await expect(postTagsInput).toBeVisible();

    await postTitleInput.fill('Title');
    await postContentInput.fill('Content');
    await postTagsInput.fill('Tag');

    const createButton = page.getByTestId('create-post-button');
    await expect(createButton).toBeVisible();
    await createButton.click();

    await expect(emptyContent).not.toBeVisible();
  });

  test('Удаление', async ({ page }) => {
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

    const profileLogo = page.getByAltText('Profile');
    await expect(profileLogo).toBeVisible();
    await profileLogo.click();

    const emptyContent = page.getByText('There are no posts');
    await expect(emptyContent).not.toBeVisible();

    const deletePostButton = page.getByTestId('delete-post-button').first();
    await expect(deletePostButton).toBeVisible();
    await deletePostButton.click();

    await expect(emptyContent).toBeVisible();
  });
});
