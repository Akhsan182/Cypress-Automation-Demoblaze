import logoutPage from "../../pageObject/logoutPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Logout Scenario', () => {
  const Logout_Page = new logoutPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Success Logout', () => {
    Logout_Page.clickLogin1()
    Logout_Page.inputUsername(inputan.valid_user)
    Logout_Page.inputPassword(inputan.valid_pass)
    Logout_Page.clickLogin2()
    Logout_Page.wait()
    Logout_Page.validate()
    Logout_Page.clickLogout() 
  })
})