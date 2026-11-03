class pageLogin {

    typeUsername(username){
    cy.get('input[formcontrolname="username"]').type(username)
    }
    
    typePassword(password){
    cy.get('input[formcontrolname="password"]').type(password)
    }

    clickLoginButton(){
    cy.get('app-login button').contains('Login').click()
    }
    
} module.exports = new pageLogin();