import { combineReducers, createStore } from "redux";

import Notification from 'Store/Notification/Notification.reducer';
import Popup from 'Store/Popup/Popup.reducer';
import Device from "Store/Device/Device.reducer";

export const reducer = combineReducers({
    notification: Notification,
    popup: Popup,
    device: Device
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;