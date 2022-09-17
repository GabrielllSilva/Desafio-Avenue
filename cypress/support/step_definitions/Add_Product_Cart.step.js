/// <reference types="cypress" />

/* global Then, When, Given */

/// Success Scenario Add Product to Cart

Given('user visit amazon web site', () => {
    cy.visit('https://www.amazon.com.br')
})
When('choose the perfect product and add to cart', () => {
    cy.contains('Mais Vendidos').click()
    cy.wait(5000)
        cy.contains('Com Controle Remoto por Voz com Alexa (inclui comandos de TV)').click()
            cy.get('#add-to-cart-button').click()
            cy.wait(5000)
                ///cy.get('.a-row > .a-checkbox > label > input').click()
                ///cy.wait(5000)
                cy.get('#abb-intl-pop-cta > .a-button-base').click()

})
Then('the Product may add to cart', () => {
    cy.get('.a-size-medium-plus').should('have.text', '\nAdicionado ao carrinho\n')
})