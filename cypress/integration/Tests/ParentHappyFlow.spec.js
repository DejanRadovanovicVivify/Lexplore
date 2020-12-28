/// <reference types="Cypress" />

import { grade, skill, email, numberOfWords, wordsToSelect} from '../../fixtures/variables'

const locators = require('../../fixtures/locators.json');

describe('Testing Parent happy flow', () => {

    beforeEach('Visiting website', () => {
        cy.visit('/read');
    })

    it('Testing Parent happy flow', () => {
        cy.get(locators.dropDown).eq(0).type(locators.parent).then(() => {
            cy.get(locators.input).eq(0).type('{enter}');
        });
        cy.get(locators.dropDown).eq(1).type(grade).then(() => {
            cy.get(locators.input).eq(1).type('{enter}');
        })
        cy.get(locators.dropDown).eq(2).type(skill).then(() => {
            cy.get(locators.input).eq(2).type('{enter}');
        })
        cy.get(locators.email).type(email);
        cy.get(locators.buttons).should('not.be.disabled').click();
        cy.url().should('include', `mode=${locators.parent}&grade=${grade}`);
        cy.contains(locators.page1);
        cy.get(locators.buttons).eq(0).click().then(() => {
            switch (grade) {
                case 1:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 2:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 3:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 4:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 5:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 6:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 7:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 8:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
            };
            });
        cy.get(locators.buttons).contains(locators.stop).should('not.be.disabled').click();
        cy.contains(locators.page2);
        cy.get(locators.buttons).eq(0).click().then(() => {
            switch(grade) {
                case 1:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 2:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 3:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 4:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 5:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 6:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 7:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
                case 8:
                    cy.randomWords(numberOfWords, wordsToSelect);
                    break;
            }
        });
        cy.get(locators.buttons).contains(locators.stop).should('not.be.disabled').click();
        if (grade < 4) {
            cy.answers1to3(answer);
        } else {
            cy.answers4to8();
        }
        cy.get(locators.buttons).should('have.text', 'Restart').click();
        cy.url().should('include', '/read');
    })
})