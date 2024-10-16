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
    readonly optionList : Locator;

    constructor(page : Page){
        this.page = page;
        this.buttonLog = page.locator('#nav-link-accountList');
        this.buttonPanier = page.locator('#nav-cart-count-container');
        this.searchBar = page.getByPlaceholder('Rechercher Amazon.fr');
        this.buttonSearch = page.locator('#nav-search-submit-button');
        this.buttonCategory = page.locator('#nav-search-dropdown-card');
        this.optionList = page.locator('#searchDropdownBox');
        this.buttonSignUp = page.getByRole('link', { name : 'Commencer ici.' });
    }

    async connexion(){
        await this.buttonLog.click();
    }

    async create(){
        await this.buttonLog.blur();
        await this.buttonSignUp.click();
    }

    async selectCatagory(){
        await this.buttonCategory.click();
        await this.optionList.selectOption({ label: 'Epicerie' });
        await expect(this.optionList).toHaveValue('search-alias=grocery');
        const food = 'pain de mie';
        await this.searchBar.fill(food);
        await expect(this.searchBar).toHaveValue(food);
        await this.buttonSearch.click();
    }
}