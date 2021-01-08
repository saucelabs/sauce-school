describe('Click on Selenium Java Course', function () {
  it('Visits Sauce School Landing Checks for Course Cards', function (){
    cy.visit(`http://127.0.0.1:8080/`)

    cy.contains('Selenium Java').click()

    cy.url()
      .should('include', '/SeleniumJava')
    })
})
