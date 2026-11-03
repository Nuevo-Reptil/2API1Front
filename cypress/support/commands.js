import user from '../fixtures/user.json'
import pageLogin from '../support/page_objects/pageLogin'

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username, password) => {
    pageLogin.typeUsername(username);
    pageLogin.typePassword(password);
    pageLogin.clickLoginButton();
})

Cypress.Commands.add('deleteCartAPI', (userId, token) => {
    return cy.request({
        method: 'DELETE',
        url: `https://app.bookdb.online/api/shoppingcart/${userId}`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response;
    });
});

Cypress.Commands.add('completeFormulario', (name, addressLine1, addressLine2, pincode, state) => {
    cy.get('input[formcontrolname="name"]').type(name);
    cy.get('input[formcontrolname="addressLine1"]').type(addressLine1);
    cy.get('input[formcontrolname="addressLine2"]').type(addressLine2);
    cy.get('input[formcontrolname="pincode"]').type(pincode);
    cy.get('input[formcontrolname="state"]').type(state);
})

Cypress.Commands.add('postCheckOutAPI', (userId, token) => {
    return cy.request({
        method: 'POST',
        url: `https://app.bookdb.online/api/CheckOut/${userId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: {
            orderDetails: [
                {
                    book: {
                        bookId: 2,
                        title: 'Harry Potter and the Chamber of Secrets',
                        author: 'JKR',
                        category: 'Mystery',
                        price: 236,
                        coverFileName: 'c63ade52-3f90-41fa-980a-1136b6ad2128HP3.jpg'
                    },
                    quantity: 1
                }
            ],
            cartTotal: 236
        }
    });
});


Cypress.Commands.add('postCheckOutAPIWithoutAuth', (userId, token) => {
    return cy.request({
        method: 'POST',
        url: `https://app.bookdb.online/api/CheckOut/${userId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: '',
        },
        body: {
            orderDetails: [
                {
                    book: {
                        bookId: 2,
                        title: 'Harry Potter and the Chamber of Secrets',
                        author: 'JKR',
                        category: 'Romance',
                        price: 236,
                        coverFileName: '9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg'
                    },
                    quantity: 1
                }
            ],
            cartTotal: 236
        }
    });
});

Cypress.Commands.add('toggleWishListAPI', (userId, token, bookId) => {
    return cy.request({
        method: 'POST',
        url: `https://app.bookdb.online/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: {
            orderDetails: [
                {
                    book: {
                        bookId: bookId,
                        title: 'Curuk ve Harabe',
                        author: 'Jonathan',
                        category: 'Fiction',
                        price: 1211,
                        coverFileName: 'cbf832c1-cd01-47b3-93fa-62995a7dca1118799023.jpg'
                    },
                    quantity: 1
                }
            ],
        }
    });
});

Cypress.Commands.add('toggleWishListAPIWithoutAuth', (userId, bookId) => {
    return cy.request({
        method: 'POST',
        url: `https://app.bookdb.online/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: '',
        },
        body: {
            orderDetails: [
                {
                    book: {
                        bookId: bookId,
                        title: 'Curuk ve Harabe',
                        author: 'Jonathan',
                        category: 'Fiction',
                        price: 1211,
                        coverFileName: 'cbf832c1-cd01-47b3-93fa-62995a7dca1118799023.jpg'
                    },
                    quantity: 1
                }
            ],
        }
    });
});

// Eliminar carrito sin autenticación
Cypress.Commands.add('deleteShoppingCartAPIWithoutAuth', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `https://app.bookdb.online/api/shoppingcart/${userId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        }
    });
});