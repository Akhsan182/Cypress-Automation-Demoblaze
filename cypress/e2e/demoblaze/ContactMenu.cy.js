import contactPage from "../../pageObject/contactPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Contact Menu Scenario', () => {
  const Contact_Page = new contactPage()
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('https://demoblaze.com')
  })

  it('Contact Menu - Short Message', () => {
    Contact_Page.clickContactButton()
    Contact_Page.InputContactEmail(inputan.contact_email)
    Contact_Page.InputContactName(inputan.contact_name)
    Contact_Page.InputContactMessage(inputan.short_message)
    Contact_Page.SendButton()
    Contact_Page.validate_success_contact()
  })

  it('Contact Menu - Long Message', () => {
    Contact_Page.clickContactButton()
    Contact_Page.InputContactEmail(inputan.contact_email)
    Contact_Page.InputContactName(inputan.contact_name)
    Contact_Page.InputContactMessage(inputan.long_message)
    Contact_Page.SendButton()
    Contact_Page.validate_success_contact()
  })

  it('Contact Menu - Invalid Email', () => {
    Contact_Page.clickContactButton()
    Contact_Page.InputContactEmail(inputan.contact_email)
    Contact_Page.InputContactName(inputan.contact_name)
    Contact_Page.InputContactMessage(inputan.short_message)
    Contact_Page.SendButton()
    Contact_Page.validate_invalid_email()
  })

  it('Contact Menu - All blank field', () => {
    Contact_Page.clickContactButton()
    Contact_Page.SendButton()
    Contact_Page.validate_empty_all_field()
  })

  it('Contact Menu - Empty Contact Email Field', () => {
    Contact_Page.clickContactButton()
    Contact_Page.InputContactName(inputan.contact_name)
    Contact_Page.InputContactMessage(inputan.short_message)
    Contact_Page.SendButton()
    Contact_Page.validate_empty_email()
  })

  it('Contact Menu - Empty Contact Name Field', () => {
    Contact_Page.clickContactButton()        
    Contact_Page.InputContactEmail(inputan.contact_email)
    Contact_Page.InputContactMessage(inputan.short_message)
    Contact_Page.SendButton()
    Contact_Page.validate_empty_name()
  })

  it('Contact Menu - Empty Contact Message Field', () => {
    Contact_Page.clickContactButton()
    Contact_Page.InputContactEmail(inputan.contact_email)
    Contact_Page.InputContactName(inputan.contact_name)
    Contact_Page.SendButton()
    Contact_Page.validate_empty_message()
  })
})