import React, { useState } from 'react';
import mergeClasses from '../lib/utils';

const CheckMarkIcon = (props) => {
    return (
        <svg
            fill='#000000'
            version='1.1'
            id='Capa_1'
            width={'16px'}
            height={'16px'}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 533.973 533.973'
            xmlSpace='preserve'
            className={props.className}
        >
            <g>
                <g>
                    <path
                        d='M477.931,52.261c-12.821-12.821-33.605-12.821-46.427,0l-266.96,266.954l-62.075-62.069
			c-12.821-12.821-33.604-12.821-46.426,0L9.616,303.572c-12.821,12.821-12.821,33.604,0,46.426l85.289,85.289l46.426,46.426
			c12.821,12.821,33.611,12.821,46.426,0l46.426-46.426l290.173-290.174c12.821-12.821,12.821-33.605,0-46.426L477.931,52.261z'
                    />
                </g>
            </g>
        </svg>
    );
};

const Checkbox = React.forwardRef((props, ref) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='flex items-center gap-2 mx-1 my-2 checkbox_container'>
            <div
                className='w-6 h-6 border-2 border-black flex items-center justify-center rounded-md'
                onClick={() => {
                    setIsChecked((p) => !p);
                }}
            >
                <input
                    type='checkbox'
                    ref={ref}
                    id={props.id || `checkBoxInput`}
                    checked={isChecked}
                    className={mergeClasses('hidden peer', props.className)}
                />
                <CheckMarkIcon className='hidden peer-checked:block' />
            </div>
            {props.children && (
                <label
                    htmlFor={props.id || `checkBoxInput`}
                    className='text-sm'
                >
                    {props.children}
                </label>
            )}
        </div>
    );
});

export default Checkbox;
