export enum DeviceActionType {
    Update = 'DEVICE_UPDATE'
}

export interface IDeviceAction {
    type: DeviceActionType
}

export interface IDevice {
    isMobile: boolean
}