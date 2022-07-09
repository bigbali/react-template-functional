import Navigation from 'Component/Navigation/Navigation';
import { useDevice } from 'Util';

import './Header.style';

export const Header = () => {
    const { isMobile } = useDevice();

    const label = isMobile ? 'React Template: mobile' : 'React Template: desktop';

    return (
        <div block="Header">
            <h1 elem="Branding">
                {label}
            </h1>
            <Navigation />
        </div>
    );
};

export default Header;
