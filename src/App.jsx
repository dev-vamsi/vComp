import React from 'react';
import Button from './components/Button';
import useAlert from './hooks/useAlert';
import AlertContainer from './components/Alert/AlertContainer';

// const App = () => {
//     return (
//         <div className='h-[100vh] w-[100vw] flex flex-col gap-5 items-center justify-center'>
//             <h1 className='text-5xl font-bold'>
//                 vComp - Reusable component library
//             </h1>
//         </div>
//     );
// };

const users = ['Joshua', 'Rahul', 'Amit', 'Nuzair'];

const App = () => {
    const { makeNewAlert } = useAlert();
    return (
        <div className='container mx-auto relative flex items-center justify-center h-[100vh]'>
            <Button
                className='bg-green-700'
                onClick={() => {
                    makeNewAlert({
                        message: `You have new message from ${
                            users[Math.floor(Math.random() * 4)]
                        }`,
                    });
                }}
            >
                Success
            </Button>
            <Button
                className='bg-yellow-600'
                onClick={() => {
                    makeNewAlert({
                        message: `You have new message from ${
                            users[Math.floor(Math.random() * 4)]
                        }`,
                        variant: 'warning',
                    });
                }}
            >
                Warning
            </Button>
            <Button
                className='bg-red-500'
                onClick={() => {
                    makeNewAlert({
                        message: `You have new message from ${
                            users[Math.floor(Math.random() * 4)]
                        }`,
                        variant: 'error',
                        shouldAutoClose: false,
                    });
                }}
            >
                Error
            </Button>
            <AlertContainer />
        </div>
    );
};

export default App;
