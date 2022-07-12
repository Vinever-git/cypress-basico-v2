Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

    const nome = 'viniicus'
    const sobrenome = 'yuri'
    const email = 'yuribarbosa@hotmail.com'
    const longText = 'muito bom'

    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(longText)
    cy.get('.button').click()
})