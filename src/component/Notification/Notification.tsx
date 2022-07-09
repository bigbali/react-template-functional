// import { hideNotification } from 'Store/Notification/Notification.action';
import { useDevice, useDispatch, useSelector } from 'Util';
import { useEffect, useState } from 'react';
import './Notification.style.scss';
import useNotification from 'Util/hook/useNotification';
import { batch } from 'react-redux';
import { useTimer } from 'Util/hook/useTimer';
import { useInterval } from 'Util/hook/useInterval';

export const Notification = () => {
    const dispatch = useDispatch();
    const { isMobile } = useDevice();

    // test usetimer
    // const { getTimeElapsed } = useTimer();

    // useEffect(() => {
    //     console.log('effect');

    //     const interval = setInterval(() => {
    //         console.log('interval');
    //         console.log(getTimeElapsed());
    //     }, 200);

    //     return () => clearInterval(interval);
    // }, []);

    // const { time } = useTimer(true, 1000);

    // useEffect(() => {
    //     console.log(time);
    // }, [time]);

    // @ts-ignore
    const { notification, show: showNotification, hide: hideNotification, setMessage, getMessage } = useNotification();

    useEffect(() => {
        if (isMobile) {
            showNotification();
        }
        else {
            hideNotification();
        }
    }, [isMobile]);

    useEffect(() => { setTimeout(() => setMessage('()'), 200); }, []);
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
    useInterval(() => { setMessage(`-${getMessage()}-`); }, 1000);

    //
    // const {
    //     notification,
    //     show,
    //     hide,
    //     setMessage,
    //     update
    // } = useNotification();

    // useEffect(() => {

    // }, [notification.visible]);

    // useEffect(() => {
    //     batch(() => {
    //         if (isMobile) {
    //             if (!notification.message) {
    //                 setMessage('Hello there');
    //             }
    //             if (!notification.visible) {
    //                 show();
    //             }
    //         }
    //     });
    // }, [isMobile]);


    // const [isExpanded, setIsExpanded] = useState(false);

    // const closeNotification = () => {
    //     setIsExpanded(false);
    //     console.log('CLOSE');

    //     setTimeout(() => {
    //         dispatch(hideNotification());
    //     }, 200);
    // };

    // useEffect(() => {
    //     if (message && isVisible) {
    //         setIsExpanded(true);

    //         if (timeout) {
    //             const notificationLifetime = setTimeout(() => {
    //                 dispatch(hideNotification());
    //             }, timeout);

    //             return () => clearTimeout(notificationLifetime);
    //         }
    //     }
    // }, [timeout, message, isVisible]);

    // const getClass = () => {
    //     const className = 'Notification';

    //     if (!status) {
    //         return className;
    //     }

    //     const mods = className + `_${status.toLowerCase()} ${isExpanded ? className + '_isExpanded' : ''}`;

    //     return className + ' ' + mods;
    // };

    // const x = notification.status

    if (!notification.visible) {
        return null;
    }

    return (
        <div block="Notification">
            <p elem="Message" mods={{ hello: !!notification.message }}>
                {notification.message}
            </p>
        </div>
    );
};

export default Notification;