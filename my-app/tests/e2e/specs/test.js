describe('My First Test', () => {
    it('Login', () => {
        cy.visit('/');
        cy.get('#confirm').click()
    })
})