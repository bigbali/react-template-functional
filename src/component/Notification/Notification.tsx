// import { hideNotification } from 'Store/Notification/Notification.action';
import { useDevice, useDispatch, useSelector } from 'Util';
import { useEffect, useState } from 'react';
import './Notification.style.scss';
import useNotification from 'Util/hook/useNotification';
import { batch } from 'react-redux';

export const Notification = () => {
    const dispatch = useDispatch();
    const { isMobile } = useDevice();

    const {
        notification,
        show,
        hide,
        setMessage,
        update
    } = useNotification();

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
    console.log(notification.status);

    if (!notification.visible) {
        return null;
    }

    return (
        <div block="Notification">
            {/* @ts-ignore */}
            <p elem="Message" mods={{ hello: true !== false }}>
                {notification.message}
            </p>
        </div>
    );
};

export default Notification;