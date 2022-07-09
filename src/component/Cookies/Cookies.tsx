import CloseIcon from 'Component/Icon/CloseIcon/CloseIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cookies.style';

export const Cookies = () => {
    const isCookiesNoticeClosed = localStorage.getItem('is_cookies_notice_closed');
    const [isClosed, setIsClosed] = useState(false);

    if (isCookiesNoticeClosed || isClosed) {
        return null;
    }

    return (
        <div block="Cookies">
            <div elem="Header">
                Cookies notice
                <div elem="Close">
                    <button
                        elem="CloseButton"
                        onClick={() => {
                            localStorage.setItem('is_cookies_notice_closed', 'true');
                            setIsClosed(true);
                        }}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
            <div elem="Body">
                We must inform you that we are using cookies to ensure your experience browsing this page is nothing less
                than amazing. Thank you for your understanding.
                <br />
                By continuing to browse this page, you automatically agree to our cookie policy.
                <br />
                Read about our &nbsp;
                <Link
                    elem="CookiePolicy"
                    to="cookie-policy"
                    target="_blank"
                >
                    Cookie Policy here
                </Link>.
            </div>

        </div>

    );
};

export default Cookies;