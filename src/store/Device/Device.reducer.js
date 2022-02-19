import { DEVICE_UPDATE } from 'Store/Device/Device.action';

export const initialState = {
    isMobile: true
};

export const Device = (state = initialState, action) => {
    // Check for screens horizontally smaller than 810px
    const isMobile = window.matchMedia('(max-width: 810px)').matches;

    switch (action.type) {
        case DEVICE_UPDATE:
            return {
                isMobile
            };

        default:
            return state;
    }
};

export default Device;