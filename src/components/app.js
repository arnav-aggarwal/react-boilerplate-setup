import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './header.js';
import Home from './home.js';
import SampleContainer from './sample-container.js';
import rootReducer from '../reducers/index.js';
import '../styles/app.less';

export default function app() {
    return (
        <Provider store={ createStore(rootReducer) }>
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={ Home } />
                    <Route path="/redux-demo" component={ SampleContainer } />
                </div>
            </Router>
        </Provider>
    );
};
