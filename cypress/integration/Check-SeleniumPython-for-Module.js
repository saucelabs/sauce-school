describe('Check Selenium Python Course for Module', function () {
  it('Visits SeleniumJS checks for Module Cards', function (){
    cy.visit(`http://127.0.0.1:8080/seleniumpython/`)

    cy.get('#cards').contains('a').should('have.class', 'codelab-card')
    cy.get('.codelab-card').first().should('contain','Module')
    })
})
