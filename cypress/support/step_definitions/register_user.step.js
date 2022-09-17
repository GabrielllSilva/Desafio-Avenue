/// <reference types="cypress" />
const Faker = require('@faker-js/faker')

/* global Then, When, Given */

/// Success Scenario Register a new User

When('click for create my account', () => {
    cy.get('#nav-link-accountList > .nav-line-2').click()
        cy.get('#createAccountSubmit').click()         

})
Then('account must be create with success', () => {
    cy.get('#ap_customer_name').type(Faker.faker.name.fullName())
    cy.get('#ap_email').type(Faker.faker.internet.email())
    cy.get('#ap_password').type('teste_avenue@2022')
    cy.get('#ap_password_check').type('teste_avenue@2022')
    // cy.get('#continue').click()
})