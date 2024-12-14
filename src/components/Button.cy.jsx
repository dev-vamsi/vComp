import Button from './Button';

describe('<Button /> component tests', () => {
    let buttonText = 'My Button';
    beforeEach(() => {
        cy.mount(<Button>{buttonText}</Button>);
    });

    it('Rendered Button should be visible', () => {
        cy.get('button').should('be.visible').should('have.text', buttonText);
        cy.get('button').click();
    });
});
