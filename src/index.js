import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
import { VkService } from './services/Vk';

VkService.subscribeVkInit(7299169);

ReactDOM.render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();