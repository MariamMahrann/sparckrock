
Cypress.Commands.add("login", (email, password) =>{
    cy.visit('/')
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#submit').click()
    cy.contains("a", "Log out").should("be.visible")
})