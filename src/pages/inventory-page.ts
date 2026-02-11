import { type Locator, type Page } from '@playwright/test';
import env from '../../config/env';

export class InventoryPage {
  readonly page: Page;
  readonly productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('[data-test="inventory-list"]');
  }

  async goto() {
    await this.page.goto(env.baseUrl+'/inventory.html');
  }

}