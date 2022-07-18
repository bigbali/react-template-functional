import { HamburgerMenuIcon } from 'Component/Icon';
import { useState, useEffect } from 'react';
import { useTimer } from 'Util';
import { navigationMap } from '../Navigation';
import '../Navigation.style';
import NavigationItem from '../NavigationItem';

const NavigationMobile = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [keepRendered, setkeepRendered] = useState(false);
    const [createTimer, clearTimer] = useTimer();

    useEffect(() => {
        createTimer(() => setkeepRendered(isExpanded), 100);

        return () => { clearTimer(); };
    }, [isExpanded]);

    return (
        <>
            <div block="Navigation" elem="HamburgerIconWrapper" onClick={() => { setIsExpanded(true); }}>
                <HamburgerMenuIcon isExpanded={isExpanded} />
            </div>
            {(isExpanded && keepRendered) && (
                <div block="Navigation" elem="MobileMenuWrapper">
                    <nav>
                        <ul elem="List">
                            {navigationMap.map(NavigationItem)}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default NavigationMobile;