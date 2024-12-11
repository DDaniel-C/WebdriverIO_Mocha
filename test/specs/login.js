import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Login Page', () => {

    var testcounter = 0
    beforeEach(async () => {
        testcounter++
        await browser.url('https://www.saucedemo.com/')
    })

    after(async () => {
        console.log("Test counter: " + testcounter)
    })

    it('should login with valid credentials', async () => {
        await browser.pause(1000)
        LoginPage.inputUsername.setValue('standard_user')
        LoginPage.inputPassword.setValue('secret_sauce')
        LoginPage.btnSubmit.click()
    })

    it('should not login with invalid credentials', async () => {
        await browser.pause(1000)
        await LoginPage.inputUsername.setValue('invalid_user')
        await LoginPage.inputPassword.setValue('invalid_password')
        await LoginPage.btnSubmit.click()
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
        
    })

    it('it should display error message', async () => {
        await browser.pause(1000)
        await LoginPage.btnSubmit.click()
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required')
    })

})
