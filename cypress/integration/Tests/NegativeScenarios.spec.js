/// <reference types="Cypress" />

import {email, skill, wrongEmail} from '../../fixtures/variables'

const locators = require('../../fixtures/locators.json');

describe('Testing Lexplore negative scenarios', () => {

    beforeEach('Visiting website', () => {
        cy.visit('/read');
    })

    it('Not filling any of fields', () => {
        cy.get(locators.buttons).should('be.disabled');    
    })

    it('Filling only one dropdown', () => {
        cy.get(locators.dropDown).eq(2).type(skill).then(() => {
            cy.get(locators.input).eq(2).type('{enter}');
        })
        cy.get(locators.buttons).should('be.disabled');
    })

    it('Filling only email filed', () => {
        cy.get(locators.email).type(email);
        cy.get(locators.buttons).should('not.be.disabled');
    })

    it('Filling in email with no caracters', () => {
        cy.get(locators.email).type(wrongEmail.spaceEmail).then(() => {
            cy.get(locators.buttons).should('be.disabled');
            cy.get(locators.email).clear();
        })
        cy.get(locators.email).type(wrongEmail.noDotEmail).then(() => {
            cy.get(locators.buttons).should('be.disabled');
            cy.get(locators.email).clear();
        })
        cy.get(locators.email).type(wrongEmail.noMonkeyEmail).then(() => {
            cy.get(locators.buttons).should('be.disabled');
            cy.get(locators.email).clear();
        })
        cy.get(locators.email).type(wrongEmail.withDotEmail).then(() => {
            cy.get(locators.buttons).should('be.disabled');
            cy.get(locators.email).clear();
        })
    })
})