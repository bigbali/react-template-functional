import { configureStore } from '@reduxjs/toolkit';

import DeviceReducer from 'Store/Device/Device.reducer';
import NotificationReducer from 'Store/Notification/Notification.reducer';

export const store = configureStore({
    reducer: {
        notification: NotificationReducer,
        device: DeviceReducer
    }
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
