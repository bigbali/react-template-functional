import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NOTIFICATION_STATUS_WARNING, showNotification } from 'Store/Notification/Notification.action';
import { useDevice } from 'Util/Device';

import { navigationMap } from './Header.data';

import './Header.style';

const renderNavigationItem = (navigationItem) => {
    const { title, to } = navigationItem;

    return (
        <li>
            <Link to={ to }>
                { title }
            </Link>
        </li>
    );
};

const renderNavigation = () => {
    return (
        <ul>
            { navigationMap.map(renderNavigationItem) }
        </ul>
    );
};

export const Header = () => {
    const { isMobile } = useDevice();
    const dispatch = useDispatch();

    const label = isMobile ? 'Example on Mobile' : 'Example on Desktop';

    return (
        <div className="Header" onClick={() => {
            dispatch(showNotification({
                timeout: 5000,
                message: 'You just clicked on the header',
                status: NOTIFICATION_STATUS_WARNING
            }));
        }}>
            <h1>
                { label }
            </h1>
            { renderNavigation() }
        </div>
    );
};

export default Header;
