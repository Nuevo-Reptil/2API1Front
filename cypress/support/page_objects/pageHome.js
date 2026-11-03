class pageHome {

    validateBookVisible(){
        cy.get('app-book-card').contains('Harry Potter and the Chamber of Secrets').should('be.visible')
    }

    clickAddToCartButton(){
        cy.get('button').contains('Add to Cart').click()
    }

    verifyBookAddedToCart(cant) {
        cy.get('#mat-badge-content-0').contains(cant).should('be.visible')
    }

    validateCategoryVisibleInCart(){
        cy.get('app-book-filter').contains(' All Categories ').should('be.visible')
        cy.get('.mdc-list-item__content').contains('Tech').should('be.visible')
    }

    clickCategoryTech(){
        cy.get('.mdc-list-item__content').contains('Tech').click()
    }

    verifyCategoryTechVisible(){
        cy.get('app-book-card').should('be.visible');
    }

    clickAddToFavorites(){
        cy.get('app-addtowishlist').contains('favorite').click()
    }

    validateBookAddedToFavorites(){
        cy.get('.mat-mdc-snack-bar-container', {timeout: 10000}).contains('Added to Wishlist!!!').should('be.visible')
        cy.get('.mat-badge-content').contains('1').should('be.visible')
    }

    clickFavoritesButton(){
        cy.get('button').contains('favorite').click()
    }
    
} module.exports = new pageHome();