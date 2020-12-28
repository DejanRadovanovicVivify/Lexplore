/// <reference types="Cypress" />

import {grade} from '../../fixtures/variables'
const locators = require('../../fixtures/locators.json');

describe('Testing child happy flow', () => {

    beforeEach('Visiting website', () => {
        cy.visit('/read');
    })

    it('Testing Child happy flow', () => {
        cy.get(locators.dropDown).eq(0).type(locators.child).then(() => {
            cy.get(locators.input).eq(0).type('{enter}')
        });
        cy.get(locators.dropDown).eq(1).type(grade).then(() => {
            cy.get(locators.input).eq(1).type('{enter}');
        })
        cy.get(locators.buttons).click();
        cy.url().should('include', `${locators.child}&grade=${grade}`);
        cy.contains(locators.page1);
        cy.get(locators.buttons).click();
        cy.contains(locators.page2);
        cy.get(locators.buttons).eq(1).click();
        cy.contains('Good job!');
        cy.get(locators.buttons).should('have.text', 'Restart').click();
        cy.url().should('include', '/read');
    })

    it('Testing Child happy flow with back button clicked', () => {
        cy.get(locators.dropDown).eq(0).type(locators.child).then(() => {
            cy.get(locators.input).eq(0).type('{enter}')
        });
        cy.get(locators.dropDown).eq(1).type(grade).then(() => {
            cy.get(locators.input).eq(1).type('{enter}');
        })
        cy.get(locators.buttons).click();
        cy.url().should('include', `${locators.child}&grade=${grade}`);
        cy.contains(locators.page1);
        cy.get(locators.buttons).click();
        cy.contains(locators.page2);
        cy.get(locators.buttons).eq(0).click();
        cy.contains(locators.page1);
        cy.get(locators.buttons).click();
        cy.contains(locators.page2);
        cy.get(locators.buttons).eq(1).click();
        cy.contains('Good job!');
        cy.get(locators.buttons).should('have.text', 'Restart').click();
        cy.url().should('include', '/read');
    })

})