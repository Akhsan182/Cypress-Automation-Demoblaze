import signupPage from "../../pageObject/signupPage"
const inputan = require("../../fixtures/demoblaze/data.json")

describe('Sign Up Scenario', () => {
  const Signup_Page = new signupPage()
  beforeEach(() => {
    cy.visit('https://demoblaze.com')
  })
  it('Sign Up - Success', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputUsername(inputan.valid_signup_user)
    Signup_Page.inputPassword(inputan.valid_signup_pass)
    Signup_Page.clickSignup2()
    Signup_Page.validate_success()
  })

  it('Sign Up - User Already Exist', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputUsername(inputan.valid_signup_user)
    Signup_Page.inputPassword(inputan.valid_signup_pass)
    Signup_Page.clickSignup2()
    Signup_Page.validate_username_already_exist()
  })

  it('Sign Up - Empty Username & Password', () => {
    Signup_Page.clickSignup1()
    Signup_Page.clickSignup2()
    Signup_Page.validate_empty_user_pass()
  })

  it('Sign Up - Empty Password', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputUsername(inputan.valid_signup_user)
    Signup_Page.clickSignup2()
    Signup_Page.validate_empty_pass()
  })

  it('Sign Up - Empty Username', () => {
    Signup_Page.clickSignup1()
    Signup_Page.inputPassword(inputan.valid_signup_pass)
    Signup_Page.clickSignup2()
    Signup_Page.validate_empty_user()
  })
})