import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import './Notification.style.scss';

export const Notification = () => {
    const { 
        delay,
        timeout,
        message,
        status,
        isVisible
    } = useSelector(state => state.notification);

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (timeout && message && isVisible) {
            setTimeout(() => {
                setIsExpanded(true);

                setTimeout(() => {
                    setIsExpanded(false);
                }, timeout);
            }, delay);
        }

        if (message && !timeout && isVisible) {
            setIsExpanded(true);
        }

        if (!isVisible) {
            setIsExpanded(false);
        }

    }, [delay, timeout, message, status, isVisible])

    if (!isExpanded) {
        return null;
    }

    const mapStatusToClassName = () => {
        if (!status) {
            return null;
        }

        return `Notification_${status.toLowerCase()}`;
    }


    return (
        <div className={ `Notification ${ mapStatusToClassName() }` }>
            <p>
                { message }
            </p>
        </div>
    );
};

export default Notification;