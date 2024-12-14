import Button from './Button';

describe('<Button /> component tests', () => {
    it('Button should render as expected', () => {
        cy.mount(<Button>Click Me</Button>);
    });
});
