import { useDispatch } from 'react-redux';
import Navigation from 'Component/Navigation/Navigation';
import { showNotification } from 'Store/Notification/Notification.action';
import { useDevice } from 'Util/Device';

import './Header.style';

export const Header = () => {
    const { isMobile } = useDevice();
    const dispatch = useDispatch();

    const label = isMobile ? 'React Template: mobile' : 'React Template: desktop';

    return (
        // @ts-ignore
        <div block="Header" onClick={() => {
            dispatch(showNotification({
                timeout: 5000,
                message: 'You just clicked on the header',
            }));
        }}>
            {/* @ts-ignore */}
            <h1 elem="Branding">
                {label}
            </h1>
            <Navigation />
        </div>
    );
};

export default Header;
