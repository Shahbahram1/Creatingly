import {
    assertDevice,
    clickGrid,
    clickYesButton,
    createArtBoard,
    newDesignPopUpHeading,
    pageAssertions,
    performDrag,
    selectDimension
} from "../support/PageObjects/dashboardPage";
import "../support/PageObjects/commonFunctions";
import { interceptResposeCodeWait } from "../support/PageObjects/commonFunctions";

describe('Dashboard', () => {
    beforeEach(() => {
        cy.visit("https://shah.platform.creatingly.com/webstudio");
        cy.runRoutes('login')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it("Create Artboard and Drag and drop", () => {
        //Pop up of new design or existing design
        newDesignPopUpHeading();
        clickYesButton();

        // API Assertion => Verify API response
        interceptResposeCodeWait('@artBoard', 200);

        // Asserting elements on main page 
        pageAssertions();


        // Verify error > Without creating artboard

        createArtBoard();
        assertDevice();


        //Select Device (By Default it is selected mobile device)


        //Select Desktop device
        cy.get('i.fas.fa-desktop').should('be.visible').click()


        // Selecting artboard dimensions
        selectDimension();

        //Applying Grid
        clickGrid();

        // Static wait 
        cy.wait(1000);

        // Perform Drag and Drop again
        performDrag(0, 2);


    });

})