import { test } from "../locator/fixtures";



test.describe('Connexion test', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://www.amazon.fr/');
    });

    test('Scenario1 : Login',
    {
        tag: ['@collab'],
    },
    async({ Homepage, Loginpage, Passpage, Verifpage }) => {
        await test.step('connexion', async() => {
            await Homepage.connexion();
            await Loginpage.connexion();
            await Passpage.connexion();
            await Homepage.verif();
        })
    }
    )

    test('Scenario2 : Création compte particulier', 
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage }) => {
        await test.step('createParticular', async() => {
            await Homepage.create();
            await Createpage.create();
            await Homepage.verif();
        })
    }
    )

    test('Scenario3 : Création compte Pro',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage, Createpropage, Formpropage, Businessverif }) => {
        await test.step('create pro account', async() => {
            await Homepage.create();
            await Createpage.createPro();
            await Createpropage.create();
            await Formpropage.create();
            await Businessverif.verif();
        })
    }
    )

    test('Scenario4 : Mail déjà utilisé',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Createpage }) => {
        await test.step('create account with used email', async() => {
            await Homepage.create();
            await Createpage.createAlreadyUse();
        })
    }
    )

    test('Sceanario5 : Search product by category',
    {
        tag : ['@Collab'],
    },
    async({ Homepage, Listproductpage }) => {
        await test.step('search by category', async() => {
            await Homepage.selectCatagory();
            await Listproductpage.viewPage();
        })
    }
    )
    test('Sceanario6 : Search product by category + filter',
        {
            tag : ['@Collab'],
        },
        async({ Homepage, Listsnacks, InterSnacks }) => {
            await test.step('search by category', async() => {
                await Homepage.selectCatagoryfilter();
                await InterSnacks.viewPage();
                await Listsnacks.viewPage();

            }) 
        }
        )
    test('Sceanario7 : Add product to cart',
        {
            tag : ['@Collab'],
        },
        async({ Homepage, Listproductpage, ProductPage, page,Loginpage,Passpage }) => {
            await test.step('Search product', async ()=> {
                //S'identifier 
                await Homepage.connexion();
                await Loginpage.connexion();
                await Passpage.connexion();
                await Homepage.verif();
                //Add product to cart
                await Homepage.selectCatagory();
                await Listproductpage.viewPage();
                await ProductPage.addToCart();
                await page.waitForTimeout(1000);
            })
        }
        )
    test('Sceanario8 : Remove product to cart',
        {
            tag : ['@Collab'],
        },
        async({ Homepage, ProductPage, page,Loginpage,Passpage }) => {
            await test.step('Search product', async ()=> {
                //S'identifier 
                await Homepage.connexion();
                await Loginpage.connexion();
                await Passpage.connexion();
                await Homepage.verif();
                await ProductPage.goToCart();
                //Delete product à condition d'avoir réalisé le test d'add product
                await ProductPage.deleteProduct();
                await page.waitForTimeout(1000);
            })
        }
        )

        test('Scenario9 : order with an account creation in the checkout',
            {
                tag: ['@collab'],
            },
            async({ Homepage, Listproductpage, ProductPage, page, Createpage, CartPage, SigninPage }) => {
                await test.step('Search product', async ()=> {
                    //Add product to cart
                    await Homepage.acceptCookie.click();
                    await Homepage.selectCatagory();
                    await Listproductpage.viewPage();
                    await ProductPage.addToCart();
                    await ProductPage.goToCart();
                    await CartPage.Pay();
                    await SigninPage.GoCreateAccount();
                    await Createpage.create();
                    await page.waitForTimeout(1000);
                })
            }
            )
})

test.describe('Checkout Process', () => {
    test.beforeEach(async ({ CartPage, Homepage, Loginpage, Passpage, ProductPage }) => {
        await Homepage.connexion();
        await Loginpage.connexion();
        await Passpage.connexion();
        await Homepage.verif();
        await ProductPage.goToCart();
        await CartPage.navigateToCheckout();
    });

    test('Scénario 10 :Buy an Article from cart',
         {
             tag: ['@collab'],
         },
        async ({ CartPage });
         {
        await CartPage.selectShippingAddress();
        await CartPage.selectPaymentMethod('Credit Card');
        await CartPage.enterCardDetails({
            cardNumber: '4111111111111111',
            expirationDate: '12/25',
            cvv: '123'
        });
        await CartPage.clickConfirmButton();
    });
     test('Scenario11: Modify item quantity in the cart', 
    {
        tag: ['@collab'],
    }, 
    async ({ CartPage, Homepage, Loginpage, Passpage, Productpage }) => {
        await Homepage.connexion();
        await Loginpage.connexion();
        await Passpage.connexion();
        await Homepage.verif();
        await ProductPage.goToCart();
        await CartPage.changeItemQuantity('2');
    });
});
