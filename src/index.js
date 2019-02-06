import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './lib/serviceWorker';
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootEl);
    

serviceWorker.register();
