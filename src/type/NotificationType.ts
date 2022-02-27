export enum NotificationStatus {
    Informative = 'INFORMATIVE',
    Success = 'SUCCESS',
    Warning = 'WARNING',
    Error = 'ERROR'
}

export enum NotificationActionType {
    Show = 'NOTIFICATION_SHOW',
    Hide = 'NOTIFICATION_HIDE'
}

export interface INotification {
    delay?: number;
    timeout?: number,
    message?: string,
    isVisible?: boolean,
    status?: NotificationStatus
}

export interface INotificationAction {
    type: NotificationActionType,
    payload?: INotification
}