import url from '../../fixtures/url.json'

class Favorites {

     validateWishlistPage() {
            cy.url().should('include', url.wishlist)
    }
    
    clickClearWishlist() {
        cy.get('button').contains('Clear Wishlist').click();
    }

    validateEmptyWishlist() {
        cy.get('.mat-mdc-snack-bar-container').contains('Wishlist cleared!!!').should('be.visible');
    }

} module.exports = new Favorites();