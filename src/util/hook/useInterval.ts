import { useEffect } from 'react';

export const useInterval = (callback: () => void, interval: number) => {
    useEffect(() => {
        const _interval = setInterval(callback, interval);
        return () => clearInterval(_interval);
    }, []);
};