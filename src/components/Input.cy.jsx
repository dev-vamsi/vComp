import Input from './Input';

describe('<Input /> component tests', () => {
    const props = {
        id: 'myInput',
        placeholder: 'Type something...',
    };
    beforeEach(() => {
        cy.mount(<Input {...props} />);
    });

    it('Rendered Input should work as expected', () => {
        const inputText = 'Hey! Input element';
        const getElem = () => cy.get(`#${props.id}`);
        getElem().should('be.visible');
        getElem().invoke('attr', 'placeholder').should('eq', props.placeholder);
        getElem().should('have.value', '');
        getElem().focus().type(inputText);
        getElem().should('have.value', inputText);
        getElem().clear();
        getElem().should('have.value', '');
    });
});
