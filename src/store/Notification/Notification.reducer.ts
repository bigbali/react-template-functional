import {
    INotification,
    INotificationAction,
    NotificationActionType,
    NotificationStatus
} from 'Type/NotificationType';

export const initialState: INotification = {
    delay: 0,
    timeout: 0,
    message: '',
    isVisible: true,
    status: NotificationStatus.Informative
};

export const NotificationReducer = (state = initialState, action: INotificationAction) => {
    const { type, payload } = action;

    switch (type) {
        case NotificationActionType.Show: {
            return {
                ...payload,
                isVisible: true
            };
        }

        case NotificationActionType.Hide: {
            return {
                ...state,
                isVisible: false
            };
        }

        default: {
            return state;
        }
    }
};

export default NotificationReducer;