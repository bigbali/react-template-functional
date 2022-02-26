import { combineReducers, createStore } from 'redux';

import Notification from 'Store/Notification/Notification.reducer';
import Device from 'Store/Device/Device.reducer';

export const reducer = combineReducers({
    notification: Notification,
    device: Device
});

export const store = createStore(
    reducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;