describe('Click on Selenium Java Course', function () {
  it('Visits Sauce School Landing Checks for Course Cards', function (){
    cy.visit('https://training.staging.saucelabs.net/')

    cy.contains('Selenium Java').click()

    cy.url()
      .should('include', '/SeleniumJava')
    })
})
