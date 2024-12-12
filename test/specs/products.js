import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/inventory.page.js'

describe('Sorting out the products', () => {


    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.inputUsername.setValue('standard_user')
        await LoginPage.inputPassword.setValue('secret_sauce')
        await LoginPage.btnSubmit.click()
    })

    it('should filter products by price (high to low)', async () => {
        await expect(productPage.productsTitle).toBeDisplayed()
        await expect(productPage.productsTitle).toHaveText('Products')
        await productPage.filterOptions.selectByAttribute("value", 'hilo')
        console.log(await productPage.filterOptions.getValue())
        const firstPriceText = await productPage.firstPrice.getText()
        const firstPrice = parseInt(firstPriceText.replace('$', ''), 10)
        const lastPriceText = await productPage.lastPrice.getText()
        const lastPrice = parseInt(lastPriceText.replace('$', ''), 10)
        await expect(firstPrice).toBeGreaterThan(lastPrice)
    })

    it('should filter products by price (low to high)', async () => {
        await expect(productPage.productsTitle).toBeDisplayed()
        await expect(productPage.productsTitle).toHaveText('Products')
        await productPage.filterOptions.selectByAttribute("value", 'lohi')
        console.log(await productPage.filterOptions.getValue())
        const firstPriceText = await productPage.firstPrice.getText()
        const firstPrice = parseInt(firstPriceText.replace('$', ''), 10)
        const lastPriceText = await productPage.lastPrice.getText()
        const lastPrice = parseInt(lastPriceText.replace('$', ''), 10)
        await expect(firstPrice).toBeLessThan(lastPrice)
    });


})
