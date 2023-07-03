import loginPage from "../../pageObject/loginPage"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Login Scenario', () => {
  const Login_Page = new loginPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })

  it('Login - Success', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_success()
  })

  it('Login - Invalid Password', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.invalid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_invalid_pass()
  })

  it('Login - Empty Password', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.clickLogin2()
    Login_Page.validate_empty_pass()
  })

  it('Login - Empty Username', () => {
    Login_Page.clickLogin1()
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.validate_empty_user_pass()
  })

  it('Login - Empty Username & Password', () => {
    Login_Page.clickLogin1()
    Login_Page.clickLogin2()
    Login_Page.validate_empty_user_pass()
  })
})