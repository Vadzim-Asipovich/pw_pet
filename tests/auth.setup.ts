import { test as setup, expect } from '@playwright/test';
import path from 'path';
import env from '../config/env';
import { LoginPage } from '../src/pages/login-page';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.logIn(env.username, env.password);
  await expect(page).toHaveURL('/inventory.html');

  await page.context().storageState({ path: authFile });
});