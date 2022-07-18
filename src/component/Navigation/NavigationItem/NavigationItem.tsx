import { NavLink } from 'react-router-dom';
import { NavigationItemType } from '../Navigation';

export const NavigationItem = ({ title, to }: NavigationItemType) => {
    return (
        <li block="Navigation" elem="ListItem">
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                {title}
            </NavLink>
        </li>
    );
};

export default NavigationItem;