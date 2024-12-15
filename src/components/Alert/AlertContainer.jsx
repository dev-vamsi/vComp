import useAlert from '../../hooks/useAlert';
import Alert from './Alert';

const AlertContainer = () => {
    const { alertQueue } = useAlert();
    return (
        <div className='absolute top-0 right-0 flex flex-col my-2'>
            {alertQueue?.map((alert) => {
                return <Alert {...alert} key={alert.timerid} />;
            })}
        </div>
    );
};

export default AlertContainer;
