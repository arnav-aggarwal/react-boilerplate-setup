import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app.js';
import rootReducer from './reducers/index.js';

ReactDOM.render(
    <Provider store={ createStore(rootReducer) }>
        <App />
    </Provider>
, document.getElementById('container'));
