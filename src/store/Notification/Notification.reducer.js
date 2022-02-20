import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from 'Store/Notification/Notification.action';

export const initialState = {
    delay: 0,
    timeout: 0,
    message: '',
    type: '',
    isVisible: true
};

export const Notification = (state = initialState, action) => {    
    const { delay, timeout, message, status } = action;

    switch (action.type) {
        case NOTIFICATION_SHOW:
            return {
                delay,
                timeout,
                message,
                status,
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