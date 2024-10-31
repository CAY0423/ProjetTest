import { Page, Locator } from '@playwright/test';

export class SigninPage {
    readonly page: Page;
    readonly GotoCreateAccountPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.GotoCreateAccountPage = page.locator('#createAccountSubmit'); 
    }

    async GoCreateAccount(){
        await this.GotoCreateAccountPage.click(); 
    }
}