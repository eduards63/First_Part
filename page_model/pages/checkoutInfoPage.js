import { Selector, t } from 'testcafe'
import overviewPage from '../pages/overviewPage'


class checkoutInfoPage {
    constructor() {
        this.checkoutTitle = Selector('.subheader')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorText = Selector('[data-test="error"]')
        this.firstName = Selector('[id="first-name"]')
        this.lastName = Selector('[id="last-name"]')
        this.postalCode = Selector('[id="postal-code"]')

    }

    async informationPage(subheader1, error1, firsname, error2, lastname, error3, postalcode, subheader2) {

        await t.expect(this.checkoutTitle.innerText).eql(subheader1)

        await t.click(this.continueButton)
        await t.expect(this.errorText.innerText).eql(error1)
        await t.typeText(this.firstName, firsname)

        await t.click(this.continueButton)
        await t.expect(this.errorText.innerText).eql(error2)
        await t.typeText(this.lastName, lastname)


        await t.click(this.continueButton)
        await t.expect(this.errorText.innerText).eql(error3)
        await t.typeText(this.postalCode, postalcode)
        await t.click(this.continueButton)

        await t.expect(overviewPage.overviewTitle.textContent).eql(subheader2)
        
    }

}
export default new checkoutInfoPage()