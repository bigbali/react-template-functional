import {
    POPUP_SHOW,
    POPUP_HIDE,
    POPUP_SET,
    POPUP_TOGGLE
} from 'Store/Popup/Popup.action';

export const initialState = {
    isVisible: false,
    children: null,
    title: '',
    content: ''
};

export const Popup = (state = initialState, action) => {    
    switch (action.type) {
        case POPUP_SHOW:
            return {
                ...state,
                isVisible: true
            };

        case POPUP_HIDE:
            return {
                ...state,
                isVisible: false
            };

        case POPUP_SET:
            return {
                ...state,
                isVisible: action.value
            };

        case POPUP_TOGGLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };

        default:
            return state;
    }
};

export default Popup;