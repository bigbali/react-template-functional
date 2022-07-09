import { useEffect, useState } from 'react';

export const useTimer = (forceRerender = false, interval = 1000) => {
    const [time, setTime] = forceRerender ? useState(0) : [null, null];
    const initialTime = Date.now();

    useEffect(() => {
        if (time !== null) {
            const cb = setInterval(() => {
                console.log('settime');
                setTime((time) => time + 1);
            }, interval);

            return () => clearInterval(cb);
        }
    }, []);

    return {
        getTimeElapsed: () => {
            console.log('Getting time');
            return Math.floor((Date.now() - initialTime) / 1000);
        },
        time: time !== null ? time : 0
    };
};