import { hideNotification } from 'Store/Notification/Notification.action';
import { useDispatch, useSelector } from 'Util/Store';
import { useEffect, useState } from 'react';
import './Notification.style.scss';

export const Notification: FC = () => {
    const {
        delay,
        timeout,
        message,
        status,
        isVisible
    } = useSelector(state => state.notification);

    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        console.log('effect');
        if (timeout && message && isVisible) {
            setTimeout(() => {
                setIsExpanded(true);

                setTimeout(() => {
                    dispatch(hideNotification());
                }, timeout);
            }, delay);
        }

        if (message && !timeout && isVisible) {
            setIsExpanded(true);
        }

        if (!isVisible) {
            setIsExpanded(false);
        }

    }, [delay, timeout, message, status, isVisible, dispatch]);

    const getClass = () => {
        const className = 'Notification';

        if (!status) {
            return className;
        }

        const mods = className + `_${status.toLowerCase()} ${isExpanded ? className + '_isExpanded' : ''}`;

        return className + ' ' + mods;
    };


    return (
        <div className={getClass()}>
            <p>
                {message}
                <span onClick={() => { dispatch(hideNotification()); }}>
                    X
                </span>
            </p>
        </div>
    );
};

export default Notification;