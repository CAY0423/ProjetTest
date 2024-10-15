import { Page, expect, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class HomePage{
    readonly page : Page;
    readonly buttonLog : Locator;
    readonly buttonPanier : Locator;
    readonly searchBar : Locator;
    readonly buttonSearch : Locator;
    readonly buttonCategory : Locator;
    readonly buttonSignUp : Locator;

    constructor(page : Page){
        this.page = page;
        this.buttonLog = page.locator('#nav-link-accountList');
        this.buttonPanier = page.locator('#nav-cart-count-container');
        this.searchBar = page.getByPlaceholder('Rechercher Amazon.fr');
        this.buttonSearch = page.locator('#nav-search-submit-button');
        this.buttonCategory = page.locator('#nav-search-dropdown-card');
        this.buttonSignUp = page.getByRole('link', { name : 'Commencer ici.' });
    }

    async connexion(){
        await this.buttonLog.click();
    }

    async create(){
        await this.buttonLog.blur();
        await this.buttonSignUp.click();
    }
}