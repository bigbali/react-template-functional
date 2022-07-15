import { HamburgerMenuIcon } from 'Component/Icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavigationItem as NavigationItemType } from 'Type/Navigation';
import { useDevice } from 'Util';

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
    const isActiveRef = useRef(false);

    useEffect(() => {
        if (isActiveRef.current) {
            setIsActive(true);
        }
    }, [isActiveRef.current]);

    return (
        <li block="Navigation" elem="ListItem" mods={{ isActive }}>
            <NavLink
                to={to}
                // style={({ isActive }) => { // Set state in order to use isActive on NavLink parent
                //     if (isActive) {
                //         isActiveRef.current = true;
                //     }
                //     return {};
                // }}
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                {title}
            </NavLink>
        </li>
    );
};

export const Navigation = () => {
    const { isMobile, isDesktop } = useDevice();

    return (
        <nav block="Navigation" mods={{ isMobile, isDesktop }}>
            <ul elem="List">
                {navigationMap.map(NavigationItem)}
            </ul>
            {/* {isMobile
                ? <HamburgerMenuIcon />
                : (
                )
            } */}
        </nav>
    );
};

export default Navigation;