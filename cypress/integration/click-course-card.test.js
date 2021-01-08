describe('Click on Selenium Java Course', function () {
  it('Visits Sauce School Landing Checks for Course Cards', function (){
    cy.visit(`${Cypress.env('HOST_URL')}`)

    cy.contains('Selenium Java').click()

    cy.url()
      .should('include', '/SeleniumJava')
    })
})