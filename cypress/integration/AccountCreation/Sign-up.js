import {alert} from '../mutual/basepage.js';

const signUpElements = {
    signUpLink: () => cy.get('#signin2'),
    signUpModal: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-body'),
    modalTitle: () => cy.get('#signInModalLabel'),
    crossButton: () => cy.get('#logInModalLabel + button'),
    userInput: () => cy.get('#sign-username'),
    passwordInput: () => cy.get('#sign-password'),
    signUpButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
}

export const signUp = {
    clickOnSignUp () {signUpElements.signUpLink().click();},
    clickOnCrossButton () {signUpElements.crossButton().click({force:true});},
    clickOnSignUpButton () {signUpElements.signUpButton().click();},
    signUpModalShouldBeVisible () {signUpElements.signUpModal().should('be.visible');},
    signUpModalShoulNotBeVisible () {signUpElements.signUpModal().should('not.be.visible');},
    modalTitleShouldHaveText (text) {signUpElements.modalTitle().should('have.text', text)},
    typeUser (user) {signUpElements.userInput().invoke('val', user)},
    typePassword (password) {signUpElements.passwordInput().invoke('val', password);},
    signUpAlertShouldHaveText (text) {alert.textEqualsTo(text)},

}