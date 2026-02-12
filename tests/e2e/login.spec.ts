import { test, expect } from '@playwright/test';
import env from '../../config/env';
import { LoginPage } from '../../src/pages/login-page';

test('A user can log in with standard credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.logIn(env.username, env.password);
  await expect(page).toHaveURL('/inventory.html');
});