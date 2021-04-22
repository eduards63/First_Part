import { Selector, t } from 'testcafe'
import loginPages from '../pages/loginPages'
import carShopPage from '../pages/carShopPage'


class productsPage {
    constructor() {
        this.productLabel = Selector('.product_label')
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.logout = Selector('.bm-item.menu-item')
        this.shopCar = Selector('.svg-inline--fa')
        this.item = Selector('.inventory_item_name')
        this.addButton = Selector('.btn_primary.btn_inventory')
        this.backButton = Selector('.inventory_details_back_button')
        
    }
    async logoutForm() {

        await t.expect(this.productLabel.textContent).eql('Products')
        await t.click(this.burgerMenu)
        await t.click(this.logout.withText('Logout'))
        await t.expect(loginPages.loginButton.exists).ok()
    } s
    async goShoppingcar() {

        await t.click(this.shopCar)
        await t.expect(carShopPage.carShopHeader.textContent).eql('Your Cart')
    }

    async selectItem() {

        await t.click(this.item.withText('Sauce Labs Bolt T-Shirt'))
        await t.click(this.addButton.withText('ADD TO CART'))
        await t.click(this.backButton)

        await t.click(this.item.withText('Sauce Labs Fleece Jacket'))
        await t.click(this.addButton.withText('ADD TO CART'))
        await t.click(this.backButton)

        await t.click(this.item.withText('Sauce Labs Onesie'))
        await t.click(this.addButton.withText('ADD TO CART'))
        await t.click(this.backButton)

        await t.click(this.item.withText('Sauce Labs Bike Light'))
        await t.click(this.addButton.withText('ADD TO CART'))

    }

}

export default new productsPage()