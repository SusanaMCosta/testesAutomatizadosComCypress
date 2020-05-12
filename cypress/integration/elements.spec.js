/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => { //uma unica vez antes do primeiro teste
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { //executa antes de cada um dos testes
        cy.reload()
    })

    it('Text', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')
        cy.get('.facilAchar').should('contain','Cuidado')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...') //o have.text é mais especifico, só funciona se todo o texto estiver completo
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload() //refresh na tela
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
    })

    it('Texts fields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value','Cypress Test') //have.value serve para verificar o conteudo de uma caixa de texto

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value','textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}') //backspace apaga um caracter
            .should('have.value','Teste123')
        
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100}) //delay para acompanhar e tbm em casos especificos no futuro
            .should('have.value','acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple:true}) //para multiplos checkbox
    })

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value','2graucomp')

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value','1graucomp')

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)
        
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
                const values = []
                $arr.each(function () {
                    values.push(this.innerHTML)
                })
                expect(values).to.include.members(["Superior", "Mestrado"])
        })

    })

    it.only('ComboMultiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao','Corrida','nada'])
        //cy.get('[data-testid=dataEsportes]').should('have.value',['natacao','Corrida','nada'])
        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql',['natacao','Corrida','nada'])
        
    })
})