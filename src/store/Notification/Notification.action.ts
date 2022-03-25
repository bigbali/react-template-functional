import {
    NotificationActionType,
    NotificationStatus
} from 'Type/NotificationType';

export const showNotification = ({
    status = NotificationStatus.INFORMATIVE,
    timeout = 0,
    message = ''
}) => ({
    type: NotificationActionType.SHOW,
    payload: {
        timeout,
        message,
        status
    }
});

export const hideNotification = () => ({
    type: NotificationActionType.HIDE
});