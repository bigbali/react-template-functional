import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from 'Store/Notification/Notification.action';

import { NotificationType } from 'Type/Notification';
// import { ActionType } from 'Type/Store/Action';

export const initialState: NotificationType = {
    delay: 0,
    timeout: 0,
    message: '',
    type: '',
    isVisible: true
};

export const Notification = (state = initialState, action) => {  
    const { type, payload } = action;

    switch (action.type) {
        case NOTIFICATION_SHOW:
            return { 
                ...payload,
                isVisible: true
            };

        case NOTIFICATION_HIDE:
            return {
                ...state,
                isVisible: false
            };

        
        default:
            return state;
    }
};

export default Notification;