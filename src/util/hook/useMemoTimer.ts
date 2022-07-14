import { useMemo, useCallback } from 'react';

export const useMemoTimer = (callback: () => void, timeout = 1000) => {
    const _timeout = useMemo(() => {
        return setTimeout(callback, timeout);
    }, []);

    const _cleanup = useCallback(() => {
        clearTimeout(_timeout);
    }, []);

    return [_cleanup] as const;
};

export default useMemoTimer;