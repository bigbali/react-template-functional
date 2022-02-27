import { Link } from 'react-router-dom';
import { NavigationItemType } from 'Type/NavigationType';
import { navigationMap } from './Navigation.data';

import './Navigation.style';

export const renderNavigationItem = (navigationItem: NavigationItemType) => {
    const { title, to } = navigationItem;

    return (
        <li>
            <Link to={to}>
                {title}
            </Link>
        </li>
    );
};

export const Navigation = () => {
    return (
        <nav className='Navigation'>
            <ul className='Navigation-List'>
                {navigationMap.map(renderNavigationItem)}
            </ul>
        </nav>
    );
};

export default Navigation;