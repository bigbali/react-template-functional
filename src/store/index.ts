import { combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import DeviceReducer from 'Store/Device/Device.reducer';
import NotificationReducer from 'Store/Notification/Notification.reducer';

const reducer = combineReducers({
    notification: NotificationReducer,
    device: DeviceReducer
});

/**
 * Use 'createStore' as 'configureStore' incorrectly infers type
 */
export const store = createStore(
    reducer,
    composeWithDevTools()
);

export default store;

export type DISPATCH = typeof store.dispatch;
export type ROOTSTATE = ReturnType<typeof store.getState>;
