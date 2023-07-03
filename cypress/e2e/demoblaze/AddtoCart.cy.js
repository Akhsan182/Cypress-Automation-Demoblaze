import addtocartPage from "../../pageObject/addtocartPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Add to Cart Scenario', () => {
  const AddtoCart_Page = new addtocartPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Add to Cart 1 Item', () => {
    AddtoCart_Page.clickLogin1()
    AddtoCart_Page.inputUsername(inputan.valid_user)
    AddtoCart_Page.inputPassword(inputan.valid_pass)
    AddtoCart_Page.clickLogin2()
    AddtoCart_Page.validate()
    AddtoCart_Page.additem1()
    AddtoCart_Page.clickaddtocartButton()
    AddtoCart_Page.validate_success()
  })

})