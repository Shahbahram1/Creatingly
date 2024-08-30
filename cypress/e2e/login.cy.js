import {
  assertLoginPageTitle,
  loginButton,
  validateInvalidLoginWithoutEmail,
  validateInvalidLoginWithoutPassword,
  validateInvalidLoginWitWrongEmail,
  validateInvalidLoginWitWrongPassword,
  validateValidCredentialsLogin
} from "../support/PageObjects/loginPage";
describe('Login Page', () => {
  beforeEach(() => {
    cy.visit("https://dev.platform.creatingly.com/webstudio");
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    // assertLoginPageTitle();
    loginButton();
  });


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