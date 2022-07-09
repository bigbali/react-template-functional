import { useState } from 'react';
import './Cookies.style';

export const Cookies = () => {
    const isCookiesNoticeClosed = localStorage.getItem('is_cookies_notice_closed');
    const [isClosed, setIsClosed] = useState(false);

    if (isCookiesNoticeClosed || isClosed) {
        return null;
    }

    return (
        <div block="Cookies">
            <div elem="Body">
                <div elem="Title">
                    Cookies notice
                </div>
                <div elem="Text">
                    We are by law obliged to tell you that we are using cookies. Their sole purpose is to improve your experience
                    while browsing this site. If you continue browsing this page, you automatically accept these cookies.
                </div>
            </div>
            <div elem="Close">
                <button onClick={() => {
                    localStorage.setItem('is_cookies_notice_closed', 'true');
                    setIsClosed(true);
                }}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Cookies;