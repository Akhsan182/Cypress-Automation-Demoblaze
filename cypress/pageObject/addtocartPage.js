class addtocartPage{
    loginBtn1 = '#login2'
    username = '#loginusername'
    password = '#loginpassword'
    loginBtn2 = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'
    item1 = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    item2 = ':nth-child(2) > .card > .card-block > .card-title > .hrefch'
    addtocartBtn = '.col-sm-12 > .btn'

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

    additem2(){
        cy.get(this.item2).click()
    }

    clickaddtocartButton(){
       cy.get(this.addtocartBtn).click()
    }

    validate_success() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })  
    }
}

export default addtocartPage