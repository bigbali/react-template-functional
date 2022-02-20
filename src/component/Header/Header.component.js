import { useDispatch } from "react-redux";
import { NOTIFICATION_STATUS_WARNING, showNotification } from "Store/Notification/Notification.action";
import { useDevice } from "Util/Device";

import './Header.style.scss';

export const Header = () => {
    const { isMobile } = useDevice();
    const dispatch = useDispatch();

    const label = isMobile ? 'Example on Mobile' : 'Example on Desktop';

    return (
        <div className="Header" onClick={() => { dispatch(showNotification({
            timeout: 5000,
            message: 'You just clicked on the header',
            status: NOTIFICATION_STATUS_WARNING
        })) }}>
            <h1>
                { label }
            </h1>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Header;