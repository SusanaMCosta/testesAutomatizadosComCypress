/// <reference types="cypress" />

describe('Entendendo a espera do cypress', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Sincronia', () => {
        cy.get('#buttonDelay')
    })
})
