import placeorderPage from "../../pageObject/placeorderPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Add to Cart - Place Order Scenario', () => {
  const Place_Order = new placeorderPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Place Order - Success Purchase', () => {
    Place_Order.clickLogin1()
    Place_Order.inputUsername(inputan.valid_user)
    Place_Order.inputPassword(inputan.valid_pass)
    Place_Order.clickLogin2()
    Place_Order.validate()
    Place_Order.additem1()
    Place_Order.addtocartBtn()
    Place_Order.cart_Menu()
    Place_Order.clickPlaceOrderButton()
    Place_Order.url()
    
    Place_Order.inputNameOrder(inputan.nameorder)
    Place_Order.inputCountry(inputan.city)
    Place_Order.inputCity(inputan.city)
    Place_Order.inputCard(inputan.card)
    Place_Order.inputMonth(inputan.month)
    Place_Order.inputYear(inputan.year)
    
    Place_Order.clickPurchaseBtn()
    Place_Order.purchase_message()
    Place_Order.clickOK()
  })

  it('Place Order - Blank Name Order', () => {
    Place_Order.clickLogin1()
    Place_Order.inputUsername(inputan.valid_user)
    Place_Order.inputPassword(inputan.valid_pass)
    Place_Order.clickLogin2()
    Place_Order.validate()
    Place_Order.additem1()
    Place_Order.addtocartBtn()
    Place_Order.cart_Menu()
    Place_Order.clickPlaceOrderButton()
    Place_Order.url()
    
    Place_Order.inputCountry(inputan.city)
    Place_Order.inputCity(inputan.city)
    Place_Order.inputCard(inputan.card)
    Place_Order.inputMonth(inputan.month)
    Place_Order.inputYear(inputan.year)
    
    Place_Order.clickPurchaseBtn()
    Place_Order.validate_blank_name()
  })

  it('Place Order - Blank Card Number', () => {
    Place_Order.clickLogin1()
    Place_Order.inputUsername(inputan.valid_user)
    Place_Order.inputPassword(inputan.valid_pass)
    Place_Order.clickLogin2()
    Place_Order.validate()
    Place_Order.additem1()
    Place_Order.addtocartBtn()
    Place_Order.cart_Menu()
    Place_Order.clickPlaceOrderButton()
    Place_Order.url()
    
    Place_Order.inputNameOrder(inputan.nameorder)
    Place_Order.inputCountry(inputan.city)
    Place_Order.inputCity(inputan.city)
    Place_Order.inputMonth(inputan.month)
    Place_Order.inputYear(inputan.year)
    
    Place_Order.clickPurchaseBtn()
    Place_Order.validate_blank_cardnumber()
  })
})