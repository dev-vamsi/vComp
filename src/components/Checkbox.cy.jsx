import Checkbox from './Checkbox';

describe('<Checkbox /> component tests', () => {
    let checkboxLabel = 'My Checkbox';
    beforeEach(() => {
        cy.mount(<Checkbox>{checkboxLabel}</Checkbox>);
    });

    it('Rendered Button should be visible', () => {
        cy.get('.checkbox_container').should('be.visible');
        cy.get('label').contains(checkboxLabel).should('be.visible');
        cy.get('.checkbox_container > div').click();
    });
});
