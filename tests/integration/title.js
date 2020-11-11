describe(`Testing ${Cypress.env('HOST_IP')}`, () => {
	it('.title() - Checking page title', () => {
		cy.log(`Url: http://${Cypress.env('HOST_IP')}:8000`)
		cy.visit(`http://${Cypress.env('HOST_IP')}:8000`)
		cy.title().should('eq', 'Sauce School Training')
	})
})