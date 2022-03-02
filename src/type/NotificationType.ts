import { AnyAction } from '@reduxjs/toolkit';

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
