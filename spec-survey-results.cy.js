describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href*="/results/1"]').click()
    cy.url().should('contains','/results/1')
    cy.get('.sa-table__entries > select:nth-child(2)').select(0)
    cy.get('.sa-table__global-filter').type('neutral')
    cy.wait(500)
    cy.get('.sa-table__global-filter').type('{enter}')
    cy.get('.sa-table__global-filter').clear()
    cy.wait(500)
    cy.get('#root > div > main > div > div > div.tabulator > div.tabulator-tableHolder > div > div > div:last-child').scrollIntoView({duration:1000},{easing: 'linear'})
  })
})
