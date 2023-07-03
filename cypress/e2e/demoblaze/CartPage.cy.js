import cartPage from "../../pageObject/cartPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Add to Cart - Cart Page Scenario', () => {
  const Cart_Page = new cartPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Success add Cart Page', () => {
    Cart_Page.clickLogin1()
    Cart_Page.inputUsername(inputan.valid_user)
    Cart_Page.inputPassword(inputan.valid_pass)
    Cart_Page.clickLogin2()
    Cart_Page.validate()
    Cart_Page.additem1()
    Cart_Page.addtocartBtn()
    Cart_Page.cart_Menu()
    Cart_Page.url()
  })

  it('Success Delete Item', () => {
    Cart_Page.clickLogin1()
    Cart_Page.inputUsername(inputan.valid_user)
    Cart_Page.inputPassword(inputan.valid_pass)
    Cart_Page.clickLogin2()
    Cart_Page.validate()
    Cart_Page.additem1()
    Cart_Page.addtocartBtn()
    Cart_Page.cart_Menu()
    Cart_Page.url()
    Cart_Page.clickDelete()
  })

})