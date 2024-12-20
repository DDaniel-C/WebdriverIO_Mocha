import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Adding and removing products from products page', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
    })
    
    it('add product to cart then remove it from producst page', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await expect(productPage.cartIconCounter).toHaveText('1')
        console.log(await productPage.cartIconCounter.getText())
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
    })

    it('adding and verifying multiple products are in cart icon from products page', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await productPage.addSecondItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await expect(productPage.cartIconCounter).toHaveText('2')
        console.log(await productPage.cartIconCounter.getText())
    })

})