import {
    NotificationActionType,
    NotificationStatus
} from 'Type/NotificationType';

export const showNotification = ({
    status = NotificationStatus.Informative,
    timeout = 0,
    message = ''
}) => ({
    type: NotificationActionType.Show,
    payload: {
        timeout,
        message,
        status
    }
});

export const hideNotification = () => ({
    type: NotificationActionType.Hide
});