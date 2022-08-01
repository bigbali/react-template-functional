import { useCallback, useMemo, useRef } from 'react';

export const useInterval = (callback: () => void, interval = 1000) => {
    // const _intervalId = useRef<NodeJS.Timer>(null);
    // const _interval = useMemo(() => {
    //     return () => setInterval(callback, interval);
    // }, []);

    // const _cleanup = useCallback(() => {
    //     clearInterval(_interval);
    // }, []);

    const _interval = () => { throw Error('not implemented!'); };

    return [_interval] as const;
};

export default useInterval;