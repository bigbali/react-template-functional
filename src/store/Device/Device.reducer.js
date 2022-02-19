import { DEVICE_UPDATE } from 'Store/Device/Device.action';

export const getIsMobile = () => {
    // Check for screens horizontally smaller than 810px
    return window.matchMedia('(max-width: 810px)').matches;
}

export const initialState = {
    isMobile: getIsMobile()
};

export const Device = (state = initialState, action) => {
    
    switch (action.type) {
        case DEVICE_UPDATE:
            const isMobile = getIsMobile();

            return {
                isMobile
            };

        default:
            return state;
    }
};

export default Device;