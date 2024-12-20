import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Sorting out the products', () => {


    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
    })

    it('should filter products by price (high to low)', async () => {
        await expect(productPage.productsTitle).toBeDisplayed()
        await expect(productPage.productsTitle).toHaveText('Products')
        await productPage.filterOptions.selectByAttribute("value", 'hilo')
        console.log(await productPage.filterOptions.getValue())
        await expect(await productPage.comparePrices('gt')).toBe(true);
    })

    it('should filter products by price (low to high)', async () => {
        await expect(productPage.productsTitle).toBeDisplayed()
        await expect(productPage.productsTitle).toHaveText('Products')
        await productPage.filterOptions.selectByAttribute("value", 'lohi')
        console.log(await productPage.filterOptions.getValue())
        await expect(await productPage.comparePrices('lt')).toBe(true);
    });


})
