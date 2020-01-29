import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from './containers/login';
import { Main } from './containers/main';

import './App.css';

function App() {
    const [isVkAvailable, setIsVkAvailable] = useState(null);

    useEffect(() => {
        if (window.VK) {
            setTimeout(() => setIsVkAvailable(true), 500);
        } else {
            setTimeout(() => setIsVkAvailable(false), 500)
        }
    }, []);

    if (isVkAvailable === null) {
        return <div>Checking is vk auth available</div>
    }

    if (isVkAvailable === false) {
        return <div>Oops, VK api is not available, try to reload page</div>
    }

    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/login' component={Login}/>
        </Switch>
    );
}

export default App;
