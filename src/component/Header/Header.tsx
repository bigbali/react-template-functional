import Navigation from 'Component/Navigation/Navigation';
import { showNotification } from 'Store/Notification/Notification.action';
import { useDevice } from 'Util/Device';
import { useDispatch } from 'react-redux';

import './Header.style';

export const Header = () => {
    const { isMobile } = useDevice();
    const dispatch = useDispatch();

    const label = isMobile ? 'Example on Mobile' : 'Example on Desktop';

    return (
        <div className="Header" onClick={() => {
            dispatch(showNotification({
                timeout: 5000,
                message: 'You just clicked on the header',
            }));
        }}>
            <h1>
                {label}
            </h1>
            <Navigation />
        </div>
    );
};

export default Header;
