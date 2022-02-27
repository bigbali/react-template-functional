import {
    NotificationActionType,
    NotificationStatus
} from 'Type/NotificationType';

export const showNotification = ({
    delay = 0,
    timeout = 0,
    message = '',
    status = NotificationStatus.Informative
}) => ({
    type: NotificationActionType.Show,
    payload: {
        delay,
        timeout,
        message,
        status
    }
});

export const hideNotification = () => ({
    type: NotificationActionType.Hide
});