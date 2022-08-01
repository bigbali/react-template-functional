import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum NotificationStatus {
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
};

export interface Notification {
    status: NotificationStatus,
    delay: number,
    duration: number,
    message: string,
    visible: boolean
};

export const initialState: Notification = {
    status: NotificationStatus.INFO,
    delay: 0,
    duration: 5000,
    message: '',
    visible: false
};

export const deviceSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        show(state) {
            return {
                ...state,
                visible: true
            };
        },
        hide(state) {
            return {
                ...state,
                visible: false
            };
        },
        toggle(state) {
            return {
                ...state,
                visible: !state.visible
            };
        },
        update(state, action: PayloadAction<Notification>) {
            return {
                ...state,
                ...action.payload
            };
        },
        setStatus(state, action: PayloadAction<NotificationStatus>) {
            return {
                ...state,
                status: action.payload
            };
        },
        setDelay(state, action: PayloadAction<number>) {
            return {
                ...state,
                delay: action.payload
            };
        },
        setDuration(state, action: PayloadAction<number>) {
            return {
                ...state,
                duration: action.payload
            };
        },
        setMessage(state, action: PayloadAction<string | (() => string)>) {
            return {
                ...state,
                message: typeof action.payload === 'function' ? action.payload() : action.payload
            };
        }
    }
});

export const { actions, reducer, getInitialState } = deviceSlice;
export const {
    show,
    hide,
    toggle,
    update,
    setStatus,
    setDelay,
    setDuration,
    setMessage
} = deviceSlice.actions;
