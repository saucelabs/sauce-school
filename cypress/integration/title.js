describe(`Testing ${Cypress.env('HOST_URL')}`, () => {
	it('.title() - Checking page title', () => {
		cy.log(`Url: http://127.0.0.1:8080/`)
		cy.visit(`http://127.0.0.1:8080/`)
		cy.title().should('eq', 'Sauce School Training | Sauce Labs')
	})
})