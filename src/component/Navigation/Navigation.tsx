import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavigationItem as NavigationItemType } from 'Type/Navigation';

import './Navigation.style';

/**
 * An array of objects describing the available navigation links.
 */
export const navigationMap: NavigationItemType[] = [
    {
        title: 'home',
        to: '/',
    },
    {
        title: 'about',
        to: '/about',
    },
    {
        title: 'contact',
        to: '/contact',
    }
];

export const NavigationItem = ({ title, to }: NavigationItemType) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li block="Navigation" elem="ListItem" mods={{ isActive }}>
            <NavLink
                to={to}
                style={({ isActive }) => { // Set state in order to use isActive on NavLink parent
                    setIsActive(isActive);
                    return {};
                }}
            >
                {title}
            </NavLink>
        </li>
    );
};

export const Navigation = () => {
    return (
        <nav block="Navigation">
            <ul elem="List">
                {navigationMap.map(NavigationItem)}
            </ul>
        </nav>
    );
};

export default Navigation;