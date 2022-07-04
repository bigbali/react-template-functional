import React, { useEffect } from 'react';
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
import { createRoot } from 'react-dom/client';
import {
    hideNotification,
    showNotification
} from 'Store/Notification/Notification.action';
import { updateDevice } from 'Store/Device/Device.action';
import { useDevice } from 'Util/Device';
import { useDispatch } from 'Util/Store';
import 'Style/main.scss';

const App = () => {
    const { isMobile } = useDevice();

    const dispatch = useDispatch();

    const handleResize = () => {
        dispatch(updateDevice());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('USE EFFECT');

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        if (isMobile) {
            dispatch(
                showNotification({
                    message: 'Hey, it looks like you are visiting us from a mobile device! Very cool!'
                }));
        }
        else {
            dispatch(hideNotification());
        }
    }, [isMobile, dispatch]);

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
