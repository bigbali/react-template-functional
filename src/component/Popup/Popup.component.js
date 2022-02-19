import { useSelector } from "react-redux";

export const Popup = () => {
    const isVisible = useSelector((state) => state.popup.isVisible);

    if (isVisible) {
        return 'Hey, you are from a mobile device';
    }

    return 'Popup';
};

export default Popup;