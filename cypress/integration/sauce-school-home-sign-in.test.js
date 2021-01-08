describe('Click Sign in on Home Page', function () {
  it('Visits Sauce School Landing Click Sign In', function (){
    cy.visit(`http://127.0.0.1:8080/`)

    cy.get('a').contains('Sign In').click()

    cy.get('a[href="https://accounts.saucelabs.com/am/XUI/#login/"]').should('have.attr', 'target', '_blank')
  })
})
