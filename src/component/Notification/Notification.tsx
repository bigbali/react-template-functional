import { hideNotification } from 'Store/Notification/Notification.action';
import { useDispatch, useSelector } from 'Util/Store';
import { useEffect, useState } from 'react';
import './Notification.style.scss';

export const Notification: FC = () => {
    const {
        timeout = 5000,
        message,
        status,
        isVisible
    } = useSelector(state => state.notification);

    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);

    const closeNotification = () => {
        setIsExpanded(false);

        setTimeout(() => {
            dispatch(hideNotification());
        }, 200);
    };

    useEffect(() => {
        if (message && isVisible) {
            setIsExpanded(true);

            if (timeout) {
                const notificationLifetime = setTimeout(() => {
                    dispatch(hideNotification());
                }, timeout);

                return () => clearTimeout(notificationLifetime);
            }
        }
    }, [timeout, message, isVisible]);

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
                <span onClick={closeNotification}>
                    &nbsp;&nbsp;&nbsp;X
                </span>
            </p>
        </div>
    );
};

export default Notification;