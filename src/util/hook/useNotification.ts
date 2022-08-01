import { useDispatch, useSelector } from 'Util';
import { actions } from 'Store/notification';
import { CaseReducerActions, PayloadAction } from '@reduxjs/toolkit';
import store from 'Store/index';
import buildGetters from 'Util/buildGetters';

export const useNotification = () => {
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    // const getters = Object.keys(notification).reduce((acc, key) => {
    //     return {
    //         ...acc,
    //         [`get${key.replace(/^[a-z]/, key[0].toUpperCase())}`]: () => {
    //             return store.getState().notification[key as keyof typeof notification];
    //         }
    //     };
    // }, { ...notification });

    const getters = buildGetters(notification, 'notification');

    const setters = Object.keys(actions).reduce((acc, key) => {
        const prop = key as keyof typeof actions;
        return {
            ...acc,
            [prop]: (args: any) => {
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                dispatch(actions[prop](args));
            }
        };
    }, { ...actions });

    return {
        notification,
        ...getters,
        ...setters
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