import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import navBar from '../pageobjects/navBar.page.js'

describe('Logout of SwagLabs', () => {

    var testcounter = 0
    beforeEach(async () => {
        testcounter++
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.inputUsername.setValue('standard_user')
        await LoginPage.inputPassword.setValue('secret_sauce')
        await LoginPage.btnSubmit.click()
    })

    after(async () => {
        console.log("Test counter: " + testcounter)
    })

    it('Lougout function', async () => {
        await navBar.navigationBar.waitForClickable();
        await navBar.navigationBar.click()
        await browser.pause(1000)
        await navBar.logout.click()
        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    })


})
