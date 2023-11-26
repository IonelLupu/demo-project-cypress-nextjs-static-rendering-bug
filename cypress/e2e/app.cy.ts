describe(`some test context`, () => {
  it('home page', () => {
    cy.visit('/')
    cy.contains('Hello world')
  })
  it('hotel slug another', () => {
    cy.visit('/hotels/18923395/another')
    cy.contains('Hello world')
  })
  it('hotel another', () => {
    cy.visit('/hotels/another')
    cy.contains('Hello world')
  })
  it('hotel test another', () => {
    cy.visit('/test/another')
    cy.contains('Hello world')
  })
  it('hotel test slug another', () => {
    cy.visit('/test/random/another')
    cy.contains('Hello world')
  })
  it('hotel original', () => {
    cy.visit('/hotels/18923395/Hotel-Parador')
    cy.contains('Hello world')
  })
})

export {}
