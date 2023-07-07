class loginPage{
    loginBtn1 = '#login2'
    username = '#loginusername'
    password = '#loginpassword'
    loginBtn2 = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'

    clickLogin1(){
        cy.get(this.loginBtn1).click()
    }
    
    inputUsername(user){
        cy.get(this.username, {force: true, delay: 700}).type(user) 
    }

    wait(){
        cy.wait(500)
    }
    
    inputPassword(passw){
        cy.get(this.password, {force: true, delay: 700}).type(passw)
    }

    clickLogin2(){
        cy.get(this.loginBtn2).click()
    }

    validate_success(){
        cy.get(this.alert).should('be.visible')
    }

    validate_invalid_pass() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Wrong password.')
        })  
    }

    validate_empty_pass() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })  
    }

    validate_empty_user() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })  
    }

    validate_empty_user_pass() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })  
    }
}

export default loginPage