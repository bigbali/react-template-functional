import { configureStore } from '@reduxjs/toolkit';
import { reducer as deviceReducer } from 'Store/device';
import { reducer as notificationReducer } from 'Store/notification';

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        device: deviceReducer
    },
    devTools: true
});

export default store;

export type DISPATCH = typeof store.dispatch;
export type ROOTSTATE = ReturnType<typeof store.getState>;
