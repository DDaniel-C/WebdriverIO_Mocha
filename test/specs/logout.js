import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import navBar from '../pageobjects/navBar.page.js'

describe('Logout of SwagLabs', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('standard_user', 'secret_sauce')
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
