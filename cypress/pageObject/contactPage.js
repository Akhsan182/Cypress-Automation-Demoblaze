class contactPage{
    loginBtn1 = '#login2'
    username = '#loginusername'
    password = '#loginpassword'
    loginBtn2 = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'
    contactBtn = ':nth-child(2) > .nav-link'

    receiptEmail = '#recipient-email'
    receiptName = '#recipient-name'
    msgg = '#message-text'
    sendBtn = '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

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

    clickContactButton(){
        cy.get(this.contactBtn).click()
    }

    addReceiptEmail(inputReceiptEmail){
        cy.get(this.receiptEmail, {delay: 0}).type(inputReceiptEmail)
    }

    addReceiptName(inputReceiptName){
        cy.get(this.receiptName, {delay: 0}).type(inputReceiptName)
    }

    addMessage(inputMessage){
        cy.get(this.msgg, {delay: 0}).type(inputMessage)
    }

    SendButton(){
        cy.get(this.sendBtn).click()
    }
}

export default contactPage