import React from 'react';

import './App.css';

function App() {
    const onClick = () => {
        if(window.VK) {
            window.VK.Auth.login(res => console.log(res))
        }
    }
    return (
        <div className='App'>
            <button type='button' onClick={onClick}>123</button>
        </div>
    );
}

export default App;
