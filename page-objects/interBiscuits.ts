import { Page, expect, Locator } from '@playwright/test';

export class interBiscuits{
    readonly page : Page;

    readonly Biscuits : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.Biscuits = page.getByTitle('Biscuits');
    }

    async viewPage(){
        
        await this.Biscuits.click();
        
    }

   
}