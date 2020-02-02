import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { Login } from './containers/login';
import { Main } from './containers/main';

import { VkService } from './services/Vk';
import { FETCH_STATUS } from './constants/fetch-status';

import './App.css';

function App() {
    const [vkFetchStatus, setVkFetchStatus] = useState(FETCH_STATUS.initial);
    const routerHistory = useHistory();

    /** Проверяет доступность VK Api */
    useEffect(() => {
        setVkFetchStatus(FETCH_STATUS.loading);
        VkService.isAvailable()
            .then(() => {
                VkService.getLoginStatus()
                    .then(res => {
                        const success = 'connected';
                        if (res.status !== success) {
                            routerHistory.push('/login');
                        }
                        setVkFetchStatus(FETCH_STATUS.success)
                    })
                    .catch(err => {
                        console.error(err)
                        setVkFetchStatus(FETCH_STATUS.error)
                    });
            })
            .catch((err) => {
                console.error(err);
                setVkFetchStatus(FETCH_STATUS.error)
            });
        // eslint-disable-next-line no-undef
    }, []);

    /** Проверяет авторизацию */

    if (vkFetchStatus === FETCH_STATUS.initial) {
        return <div>Welcome. App is starting..</div>
    }

    if (vkFetchStatus === FETCH_STATUS.loading) {
        return <div>Checking is vk auth available</div>
    }

    if (vkFetchStatus === FETCH_STATUS.error) {
        return <div>Oops, VK api is not available, try to reload page</div>
    }

    return (
        <>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </>
    );
}

export default App;
