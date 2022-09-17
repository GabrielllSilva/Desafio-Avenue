/// <reference types="cypress" />

/* global Then, When, Given */

/// Success Scenario Add Product to Cart

When('choose and add 3 products to cart', () => {
    cy.contains('Mais Vendidos').click()
    cy.wait(5000)
        cy.contains('Com Controle Remoto por Voz com Alexa (inclui comandos de TV)').click()
            cy.get('#add-to-cart-button').click()
            cy.wait(5000)
                cy.get('.a-row > .a-checkbox > label > input').click()
                    cy.get('.abb-intl-add-selected').click()
                        cy.contains('Mais Vendidos').click()
                            cy.contains('(sem controles de TV)').click()
                                cy.get('#add-to-cart-button').click()
                                cy.wait(5000)
                                    cy.get('#abb-intl-pop-cta > .a-button-base').click()
                                    cy.wait(10000)
                                        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

})
Then('the Product values must be correct in the cart', () => {
    cy.wait(10000)
    cy.get('#sc-subtotal-label-activecart').should('have.text', '\n\n\n\n\n\n\n\n\nSubtotal  (3 itens):')
    cy.wait(6000)
    cy.get('#sc-subtotal-amount-activecart').should('have.text', ' R$ 696,60')
})