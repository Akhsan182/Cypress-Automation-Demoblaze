class signupPage{
    signupBtn1 = '#signin2'
    username = '#sign-username'
    password = '#sign-password'
    signupBtn2 = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'

    clickSignup1(){
        cy.get(this.signupBtn1).click()
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

    clickSignup2(){
        cy.get(this.signupBtn2).click()
    }

    validate_success(){
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful')
        })  
    }

    validate_username_already_exist() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.')
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

export default signupPage