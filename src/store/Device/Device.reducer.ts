import { DeviceActionType, IDevice, IDeviceAction } from 'Type/DeviceType';

export const getIsMobile = (): boolean => {
    // Check for screens horizontally smaller than 810px
    return window.matchMedia('(max-width: 810px)').matches;
};

const initialState: IDevice = {
    isMobile: getIsMobile()
};

export const DeviceReducer = (state = initialState, action: IDeviceAction) => {
    const { type } = action;

    switch (type) {
        case DeviceActionType.UPDATE: {
            const isMobile = getIsMobile();

            return {
                isMobile
            };
        }
        default: {
            return state;
        }
    }
};

export default DeviceReducer;