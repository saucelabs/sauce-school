describe('Check Selenium JS Course for Module', function () {
  it('Visits SeleniumJS checks for Module Cards', function (){
    cy.visit('https://training.staging.saucelabs.net/SeleniumJS/')

    cy.get('#cards').contains('a').should('have.class', 'codelab-card')
    cy.get('.codelab-card').first().should('contain','Module')
    })
})
