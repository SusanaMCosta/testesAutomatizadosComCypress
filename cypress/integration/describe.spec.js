/// <reference types="cypress" />

it('A external teste...', () => {

})

//only é apenas aquele grupo/teste a ser executado, funciona apenas para o ultimo only
//skip é para pular um grupo/teste, funcionada X vezes

describe('Should group teste', () => {
    describe('Should group more specific tests ...', () => {
        it('A external teste...', () => {

        })
    })

    describe('Should group more specific tests ...', () => {
        it('A external teste...', () => {

        })
    })

    it('A external teste...', () => {

    })
})