/// <reference types="Cypress" />

import { skill, email, grades, answer, numberOfWords, wordsToSelect, viewPort} from '../../fixtures/variables'

const locators = require('../../fixtures/locators.json');

viewPort.forEach(function(view) {
    grades.forEach(function(grade) {

        describe('Testing Grades', () => {
    
            beforeEach('Visiting website', () => {
                cy.visit('/read');
                cy.viewport(view);
            })
        
            it(`Testing grade ${grade}`, () => {
                cy.get(locators.dropDown).eq(0).type(locators.parent).then(() => {
                    cy.get(locators.input).eq(0).type('{enter}');
                })
                cy.get(locators.dropDown).eq(1).type(grade).then(() => {
                    cy.get(locators.input).eq(1).type('{enter}');
                })
                cy.get(locators.dropDown).eq(2).type(skill).then(() => {
                    cy.get(locators.input).eq(2).type('{enter}');
                })
                cy.get(locators.email).type(email);
                cy.get(locators.buttons).should('not.be.disabled').click();
                cy.url().should('include', `mode=${locators.parent}&grade=${grade}`);
                cy.contains(locators.page1, {timeout: 6000});
                cy.get(locators.buttons).eq(0).click().then(() => {
                    cy.randomWords(numberOfWords, wordsToSelect)
                })
                cy.get(locators.buttons).contains(locators.stop).should('not.be.disabled').click();
                cy.contains(locators.page2, {timeout: 6000});
                cy.get(locators.buttons).eq(0).click().then(() => {
                    cy.randomWords(numberOfWords, wordsToSelect)
                })
                cy.get(locators.buttons).contains(locators.stop).should('not.be.disabled').click();
                if (grade < 4) {
                    cy.answers1to3(answer);
                } else {
                    cy.answers4to8(answer);
                }
                cy.get(locators.buttons).should('have.text', 'Restart').click();
                cy.url().should('include', '/read');
            })
        })
    })
})

