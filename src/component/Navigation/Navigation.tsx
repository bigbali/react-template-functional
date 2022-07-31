import { useDevice } from 'Util';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import './Navigation.style';

export type NavigationItemType = {
    label: string,
    name: string,
    to: string
};

export const navigationMap: NavigationItemType[] = [
    {
        label: 'home',
        name: 'index',
        to: '/'
    },
    {
        label: 'about',
        name: 'about',
        to: '/about'
    },
    {
        label: 'contact',
        name: 'contact',
        to: '/contact'
    }
];


export const Navigation = () => {
    const { isMobile } = useDevice();

    return (
        isMobile
            ? <NavigationMobile />
            : <NavigationDesktop />

    );
};

export default Navigation;