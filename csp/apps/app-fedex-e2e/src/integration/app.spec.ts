// import { getAgastya } from '../support/app.po';
import { getGreeting } from '../support/app.po';

describe('app-fedex', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.wait(2000); // Required in order to pass the test due to the Agastya XHR request.
    getGreeting().contains('Register');
  });

  // it('should have Agastya accessibility plugin', () => {
  //   cy.wait(1000);
  //   getAgastya();
  // });

  it('should write first name', () => {
    cy.wait(1000);
    cy.get('input[name="formControlFirstName"]')
      .type('Daniel')
      .should('have.value', 'Daniel');
  });

  it('should write last name', () => {
    cy.wait(1000);
    cy.get('input[name="formControlLastName"]')
      .type('Danielecki')
      .should('have.value', 'Danielecki');
  });

  it('should write e-mail', () => {
    cy.wait(1000);
    cy.get('input[name="formControlEmail"]')
      .type('daniel.danielecki@foo.com')
      .should('have.value', 'daniel.danielecki@foo.com');
  });

  it('should write password', () => {
    cy.wait(1000);
    cy.get('input[name="formControlPassword"]')
      .type('Password')
      .should('have.value', 'Password');
  });

  it('should write password confirmation', () => {
    cy.wait(1000);
    cy.get('input[name="formControlConfirmPassword"]')
      .type('Password')
      .should('have.value', 'Password');
  });

  it('should fill form and click register button', () => {
    cy.wait(1000);
    cy.get('input[name="formControlFirstName"]')
      .type('Daniel')
      .should('have.value', 'Daniel');

    cy.get('input[name="formControlLastName"]')
      .type('Danielecki')
      .should('have.value', 'Danielecki');

    cy.get('input[name="formControlEmail"]')
      .type('daniel.danielecki@foo.com')
      .should('have.value', 'daniel.danielecki@foo.com');

    cy.get('input[name="formControlPassword"]')
      .type('Password')
      .should('have.value', 'Password');

    cy.get('input[name="formControlConfirmPassword"]')
      .type('Password')
      .should('have.value', 'Password');

    cy.get('button[name="formControlButton"]').click();
  });
});
