import url from '../../fixtures/url.json'

class pageOrders {

    validateOrdersVisible(){
        cy.url().should('include', url.orders)    
    }
    
    visualizeOrder(cant){
        cy.get('.mdc-button__label').contains(cant).should('be.visible').click();
    }

    visualizeOrderDetails1(){
        cy.get('.mat-mdc-row').should('be.visible')
    }
} module.exports = new pageOrders();