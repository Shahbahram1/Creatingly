import {
  validateInvalidLoginWithoutEmail,
  validateInvalidLoginWithoutPassword,
  validateInvalidLoginWitWrongEmail,
  validateInvalidLoginWitWrongPassword,
  validateValidCredentialsLogin
} from "../support/PageObjects/loginPage";

describe('Login Page', () => {
  beforeEach(() => {
    // BaseURL is defined in cypress.config.js file
    cy.visit("/login");
  });

  assertLoginPageTitle();

  it("Verify login without email", () => {
    validateInvalidLoginWithoutEmail("Test@123");
  });

  it("Verify login without password", () => {
    validateInvalidLoginWithoutPassword("Test@123");
  });

  it("Verify login with wrong email ", () => {
    validateInvalidLoginWitWrongEmail("test.com")
  });

  it("Verify login with wrong password ", () => {
    validateInvalidLoginWitWrongPassword("test.com")
  });

  it("Verify, User is able to successfully login", () => {
    validateValidCredentialsLogin(
      Cypress.env("userId"),
      Cypress.env("password")
    );

  });

})