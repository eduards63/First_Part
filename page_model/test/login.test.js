import { Selector, t } from 'testcafe'
import carShopPage from '../pages/carShopPage'
import loginPages from '../pages/loginPages'
import productsPage from '../pages/productsPage'
import { CREDENTIALS } from '../data/constants'
import checkoutInfoPage from '../pages/checkoutInfoPage'
import overviewPage from '../pages/overviewPage'
import finishPage from '../pages/finishPage'

fixture`login test`
    .page`https://www.saucedemo.com/`

test('1-Login with valid user', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('2-Login with invalid user', async t => {
    await loginPages.submitLoginFormInvalid(CREDENTIALS.invalid_user.USERNAME, CREDENTIALS.invalid_user.PASSWORD)
    await t.expect(loginPages.invalidUser.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test('3-Logout from products page', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productsPage.logoutForm()

})

test('4-Navigate to the shopping cart', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await productsPage.goShoppingcar()
})

test('5-Add a single item to the shopping cart', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.click(productsPage.item.withText('Sauce Labs Bolt T-Shirt'))
    await t.click(productsPage.addButton.withText('ADD TO CART'))

    await productsPage.goShoppingcar()

    await t.expect(carShopPage.tShirt.innerText).eql('Sauce Labs Bolt T-Shirt')
})

test('6-Add multiple item to the shopping cart', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await productsPage.selectItem()

    await productsPage.goShoppingcar()

    await carShopPage.validCarShop()
})

test('7-Continue with missing mail information and 8-Fill user`s information', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await productsPage.selectItem()

    await productsPage.goShoppingcar()

    await carShopPage.validCarShop()

    await t.click(carShopPage.checkoutButton.withText('CHECKOUT'))

    await checkoutInfoPage.informationPage(CREDENTIALS.subHeaders.information, CREDENTIALS.errorMessages.firstName, CREDENTIALS.infoUser.firstName, CREDENTIALS.errorMessages.lastName, CREDENTIALS.infoUser.lastName, CREDENTIALS.errorMessages.postalCode, CREDENTIALS.infoUser.postalCode, CREDENTIALS.subHeaders.overview)
})

test('9-Final Order Items', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await productsPage.selectItem()

    await productsPage.goShoppingcar()

    await carShopPage.validCarShop()

    await t.click(carShopPage.checkoutButton.withText('CHECKOUT'))

    await checkoutInfoPage.informationPage(CREDENTIALS.subHeaders.information, CREDENTIALS.errorMessages.firstName, CREDENTIALS.infoUser.firstName, CREDENTIALS.errorMessages.lastName, CREDENTIALS.infoUser.lastName, CREDENTIALS.errorMessages.postalCode, CREDENTIALS.infoUser.postalCode, CREDENTIALS.subHeaders.overview)

    await overviewPage.overviewValid()
})

test('10-Complete a purchase', async t => {
    await loginPages.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await productsPage.selectItem()

    await productsPage.goShoppingcar()

    await carShopPage.validCarShop()

    await t.click(carShopPage.checkoutButton.withText('CHECKOUT'))

    await checkoutInfoPage.informationPage(CREDENTIALS.subHeaders.information, CREDENTIALS.errorMessages.firstName, CREDENTIALS.infoUser.firstName, CREDENTIALS.errorMessages.lastName, CREDENTIALS.infoUser.lastName, CREDENTIALS.errorMessages.postalCode, CREDENTIALS.infoUser.postalCode, CREDENTIALS.subHeaders.overview)

    await overviewPage.overviewValid()

    await finishPage.finishPageValid()
    
})


