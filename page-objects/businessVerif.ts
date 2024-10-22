import { Page, Locator, expect } from '@playwright/test';

export class BusinessVerif{
    readonly page : Page;

    constructor(page : Page){
        this.page = page;
    }

    async verif(){
        const url = this.page.url();
        expect(url).toContain('https://www.amazon.fr/ap/');
    }
}