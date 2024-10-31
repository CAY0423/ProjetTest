import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly Commandproduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Commandproduct = page.locator('[data-feature-id="proceed-to-checkout-action"]'); 
    }

    async Pay(){
        await this.Commandproduct.click(); 
    }
}