import { NavLink } from 'react-router-dom';
import { NavigationItemType } from 'Type/NavigationType';
import { navigationMap } from './Navigation.data';

import './Navigation.style';

export const renderNavigationItem = (navigationItem: NavigationItemType) => {
    const { title, to } = navigationItem;

    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) => (
                    `Navigation-Link${isActive
                        ? '_isActive'
                        : ''
                    }`
                )}
            >
                {title}
            </NavLink>
        </li>
    );
};

export const Navigation = () => {
    return (
        // @ts-ignore
        <nav block="Heyhey" elem="Hayhay">
            <ul className='Navigation-List'>
                {navigationMap.map(renderNavigationItem)}
            </ul>
        </nav>
    );
};

export default Navigation;