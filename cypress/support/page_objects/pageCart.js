class pageCart {

    clickCartButton(){
        cy.get('.mdc-icon-button').contains('shopping_cart').click()    
    }
    
    validateBookVisibleInCart(){
        cy.get('.mdc-button__label').contains('CheckOut').should('be.visible')
    }
    
    clickCheckoutButton(){
        cy.get('.mdc-button__label').contains('CheckOut').click()
    }
} module.exports = new pageCart();