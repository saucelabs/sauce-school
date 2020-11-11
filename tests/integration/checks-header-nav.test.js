describe('Checking Header Navigation Menu - Solutions', function(){
  it('Gets nav item by class and asserts it contains Solutions', function(){
    cy.visit('https://training.staging.saucelabs.net/')
    cy.get('navigation-element').invoke('show')
    cy.get('.header__primary-nav').invoke('show')
    cy.get('li').first().invoke('show')
    cy.get('a').contains('Solutions')
    // cy.pause()
    // cy.get('li').first().contains('a[onmouseover="showSolutionsSubnav()"]')
    // cy.get('li').first().trigger('mouseover')
    // cy.get('li').first().contains('a[onmouseover="showSolutionsSubnav()"]')
  })
})
