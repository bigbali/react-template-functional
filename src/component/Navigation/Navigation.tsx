import { useDevice } from 'Util';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import './Navigation.style';

export type NavigationItemType = {
    title: string,
    to: string
};

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

export const Navigation = () => {
    const { isMobile } = useDevice();

    return isMobile
        ? <NavigationMobile />
        : <NavigationDesktop />;

};

export default Navigation;