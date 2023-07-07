import loginPage from "../../pageObject/loginPage"
import navbar from "../../pageObject/navbar"
const inputan = require('../../fixtures/demoblaze/data.json')

describe('Login Scenario', () => {
  const Login_Page = new loginPage()
  const Navbar_Menu = new navbar()
  beforeEach(() => {
    cy.wait(500)
    cy.visit('https://demoblaze.com')
  })

  it('Access Home Page without Login', () => {
    Navbar_Menu.clickHomeMenu()
    Navbar_Menu.validate_home_menu()
  })

  it('Access Contact Page without Login', () => {
    Navbar_Menu.clickContactMenu()
    Navbar_Menu.validate_contact_menu()
  })

  it('Access About us Page without Login', () => {
    Navbar_Menu.clickAboutMenu()
    Navbar_Menu.validate_about_menu()
  })

  it('Access Cart Page without Login', () => {
    Navbar_Menu.clickCartMenu()
    Navbar_Menu.validate_cart_menu()
  })
  
  it('Access Home Page with Login', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_success()
    Navbar_Menu.clickHomeMenu()
    Navbar_Menu.validate_home_menu()
  })

  it('Access Contact Page with Login', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_success()
    Navbar_Menu.clickContactMenu()
    Navbar_Menu.validate_contact_menu()
  })

  it('Access About us Page with Login', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_success()
    Navbar_Menu.clickAboutMenu()
    Navbar_Menu.validate_about_menu()
  })

  it('Access Cart Page with Login', () => {
    Login_Page.clickLogin1()
    Login_Page.inputUsername(inputan.valid_user)
    Login_Page.inputPassword(inputan.valid_pass)
    Login_Page.clickLogin2()
    Login_Page.wait()
    Login_Page.validate_success()
    Navbar_Menu.clickCartMenu()
    Navbar_Menu.validate_cart_menu()
  })
})