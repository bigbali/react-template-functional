import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ErrorPage from 'Route/Error';
import ExamplePage from 'Route/Example';
import Header from 'Component/Header';
import IndexPage from 'Route/IndexPage';
import Notification from 'Component/Notification';
import store from 'Store/index';
import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import 'Style/main.scss';
import { useDevice, useNotification } from 'Util';

const App = () => {
    const { isMobile } = useDevice();
    const {
        show: showNotification,
        hide: hideNotification,
        setMessage: setNotificationMessage
    } = useNotification();

    useEffect(() => {
        setNotificationMessage('Hey, we detect that you are from a mobile device!');
    }, []);

    useEffect(() => {
        if (isMobile) {
            showNotification();
        }
        else {
            hideNotification();
        }
    }, [isMobile]);

    return (
        <Router>
            <Header />
            <Notification />
            <Routes>
                <Route path='/'
                    element={<IndexPage />} />
                <Route path='/example/:?id'
                    element={<ExamplePage />} />
                <Route path='*'
                    element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
