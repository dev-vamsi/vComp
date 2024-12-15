import { createContext, useEffect, useState } from 'react';

export const AlertContext = createContext();

export default function AlertProvider(props) {
    const [alertQueue, setAlertQueue] = useState([]);

    useEffect(() => {
        return () => {
            alertQueue.map((alert) => {
                clearTimeout(alert.timerid);
            });
        };
    }, []);

    const defaultOnClose = (timerid) => {
        clearTimeout(timerid);
        setAlertQueue((prev) =>
            prev.filter((alert) => alert.timerid !== timerid)
        );
    };

    const makeNewAlert = (newAlertDetails) => {
        let {
            onClose = defaultOnClose,
            durationInMS = 3000,
            shouldAutoClose = true,
        } = newAlertDetails;
        const timerid = setTimeout(() => {
            if (shouldAutoClose) {
                onClose(timerid);
            }
        }, durationInMS);

        setAlertQueue((prev) => [
            ...prev,
            { alertdetails: newAlertDetails, timerid },
        ]);
    };

    const value = {
        alertQueue,
        setAlertQueue,
        makeNewAlert,
        onClose: defaultOnClose,
    };
    return (
        <AlertContext.Provider value={value}>
            {props.children}
        </AlertContext.Provider>
    );
}
