/// <reference types="Cypress" />

const locators = require('../../fixtures/locators.json');

context('Testing Lexplore website', () => {

    beforeEach('Visiting website', () => {
        cy.visit('/instructions?id=1');
    })

    it('Testing only next button', () => {
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=2');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=3');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=4');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=5');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/read');
    })

    it('Testing skip button on first instrucion page', () => {
        cy.get(locators.buttons).eq(0).click();
        cy.url().should('include','/read');
    })

    it('Testing skip button on 2nd instrucion page', () => {
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=2');
        cy.get(locators.buttons).eq(0).click();
        cy.url().should('include','/read');
    })

    it('Testing skip button on 3rd instrucion page', () => {
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=2');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=3');
        cy.get(locators.buttons).eq(0).click();
        cy.url().should('include','/read');

    })

    it('Testing skip button on 4th instrucion page', () => {
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=2');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=3');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=4');
        cy.get(locators.buttons).eq(0).click();
        cy.url().should('include','/read');

    })

    it('Testing skip button on last instrucion page', () => {
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=2');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=3');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=4');
        cy.get(locators.buttons).eq(1).click();
        cy.url().should('include', '/instructions?id=5');
        cy.get(locators.buttons).eq(0).click();
        cy.url().should('include','/read');
    })
    

})