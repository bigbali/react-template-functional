import { useDispatch, useSelector } from 'Util';
import { actions, NotificationStatus, Notification } from 'Store/notification';
import { CaseReducerActions, PayloadAction } from '@reduxjs/toolkit';

export const useNotification = () => {
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    const dispatchActions = Object.keys(actions).reduce((acc, key) => {
        return {
            ...acc,
            // @ts-ignore
            [key]: (args) => {
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                dispatch(actions[key as keyof typeof actions](args));
            }
        };
    }, { ...actions });

    // const { hide, setDelay, setDuration, setMessage, setStatus, show, toggle, update } = actions;

    return {
        notification,
        ...dispatchActions
        // hide: () => { dispatch(hide()); },
        // show: () => { dispatch(show()); },
        // toggle: () => { dispatch(toggle()); },
        // setDelay: (delay: number) => { dispatch(setDelay(delay)); },
        // setDuration: (duration: number) => { dispatch(setDuration(duration)); },
        // setMessage: (message: string) => { dispatch(setMessage(message)); },
        // setStatus: (status: NotificationStatus) => { dispatch(setStatus(status)); },
        // update: (_notification: Notification) => { dispatch(update(_notification)); }
    };
};

export default useNotification;