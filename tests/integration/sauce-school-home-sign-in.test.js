describe('Click Sign in on Home Page', function () {
  it('Visits Sauce School Landing Click Sign In', function (){
    cy.visit(`${Cypress.env('HOST_URL')}`)

    cy.get('a').contains('Sign In').click()

    cy.get('a[href="https://accounts.saucelabs.com/am/XUI/#login/"]').should('have.attr', 'target', '_blank')
  })
})