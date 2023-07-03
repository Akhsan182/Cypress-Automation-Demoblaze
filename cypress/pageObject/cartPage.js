class cartPage{
    loginBtn1 = '#login2'
    username = '#loginusername'
    password = '#loginpassword'
    loginBtn2 = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'
    item1 = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    cartBtn = '.col-sm-12 > .btn'
    cartMenu = '#cartur'
    deleteBtn = '.success > :nth-child(4) > a'

    clickLogin1(){
        cy.get(this.loginBtn1).click()
    }
    
    inputUsername(user){
        cy.get(this.username, {delay: 0}).type(user) 
    }

    wait(){
        cy.wait(100)
    }
    
    inputPassword(passw){
        cy.get(this.password, {delay: 0}).type(passw)
    }

    clickLogin2(){
        cy.get(this.loginBtn2).click()
    }

    validate(){
        cy.get(this.alert).should('be.visible')
    }

    additem1(){
        cy.get(this.item1).click()
    }
    
    addtocartBtn(){
        cy.get(this.cartBtn).click()
    }

    cart_Menu(){
        cy.get(this.cartMenu).click()
    }

    url(){
        cy.url().should('eq','https://demoblaze.com/cart.html')
    }

    clickDelete(){
        cy.get(this.deleteBtn).click()
    }
}

export default cartPage