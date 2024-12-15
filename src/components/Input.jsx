import mergeClasses from '../lib/utils';

const Input = (props) => {
    return (
        <input
            {...props}
            className={mergeClasses(
                'border border-gray-900 p-2 rounded-md w-full m-1 shadow-inner outline-blue-500 caret-blue-500',
                props.className
            )}
        />
    );
};

export default Input;
