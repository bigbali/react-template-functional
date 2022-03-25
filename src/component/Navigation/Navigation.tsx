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
                    `Navigation-Link${
                        isActive
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const Navigation = () => {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <nav block="Heyhey" elem="Hayhay">
            <ul className='Navigation-List'>
                {navigationMap.map(renderNavigationItem)}
            </ul>
        </nav>
    );
};

export default Navigation;