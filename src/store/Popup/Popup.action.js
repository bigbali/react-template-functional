export const POPUP_SHOW = 'POPUP_SHOW';
export const POPUP_HIDE = 'POPUP_HIDE';
export const POPUP_SET = 'POPUP_SET';
export const POPUP_TOGGLE = 'POPUP_TOGGLE';

export const showPopup = () => ({
    type: POPUP_SHOW
});

export const hidePopup = () => ({
    type: POPUP_HIDE
});

export const setPopup = (value) => ({
    type: POPUP_SET,
    value
});

export const togglePopup = () => ({
    type: POPUP_TOGGLE
});
