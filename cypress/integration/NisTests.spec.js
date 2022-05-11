/// <reference types ="Cypress" />

describe('Testing Nischays App', ()=>{

    it('Verify the name in h1 tag',()=>{

        cy.visit('https://nischay.azurewebsites.net/webapp/')
        cy.get('body h1').should('have.text',' Nischay ')
        cy.get('body h2').should('have.text',' Buy me a coffee and get your name featured above! ')
    })
})