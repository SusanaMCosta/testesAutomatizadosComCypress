/// <reference types="cypress" />

describe('Helpers...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('wraps', () => { //pegra entendidade qualquer e deixar gerenciavel pelo cypress
        const obj = {nome: 'user', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro butão'))
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo butão'))
    })

    it.only('Its...', () => { //trabalha com propriedades
        const obj = {nome: 'user', idade: 20}
        cy.wrap(obj).should('have.property','nome','user')
        cy.wrap(obj).its('nome').should('be.equal','user')

        const objeto = {nome: 'user', idade: 20, endereco: {rua: 'dos bobos'}}  
        cy.wrap(objeto).its('endereco').should('have.property','rua')  
        cy.wrap(objeto).its('endereco').its('rua').should('contain','bobos') 

    })

    it.only('Invoke...', () => { //trabalha com funções
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({ fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({ fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

        cy.get('#formNome').invoke('val','Texto via invoke')
        cy.window().invoke('alert','dá pra ver?')
    })

     
})