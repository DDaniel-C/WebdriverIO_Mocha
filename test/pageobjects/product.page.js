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

    get cartIconCounter() {
        return $("//span[@class='shopping_cart_badge']")
    }

    get cart() {
        return $("//a[@class='shopping_cart_link']")
    }

    get comparePrices() {
        async function comparePrices(operator) {
          const firstPriceText = await this.firstPrice.getText()
          const firstPrice = parseInt(firstPriceText.replace('$', ''), 10)
          const lastPriceText = await this.lastPrice.getText()
          const lastPrice = parseInt(lastPriceText.replace('$', ''), 10)
          switch (operator) {
            case 'lt': // less than
              return firstPrice < lastPrice;
            case 'gt': // greater than
              return firstPrice > lastPrice;
            case 'eq': // equal
              return firstPrice === lastPrice;
            default:
              throw new Error(`Unsupported operator: ${operator}`);
          }
        }
        return comparePrices;
      }
}

export default new productPage();