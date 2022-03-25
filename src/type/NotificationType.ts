import { AnyAction } from '@reduxjs/toolkit';

export enum NotificationStatus {
    INFORMATIVE = 'INFORMATIVE',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

export enum NotificationActionType {
    SHOW = 'NOTIFICATION_SHOW',
    HIDE = 'NOTIFICATION_HIDE'
}

export type INotification = {
    timeout: number,
    message: string,
    isVisible: boolean,
    status: NotificationStatus
};

export interface INotificationPayload {
    timeout: number,
    message: string,
    status: NotificationStatus
}

export interface INotificationAction extends AnyAction {
    type: NotificationActionType,
    payload?: INotificationPayload
}
