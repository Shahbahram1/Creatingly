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

export function performDrag() {
    cy.get('#app-overlay.ontop')
        .then(($element) => {
            // Create a canvas inside the element
            const canvas = document.createElement('canvas');
            canvas.width = $element.width();
            canvas.height = $element.height();
            $element.append(canvas);

            const context = canvas.getContext('2d');

            // Set rectangle properties
            // context.fillStyle = '#FF0000'; // Red color
            context.fillRect(100, 200, 1200, 700); // Draw the rectangle
        });
}


