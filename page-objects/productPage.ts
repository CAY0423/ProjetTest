import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly productTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-button');
    }

    async addToCart() {
        await this.addToCartButton.click(); // Clique sur le bouton d'ajout au panier
    }
}
