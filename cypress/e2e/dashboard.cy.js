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
        newDesignPopUpHeading();
        clickYesButton();
        // API Assertion => Verify API response
        interceptResposeCodeWait('@artBoard', 200);
        // Assert elements on the page 
        pageAssertions();
        createArtBoard();
        assertDevice();
        selectDimension();
        clickGrid();
        // Waitng to visualize clearly
        cy.wait(1000);
        //Perform Drag 
        performDrag(0, 1);

        //Perform Drag 
        performDrag(0, 2);

        //Perform Drag 
        performDrag(1, 3);


    });

})