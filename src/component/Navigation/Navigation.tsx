import { Link } from 'react-router-dom';
import { navigationMap } from './Navigation.data';

import './Navigation.style';

type navigationItemType = {
    title: string,
    to: string
};

export const renderNavigationItem = (navigationItem: navigationItemType) => {
    const { title, to } = navigationItem;

    return (
        <li>
            <Link to={ to }>
                { title }
            </Link>
        </li>
    );
};

export const Navigation = () => {
    return (
        <ul className='Navigation'>
            { navigationMap.map(renderNavigationItem) }
        </ul>
    );
}

export default Navigation