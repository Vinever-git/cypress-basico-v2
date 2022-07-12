/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach(() => {
        cy.visit('./src/privacy.html')
    })

    it('verifica o título da página', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    })

    it('verifica se o h1 da pagina é visível', () => {
        cy.get('#title').should('be.visible')
    })
})