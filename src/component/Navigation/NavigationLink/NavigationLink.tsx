// bem-attr-skip-file
import { forwardRef, useEffect, useRef } from 'react';
import { useLocation, useResolvedPath } from 'react-router';
import { Link, NavLinkProps } from 'react-router-dom';

type NavigationProps = {
    onActive?: (currentlyActive: string) => void
    onInactive?: () => void
};

/**
 * A customised version of react-router's NavLink.
 */
export const NavigationLink = forwardRef<HTMLAnchorElement, NavLinkProps & NavigationProps>(function NavigationLink({
    'aria-current': ariaCurrentProp = 'page',
    caseSensitive = false,
    className: classNameProp = '',
    end = false,
    style: styleProp,
    to,
    children,
    onActive,
    onInactive,
    ...rest
}, ref) {
    const location = useLocation();
    const path = useResolvedPath(to);
    const previouslyActive = useRef(false);

    const locationPathname = caseSensitive
        ? location.pathname
        : location.pathname.toLowerCase();
    const toPathname = caseSensitive
        ? path.pathname
        : path.pathname.toLowerCase();

    const isActive = locationPathname === toPathname
        || (!end
            && locationPathname.startsWith(toPathname)
            && locationPathname.charAt(toPathname.length) === '/');

    const ariaCurrent = isActive
        ? ariaCurrentProp
        : undefined;

    const className = (typeof classNameProp === 'function')
        ? classNameProp({ isActive })
        : [classNameProp, isActive ? 'active' : null]
            .filter(Boolean)
            .join(' ');

    const style = typeof styleProp === 'function'
        ? styleProp({ isActive })
        : styleProp;

    if (onActive && isActive && previouslyActive.current === false) {
        onActive(location.pathname.substring(1) || 'index');
    }

    if (onInactive && !isActive && previouslyActive.current === true) {
        onInactive();
    }

    useEffect(() => {
        if (previouslyActive.current !== isActive) {
            previouslyActive.current = isActive;
        }
    }, [isActive]);

    return (
        <Link
            {...rest}
            aria-current={ariaCurrent}
            className={previouslyActive.current ? className?.concat('previouslyactive') : className}
            ref={ref}
            style={style}
            to={to}
        >
            {
                typeof children === 'function'
                    ? children({ isActive })
                    : children
            }
        </Link>
    );
}
);


export default NavigationLink;
