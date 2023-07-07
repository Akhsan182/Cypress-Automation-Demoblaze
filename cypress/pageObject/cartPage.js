class cartPage{
    item1 = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
    cartBtn = '.col-sm-12 > .btn'
    cartMenu = '#cartur'
    deleteBtn = '#tbodyid > :nth-child(1) > :nth-child(4) > a'

    //Place Order Button
    PO_Btn = '.col-lg-1 > .btn'
    NameField = '#name'
    CountryField = '#country'
    CityField = '#city'
    CardField = '#card'
    MonthField = '#month'
    YearField = '#year'
    PurchaseButton = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    //Validasi Success Purchase
    ValidateSuccess = '.sweet-alert > h2'

    additem1(){
        cy.get(this.item1).click()
    }
    
    addtocartBtn(){
        cy.get(this.cartBtn).click()
    }

    validate_product_added() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })  
    }

    cart_Menu(){
        cy.get(this.cartMenu).click()
    }

    clickDelete(){
        cy.get(this.deleteBtn).click()
    }

    clickPOButton(){
        cy.get(this.PO_Btn).click()
    }

    InputNameField(name_order){
        cy.get(this.NameField).type(name_order)
    }

    InputCountryField(country_field){
        cy.get(this.CountryField).type(country_field)
    }

    InputCityField(city_field){
        cy.get(this.CityField).type(city_field)
    }

    InputCardField(card_field){
        cy.get(this.CardField).type(card_field)
    }

    InputMonthField(month_field){
        cy.get(this.MonthField).type(month_field)
    }

    InputYearField(year_field){
        cy.get(this.YearField).type(year_field)
    }

    ClickPurchaseButton(){
        cy.get(this.PurchaseButton).click()
    }

    validate_success(){
        cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    }

    validate_empty_name() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_empty_country() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_empty_city() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_empty_card() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_empty_month() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }

    validate_empty_year() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Name and Creditcard.')
        })  
    }
}

export default cartPage