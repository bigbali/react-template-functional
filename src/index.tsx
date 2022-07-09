import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Store';
import ErrorPage from 'Route/Error';
import ExamplePage from 'Route/Example';
import IndexPage from 'Route/IndexPage';
import Header from 'Component/Header';
import Notification from 'Component/Notification';
import Cookies from 'Component/Cookies/Cookies';
import 'Style/main.scss';

const App = () => {
    return (
        <Router>
            <Header />
            <Notification />
            <Cookies />
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
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
