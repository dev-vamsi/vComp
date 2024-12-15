import useAlert from '../../hooks/useAlert';
import CloseIcon from './AlertUtils/Icons/CloseIcon';
import { ErrorIcon } from './AlertUtils/Icons/ErrorIcon';
import RocketIcon from './AlertUtils/Icons/RocketIcon';
import { WarningIcon } from './AlertUtils/Icons/WarningIcon';

const variantMap = {
    success: {
        icon: <RocketIcon />,
        borderClass: 'bg-gradient-to-r from-green-700 to-green-500',
    },
    warning: {
        icon: <WarningIcon />,
        borderClass: 'bg-gradient-to-r from-orange-500 to-yellow-300',
    },
    error: {
        icon: <ErrorIcon />,
        borderClass: 'bg-gradient-to-r from-red-700 to-red-300',
    },
};

const Alert = (props) => {
    const { onClose: defaultOnClose } = useAlert();
    const {
        alertdetails: {
            message,
            onClose = defaultOnClose,
            variant = 'success',
        },
        timerid,
    } = props;
    const { borderClass, icon } = variantMap[variant];
    return (
        <div className='relative m-1 transition-transform transform duration-300 ease-in-out'>
            <div
                className={`absolute inset-0 ${borderClass} rounded-lg opacity-0 animate-fadeIn`}
            ></div>
            <div
                {...props}
                className='relative p-4 m-[2px] bg-white text-black rounded-md min-w-[400px] shadow-md flex items-center justify-between opacity-0 animate-fadeIn'
            >
                <div className='flex gap-3'>
                    <div>{icon}</div>
                    <p className='text-sm'>{message}</p>
                </div>
                <div
                    className='close-icon cursor-pointer'
                    onClick={() => onClose(timerid)}
                >
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};

export default Alert;
