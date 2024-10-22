import { Page, expect, Locator } from '@playwright/test';

export class InterSnacks{
    readonly page : Page;

    readonly Snacks : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.Snacks = page.getByTitle('Snacks');
    }

    async viewPage(){
        
        await this.Snacks.click();
        
    }

   
}