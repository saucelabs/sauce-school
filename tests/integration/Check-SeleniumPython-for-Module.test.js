describe('Check Selenium Python Course for Module', function () {
  it('Visits SeleniumJS checks for Module Cards', function (){
    cy.visit('https://training.staging.saucelabs.net/seleniumpython/')

    cy.get('#cards').contains('a').should('have.class', 'codelab-card')
    cy.get('.codelab-card').first().should('contain','Module')
    })
})
