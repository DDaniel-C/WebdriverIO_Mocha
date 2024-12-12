import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productPage {

    get productsTitle() {
        return $("//span[@class='title']")
    }

    get filterOptions() {
        return $("//select[@class='product_sort_container']")
    }

    get firstPrice() {
        return $("(//div[@class='inventory_item_price'])[1]")
    }

    get lastPrice() {
        return $("(//div[@class='inventory_item_price'])[6]")
    }

    get addFirstItemToCart() {
        return $("(//button[contains(@class, 'btn_inventory')])[1]")
    }

    get addSecondItemToCart() {
        return $("(//button[contains(@class, 'btn_inventory')])[2]")
    }

    get addLastItemToCart() {
        return $("(//button[contains(@class, 'btn_inventory')])[6]")
    }

    get cartIconCounter(){
        return $("//span[@class='shopping_cart_badge']")
    }
}

export default new productPage();