import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from './containers/login';
import { Main } from './containers/main';

import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/login' component={Login}/>
        </Switch>
    );
}

export default App;
