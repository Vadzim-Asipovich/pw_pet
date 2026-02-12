import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../src/pages/inventory-page';

test('A user can log in with standard credentials', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goto();
  await expect(page).toHaveURL('/inventory.html');
});