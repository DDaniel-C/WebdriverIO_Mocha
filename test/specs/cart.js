import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/inventory.page.js'

describe('Adding and removing products from products page', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.inputUsername.setValue('standard_user')
        await LoginPage.inputPassword.setValue('secret_sauce')
        await LoginPage.btnSubmit.click()
    })
    
    it('add product to cart then remove it', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await expect(productPage.cartIconCounter).toHaveText('1')
        console.log(await productPage.cartIconCounter.getText())
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
    })

    it('adding and verifying multiple products are in cart icon', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await productPage.addSecondItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await expect(productPage.cartIconCounter).toHaveText('2')
        console.log(await productPage.cartIconCounter.getText())
    })

})