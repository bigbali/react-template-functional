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
    switch (action.type) {
        case NOTIFICATION_SHOW:
            return { 
                ...action,
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