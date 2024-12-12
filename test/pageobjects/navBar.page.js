import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class navBar {

    get navigationBar() {
        return $("//button[@id='react-burger-menu-btn']")
    }

    get logout() {
        return $("//a[@id='logout_sidebar_link']")
    }

}

export default new navBar();