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
    status: NotificationStatus.Informative
};

export const NotificationReducer = (state: INotification = initialState, action: INotificationAction) => {
    const { type, payload } = action;

    switch (type) {
        case NotificationActionType.Show: {
            return {
                ...payload,
                isVisible: true
            } as INotification;
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