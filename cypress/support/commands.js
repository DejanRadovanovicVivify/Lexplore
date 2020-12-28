// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('randomWords', (numberOfWords, wordsToSelect) => {
    const locators = require('../fixtures/locators.json');

    cy.get(locators.buttons).then(($btns) => {
        numberOfWords = $btns.length;
    }).then(() => {
        for(let i = 0; i <= wordsToSelect; i++) {
            let reading = Math.floor(Math.random() * (numberOfWords - 2)) + 1;
            cy.get(locators.buttons).eq(reading).click();
        }
    })

})


Cypress.Commands.add('answers1to3', (answer) => {
    const locators = require('../fixtures/locators.json');
    
    cy.get(locators.dropDown).eq(0).type(answer).then(() => {
        cy.get(locators.input).eq(0).type('{enter}');
    })
    cy.get(locators.dropDown).eq(1).type(answer).then(() => {
        cy.get(locators.input).eq(1).type('{enter}');
    })
    cy.get(locators.dropDown).eq(2).type(answer).then(() => {
        cy.get(locators.input).eq(2).type('{enter}');
    })
    cy.get(locators.buttons).should('not.be.disabled').click();
})

Cypress.Commands.add('answers4to8', (answer) => {
    const locators = require('../fixtures/locators.json');
    
    cy.get(locators.dropDown).eq(0).type(answer).then(() => {
        cy.get(locators.input).eq(0).type('{enter}');
    })
    cy.get(locators.dropDown).eq(1).type(answer).then(() => {
        cy.get(locators.input).eq(1).type('{enter}');
    })
    cy.get(locators.dropDown).eq(2).type(answer).then(() => {
        cy.get(locators.input).eq(2).type('{enter}');
    })
    cy.get(locators.dropDown).eq(3).type(answer).then(() => {
        cy.get(locators.input).eq(3).type('{enter}');
    })
    cy.get(locators.buttons).should('not.be.disabled').click();
})
