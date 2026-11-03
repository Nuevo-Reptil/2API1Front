class checkOut {

    validateCheckoutVisible(){
      cy.get('input[formcontrolname="name"]').should('be.visible')
    }

    placeOrder(){
        cy.get('.mdc-button__label').contains('Place Order').click()
    }

    
} module.exports = new checkOut();