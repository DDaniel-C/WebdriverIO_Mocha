import { $ } from '@wdio/globals'

class cartPage {

    get checkout() {
        return $('//button[@id="checkout"]')
    }

    get cartTitle() {
        return $('//span[@class="title"]')
    }

    get continueShopping() {
        return $('//button[@id="continue-shopping"]')
    }

    get checkout(){
        return $('//button[@id="checkout"]')
    }

    get firstName() {
        return $('//input[@id="first-name"]')
    }

    get lastName() {
        return $('//input[@id="last-name"]')
    }   

    get postalCode() {        
        return $('//input[@id="postal-code"]')
    }

    get thankYouMessage() {
        return $('//h2[@class="complete-header"]')
    }

    get continueButton() {
        return $('//input[@id="continue"]')
    }

    get finishButton() {
        return $('//button[@id="finish"]')
    }

    get errorMessage() {
        return $('//div[@class="error-message-container error"]')
    }

}

export default new cartPage()
