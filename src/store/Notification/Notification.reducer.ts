import {
    INotification,
    INotificationAction,
    NotificationActionType,
    NotificationStatus
} from 'Type/NotificationType';

export const initialState: INotification = {
    timeout: 0,
    message: '',
    isVisible: false,
    status: NotificationStatus.INFORMATIVE
};

export const NotificationReducer = (state: INotification = initialState, action: INotificationAction) => {
    const { type, payload } = action;

    switch (type) {
        case NotificationActionType.SHOW: {
            return {
                ...payload,
                isVisible: true
            } as INotification;
        }

        case NotificationActionType.HIDE: {
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