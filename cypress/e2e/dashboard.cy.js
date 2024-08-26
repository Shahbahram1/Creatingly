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
        //Perform Drag 
        performDrag();

    });

})