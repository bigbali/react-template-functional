import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Index from 'Route/Index';
import Example from 'Route/Example';
import Error from 'Route/Error';
import Header from 'Component/Header';
import Notification from 'Component/Notification';
import Popup from 'Component/Popup';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { updateDevice } from 'Store/Device/Device.action';
import store from 'Store';
import { useDevice } from 'Util/Device';
import { hidePopup, showPopup } from 'Store/Popup/Popup.action';

const App = () => {
    const { isMobile } = useDevice();

    const dispatch = useDispatch();

    const handleResize = () => {
        dispatch(updateDevice());
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    useEffect(() => {
        if (isMobile) {
            dispatch(showPopup());
        }
        else {
            dispatch(hidePopup());
        }

    }, [isMobile, dispatch]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" 
                    element={ <Index /> } />
                <Route path="/example/:?id"
                    element={ <Example /> } />
                <Route path="*"
                    element={ <Error /> } />
            </Routes>
            <Notification />
            <Popup />
        </Router>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
