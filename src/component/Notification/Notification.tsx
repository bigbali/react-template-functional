// import { hideNotification } from 'Store/Notification/Notification.action';
import { useDevice, useDispatch, useSelector } from 'Util';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Notification.style.scss';
import useNotification from 'Util/hook/useNotification';
import { batch } from 'react-redux';
// import { useTimer } from 'Util/hook/useTimer';
import { useInterval } from 'Util/hook/useInterval';
import { useTimer } from 'Util/hook/useTimer';
import { NotificationStatus } from 'Store/notification';
import { CloseIcon } from 'Component/Icon';

export const Notification = () => {
    const [keepRendered, setkeepRendered] = useState(false);
    const [createTimer, clearTimer] = useTimer();
    const ths = useRef<HTMLDivElement | null>(null);
    const {
        notification: {
            message,
            status,
            visible
        },
        hide
    } = useNotification();

    useEffect(() => {
        if (visible) {
            createTimer(() => setkeepRendered(true), 250);
        }
        else {
            createTimer(() => setkeepRendered(false), 250);
        }

        return () => { clearTimer(); };
    }, [visible]);

    useEffect(() => {
        const element = ths.current;

        if (element) {
            if (visible && keepRendered) {
                element.className = `${element.className} visible`;
            }
            if (!visible && keepRendered) {
                element.className = `${element.className} fading`;
            }
        }
    }, [visible, keepRendered, ths.current]);

    if (!visible && !keepRendered) {
        return null;
    }

    return (
        <div
            ref={ths}
            block="Notification"
            mods={{
                INFO: status === NotificationStatus.INFO,
                SUCCESS: status === NotificationStatus.SUCCESS,
                WARNING: status === NotificationStatus.WARNING,
                ERROR: status === NotificationStatus.ERROR
            }}
        >
            <p elem="Message">
                {message}
            </p>
            <button
                elem="CloseButton"
                onClick={() => {
                    hide();
                }}>
                <CloseIcon />
            </button>
        </div>
    );
};

export default Notification;