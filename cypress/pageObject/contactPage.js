class contactPage{
    contactBtn = ':nth-child(2) > .nav-link'

    ContactEmail = '#recipient-email'
    ContactName = '#recipient-name'
    ContactMessage = '#message-text'
    sendBtn = '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    clickContactButton(){
        cy.get(this.contactBtn).click()
    }

    InputContactEmail(contact_email){
        cy.get(this.ContactEmail, {delay: 0}).type(contact_email)
    }

    InputContactName(contact_name){
        cy.get(this.ContactName, {delay: 0}).type(contact_name)
    }

    InputContactMessage(contact_message){
        cy.get(this.ContactMessage, {delay: 0}).type(contact_message)
    }

    SendButton(){
        cy.get(this.sendBtn).click()
    }

    validate_success_contact() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Thanks for the message!!')
        })  
    }

    validate_invalid_email() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please input valid email.')
        })  
    }

    validate_empty_all_field() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Field cannot be empty. Please fill in with a valid data.')
        })  
    }

    validate_empty_email() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Contact email field cannot be empty.')
        })  
    }

    validate_empty_name() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Contact name field cannot be empty.')
        })  
    }

    validate_empty_message() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Message cannot be empty.')
        })  
    }
}

export default contactPage