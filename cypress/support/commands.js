

Cypress.Commands.add("runRoutes", (category) => {
    if (category == "login") {
        cy.intercept("GET", "https://cognito-idp.us-east-1.amazonaws.com/").as(
            "login",
        );
    }
});