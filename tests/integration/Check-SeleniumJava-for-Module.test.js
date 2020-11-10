describe('Check Selenium Java Course for Modules', function () {
  it('Visits SeleniumJS checks for Module Cards', function (){
    cy.visit('https://training.staging.saucelabs.net/SeleniumJava/')

    cy.get('#cards').contains('a').should('have.class', 'codelab-card')
    cy.get('.codelab-card').first().should('contain', 'Module')
    })
})
