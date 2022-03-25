export enum DeviceActionType {
    UPDATE = 'DEVICE_UPDATE'
}

export interface IDeviceAction {
    type: DeviceActionType
}

export interface IDevice {
    isMobile: boolean
}