import mergeClasses from '../lib/utils';

const Button = (props) => {
    return (
        <button
            {...props}
            className={mergeClasses(
                'py-2 px-5 bg-blue-500 text-white rounded-md m-1 shadow-md hover:scale-[1.02]',
                props.className
            )}
        >
            {props.children}
        </button>
    );
};

export default Button;
