import { Selector, t } from 'testcafe'
import productsPage from '../pages/productsPage'

class loginPages {
    constructor() {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('.btn_action')
        this.invalidUser = Selector('[data-test="error"]')
    }
    async submitLoginForm(username, password) {
        
        await t.typeText(this.usernameField, username)
        await t.typeText(this.passwordField, password)
        await t.click(this.loginButton)
        await t.expect(productsPage.productLabel.textContent).eql('Products')
    }

    async submitLoginFormInvalid(username, password) {
        
        await t.typeText(this.usernameField, username)
        await t.typeText(this.passwordField, password)
        await t.click(this.loginButton)
    }
}

export default new loginPages()