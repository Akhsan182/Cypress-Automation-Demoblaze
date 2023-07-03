class placeorderPage{
    loginBtn1 = '#login2'
    username = '#loginusername'
    password = '#loginpassword'
    loginBtn2 = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    alert = '#nameofuser'
    item1 = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    cartBtn = '.col-sm-12 > .btn'
    cartMenu = '#cartur'
    placeorderBtn = '.col-lg-1 > .btn'

    //Data diri
    nameorder = '#name'
    country = '#country'
    city = '#city'
    card = '#card'
    month = '#month'
    year = '#year'

    //Tombol Place Order
    purchaseBtn = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    purchaseMsg = '.sweet-alert'
    confirmBtn = '.confirm'

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

    clickPlaceOrderButton(){
        cy.get(this.placeorderBtn).click()
    }

    inputNameOrder(ordername){
        cy.get(this.nameorder).type(ordername)
    }

    inputCountry(countryInput){
        cy.get(this.country).type(countryInput)
    }

    inputCity(cityInput){
        cy.get(this.city).type(cityInput)
    }

    inputCard(cardInput){
        cy.get(this.card).type(cardInput)
    }

    inputMonth(monthInput){
        cy.get(this.month).type(monthInput)
    }

    inputYear(yearInput){
        cy.get(this.year).type(yearInput)
    }

    clickPurchaseBtn(){
        cy.get(this.purchaseBtn).click()
    }

    purchase_message(){
        cy.get(this.purchaseMsg).should('contain.text', 'Thank you for your purchase!')
    }

    clickOK(){
        cy.get(this.confirmBtn).click()
    }

    validate_blank_name() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_blank_cardnumber() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }
}

export default placeorderPage