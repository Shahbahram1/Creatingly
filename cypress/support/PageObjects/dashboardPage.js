// In Future
export function newDesignPopUpHeading() {
    cy.get('div.notiflix-confirm-head').contains('New Design');
}

export function clickYesButton() {
    cy.get('a[id="NXConfirmButtonOk"]').contains('Yes').click();
}

export function pageAssertions() {
    cy.get('input[id="sys-search"]').should('be.visible');
    cy.get('button.accordion.active.ng-star-inserted').contains('Desktop');
}

export function createArtBoard() {
    cy.get('li[id="draw-drawing-panel"]').should('be.visible').click();
}

export function assertDevice() {
    cy.get('h3[id="sys-form-modal-device_selector"]').contains('Devices');
}

export function selectDimension() {
    cy.get('img.home-card-img.ng-tns-c177-0').eq(0).should('be.visible').click();
}

export function clickGrid() {
    cy.get('li[id="grid-drawing-panel"]').should('be.visible').click();
}

export function performDrag(start, end) {
    cy.get('div.overlay_grid_cell.ng-star-inserted').eq(start)  // Select the cell you want to drag
        .trigger('mousedown', { which: 1 });  // Simulate the mouse down event

    cy.get('div.overlay_grid_cell.ng-star-inserted').eq(end)  // Select the target cell or row where you want to drop
        .trigger('mousemove')  // Simulate mouse move event to start dragging
        .trigger('mouseup', { force: true });
}


