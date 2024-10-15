import { Page, expect, Locator} from '@playwright/test';
import { faker } from '@faker-js/faker';

export class PassPage{
    readonly page : Page;
    readonly passInput : Locator;
    readonly indentifyButton : Locator;
    readonly resterCoCheck : Locator;
    readonly modifyButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.passInput = page.locator('#ap_password');
        this.indentifyButton = page.locator('#auth-signin-button');
        this.resterCoCheck = page.getByLabel('Rester connecté', { exact: true });
        this.modifyButton = page.locator('#ap_change_login_claim');
    }

    async connexion(){
        await this.passInput.fill('Hadrigaming62');
        //await this.resterCoCheck.uncheck({ force : true });
        await this.indentifyButton.click();
    }
}