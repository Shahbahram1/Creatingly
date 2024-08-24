import { interceptResposeCodeWait } from "./commonFunctiona";

export function assertLoginPageTitle() {
  cy.title().should('eq', 'Login');
}

// Valid Login
export function validateValidCredentialsLogin(emailInput, passwordInput) {
  cy.get('input[id="email"]')
    .should("be.visible")
    .type(emailInput);

  cy.get('input.input100 ')
    .should('be.visible')
    .eq(1)
    .type(passwordInput);


  clickLoginButton();
  interceptResposeCodeWait('@login', 200)
}


// Invalid Login without Email
export function validateInvalidLoginWithoutEmail(passwordInput) {
  cy.get('input.input100')
    .should('be.visible')
    .eq(1)
    .type(passwordInput);

  clickLoginButton();
  emailFieldPopUp();
}


//Invalid Login without password
export function validateInvalidLoginWithoutPassword(emailInput) {
  cy.get('input[id="email"]')
    .should("be.visible")
    .type(emailInput);

  clickLoginButton();
  emailFieldPopUp();
}


//Login with Wrong Email
export function validateInvalidLoginWitWrongEmail(emailInput) {
  cy.get('input[id="email"]')
    .should("be.visible")
    .type(emailInput);

  clickLoginButton();
  emailFieldPopUp();
}

//Login with wrong password
export function validateInvalidLoginWitWrongPassword(passwordInput) {
  cy.get('input.input100')
    .should('be.visible')
    .eq(1)
    .type(passwordInput);

  clickLoginButton();
  passwordFieldPopUp();
}


export function emailFieldPopUp() {
  cy.get('div.wrap-input100.validate-input.m-b-23.alert-validate')
    .should("have.text", "Email is required and must be valid")
}

export function passwordFieldPopUp() {
  cy.get('div.error-label-input100 ')
    .should("have.text", "Invalid username or password")
}

export function clickLoginButton() {
  cy.get('input.login100-form-btn')
    .should("be.visible")
    .click();
}
