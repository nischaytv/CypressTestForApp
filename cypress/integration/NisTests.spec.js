/// <reference types ="Cypress" />

describe('Testing Nischays App', ()=>{

    it('Verify the name in h1 tag',()=>{

        cy.visit('https://petstore.octoperf.com/')

        cy.get('a').click()
        cy.get('[name="searchProducts"]').click()
    })
})