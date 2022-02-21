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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*Cypress.Commands.add('generateFixture', () => {
    const faker = require('faker');
  
    cy.writeFile('cypress/fixtures/credentials.json', {
      'hits':Cypress._.times(20, () => {
        return {
          'existingUser':`${faker.lorem.existingUser(3)}`,
          'newUser':`${faker.internet.newUser()}`,
          'num_comments':`${faker.datatype.number()}`,
          'points':`${faker.datatype.number()}`,
          'wrongPassword':`${faker.datatype.wrongPassword()}`,
        }
      })
    })
  })
  */