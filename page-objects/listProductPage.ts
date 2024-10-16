import { Page, expect, Locator } from '@playwright/test';

export class ListProductPage{
    readonly page : Page;
    readonly caseProduit : Locator;

    constructor(page : Page){
        this.page = page;
        this.caseProduit = page.locator('#r1wa2gh2k5fd1f2epds7pi0zgr7');
    }

    async viewPage(){
        await this.caseProduit.click();
    }
}