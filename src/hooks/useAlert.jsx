import { useContext } from 'react';
import { AlertContext } from '../components/Alert/AlertProvider';

export default function useAlert() {
    return useContext(AlertContext);
}
