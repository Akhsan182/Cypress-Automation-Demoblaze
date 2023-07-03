import { times } from "lodash"
import contactPage from "../../pageObject/contactPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Contact Menu Scenario', () => {
  const Contact_Page = new contactPage()
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('https://demoblaze.com')
  })

  it('Contact Menu - Success', () => {
    Contact_Page.clickLogin1()
    Contact_Page.inputUsername(inputan.valid_user)
    Contact_Page.inputPassword(inputan.valid_pass)
    Contact_Page.clickLogin2()
    Contact_Page.validate()
    
    Contact_Page.clickContactButton()
    Contact_Page.addReceiptEmail(inputan.inputReceiptEmail)
    Contact_Page.addReceiptName(inputan.inputReceiptName)
    Contact_Page.addMessage(inputan.inputMessage)
    Contact_Page.SendButton()
  })

  it('Contact Menu - Blank all field', () => {
    Contact_Page.clickLogin1()
    Contact_Page.inputUsername(inputan.valid_user)
    Contact_Page.inputPassword(inputan.valid_pass)
    Contact_Page.clickLogin2()
    Contact_Page.validate()

    Contact_Page.clickContactButton()
    Contact_Page.SendButton()
  })

  it('Contact Menu - Blank Receipt Email', () => {
    Contact_Page.clickLogin1()
    Contact_Page.inputUsername(inputan.valid_user)
    Contact_Page.inputPassword(inputan.valid_pass)
    Contact_Page.clickLogin2()
    Contact_Page.validate()

    Contact_Page.clickContactButton()
    Contact_Page.addReceiptName(inputan.inputReceiptName)
    Contact_Page.addMessage(inputan.inputMessage)
    Contact_Page.SendButton()
  })

  it('Contact Menu - Blank Receipt Name', () => {
    Contact_Page.clickLogin1()
    Contact_Page.inputUsername(inputan.valid_user)
    Contact_Page.inputPassword(inputan.valid_pass)
    Contact_Page.clickLogin2()
    Contact_Page.validate()

    Contact_Page.clickContactButton()
    Contact_Page.addReceiptEmail(inputan.inputReceiptEmail)
    Contact_Page.addMessage(inputan.inputMessage)
    Contact_Page.SendButton()
  })

  it('Contact Menu - Blank Receipt Message', () => {
    Contact_Page.clickLogin1()
    Contact_Page.inputUsername(inputan.valid_user)
    Contact_Page.inputPassword(inputan.valid_pass)
    Contact_Page.clickLogin2()
    Contact_Page.validate()

    Contact_Page.clickContactButton()
    Contact_Page.addReceiptEmail(inputan.inputReceiptEmail)
    Contact_Page.addReceiptName(inputan.inputReceiptName)
    Contact_Page.SendButton()
  })
})