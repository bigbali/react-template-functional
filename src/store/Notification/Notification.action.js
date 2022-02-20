export const NOTIFICATION_SHOW = 'NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE = 'NOTIFICATION_HIDE';

export const NOTIFICATION_STATUS_NEUTRAL = 'NEUTRAL';
export const NOTIFICATION_STATUS_SUCCESS = 'SUCCESS';
export const NOTIFICATION_STATUS_WARNING = 'WARNING';
export const NOTIFICATION_STATUS_ERROR = 'ERROR';

export const showNotification = ({ 
    delay = 0,
    timeout = 0,
    message = '',
    status = NOTIFICATION_STATUS_NEUTRAL
}) => ({
    type: NOTIFICATION_SHOW,
    delay,
    timeout,
    message,
    status
});

export const hideNotification = () => ({
    type: NOTIFICATION_HIDE
});