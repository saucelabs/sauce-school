describe('Check Selenium JS Course for Module', function () {
  it('Visits SeleniumJS checks for Module Cards', function (){
    cy.visit(`${Cypress.env('HOST_URL')}/SeleniumJS/`)

    cy.get('#cards').contains('a').should('have.class', 'codelab-card')
    cy.get('.codelab-card').first().should('contain', 'Module')
    })
})
