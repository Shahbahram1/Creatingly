export function interceptResposeCodeWait(api, responseCode) {
    return cy.wait(api).its("response.statusCode").should("eq", responseCode);
}