import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

import App from './App';

import './index.css';
import { VkService } from './services/Vk';

VkService.subscribeVkInit(7299169);
const history = createBrowserHistory();

ReactDOM.render(
    <Router basename='/vk-api-check'>
        <App />
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();