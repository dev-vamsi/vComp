import AlertProvider from './AlertProvider';
import AlertContainer from './AlertContainer';
import useAlert from '../../hooks/useAlert';
import Button from '../Button';

describe('<AlertProvider /> & <AlertContainer /> component tests', () => {
    const ParentComponent = (props) => {
        const { message, shouldAutoClose = true } = props;
        const { makeNewAlert } = useAlert();
        return (
            <div className='container mx-auto relative flex items-center justify-center h-[100vh] w-[95vw]'>
                <Button
                    className='bg-green-700'
                    onClick={() => {
                        makeNewAlert({
                            message,
                            shouldAutoClose,
                        });
                    }}
                >
                    Success
                </Button>
                <AlertContainer />
            </div>
        );
    };

    it('Success alert should work as expected', () => {
        const message = 'Preferences Updated successfully!';
        cy.mount(
            <AlertProvider>
                <ParentComponent message={message} durationInMS={1000} />
            </AlertProvider>
        );
        cy.get('button').click();
        cy.get('p').contains(message).should('be.visible');
        cy.wait(1000);
        cy.get(`p:contains(${message})`).should('not.exist');
    });

    it('Success alert should not close', () => {
        const message = 'Preferences Updated successfully!';
        cy.mount(
            <AlertProvider>
                <ParentComponent
                    message={message}
                    shouldAutoClose={false}
                    durationInMS={1000}
                />
            </AlertProvider>
        );
        cy.get('button').click();
        cy.get('p').contains(message).should('be.visible');
        cy.wait(1000);
        cy.get(`p:contains(${message})`).should('be.visible');
        cy.get('.close-icon').click();
        cy.get(`p:contains(${message})`).should('not.exist');
    });
});
