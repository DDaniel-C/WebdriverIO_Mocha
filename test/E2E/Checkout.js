import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/product.page.js'
import cartPage from '../pageobjects/cart.page.js'
import testData from "../Data/testData.json" assert { "type": "json" }

describe('Adding and removing products from products page', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.inputUsername.setValue('standard_user')
        await LoginPage.inputPassword.setValue('secret_sauce')
        await LoginPage.btnSubmit.click()
    })

    it('Compelete checkout', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await productPage.addSecondItemToCart.click()
        await productPage.cart.click()
        await cartPage.cartTitle.waitForDisplayed()
        await expect(cartPage.cartTitle).toHaveText('Your Cart')
        await cartPage.checkout.click()
        await cartPage.firstName.waitForDisplayed()
        await cartPage.firstName.addValue(testData.firstName)
        await cartPage.lastName.addValue(testData.lastName)
        await cartPage.postalCode.addValue(testData.address.postalCode)
        await cartPage.continueButton.click()
        await cartPage.finishButton.click()
        await cartPage.thankYouMessage.waitForDisplayed()
        await expect(cartPage.thankYouMessage).toHaveText([expect.stringContaining('Thank you for your order!')])
    })

    it('Error message on checkout: Name is required1', async () => {
        await expect(productPage.cartIconCounter).not.toBeDisplayed()
        await productPage.addFirstItemToCart.click()
        await expect(productPage.cartIconCounter).toBeDisplayed()
        await productPage.addSecondItemToCart.click()
        await productPage.cart.click()
        await cartPage.cartTitle.waitForDisplayed()
        await expect(cartPage.cartTitle).toHaveText('Your Cart')
        await cartPage.checkout.click()
        await cartPage.firstName.waitForDisplayed()
        await cartPage.continueButton.click()
        await expect(cartPage.errorMessage).toBeDisplayed()
        await expect(cartPage.errorMessage).toHaveText('Error: First Name is required')
    })
})