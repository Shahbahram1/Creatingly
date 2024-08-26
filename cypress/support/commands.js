

Cypress.Commands.add("runRoutes", (category) => {
    if (category == "login") {
        cy.intercept("GET", "https://cognito-idp.us-east-1.amazonaws.com/").as("login");
        cy.intercept("POST", "https://va.tawk.to/log-performance/v3").as("artBoard");
    }
});