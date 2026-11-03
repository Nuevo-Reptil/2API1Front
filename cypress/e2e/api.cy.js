import user from '../fixtures/user.json'
import userFranco from '../fixtures/userFranco.json'

describe('Casos de prueba de APIs', () => {

    it('API | Comprar carrito exitosamente', () => {
        cy.postCheckOutAPI(user.id, user.token).then((response) => {
            expect(response.status).to.eq(200)
        });
    })

    it('API | Error al comprar carrito sin token', () => {
        cy.postCheckOutAPIWithoutAuth(user.id, '').then((response) => {
            expect(response.status).to.eq(401)
        });
    })

    it('API | Añadir/Quitar de lista de favoritos correctamente | Brian Rodriguez ', () => {
        cy.toggleWishListAPI(user.id, user.token, 28).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('API | Error 401 al agregar o quitar favorito sin autenticación | Brian Rodriguez', () => {
        cy.toggleWishListAPIWithoutAuth(user.id,28).then((response) => {
            expect(response.status).to.eq(401)
        })
    })

    // Casos de prueba de Franco Donatiello

    it('API | Franco Donatiello | Eliminar carrito exitosamente', () => {
        cy.deleteCartAPI(userFranco.id, userFranco.token).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('API | Franco Donatiello | Error al eliminar carrito sin token', () => {
        cy.deleteShoppingCartAPIWithoutAuth(userFranco.id).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    
})