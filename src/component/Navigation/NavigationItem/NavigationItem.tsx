import {
    NavigationItemType,
} from '../Navigation';
import NavigationLink from '../NavigationLink';

export const NavigationItem = ({ label, to }: NavigationItemType) => {
    return (
        <li block="Navigation" elem="ListItem">
            <NavigationLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                {label}
            </NavigationLink>
        </li >
    );
};

export default NavigationItem;