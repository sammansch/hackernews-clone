import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/app';
import GlobalStyles from './styles/global';
import registerServiceWorker from './serviceWorker';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const renderApp = () => {
    ReactDOM.render(
        <div>
            <GlobalStyles />
            <App />
        </div>
    );
};

renderApp();

registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
