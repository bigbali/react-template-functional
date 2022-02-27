import Error from 'Route/Error';
import Example from 'Route/Example';
import Header from 'Component/Header';
import Index from 'Route/Index';
import Notification from 'Component/Notification';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import store from 'Store/index';
import { Provider } from 'react-redux';
import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
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
                    element={<Index />} />
                <Route path='/example/:?id'
                    element={<Example />} />
                <Route path='*'
                    element={<Error />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
