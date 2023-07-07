class navbar{

    homeButton = '.active > .nav-link'
    contactButton = ':nth-child(2) > .nav-link'
    aboutButton = ':nth-child(3) > .nav-link'
    cartButton = '#cartur'

    clickHomeMenu(){
        cy.get(this.homeButton).click()
    }

    clickContactMenu(){
        cy.get(this.contactButton).click()
    }

    clickAboutMenu(){
        cy.get(this.aboutButton).click()
    }

    clickCartMenu(){
        cy.get(this.cartButton).click()
    }

    validate_home_menu(){
        cy.url().should('eq', 'https://demoblaze.com/index.html')
    }

    validate_contact_menu(){
        cy.contains('New message')
    }

    validate_about_menu(){
        cy.contains('About us')
    }

    validate_cart_menu(){
        cy.url().should('eq','https://demoblaze.com/cart.html')
    }
}
   
export default navbar