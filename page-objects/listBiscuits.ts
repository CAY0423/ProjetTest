import { Page, expect, Locator } from '@playwright/test';

export class ListBiscuits{
    readonly page : Page;
    readonly filtreEtoile : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.filtreEtoile = page.getByLabel('4 étoiles et plus');
    }

    async viewPage(){
        await this.filtreEtoile.click();
        
    }

   
}