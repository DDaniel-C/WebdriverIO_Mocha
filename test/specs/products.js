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
        // Ensure the products title is displayed
        await expect(productPage.productsTitle).toBeDisplayed();
        // Validate the title text
        await expect(productPage.productsTitle).toHaveText('Products');
        // Select the filter option for "High to Low" prices
        await productPage.filterOptions.selectByAttribute("value", 'hilo');
        console.log(await productPage.filterOptions.getValue());
        // Get and parse the first product's price
        const firstPriceText = await productPage.firstPrice.getText();
        const firstPrice = parseInt(firstPriceText.replace('$', ''), 10);
        // Get and parse the last product's price
        const lastPriceText = await productPage.lastPrice.getText();
        const lastPrice = parseInt(lastPriceText.replace('$', ''), 10);
        // Verify the first price is greater than the last price
        await expect(firstPrice).toBeGreaterThan(lastPrice);
    })

    it('should filter products by price (low to high)', async () => {
        // Ensure the products title is displayed
        await expect(productPage.productsTitle).toBeDisplayed();
        // Validate the title text
        await expect(productPage.productsTitle).toHaveText('Products');
        // Select the filter option for "Low to High" prices
        await productPage.filterOptions.selectByAttribute("value", 'lohi');
        console.log(await productPage.filterOptions.getValue());
        // Get and parse the first product's price
        const firstPriceText = await productPage.firstPrice.getText();
        const firstPrice = parseInt(firstPriceText.replace('$', ''), 10);
        // Get and parse the last product's price
        const lastPriceText = await productPage.lastPrice.getText();
        const lastPrice = parseInt(lastPriceText.replace('$', ''), 10);
        // Verify the first price is less than the last price
        await expect(firstPrice).toBeLessThan(lastPrice);
    });


})
