import { Selector, t } from 'testcafe'

class carShopPage{
    constructor(){
        this.carShopHeader= Selector('.subheader')
        this.tShirt = Selector('[id="item_1_title_link"]')
        this.jacket = Selector('[id="item_5_title_link"]')
        this.onesie = Selector('[id="item_2_title_link"]')
        this.bikeLight = Selector('[id="item_0_title_link"]')
        this.checkoutButton = Selector('.btn_action')
        

    }

    async validCarShop() {

        await t.expect(Selector('.cart_item').count).eql(4)
        await t.expect(this.tShirt.innerText).eql('Sauce Labs Bolt T-Shirt')
        await t.expect(this.jacket.innerText).eql('Sauce Labs Fleece Jacket')
        await t.expect(this.onesie.innerText).eql('Sauce Labs Onesie')
        await t.expect(this.bikeLight.innerText).eql('Sauce Labs Bike Light')
    }
}

export default new carShopPage()