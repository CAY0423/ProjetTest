import { test as base } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';
import { LoginPage } from '../page-objects/loginPage';
import { PassPage } from '../page-objects/pwPage';
import { CreatePage } from '../page-objects/createPage';
import { CreateProPage } from '../page-objects/createProPage';
import { FormProPage } from '../page-objects/formProPage';
import { ListProductPage } from '../page-objects/listProductPage';
import { VerifPage } from '../page-objects/verifPage';
import { BusinessVerif } from '../page-objects/businessVerif';
import { interBiscuits } from '../page-objects/interBiscuits';
import { ListBiscuits } from '../page-objects/listBiscuits';
import { InterSnacks } from '../page-objects/interSnacks';

const test = base.extend({
    Homepage : async({page}, use) => {
        await use(new HomePage(page));
    },
    Loginpage : async({page}, use) => {
        await use(new LoginPage(page));
    },
    Passpage : async({page}, use) => {
        await use(new PassPage(page));
    },
    Createpage : async({page}, use) => {
        await use(new CreatePage(page));
    },
    Createpropage : async({page}, use) => {
        await use(new CreateProPage(page));
    },
    Formpropage : async({page}, use) => {
        await use(new FormProPage(page));
    },
    Listproductpage : async({page}, use) => {
        await use(new ListProductPage(page));
    },
    Verifpage : async({page}, use) => {
        await use(new VerifPage(page));
    },
})

const expect = base.expect;
export {expect, test};