import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/app';
import GlobalStyles from './styles/global';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';

const renderApp = () => {

    const store = configureStore({});

    if (process.env.NODE_ENV !== 'production') {
        console.log('Initial state ->');
        console.log(store.getState());
    }

    ReactDOM.render(
        <Provider store={store}>
            <div>
                <GlobalStyles />
                <App />
            </div>
        </Provider>,
        document.getElementById('root'),
    );
};

renderApp();

serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
