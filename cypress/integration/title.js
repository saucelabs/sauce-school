describe(`Testing ${Cypress.env('HOST_URL')}`, () => {
	it(`.title() - Checking page title - ${Cypress.env('HOST_URL')}`, () => {
		cy.log(`Url: ${Cypress.env('HOST_URL')}`)
		cy.visit(`${Cypress.env('HOST_URL')}`)
		cy.title().should('eq', 'Sauce School Training | Sauce Labs')
	})
})