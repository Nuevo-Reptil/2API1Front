import user from '../fixtures/user.json'
import userFranco from '../fixtures/userFranco.json'
const pageLogin = require('../support/page_objects/pageLogin')
const pageHome = require('../support/page_objects/pageHome')
const pageCart = require('../support/page_objects/pageCart')
const pageCheckOut = require('../support/page_objects/pageCheckOut')
const pageOrders = require('../support/page_objects/pageOrders')
const pageFavorites = require('../support/page_objects/pageFavorites')
const componentNav = require('../support/page_objects/componentNav')
const url = require('../fixtures/url.json')


describe('Casos de prueba de FRONT', () => {
  //Titulo de pruebas
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {

    //Precondicion
    cy.deleteCartAPI(user.userId);

    //Acción paso 1: Logueo
    cy.visit(url.login)
    cy.login(user.username, user.password);
    //Respuesta del sistema paso 1: Login correcto
    cy.url().should('include', url.home)
    pageHome.validateBookVisible();

    //Acción paso 2: Se añade libro al carrito
    pageHome.clickAddToCartButton();
    //Respuesta del sistema paso 2: Verificación de que el libro se añadió al carrito
    pageHome.verifyBookAddedToCart('1');

    //Acción paso 3: Se visualiza el carrito
    pageCart.clickCartButton();
    //Respuesta del sistema paso 3: Verificación de que el libro se visualiza en el carrito 
    pageCart.validateBookVisibleInCart();

    //Acción paso 4: Se realiza el checkout del carrito
    pageCart.clickCheckoutButton();
    //Respuesta del sistema paso 4: Visualización de formulario de orden de compra
    cy.url().should('include', url.checkout)
    pageCheckOut.validateCheckoutVisible();

    //Acción paso 5: Se completan los datos de la orden de compra
    cy.completeFormulario('Pepito', 'Calle 123', 'Gato 456', '123456', 'Boedo')

    //Acción paso 6: Se solicita el pedido
    pageCheckOut.placeOrder();
    //Respuesta del sistema paso 6: Visualización de ordenes
    pageOrders.validateOrdersVisible();

    //Acción paso 7: Se visualiza la orden de compra #1
    pageOrders.visualizeOrder('1');
    //Respuesta del sistema paso 7: Verificación de que se visualiza la orden de compra #1
    pageOrders.visualizeOrderDetails1();
  })

  it('Añadir libro a Favoritos,  visualizar Favoritos y removerlo || Brian Rodriguez', () => {
    //Precondicion

    cy.deleteCartAPI(user.userId);

    //Acción paso 1: Logueo
    cy.visit(url.login)
    cy.login(user.username, user.password);

    //Respuesta del sistema paso 1: Login correcto
    cy.url().should('include', url.home)
    pageHome.validateCategoryVisibleInCart();

    //Acción paso 2: Se ingresa a categoria Tech
    pageHome.clickCategoryTech();

    //Respuesta del sistema paso 2: Verificación de que se visualiza la categoria Tech
    pageHome.verifyCategoryTechVisible();

    //Acción paso 3: Se añade libro a Favoritos
    pageHome.clickAddToFavorites();

    //Respuesta del sistema paso 3: Verificación de que se visualiza el libro en Favoritos
    pageHome.validateBookAddedToFavorites();

    //Acción paso 4: Se clickea Favoritos
    pageHome.clickFavoritesButton();

    //Respuesta del sistema paso 4: Verificación de que se visualiza la pagina de Favoritos
    pageFavorites.validateWishlistPage();

    //Acción paso 5: Se remueve el libro de Favoritos
    pageFavorites.clickClearWishlist();

    //Respuesta del sistema paso 5: Verificación de que se remueve el libro de Favoritos
    pageFavorites.validateEmptyWishlist();

    //it.only ejecutar solo ese caso de prueba
    //it.skip no ejecuta ese caso de prueba
  })

  it('FE | Franco Donatiello | Intentar iniciar sesión con contraseña incorrecta', () => {

    // Precondición: ingresar a la pantalla de Login
    cy.visit(url.login);

    // Paso 1: ingresar nombre de usuario válido
    pageLogin.typeUsername(userFranco.username);

    // Paso 2: ingresar contraseña incorrecta
    pageLogin.typePassword(userFranco.password + 'incorrecta');

    // Paso 3: hacer clic en Login
    pageLogin.clickLoginButton();

    // Paso 4: verificar que permanezca en Login
    cy.url().should('include', url.login);

});
})