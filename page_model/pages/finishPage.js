import { Selector, t } from 'testcafe'

class finishPage {
    constructor() {
        this.finishTitle = Selector('.subheader')
        this.completeHeader = Selector('.complete-header')
        this.completeText = Selector('.complete-text')
        this.finishButton = Selector('.btn_action.cart_button')

    }

    async finishPageValid() {

        await t.click(this.finishButton)
        await t.expect(this.finishTitle.innerText).eql('Finish')
        await t.expect(this.completeHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
        await t.expect(this.completeText.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    }

}

export default new finishPage()